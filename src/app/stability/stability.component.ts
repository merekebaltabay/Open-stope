import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-stability',
  templateUrl: './stability.component.html',
  styleUrls: ['./stability.component.scss']
})

export class StabilityComponent implements OnInit {
  public hrCrown: number;
  public hrFoot: number;
  public hrHang: number;
  public hrSide: number;
  public crownSN: number;
  public sideSN: number;
  public hwSN: number;
  public fwSN: number;
  public crownSN_mod: number;
  public sideSN_mod: number;
  public hwSN_mod: number;
  public fwSN_mod: number;
  public yAxis: Object;


  public scatterChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio:1,
    scales: {
      gridLines: {display:true,
      drawBorder:true,
      drawTicks:true,
      color:'#000000'},
      xAxes:[{type:'logarithmic',
      ticks: {
        fontColor: 'black',
        min:1,
        max:100,
        callback: function (value, index, values) {
          return Number(value.toString());
        }
      }, 
      scaleLabel: {
        display: true,
        labelString:"Hydraulic Radius, HR (m)",
        fontColor: 'black'
      }
    }],
    yAxes:[{type:'logarithmic',
      ticks: {
        fontColor: 'black',
        min:0.01,
        max:1000,
        callback: function (value, index, values) {
          return Number(value.toString());
        }
      },
      scaleLabel: {
        display: true,
        labelString:"Modified Stability Number, N'",
        fontColor: 'black'
      }
    }]
  },
  legend:{
    position:'right'
  }
  };  
  public scatterChartLegend = true;

  public extendedChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio:1.8,
    scales: {
      gridLines: {display:true,
      drawBorder:true,
      drawTicks:true,
      color:'#000000'},
      xAxes:[{type:'logarithmic',
      ticks: {
        fontColor: 'black',
        min:1,
        max:100,
        callback: function (value, index, values) {
          return Number(value.toString());
        }
      }, 
      scaleLabel: {
        display: true,
        labelString:"Hydraulic Radius, HR (m)",
        fontColor: 'black'
      }
    }],
    yAxes:[{type:'logarithmic',
      ticks: {
        fontColor: 'black',
        min:0.001,
        max:1000,
        callback: function (value, index, values) {
          return Number(value.toString());
        }
      },
      scaleLabel: {
        display: true,
        labelString:"Modified Stability Number, N'",
        fontColor: 'black'
      }
    }]
  }
}; 

public modifiedChartOptions: ChartOptions = {
  responsive: true,
  aspectRatio:1.8,
  scales: {
    gridLines: {display:true,
    drawBorder:true,
    drawTicks:true,
    color:'#000000'},
    xAxes:[{type:'linear',
    ticks: {
      fontColor: 'black',
      min:0,
      max:25,
      stepSize:5,
      callback: function (value, index, values) {
        return Number(value.toString());
      }
    }, 
    scaleLabel: {
      display: true,
      labelString:"Hydraulic Radius, HR (m)",
      fontColor: 'black'
    }
  }],
  yAxes:[{type:'logarithmic',
    ticks: {
      fontColor: 'black',
      min:0.1,
      max:1000,
      callback: function (value, index, values) {
        return Number(value.toString());
      }
    },
    scaleLabel: {
      display: true,
      labelString:"Modified Stability Number, N'",
      fontColor: 'black'
    }
  }]
}
}; 
public sensitivityChartOptions: ChartOptions = {
  responsive: true,
  aspectRatio:2,
  scales: {
    xAxes:[{ 
    scaleLabel: {
      display: true,
      labelString:"Hydraulic Radius, HR (m)",
      fontColor: 'black'
    }
  }],
  yAxes:[{
    scaleLabel: {
      display: true,
      labelString:"Probabilistic Stability Prediction (%)",
      fontColor: 'black'
    }
  }]
}
};
public sensitivityChartType: ChartType = 'bar';

