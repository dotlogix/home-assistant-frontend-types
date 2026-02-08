import * as echarts from "echarts/core";
import LinearGradient from "zrender/lib/graphic/LinearGradient";
import type { BarSeriesOption, LineSeriesOption, CustomSeriesOption, SankeySeriesOption, GraphSeriesOption, SunburstSeriesOption } from "echarts/charts";
import type { TooltipComponentOption, DatasetComponentOption, LegendComponentOption, GridComponentOption, DataZoomComponentOption, VisualMapComponentOption } from "echarts/components";
import type { ComposeOption } from "echarts/core";
export type ECOption = ComposeOption<BarSeriesOption | LineSeriesOption | CustomSeriesOption | TooltipComponentOption | DatasetComponentOption | LegendComponentOption | GridComponentOption | DataZoomComponentOption | VisualMapComponentOption | SankeySeriesOption | GraphSeriesOption | SunburstSeriesOption>;
export { LinearGradient };
export default echarts;
