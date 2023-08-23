export default {
    title: {
        text: '监测设备总数',
        style: {
            fill: 'rgba(255, 255, 255, 1)'
        }
    },
    // series: [
    //     {
    //         type: 'pie',
    //         data: [
    //             { name: '一级监测点', value: 138 },
    //             { name: '二级监测点', value: 635 },
    //             { name: '三级监测点', value: 10541 },
    //         ],
    //         radius: ['30%', '50%'],
    //         insideLabel: {
    //             show: true
    //         },
    //         // roseType: true
    //     }
    // ]

    series: [
        {
            type: 'gauge',
            data: [
                { name: '一级监测点', value: 100, radius: '20%'},
                { name: '二级监测点', value: 98, radius: '40%' },
                { name: '三级监测点', value: 99,  },
            ],
            
            axisLabel: {
                formatter: '{value}%'
            },
            pointer: {
                valueIndex: 2,
                style: {
                    scale: [.6, .6]
                }
            },
            details: {
                show: true,
                formatter: '{name}{value}%',
                position: 'start',
                offset: [-10, 20],
                style: {
                    fontSize: 10,
                    textAlign: 'left'
                }
            }
        }
    ]
}