public crownChartLabels: Label[] = ['1.8', '2.5','3.2', '3.9', '4.6', '5.3', '6.0', '6.7', '7.4','8.1','8.8','9.5', '10.2','10.9','11.6'];
public fhwChartLabels: Label[] = ['1.8', '2.5','3.2', '3.9', '4.6', '5.3', '6.0', '6.7', '7.4','8.1','8.8','9.5', '10.2','10.9','11.6'];
public sideChartLabels: Label[] = ['1.8', '2.5','3.2', '3.9', '4.6', '5.3', '6.0', '6.7', '7.4','8.1','8.8','9.5', '10.2','10.9','11.6'];
public backChartLabels: Label[] = ['1.8', '2.5','3.2', '3.9', '4.6', '5.3', '6.0', '6.7', '7.4','8.1','8.8','9.5', '10.2','10.9','11.6'];
public sensitivityChartLegend = true;

public crownChartData: ChartDataSets[] = [
  { data: [45,55,65,59,45,33,80,81,56,45,55,26,40,51,34], label: 'stable', stack: 'a' },
  { data: [25,30,20,19,26,27, 9,14,15,27,37,29,35,36,32], label: 'unstable', stack: 'a' },
  { data: [30,15,15,22,29,40,11, 5,29,28, 8,45,25,13,34], label: 'failure', stack: 'a' }
    ];
public fhwChartData: ChartDataSets[] = [
  { data: [25,30,20,19,26,27, 9,14,15,27,37,29,35,36,32], label: 'stable', stack: 'a' },
  { data: [45,55,65,59,45,33,80,81,56,45,55,26,40,51,34], label: 'unstable', stack: 'a' },
  { data: [30,15,15,22,29,40,11, 5,29,28, 8,45,25,13,34], label: 'failure', stack: 'a' }
  ];
public sideChartData: ChartDataSets[] = [
  { data: [45,55,65,59,45,33,80,81,56,45,55,26,40,51,34], label: 'stable', stack: 'a' },
  { data: [30,15,15,22,29,40,11, 5,29,28, 8,45,25,13,34], label: 'unstable', stack: 'a' },
  { data: [25,30,20,19,26,27, 9,14,15,27,37,29,35,36,32
    ], label: 'failure', stack: 'a' }
  ];
