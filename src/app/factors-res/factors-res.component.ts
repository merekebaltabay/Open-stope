import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-factors-res',
  templateUrl: './factors-res.component.html',
  styleUrls: ['./factors-res.component.scss']
})
export class FactorsResComponent implements OnInit {
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
  public qRes: number;
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

  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) {
   }
  
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
  ngOnInit(): void {
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
