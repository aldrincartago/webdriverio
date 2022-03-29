module.exports = class IllustrationPage {
  getScrollBarContainer() {
    return '//*[@class="recharts-layer recharts-brush"]';
  }

  async getScrollBarSlide() {
    return await $(this.getScrollBarContainer() + '//*[@class="recharts-brush-slide"]');
  }

  async getScrollBarStroke() {
    return await $(this.getScrollBarContainer() + '//*[@stroke="#C4C4C4"]');
  }

  
};
