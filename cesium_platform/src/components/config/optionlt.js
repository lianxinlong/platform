export default {
  title: {
    text: '周销售额趋势',
  },
  xAxis: {
    name: '第一周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '销售额',
    data: 'value'
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#67e0e3']
      }
    }
  ]
}