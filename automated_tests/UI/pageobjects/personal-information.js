module.exports = class PersonalInformationPage {
  async getPersonalInformationField(label) {
    return await $('//label[text()="'+label+'"]//..//input');
  }

  async getPersonalInformationRadioBtn(label, selection) {
    return await $('//label[text()="'+label+'"]//..//span[text()="'+selection+'"]');
  }

};
