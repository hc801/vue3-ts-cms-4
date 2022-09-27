import * as echarts from "echarts";

const ChinaMapData = require("../data/china.json");

echarts.registerMap("china", ChinaMapData);

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el, "light", { renderer: "svg" });

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };

  const updateSize = () => {
    echartInstance.resize();
  };

  window.addEventListener("resize", updateSize);

  return { echartInstance, setOptions, updateSize };
}
