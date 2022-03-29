const path = require('path');
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');
const { getAllFiles, getAllFilesSync } = require('get-all-files');

const authHeaders = {
  secretKey: process.env.REACT_APP_SPARK_SECRET_KEY,
  'x-tenant-name': process.env.REACT_APP_SPARK_TENANT,
};
const readDirectory = (dirPath) => {
  const _path =
    dirPath || path.join(process.env.INIT_CWD, 'automated_tests/data/files');

  return getAllFilesSync(_path).toArray();
};

const uploadToSpark = async (filePath, productName) => {
  console.log(filePath);
  const url = `${process.env.REACT_APP_SPARK_URL}/api/v1/product/Explainer%20Configurator/engines/add`;
  const data = new FormData();
  data.append('file', fs.createReadStream(filePath));
  data.append('productName', productName);

  return axios.post(url, data, {
    maxContentLength: 52428890,
    maxBodyLength: 52428890,
    headers: {
      ...data.getHeaders(),
      ...authHeaders,
      'Content-Type': 'multipart/form-data',
    },
  });
};

const publishFiles = async (
  originalFileDocumentId,
  engineFileDocumentId,
  bookServiceName
) => {
  const url = `${process.env.REACT_APP_SPARK_URL}/api/v1/product/Explainer%20Configurator/engines/publish/${bookServiceName}`;
  const payload = {
    releaseNote: 'upload by test automation',
    shouldUpdateVersion: true,
    originalFileDocumentId,
    engineFileDocumentId,
  };

  return axios.put(url, payload, { headers: authHeaders });
};

const verifyContent = async (
  bookServiceName
) => {
  const url = `${process.env.REACT_APP_SPARK_URL}/api/v1/product/Explainer%20Configurator/engines/Execute/${bookServiceName}`;

  return axios.post(url, {"RequestedServiceCategory":"metadata","EngineType":"Type1","Inputs":{}}, { headers: authHeaders });
};

const fileUpload = async (dirPath, productName) => {
  const files = readDirectory(dirPath);
  const uploadResult = await Promise.all(
    files.map(async (f) => {
      return await uploadToSpark(f, productName);
    })
  );
  console.log(uploadResult[0].data);
  const publishResult = await Promise.all(
    uploadResult.map(async ({ data: { data: d } }) => {
      return await publishFiles(
        d.originalFileDocumentId,
        d.engineFileDocumentId,
        d.bookSummary.bookServiceName
      );
    })
  );

  const verifyResult = await Promise.all(
    uploadResult.map(async ({ data: { data: d } }) => {
      return await verifyContent(
        d.bookSummary.bookServiceName
      );
    })
  );
  console.log( verifyResult[0].data.data.Outputs['metadata.Config_ProductTitle'] );

  // console.log( publishResult[0].data );
  return publishResult;
};

const singleFileUpload = async (fileName, productName) => {
  const filePath = path.join(process.env.INIT_CWD, 'automated_tests/data/files/', fileName);
  console.log(filePath);
  const uploadResult = await uploadToSpark(filePath, productName);
  const d = uploadResult.data.data;
  const publishResult = await publishFiles(
    d.originalFileDocumentId,
    d.engineFileDocumentId,
    d.bookSummary.bookServiceName
  );

  const verifyResult = await verifyContent(
    d.bookSummary.bookServiceName
  );
  console.log( verifyResult.data.data.Outputs['metadata.Config_ProductTitle'] );

  // console.log( publishResult[0].data );
  return {publishResult, uploadResult, verifyResult};
};

module.exports = {
  fileUpload, singleFileUpload
};
