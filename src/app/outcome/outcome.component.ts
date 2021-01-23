import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {
  public volume: number;
  public hrCrown: number;
  public hrFoot: number;
  public hrHang: number;
  public hrSide: number;
  public crownP: number;
  public crownA: number;
  public footP: number;
  public footA: number;
  public hangP: number;
  public hangA: number;
  public sideP: number;
  public sideA: number;
  public qRes: number;
  public crownIndStress: number;
  public sideIndStress: number;
  public fhIndStress: number;
  public Verticalstress: number;
  public Horizontalstress: number;
  public crown_Afactor_original: number;
  public crown_Afactor_modified: number;
  public crown_Bfactor_original: number;
  public crown_Bfactor_modified: number;
  public crown_Cfactor_original: number;
  public crown_Cfactor_modified: number;

  public crownSN: number;
  public sideSN: number;
  public hwSN: number;
  public fwSN: number;
  public crownSN_mod: number;
  public sideSN_mod: number;
  public hwSN_mod: number;
  public fwSN_mod: number;

  public timeFactor: number;
  public time: string;

  public fh_Afactor_original: number;
  public fh_Afactor_modified: number;
  public fh_Bfactor_original: number;
  public fh_Bfactor_modified: number;
  public hw_Cfactor_original: number;
  public hw_Cfactor_modified: number;

  public fw_Cfactor_original: number;
  public fw_Cfactor_modified: number;

  public side_Afactor_original: number;
  public side_Afactor_modified: number;
  public side_Bfactor_original: number;
  public side_Bfactor_modified: number;
  public side_Cfactor_original: number;
  public side_Cfactor_modified: number;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Crown', 'Hangingwall', 'Footwall', 'Sidewall'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public scatterChartOptions: ChartOptions = {
    responsive: true,
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
  }
  };  
  public scatterChartLegend = true;
  
  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) { }
  public barChartDataA: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public barChartDataB: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public barChartDataC: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public barChartDataF: ChartDataSets[] = [
    { data: [], label: 'Original' },
    { data: [], label: 'Modified' }
  ];

  public aChartColors: Color[] = [
    { backgroundColor: '#148F77' },
    { backgroundColor: '#76D7C4' },
  ]

  public bChartColors: Color[] = [
    { backgroundColor: '#F4D03F' },
    { backgroundColor: '#F9E79F' },
  ]

  public cChartColors: Color[] = [
    { backgroundColor: '#3498DB' },
    { backgroundColor: '#85C1E9' },
  ]

  public fChartColors: Color[] = [
    { backgroundColor: '#8E44AD' },
    { backgroundColor: '#D2B4DE' },
  ]

  public refinedChartData: ChartDataSets[] = [
    { type: 'line',
    data: [{x:0.5, y:0.0766},{x:1, y:1001},{x:34, y:1023.5}], 
    fill: 1, 
    pointStyle:'line',
    label: "Stable zone"
    },
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
  public stabChartColors: Color[] = [
    { backgroundColor: 'rgba(34,101, 86,0.2)', borderColor: 'none',borderWidth:0},
    { backgroundColor: 'rgba(0,0,0,0.4)', borderColor: 'none', borderWidth:0},
    { backgroundColor: 'rgba(255,0,0,0.3)', borderColor: 'none', borderWidth:0},
    { backgroundColor: '#000000', borderColor: 'none', borderWidth:0},
  ];

  ngOnInit(): void {
    this.service.currentVolume.subscribe(volume => this.volume = volume);
    this.service.currentHrCrown.subscribe(hrCrown => this.hrCrown = hrCrown);
    this.service.currentHrFoot.subscribe(hrFoot => this.hrFoot = hrFoot);
    this.service.currentHrHang.subscribe(hrHang => this.hrHang = hrHang);
    this.service.currentHrSide.subscribe(hrSide=> this.hrSide = hrSide);
    this.service.currentCrownP.subscribe(crownP => this.crownP = crownP);
    this.service.currentCrownA.subscribe(crownA => this.crownA = crownA);
    this.service.currentFootP.subscribe(footP => this.footP = footP);
    this.service.currentFootA.subscribe(footA => this.footA = footA);
    this.service.currentHangP.subscribe(hangP => this.hangP = hangP);
    this.service.currentHangA.subscribe(hangA => this.hangA = hangA);
    this.service.currentSideP.subscribe(sideP=> this.sideP = sideP);
    this.service.currentSideA.subscribe(sideA=> this.sideA = sideA);
    this.service.currentQRes.subscribe(qRes => this.qRes = qRes);
    this.service.currentCrownIndStress.subscribe(crownIndStress => this.crownIndStress = crownIndStress);
    this.service.currentSideIndStress.subscribe(sideIndStress => this.sideIndStress = sideIndStress);
    this.service.currentFhIndStress.subscribe(fhIndStress => this.fhIndStress = fhIndStress);
    this.service.currentVerticalstress.subscribe(Verticalstress => this.Verticalstress = Verticalstress);
    this.service.currentHorizontalstress.subscribe(Horizontalstress => this.Horizontalstress = Horizontalstress);

    this.service.currentTimeFactor.subscribe(timeFactor => this.timeFactor = timeFactor);
    this.service.currentCrown_Afactor_original.subscribe(crown_Afactor_original => this.crown_Afactor_original = crown_Afactor_original);
    this.service.currentCrown_Afactor_modified.subscribe(crown_Afactor_modified => this.crown_Afactor_modified = crown_Afactor_modified);
    this.service.currentCrown_Bfactor_original.subscribe(crown_Bfactor_original => this.crown_Bfactor_original = crown_Bfactor_original);
    this.service.currentCrown_Bfactor_modified.subscribe(crown_Bfactor_modified => this.crown_Bfactor_modified = crown_Bfactor_modified);
    this.service.currentCrown_Cfactor_original.subscribe(crown_Cfactor_original => this.crown_Cfactor_original = crown_Cfactor_original);
    this.service.currentCrown_Cfactor_modified.subscribe(crown_Cfactor_modified => this.crown_Cfactor_modified = crown_Cfactor_modified);
    this.service.currentSide_Afactor_original.subscribe(side_Afactor_original => this.side_Afactor_original = side_Afactor_original);
    this.service.currentSide_Afactor_modified.subscribe(side_Afactor_modified => this.side_Afactor_modified = side_Afactor_modified);
    this.service.currentSide_Bfactor_original.subscribe(side_Bfactor_original => this.side_Bfactor_original = side_Bfactor_original);
    this.service.currentSide_Bfactor_modified.subscribe(side_Bfactor_modified => this.side_Bfactor_modified = side_Bfactor_modified);
    this.service.currentSide_Cfactor_original.subscribe(side_Cfactor_original => this.side_Cfactor_original = side_Cfactor_original);
    this.service.currentSide_Cfactor_modified.subscribe(side_Cfactor_modified => this.side_Cfactor_modified = side_Cfactor_modified);
    this.service.currentFw_Cfactor_original.subscribe(fw_Cfactor_original => this.fw_Cfactor_original = fw_Cfactor_original);
    this.service.currentFw_Cfactor_modified.subscribe(fw_Cfactor_modified => this.fw_Cfactor_modified = fw_Cfactor_modified);
    this.service.currentFh_Afactor_original.subscribe(fh_Afactor_original => this.fh_Afactor_original = fh_Afactor_original);
    this.service.currentFh_Afactor_modified.subscribe(fh_Afactor_modified => this.fh_Afactor_modified = fh_Afactor_modified);
    this.service.currentFh_Bfactor_original.subscribe(fh_Bfactor_original => this.fh_Bfactor_original = fh_Bfactor_original);
    this.service.currentFh_Bfactor_modified.subscribe(fh_Bfactor_modified => this.fh_Bfactor_modified = fh_Bfactor_modified);
    this.service.currentHw_Cfactor_original.subscribe(hw_Cfactor_original => this.hw_Cfactor_original = hw_Cfactor_original);
    this.service.currentHw_Cfactor_modified.subscribe(hw_Cfactor_modified => this.hw_Cfactor_modified = hw_Cfactor_modified);
    this.service.currentCrownSN.subscribe(crownSN=> this.crownSN = crownSN);
    this.service.currentSideSN.subscribe(sideSN=> this.sideSN = sideSN);
    this.service.currentHwSN.subscribe(hwSN=> this.hwSN = hwSN);
    this.service.currentFwSN.subscribe(fwSN=> this.fwSN = fwSN);
    this.service.currentCrownSN_mod.subscribe(crownSN_mod=> this.crownSN_mod = crownSN_mod);
    this.service.currentSideSN_mod.subscribe(sideSN_mod=> this.sideSN_mod = sideSN_mod);
    this.service.currentHwSN_mod.subscribe(hwSN_mod=> this.hwSN_mod = hwSN_mod);
    this.service.currentFwSN_mod.subscribe(fwSN_mod=> this.fwSN_mod = fwSN_mod);
    
    const data = [{x:this.hrCrown, y: this.crownSN_mod}, {x:this.hrSide, y:this.sideSN_mod},
      {x:this.hrFoot, y:this.fwSN_mod}, {x:this.hrHang, y:this.hwSN_mod}];
    this.refinedChartData[3].data = data;

    const data0 = [this.crown_Afactor_original, this.fh_Afactor_original, this.fh_Afactor_original, this.side_Afactor_original];
    const data1 = [this.crown_Afactor_modified, this.fh_Afactor_modified, this.fh_Afactor_modified, this.side_Afactor_modified];
    
    const data2 = [this.crown_Bfactor_original, this.fh_Bfactor_original, this.fh_Bfactor_original, this.side_Bfactor_original];
    const data3 = [this.crown_Bfactor_modified, this.fh_Bfactor_modified, this.fh_Bfactor_modified, this.side_Bfactor_modified];
   
    const data4 = [this.crown_Cfactor_original, this.hw_Cfactor_original, this.fw_Cfactor_original, this.side_Cfactor_original];
    const data5 = [this.crown_Cfactor_modified, this.hw_Cfactor_modified, this.fw_Cfactor_modified, this.side_Cfactor_modified];
    
    const data6 = [this.crownSN, this.hwSN, this.fwSN, this.sideSN];
    const data7 = [this.crownSN_mod, this.hwSN_mod, this.fwSN_mod, this.sideSN_mod];
    
    this.barChartDataA[0].data = data0;
    this.barChartDataA[1].data = data1;

    this.barChartDataB[0].data = data2;
    this.barChartDataB[1].data = data3;

    this.barChartDataC[0].data = data4;
    this.barChartDataC[1].data = data5;

    this.barChartDataF[0].data = data6;
    this.barChartDataF[1].data = data7;
  
  }

}
