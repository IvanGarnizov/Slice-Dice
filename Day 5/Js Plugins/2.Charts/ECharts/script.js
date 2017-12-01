let myChart = echarts.init(document.getElementById('chart'));
var options = {
    title: {
        text: 'Fruits'
    },
    xAxis: {
        data: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Pineapples', 'Appricot']
    },
    yAxis: {},
    series: [{
        name: 'Fruits',
        type: 'bar',
        // type: 'pie',
        data: [25, 20, 15, 20, 10, 22]
    }]
};

myChart.setOption(options);
