
export default {
  title: {
    text: '各厂商设备在线率',
    // 标题颜色
    style: {
      fill: 'rgba(255, 255, 255, 1)'
    }

  },
  xAxis: {
    name: '厂商',
    //标题颜色
    nameTextStyle: {
      fill: "rgba(255, 255, 255, 1)"
    },
    //坐标轴颜色
    axisLine: {
      style: {
        stroke: 'rgba(255, 255, 255, 1)',
        lineWidth: 1
      }
    },
    // 坐标标签颜色
    axisLabel: {
      style: {
        fill: 'rgba(255, 255, 255, 1)',
        fontSize: 10,
        rotate: 45
      }
    },
    data: ['中力智研', '智想北斗', '千寻位置', '星通九恒', '北斗云', '中力智研(华地)', '智想北斗(华地)', '千寻位置(华地)', '工勘岩土(华地)', '华地资环(华地)']
  },
  yAxis: {
    name: '设备在线率(%)',
    //标题颜色
    nameTextStyle: {
      fill: "rgba(255, 255, 255, 1)"
    },
    //坐标轴颜色
    axisLine: {
      style: {
        stroke: 'rgba(255, 255, 255, 1)',
        lineWidth: 1
      }
    },
    // 坐标标签颜色
    axisLabel: {
      style: {
        fill: 'rgba(255, 255, 255, 1)',
        fontSize: 10,
        rotate: 0
      }
    },
    data: 'value'
  },
  series: [
    {
      data: [66.67, 86.16, 91.24, 89.43, 47.09, 91.70, 84.48, 66.67, 86.61, 92.37],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#67e0e3']
      }
    }
  ]
}