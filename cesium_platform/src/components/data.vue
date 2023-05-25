<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <router-link to="/">主页</router-link>
                <router-link to="/home">首页</router-link>
                <router-link to="/data">数据</router-link>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <div ref="Chart" id="Chart" :style="{ width: '100%', height: '50%' }"></div>
                </el-main>
            </el-container>
            <el-footer>footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
  name: "echartsBox",
  setup() {
    // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
    let internalInstance = getCurrentInstance();
    let echarts = internalInstance.appContext.config.globalProperties.$echarts;

    onMounted(() => {
      const dom = document.getElementById('Chart');
      const Chart = echarts.init(dom); // 初始化echarts实例
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      };
      // 设置实例参数
      Chart.setOption(option);
    }
    );
}
}
</script>

<style lang="scss" scoped>
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
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 800px; */
    /* padding: 0px; */
    }
</style>

