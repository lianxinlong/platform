<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <router-link to="/">大屏</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/data">数据</router-link> -->
        <router-link class="dpbt" to="/" active-class="active">监测大屏</router-link>
        <router-link class="homebt" to="/home" active-class="active">主页</router-link>
      </el-header>
      <el-container>
        <el-aside height='80%' width="18%">
          <el-row class="tac" width="100%">
            <el-menu class="el-menu-vertical-demo" width="100%" opacity="1" default-active="2">
              <el-sub-menu index="1">
                <template #title>
                  <span>重庆市地质灾害二级专业监测预警项目</span>
                </template>
                <el-sub-menu index="1-1">
                  <template #title>城口区</template>
                  <el-sub-menu index="1-1-1">
                    <template #title>立新滑坡</template>
                    <el-menu-item index="1-1-1-1">GNSS</el-menu-item>
                    <el-menu-item index="1-1-1-2">降雨量</el-menu-item>
                  </el-sub-menu>
                  <el-menu-item index="1-1-2">坪坝寺滑坡</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="1-2">
                  <template #title>开州区</template>
                  <el-menu-item index="1-2-1">左家坪滑坡</el-menu-item>
                  <el-menu-item index="1-2-2">天津滑坡</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <span>三峡库区云阳县龙洞场镇地质安全监测预警项目</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span>三峡库区奉节县干沟子库岸专业监测预警项目</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span>2021年地质灾害专业监测预警</span>
              </el-menu-item>
            </el-menu>
          </el-row>
        </el-aside>
        <el-main>
          <div class="block" style="position:relative; top: 5px">
            <el-date-picker v-model="date" type="datetimerange" :shortcuts="shortcuts" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" />
          </div>
          <div ref="Chart" id="Chart" :style="{ width: '100%', height: '50%' }"></div>
        </el-main>
      </el-container>
      <el-footer>地质分院安全监测所</el-footer>
    </el-container>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue';
import { ref } from 'vue'


export default {
  data() {
    return {
      date: ref(''),
      shortcuts: [
        {
          text: 'Last week',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: 'Last month',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: 'Last 3 months',
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ]
    }
  },

  name: "echartsBox",
  setup() {

    // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
    let internalInstance = getCurrentInstance();
    let echarts = internalInstance.appContext.config.globalProperties.$echarts;

    onMounted(() => {
      const dom = document.getElementById('Chart');
      const Chart = echarts.init(dom); // 初始化echarts实例
      const symbolSize = 20;
      const data = [[-90, 0], [-70, 10], [-56.5, 20], [-46.5, 30], [-22, 40], [0, 20], [22, 40], [40, 80], [60, 20]];

      const option = {
        // title: {
        //   text: 'Try Dragging these Points'
        // },
        legend: {
          data: ['GNSS01']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true,
              readOnly: false,

              optionToContent: function (opt) {
                // var axisData = opt.xAxis[0].data;
                var series = opt.series;
              


                var table = '<table border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:center"><tbody><tr>'
                  + '<td>时间</td>'
                  + '<td>' + series[0].name + '</td>'
                  // + '<td>' + series[1].name + '</td>'
                  + '</tr>';
                // for (var i = 0, l = axisData.length; i < l; i++) {
                for (var i = 0, l = series[0].data.length; i < l; i++) {
                  table += '<tr>'
                    // + '<td>' + axisData[i] + '</td>'
                    + '<td>' + series[0].data[i][0] + '</td>'
                    + '<td>' + series[0].data[i][1] + '</td>'
                    // + '<td>' + series[1].data[i] + '</td>'
                    + '</tr>';
                    // console.log(opt.series[0].data)
                }
                table += '</tbody></table>';
                return table;
              }
            },
            restore: { show: true },
            saveAsImage: { show: true, type: 'png' }
          }

        },
        tooltip: {
          triggerOn: 'none',
          formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
          }
        },
        grid: {
        },
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: { onZero: false }
        },
        yAxis: {
          min: -10,
          max: 80,
          type: 'value',
          axisLine: { onZero: false }
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
          }
        ],
        series: [
          {
            name: 'GNSS01',
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            data: data
          }
        ]
      };


      setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        Chart.setOption({
          graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
              type: 'circle',
              position: Chart.convertToPixel('grid', item),
              shape: {
                cx: 0,
                cy: 0,
                r: symbolSize / 2
              },
              invisible: true,
              draggable: true,
              ondrag: echarts.util.curry(onPointDragging, dataIndex),
              onmousemove: echarts.util.curry(showTooltip, dataIndex),
              onmouseout: echarts.util.curry(hideTooltip, dataIndex),
              z: 100
            };
          })
        });
      }, 0);

      window.addEventListener('resize', updatePosition);

      Chart.on('dataZoom', updatePosition);

      function updatePosition() {
        Chart.setOption({
          graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
              position: Chart.convertToPixel('grid', item)
            };
          })
        });
      }

      function showTooltip(dataIndex) {
        Chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: dataIndex
        });
      }

      function hideTooltip(dataIndex) {
        Chart.dispatchAction({
          type: 'hideTip'
        });
      }

      function onPointDragging(dataIndex, dx, dy) {
        data[dataIndex] = Chart.convertFromPixel('grid', this.position);

        // Update data
        Chart.setOption({
          series: [{
            id: 'a',
            data: data
          }]
        });
      }




      // 设置实例参数
      Chart.setOption(option);
    }
    );
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 800px;
}

.el-main {
  background-color: 00E9EEF3;
  color: #333;
  text-align: center;
  height: 800px;
  padding: 0px;
}

.dpbt,
.homebt {
  color: white;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
}

.dpbt {
  left: 80%;
  position: absolute;
}

.homebt {
  left: 88%;
  position: absolute;
}

.block {
  text-align: left;
  left: 10px;
}
</style>