public backChartData: ChartDataSets[] = [
  { data: [30,15,15,22,29,40,11, 5,29,28, 8,45,25,13,34], label: 'stable', stack: 'a' },
  { data: [25,30,20,19,26,27, 9,14,15,27,37,29,35,36,32], label: 'unstable', stack: 'a' },
  { data: [45,55,65,59,45,33,80,81,56,45,55,26,40,51,34], label: 'failure', stack: 'a' }
  ];
    public sensitivityChartColors: Color[] = [
      { backgroundColor: 'rgba(34,101, 86,0.2)'},
      {backgroundColor:'rgba(0,0,0,0.4)'},
      {backgroundColor:'rgba(255,0,0,0.3)'}];
  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) { }

  public refinedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0.5, y:0.0766},{x:1, y:1001},{x:34, y:1023.5}], 
    fill: 1, 
    pointStyle:'line',
    label: "Stable zone"    },
    { type: 'line',
      data: [{x:1, y:0.0766},{x:34, y:1023.5}, {x:56, y:1003.132}], 
      fill: 2, 
      pointStyle:'line',
      label: "Unstable zone"
      },
      { type: 'line',
      data: [{x:1, y:0.02},{x:56, y:1003.132},{x:100, y:1002}],
      fill: true, 
      pointStyle:'line',
      label: "Failure zone"
      },
      { type: 'scatter',
      data: [],
      label:'stope surfaces',
      fill: true, 
      pointRadius:3,
      }
  ];

  public modifiedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0,y:0.1},{x:0,y:1000},{x:25,y:1000},{x:25, y:600}, {x:24.7155, y:589.511},{x:19.7368, y:307.981}], 
    fill: 1, 
    pointStyle:'line',
    label: "Stable zone"
    },
    { type: 'line',
      data: [{x:1.35135, y:0.10463},{x:2.4182, y:0.9776},
        {x:5.761, y:9.85},{x:9.886, y:38.919},
        {x:13.549, y:100.758},{x:19.7368, y:307.981}, {x:24.7155, y:589.511}, {x:25, y:600}], 
      fill: 2, 
      pointStyle:'line',
      label: "Unstable zone"
      },
      { type: 'line',
      data: [{x:3.3784, y:0.1046},{x:4.516, y:1.007},{x:8.357, y:10.152}, {x:12.02, y:29.21},
             {x:16.216, y:81.56},{x:20.09, y:158.489},{x:24.822, y:303.366}, {x:25, y:320}],
      fill: true, 
      pointStyle:'line',
      label: "Failure zone"
      },
      { type: 'scatter',
      data: [],
      label:'stope surfaces',
      fill: true, 
      pointRadius:3,
      }
  ];
  public extendedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0.8, y:0.14115},{x:0.8, y:1001},{x:100, y:1000},{x:100, y:923.739}], 
    fill: 1, 
    pointStyle:'line',
    label: "Stable zone"
    },
    { type: 'line',
      data: [{x:1, y:0.21186},{x:30, y:103.285},{x:100, y:923.739}], 
      fill: 2, 
      pointStyle:'line',
      label: "Failure & major failure zone"
      },
      { type: 'line',
      data: [{x:1, y:0.00092},{x:30, y:0.44981},{x:101, y:4.0964}],
      fill: true, 
      pointStyle:'line',
      label: "Caving zone"
      },
      { type: 'scatter',
      data: [],
      label:'stope surfaces',
      fill: true, 
      pointRadius:3,
      }
  ];

  public aChartColors: Color[] = [
    { backgroundColor: 'rgba(34,101, 86,0.2)', borderColor: 'none',borderWidth:0},
    { backgroundColor: 'rgba(0,0,0,0.4)', borderColor: 'none', borderWidth:0},
    { backgroundColor: 'rgba(255,0,0,0.3)', borderColor: 'none', borderWidth:0},
    { backgroundColor: '#000000', borderColor: 'none', borderWidth:0},
  ];

  ngOnInit(): void {
    this.service.currentHrCrown.subscribe(hrCrown => this.hrCrown = hrCrown);
    this.service.currentHrFoot.subscribe(hrFoot => this.hrFoot = hrFoot);
    this.service.currentHrHang.subscribe(hrHang => this.hrHang = hrHang);
    this.service.currentHrSide.subscribe(hrSide=> this.hrSide = hrSide);
    this.service.currentCrownSN.subscribe(crownSN=> this.crownSN = crownSN);
    this.service.currentSideSN.subscribe(sideSN=> this.sideSN = sideSN);
    this.service.currentHwSN.subscribe(hwSN=> this.hwSN = hwSN);
    this.service.currentFwSN.subscribe(fwSN=> this.fwSN = fwSN);
    this.service.currentCrownSN_mod.subscribe(crownSN_mod=> this.crownSN_mod = crownSN_mod);
    this.service.currentSideSN_mod.subscribe(sideSN_mod=> this.sideSN_mod = sideSN_mod);
    this.service.currentHwSN_mod.subscribe(hwSN_mod=> this.hwSN_mod = hwSN_mod);
    this.service.currentFwSN_mod.subscribe(fwSN_mod=> this.fwSN_mod = fwSN_mod);

    const data0 = [{x:this.hrCrown, y: this.crownSN_mod}, {x:this.hrSide, y:this.sideSN_mod},
      {x:this.hrFoot, y:this.fwSN_mod}, {x:this.hrHang, y:this.hwSN_mod}];
    const data1 = [{x:this.hrCrown, y: this.crownSN_mod}, {x:this.hrSide, y:this.sideSN_mod},
      {x:this.hrFoot, y:this.fwSN_mod}, {x:this.hrHang, y:this.hwSN_mod}];
    const data2 = [{x:this.hrCrown, y: this.crownSN}, {x:this.hrSide, y:this.sideSN},
      {x:this.hrFoot, y:this.fwSN}, {x:this.hrHang, y:this.hwSN}];

    this.refinedChartData[3].data = data0;
    this.modifiedChartData[3].data = data1;
    this.extendedChartData[3].data = data2;

  }
}

