import config from './config';

const colors = config.app.colors;
const {inverse, primary, success,warning,danger,info} = colors;
// pinkcolor: #f31ea1,
// purplegraph:#aa4fff,
// greengraph:#0da7a9,
// orangecolor:#ff7134,

let columnColors = ["f31ea1", primary, info, success, warning, danger, '#EC2A00', '#FF8C22'];

export const chartData = {
    apex: {
        column: {
            series: [{
                data: [300, 280, 280, 230, 190, 270, 290, 230, 260, 290, 300, 250, 270],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                },
                colors: columnColors,
                plotOptions: {
                    bar: {
                        columnWidth: '30%',
                        distributed: true,
                    },
                    pie: {
                        size:200
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false
                    },
                },
                grid: {
                    padding: {
                        left: 0,
                        right: 0
                    },
                    xaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
            },
        },
        pie: {
            series: [25, 2, 15],
            options: {
                chart: {
                    type: 'donut'
                },
                colors: ["#f31ea1", "#0da7a9", "#aa4fff"],
                labels: ["Safety Gear", "Mask", "FOB"],
                stroke: {
                    show: false,
                    width: 0
                },
                plotOptions: {
                    pie: {
                        customScale:0.9,
                        dataLabels: {
                            offset: 50,
                            minAngleToShowLabel: 10,
                        },
                        donut: {
                            size: '55%',
                            labels: {
                                show: false,
                                name: {
                                  show: true,
                                  fontSize: '22px',
                                  fontFamily: 'Helvetica, Arial, sans-serif',
                                  fontWeight: 600,
                                  color: 'rgba(18, 19, 29, 0.3)',
                                  offsetY: -10,
                                  formatter: function (val) {
                                    return val
                                  }
                                },}  
                        },
                    }
                },
                legend: {
                    position: "top",
                    horizontalAlign: 'left', 
                    fontSize: '10px',
                    floating: true,
                    labels: {
                      colors: "#acb0cd",
                      useSeriesColors: false
                            },
                      markers: {
                        width: 15,
                        height: 15,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 1,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 2
                    },
                  },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        }
    },
};
