const frisby = require('frisby');
const Joi = frisby.Joi;
const sparkURL = process.env.REACT_APP_SPARK_URL;
const tenantName = process.env.REACT_APP_SPARK_TENANT;
const currentUUID = process.env.SERVICE_UUID;

frisby.globalSetup({
  request: {
    redirect: 'manual',
    timeout: 10000,
  },
});

const url = sparkURL + '/' + tenantName + '/api/v3/' + currentUUID;

const setup = {
  request: {
    headers: {
      'x-tenant-name': process.env.REACT_APP_SPARK_TENANT,
      secretKey: process.env.REACT_APP_SPARK_SECRET_KEY,
    },
  },
};

const payload = {
  request_data: { inputs: {} },
  request_meta: {
    service_category: 'metadata,explainer',
    service_uuid: currentUUID,
  },
};

describe('Whole Life API Health Check', () => {
  jest.setTimeout(10000);
  xit('return a status of 200', () => {
    return frisby.setup(setup).post(url, payload).expect('status', 200);
  });

  xit('returns a valid Personal Info APIs', async () => {
    return frisby
      .setup(setup)
      .post(url, payload)
      .expect('jsonTypes', {
        response_data: {
          outputs: {
            'Metadata.Input_QuotationSubTitle': Joi.string().required(),
            'Metadata.Input_Age1_Label': Joi.string().required(),
            'Metadata.Input_Age1_Field': Joi.string().required(),
            'Metadata.Input_Age1_Enable': Joi.boolean().required(),
            'Metadata.Input_Age1_Type': Joi.string().required(),
            'Metadata.Input_Age1_Min': Joi.number().required(),
            'Metadata.Input_Age1_Max': Joi.number().required(),
            // "Metadata.Input_Age1_Error": Joi.string().required(),
            'Metadata.Input_Gender1_Label': Joi.string().required(),
            'Metadata.Input_Gender1_Field': Joi.string().required(),
            'Metadata.Input_Gender1_Enable': Joi.boolean().required(),
            'Metadata.Input_Gender1_Type': Joi.string().required(),
            'Metadata.Input_Gender1_Option': Joi.string().required(),
            'Metadata.Input_Smoking1_Label': Joi.string().required(),
            'Metadata.Input_Smoking1_Field': Joi.string().required(),
            'Metadata.Input_Smoking1_Enable': Joi.boolean().required(),
            'Metadata.Input_Smoking1_Type': Joi.string().required(),
            'Metadata.Input_Smoking1_Option': Joi.string().required(),
            'Metadata.Config_Next_Label': Joi.string().required(),
          },
        },
      })
      .then((res) => {
        const outputs = res.json.response_data.outputs;
        var validFonts = ['noto-sans', 'noto-serif', 'Helvetica'];
        expect(
          validFonts.indexOf(outputs['Metadata.Config_Font']) > -1
        ).toEqual(true);
        expect(outputs['Metadata.Input_QuotationSubTitle']).toEqual(
          "Let's answer a few questions."
        );
        expect(outputs['Metadata.Input_Age1_Label']).toEqual('Age');
        expect(outputs['Metadata.Input_Age1_Field']).toEqual(
          'Xinput_calc.Input_Age1'
        );
        expect(outputs['Metadata.Input_Age1_Enable']).toEqual(true);
        expect(outputs['Metadata.Input_Gender1_Enable']).toEqual(true);
        expect(outputs['Metadata.Input_Smoking1_Enable']).toEqual(true);
        expect(outputs['Metadata.Config_Next_Label']).toEqual('Next');
      });
  });

  xit('returns a valid Savings Info APIs', async () => {
    return frisby
      .setup(setup)
      .post(url, payload)
      .expect('jsonTypes', {
        response_data: {
          outputs: {
            'Metadata.Input_SavingsSubTitle': Joi.string().required(),
            'Metadata.Input_Savings_Amt_Label': Joi.string().required(),
            'Metadata.Input_Savings_Amt_Field': Joi.string().required(),
            'Metadata.Input_Savings_Amt_Enable': Joi.boolean().required(),
            'Metadata.Input_Savings_Amt_Type': Joi.string().required(),
            'Metadata.Input_Savings_Amt_Min': Joi.number().required(),
            'Metadata.Input_Savings_Amt_Max': Joi.number().required(),
            // "Metadata.Input_Savings_Amt_Option": Joi.string().required(),
            // "Metadata.Input_Savings_Amt_Error": Joi.string().required(),
            'Metadata.Input_CurrencyLabel': Joi.string().required(),
            'Metadata.Input_SavingsGoals_Label': Joi.string().required(),
            'Metadata.Input_AgeOfEvent_Label': Joi.string().required(),
            'Metadata.Input_Savings_Goal1_Age_Label': Joi.string().required(),
            'Metadata.Input_Goal1_Icon': Joi.number().required(),
            'Metadata.Input_Savings_Goal1_Age_Field': Joi.string().required(),
            'Metadata.Input_Savings_Goal1_Age_Enable': Joi.boolean().required(),
            'Metadata.Input_Savings_Goal1_Age_Type': Joi.string().required(),
            'Metadata.Input_Savings_Goal1_Age_Min': Joi.number().required(),
            'Metadata.Input_Savings_Goal1_Age_Max': Joi.number().required(),
            // "Metadata.Input_Savings_Goal1_Age_Option": Joi.number().required(),
            // "Metadata.Input_Savings_Goal1_Age_Error": Joi.string().required(),
            'Metadata.Input_Savings_Goal2_Age_Label': Joi.string().required(),
            'Metadata.Input_Goal2_Icon': Joi.number().required(),
            'Metadata.Input_Savings_Goal2_Age_Field': Joi.string().required(),
            'Metadata.Input_Savings_Goal2_Age_Enable': Joi.boolean().required(),
            'Metadata.Input_Savings_Goal2_Age_Type': Joi.string().required(),
            'Metadata.Input_Savings_Goal2_Age_Min': Joi.number().required(),
            'Metadata.Input_Savings_Goal2_Age_Max': Joi.number().required(),
            // "Metadata.Input_Savings_Goal2_Age_Option": Joi.string().required(),
            // "Metadata.Input_Savings_Goal2_Age_Error": Joi.string().required(),
            'Metadata.Input_Savings_Goal3_Age_Label': Joi.string().required(),
            'Metadata.Input_Goal3_Icon': Joi.number().required(),
            'Metadata.Input_Savings_Goal3_Age_Field': Joi.string().required(),
            'Metadata.Input_Savings_Goal3_Age_Enable': Joi.boolean().required(),
            'Metadata.Input_Savings_Goal3_Age_Type': Joi.string().required(),
            'Metadata.Input_Savings_Goal3_Age_Min': Joi.number().required(),
            'Metadata.Input_Savings_Goal3_Age_Max': Joi.number().required(),
            // "Metadata.Input_Savings_Goal3_Age_Option": Joi.string().required(),
            // "Metadata.Input_Savings_Goal3_Age_Error": Joi.string().required(),
            'Metadata.Input_Savings_Goal4_Age_Label': Joi.string().required(),
            'Metadata.Input_Goal4_Icon': Joi.number().required(),
            'Metadata.Input_Savings_Goal4_Age_Field': Joi.string().required(),
            'Metadata.Input_Savings_Goal4_Age_Enable': Joi.boolean().required(),
            'Metadata.Input_Savings_Goal4_Age_Type': Joi.string().required(),
            'Metadata.Input_Savings_Goal4_Age_Min': Joi.number().required(),
            'Metadata.Input_Savings_Goal4_Age_Max': Joi.number().required(),
            // "Metadata.Input_Savings_Goal4_Age_Option": Joi.string().required(),
            // "Metadata.Input_Savings_Goal4_Age_Error": Joi.string().required(),
            // "Metadata.Config_BackButtons": Joi.string().required(),
            'Metadata.Config_Calculate_Label': Joi.string().required(),
          },
        },
      })
      .then((res) => {
        const outputs = res.json.response_data.outputs;
        expect(outputs['Metadata.Input_SavingsSubTitle']).toEqual(
          'Please provide your savings information.'
        );
        // expect(outputs["Metadata.Config_BackButtons"]).toEqual("Back");
        expect(outputs['Metadata.Config_Calculate_Label']).toEqual('Calculate');
        expect(outputs['Metadata.Input_Savings_Goal1_Age_Field']).toEqual(
          'Xinput_calc.Input_Savings_Goal1_Age'
        );
        expect(outputs['Metadata.Input_Savings_Goal2_Age_Field']).toEqual(
          'Xinput_calc.Input_Savings_Goal2_Age'
        );
        expect(outputs['Metadata.Input_Savings_Goal3_Age_Field']).toEqual(
          'Xinput_calc.Input_Savings_Goal3_Age'
        );
        expect(outputs['Metadata.Input_Savings_Goal4_Age_Field']).toEqual(
          'Xinput_calc.Input_Savings_Goal4_Age'
        );
        expect(outputs['Metadata.Input_Savings_Goal4_Age_Label']).toEqual(
          'Estate Transition'
        );
      });
  });

  xit('returns a valid Savings Goals APIs', async () => {
    return frisby
      .setup(setup)
      .post(url, payload)
      .expect('jsonTypes', {
        response_data: {
          outputs: {
            'Metadata.Input_Savings_Goal1_Flag_FALSE': Joi.string().required(),
            'Metadata.Input_Savings_Goal1_Flag_TRUE': Joi.string().required(),
            'Metadata.Input_Savings_Goal2_Flag_FALSE': Joi.string().required(),
            'Metadata.Input_Savings_Goal2_Flag_TRUE': Joi.string().required(),
            'Metadata.Input_Savings_Goal3_Flag_FALSE': Joi.string().required(),
            'Metadata.Input_Savings_Goal3_Flag_TRUE': Joi.string().required(),
            'Metadata.Input_Savings_Goal4_Flag_FALSE': Joi.string().required(),
            'Metadata.Input_Savings_Goal4_Flag_TRUE': Joi.string().required(),
          },
        },
      })
      .then((res) => {
        const outputs = res.json.response_data.outputs;
        expect(outputs['Metadata.Input_Savings_Goal1_Flag_FALSE']).toEqual('N');
        expect(outputs['Metadata.Input_Savings_Goal1_Flag_TRUE']).toEqual('Y');
        expect(outputs['Metadata.Input_Savings_Goal2_Flag_FALSE']).toEqual('N');
        expect(outputs['Metadata.Input_Savings_Goal2_Flag_TRUE']).toEqual('Y');
        expect(outputs['Metadata.Input_Savings_Goal3_Flag_FALSE']).toEqual('N');
        expect(outputs['Metadata.Input_Savings_Goal3_Flag_TRUE']).toEqual('Y');
        expect(outputs['Metadata.Input_Savings_Goal4_Flag_FALSE']).toEqual('N');
        expect(outputs['Metadata.Input_Savings_Goal4_Flag_TRUE']).toEqual('Y');
      });
  });

  const xrange = {
    BackGroundColor: Joi.string().required(),
    DataType: Joi.string().required(),
    NumberFormatType: Joi.string().required(),
    TextColor: Joi.string().required(),
  }

  xit('returns a valid Xrangeproperty Structure', async () => {
    return frisby
      .setup(setup)
      .post(url, payload)
      .expect('jsonTypes', {
        response_data: {
          outputs: {
            'Metadata.Output_TPP_Colour': xrange,
            'Metadata.Output_GUA_Colour': xrange,
            'Metadata.Output_NGUA_Colour': xrange,
            'Metadata.Config_BaseColour': xrange,
            'Metadata.Config_ThemeColour': xrange,
            'Metadata.Input_Gender1': xrange,
            'Metadata.Input_Smoking1': xrange,
            'Metadata.Input_Term': xrange,
          },
        },
      })
      .then((res) => {
        const outputs = res.json.response_data.outputs;
        expect(outputs['Metadata.Output_TPP_Colour'].BackGroundColor).toEqual("#9C43FF");
        expect(outputs['Metadata.Output_GUA_Colour'].BackGroundColor).toEqual("#2B488B");
        expect(outputs['Metadata.Output_NGUA_Colour'].BackGroundColor).toEqual("#89BAFF");
        expect(outputs['Metadata.Config_BaseColour'].BackGroundColor).toEqual("#20143D");
        expect(outputs['Metadata.Config_ThemeColour'].BackGroundColor).toEqual("#3B8CFF");
        expect(outputs['Metadata.Input_Gender1'].BackGroundColor).toEqual("#FFFF00");
        expect(outputs['Metadata.Input_Smoking1'].BackGroundColor).toEqual("#FFFF00");
        expect(outputs['Metadata.Input_Term'].BackGroundColor).toEqual("#FFFF00");
      });
  });
});
