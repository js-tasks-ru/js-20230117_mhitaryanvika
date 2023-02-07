export default class ColumnChart {
  chartHeight = 50;
  constructor({
    data = [],
    label = "",
    value = 0,
    link = "",
    formatHeading = (data) => data,
  } = {}) {
    this.data = data;
    this.label = label;
    this.value = formatHeading(value);
    this.link = link;

    this.render();
  }

  getTemplate() {
    const loadingClass = this.data.length ? "" : "column-chart_loading";

    return `
    <div class="column-chart ${loadingClass}" style="--chart-height: 50">
    <div class="column-chart__title">
      Total ${this.label}
      ${this.getLink()}
    </div>
    <div class="column-chart__container">
      <div data-element="header" class="column-chart__header">${
        this.value
      }</div>
      <div data-element="body" class="column-chart__chart">
        ${this.getBodyChart()}
      </div>
    </div>
  </div>
    `;
  }

  getLink() {
    return this.link
      ? `<a href="${this.link}" class="column-chart__link">
        View all
      </a>`
      : "";
  }

  getBodyChart() {
    return this.transformChartData().map(
      (item) =>
        `<div style="--value: ${item.value}" data-tooltip="${item.percent}"></div>`
    );
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.getTemplate();
    this.element = element.firstElementChild;
  }

  update(data) {
    this.data = data;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  transformChartData() {
    const maxValue = Math.max(...this.data);
    const scale = 50 / maxValue;

    return this.data.map((item) => {
      return {
        percent: ((item / maxValue) * 100).toFixed(0) + "%",
        value: String(Math.floor(item * scale)),
      };
    });
  }
}
