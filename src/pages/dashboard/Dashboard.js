import React from "react";
import { Row, Col, Table } from "reactstrap";
import stocksImg from "../../images/dashboard/graph.png";
import downStockImg from "../../images/dashboard/downgraph.png";
import stocksDownImg from "../../images/stocksDown.svg";
import dashboardPeople from "../../images/dashboard/people.png";
import dashboardMask from "../../images/dashboard/mask.png";
import dashboardFire from "../../images/dashboard/fire.png";
import dashboardMan from "../../images/dashboard/man.png";
import { chartData } from "./chartsMock";

import Widget from "../../components/Widget";

import s from "./Dashboard.module.scss";
import ApexChart from "react-apexcharts";



const orderValueOverride = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 173, 1, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const convertionRateOverride = {
  series: [
    {
      data: [280, 300, 170, 200, 230, 190, 260, 100, 290, 280, 300, 250, 240],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(246, 121, 93, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -8,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area = {
  series: [
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'solid',
      colors: ["rgba(252, 215, 206, .25)"]
    },
    colors: ["rgba(246, 121, 93)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area2 = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'solid',
      colors: ["rgba(255, 230, 179, .25)"]
    },
    colors: ["rgba(255, 173, 1)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const splineArea = {
  series: [
    {
      name: "CCTV",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Drone",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      customScale:0.8,
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["rgba(255, 205, 101, 0)", "rgba(255, 205, 101, 0)"],
      type: 'solid'
    },
    colors: ["#0da7a9", "#f31ea1"],
    legend: {
      position: "top",
      horizontalAlign: 'left', 
      fontSize: '10px',
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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
          ],
          fontWeight: 300,
        },
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
            color: '#fff',
            width: 1,
            dashArray: 0,
        },
    },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
      ],
      labels: {
        style: {
          colors: [
            "#acb0cd",
            "#acb0cd",
            "#acb0cd",
            "#acb0cd",
            "#acb0cd",
            "#acb0cd",
            "#acb0cd",
          ],
          fontWeight: 300,
        },
       
      },
      axisBorder: {
        show: true,
        color: '#78909C',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
    },
      crosshairs: {
        show: true,
        width: 1,
        position: 'back',
        opacity: 0.9,        
        stroke: {
            color: '#b6b6b6',
            width: 0,
            dashArray: 0,
        },
        fill: {
            type: 'solid',
            color: '#B1B9C4',
            gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
            },
        },
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 1,
          opacity: 0.4,
      },
  },
  axisTicks: {
    show: true,
    borderType: 'solid',
    color: '#fff',
    height: 6,
    offsetX: 0,
    offsetY: 0
},
    },
    tooltip: {
      x: {
        format: "",
      },
    },
    grid: {
      show: true,
      borderColor: 'rgba(77, 93, 192, 0.3)',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
          lines: {
              show: false
          }
      },   
      yaxis: {
          lines: {
              show: true
          }
      },  
      row: {
          colors: undefined,
          opacity: 0.5
      },  
      column: {
          colors: undefined,
          opacity: 0.5
      },  
      padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 50
      },  
  },
  },
};

class Dashboard extends React.Component {
  constructor() {
    super();
    this.forceUpdate = this.forceUpdate.bind(this)
  }
  state = {
    orderValue: { ...chartData.apex.column, ...orderValueOverride },
    convertionRate: { ...chartData.apex.column, ...convertionRateOverride },
    area: { ...area },
    area2: { ...area2 },
    splineArea: { ...splineArea },
  };

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.headingboard}>
        <Row className={`${s.nogap}`}>
        <Col sm={10} className={`${s.nogap}`}>
       <div className={s.pageName}><h4>My Dashboard</h4>
       <p className={s.subheading}>Live Analytics & Customizable Widgets</p>



</div>
</Col>
<Col sm={2} className={`${s.nogap}`}>
<div >
  <button className={s.addWidget}>Add Widgets</button>
