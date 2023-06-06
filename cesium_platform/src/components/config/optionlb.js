export default {
  title: {
    text: '各区县设备在线率'
  },
  xAxis: {
    name: '区县',
    data: ['长寿区', '忠县', '黔江区', '武隆区', '奉节县', '云阳县(华地)','忠县(华地)','奉节县(华地)']
  },
  yAxis: {
    name: '设备在线率(%)',
    data: 'value'
  },
  series: [
    {
      data: [95.78, 93.55, 92.01, 92, 83.78, 84.48,	93.01,93.78],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#67e0e3']
      }
    }
  ]
}