</div>
</Col>
</Row>
        </div>
        <Row className={`${s.nogap}`}>
          
          <Col sm={12} md={6} xl={3} lg={6} className={`${s.nogap}`} noGutters>
            <Widget noGutters
              
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                {/* <Col sm={6} md={6} lg={6} xl={4} className={"d-flex align-items-center"}>
                 
                </Col> */}
                <Col
                  // sm={6}md={6}lg={6} xl={8} 
                  className={"d-flex align-items-center justify-content-left"}
                  
                  
                >
                   <div className={s.infoWidgetGreen}>
                    <img className={s.peopleIcon} src={dashboardPeople} />

                  </div><div className={s.graphWidgetInfo}><h3 className={"fw-semi-bold mb-0"}>56</h3>
                <div className={s.subheadingWidget} >Total Workers</div>
                <div>
                <div className={s.subheadingWidgetGraph} ><img src={stocksImg} alt="" className={"mr-1"} /> 4% (30 days)</div>
                </div>
                </div>
                </Col>
              </Row>
              
            </Widget>
          </Col>
          <Col sm={12} xl={3} md={6} lg={6} className={`${s.nogap}`} noGutters>
            <Widget
              
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                {/* <Col sm={4} className={"d-flex align-items-center"}>
                 
                </Col> */}
                <Col
                  // sm={8}
                   className={"d-flex align-items-center justify-content-left"}
                  
                >
                   <div className={s.infoWidgetPink}>
                    <img className={s.maskIcon} src={dashboardMask} />

                  </div>
                  <div className={s.graphWidgetInfo}><h3 className={"fw-semi-bold mb-0"}>3</h3>
                <div className={s.subheadingWidget} >Safety Gear Alerts</div>
                <div>
                <div className={s.subheadingWidgetGraph} ><img src={downStockImg} alt="" className={"mr-1"} /> 4% (30 days)</div>
                </div>
                </div>
                </Col>
              </Row>
              
            </Widget>
          </Col>
          <Col sm={12} xl={3} md={6} lg={6} className={`${s.nogap}`}>
            <Widget
              
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} >
                {/* <Col sm={4} className={"d-flex align-items-center"}>
                 
                </Col> */}
                <Col
                  // sm={8}
                  className={"d-flex align-items-center justify-content-left"}
                  
                >
                   <div className={s.infoWidgetPurple}>
                    <img className={s.fireIcon} src={dashboardFire} />

                  </div>
                  <div className={s.graphWidgetInfo}><h3 className={"fw-semi-bold mb-0"}>0</h3>
                <div className={s.subheadingWidget} >Hazard Alerts</div>
                <div>
                <div className={s.subheadingWidgetGraph} ><img src={stocksImg} alt="" className={"mr-1"} /> 4% (30 days)</div>
                </div>
                </div>
                </Col>
              </Row>
              
            </Widget>
          </Col>
          <Col sm={12} xl={3} md={6}lg={6} className={`${s.nogap}`}>
            <Widget
              
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} >
                {/* <Col sm={4} className={"d-flex align-items-center"}>
                 
                </Col> */}
                <Col
                  // sm={8}
                  className={"d-flex align-items-center justify-content-left"}
                  
                >
                   <div className={s.infoWidgetOrange}>
                    <img className={s.runIcon} src={dashboardMan} />

                  </div>
                  <div className={s.graphWidgetInfo}>
                    <h3 className={"fw-semi-bold mb-0"}>2</h3>
                <div className={s.subheadingWidget} >Posture Alerts</div>
                <div>
                <div className={s.subheadingWidgetGraph} ><img src={stocksImg} alt="" className={"mr-1"} /> 4% (30 days)</div>
                </div>
                </div>
                </Col>
              </Row>
              
            </Widget>
          </Col>
        </Row>
        
        <Row>
          
          <Col xl={6} style={{ paddingRight: 10 }}>
            <Widget
              // title={<p style={{ fontWeight: 700 }}>Non Compliance Cases</p>}
              customDropDown
            >
              <Row
                className={`${s.row} justify-content-center`}
                
              >

               <Col xl={6}  >
                <div>
                <div className={s.graphHeading}>
                <div className={s.pieHeading} >Non Compliance Cases</div>
                <div className={s.subheadingPieChart}>More information about the pie chart below</div>
                </div>

                
                
                </div>
                </Col>
                <Col xl={6} >
                 <div className={s.expandIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>



                 </div>
                </Col>
                </Row>
                <Row 
                className={`${s.row} justify-content-center`}
                noGutters
                style={{ marginBottom: 30, marginTop: 24 }}>
                <Col xl={12}>
                <div className={s.donutChart}>
                <ApexChart
                  className="sparkline-chart"
                  type={"donut"}
                  height={300}
                  series={chartData.apex.pie.series}
                  options={chartData.apex.pie.options}
                />
                </div>
                </Col>
                
                
               
              </Row>
              <Row className={`justify-content-right`}>
              <Col xl={12}>
                <div >
                 
                  <div className={s.downloadText}>
                  <p>Download CSV </p>
                  </div>
                  <div className={s.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                </div>
                </div>
                </Col>
              </Row>
              
            </Widget>
          </Col>
          
          <Col xl={6} style={{ paddingLeft: 10 }}>
            <Widget
              // title={<p style={{ fontWeight: 700 }}>Non Compliance Cases</p>}
              customDropDown
            >
              <Row
                className={`${s.row} justify-content-center`}
               
              >

               <Col xl={6} >
                <div>
                <div className={s.graphHeading}>
                <div className={s.pieHeading} >Total Device Alerts</div>
                <div className={s.subheadingPieChart}>More information about the line chart.</div>
                </div>

                
                
                </div>
                </Col>
                <Col xl={6} >
                 <div className={s.expandIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>



                 </div>
                </Col>
                </Row>
                <Row 
                className={`${s.row} justify-content-center`}
                noGutters
                style={{ marginBottom: 30, marginTop: 24 }}>
                <Col xl={12}>
                <div className={s.donutChart}>
                <ApexChart
                    className="sparkline-chart"
                    series={this.state.splineArea.series}
                    options={this.state.splineArea.options}
                    type={"area"}
                    height={"300px"}
                  />
                </div>
                </Col>
                
                
               
              </Row>
              <Row className={`justify-content-right`}>
              <Col xl={12}>
                <div >
                 
                  <div className={s.downloadText}>
                  <p>Download CSV </p>
                  </div>
                  <div className={s.downloadIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                </div>
                </div>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Dashboard;
