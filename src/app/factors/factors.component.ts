import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})
export class FactorsComponent implements OnInit {
  public ucs: number;
  public diffDip: number;
  public stopeDip: number;
  public crown_Afactor_original: number;
  public crown_Afactor_modified: number;
  public crown_Bfactor_original: number;
  public crown_Bfactor_modified: number;
  public crown_Cfactor_original: number;
  public crown_Cfactor_modified: number;

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

  public crownIndStress: number;
  public sideIndStress: number;
  public fhIndStress: number;
  public qRes: number;
  public crownSN: number;
  public crownSN_mod: number;
  public sideSN: number;
  public sideSN_mod: number;
  public hwSN: number;
  public hwSN_mod: number;
  public fwSN: number;
  public fwSN_mod: number;
  public time: string = '';
  public timeFactor: number;


  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) { }
  selectChangeHandler (event: any) {
    this.time = event.target.value;
  }
  CalcFactors(ucs: number, diffDip: number, stopeDip: number) {
    this.router.navigate(['factors-res'], {relativeTo: this.route});
    //Time factor calculation 
    if (this.time=='3month' && this.qRes > 10) {
      this.timeFactor = 1.0;
      this.service.changeTimeFactor(this.timeFactor);
    } else  if (this.time=='3month' && this.qRes < 10 || this.time=='35month' && this.qRes > 10) {
      this.timeFactor = 0.8;
      this.service.changeTimeFactor(this.timeFactor);
    } else if (this.time=='35month' && this.qRes < 10 || this.time=='512month' && this.qRes > 10) {
      this.timeFactor = 0.5;
      this.service.changeTimeFactor(this.timeFactor);
    } else if (this.time=='512month' && this.qRes < 10 || this.time=='12month' && this.qRes > 10) {
      this.timeFactor = 0.3;
      this.service.changeTimeFactor(this.timeFactor);
    } else if (this.time=='12month' && this.qRes < 10) {
      this.timeFactor = 0.2;
      this.service.changeTimeFactor(this.timeFactor);
    } else {
      "Check Q' value";
    }
    //A FACTOR Calculation - CROWN_original
    if (0 < (ucs / this.crownIndStress) && (ucs / this.crownIndStress) <= 10) {
      this.crown_Afactor_original = 9/80*ucs/this.crownIndStress-0.125;
      this.crown_Afactor_original = Math.round(this.crown_Afactor_original * 1e2) / 1e2;
      this.service.changeCrown_Afactor_original(this.crown_Afactor_original);
    } else if ( (ucs / this.crownIndStress) >= 10) {
      this.crown_Afactor_original = 1;
      this.service.changeCrown_Afactor_original(this.crown_Afactor_original);}
      
    //A FACTOR Calculation - CROWN_modified
    if ( (ucs / this.crownIndStress) >= 10) {
      this.crown_Afactor_modified = 1;
      this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
    } else if ((ucs / this.crownIndStress) <= 2) {
      this.crown_Afactor_modified = 0.1;
      this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
    } else if (2 < (ucs/this.crownIndStress) && (ucs / this.crownIndStress) <= 10) {
      this.crown_Afactor_modified = 9/80*ucs/this.crownIndStress-0.125;
      this.crown_Afactor_modified = Math.round(this.crown_Afactor_modified * 1e2) / 1e2;
      this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
    }
    //A FACTOR Calculation - SIDE_original
    if (0 < (ucs/this.sideIndStress) && (ucs / this.sideIndStress) <= 10 ) {
      this.side_Afactor_original = 9/80*ucs/this.sideIndStress-0.125;
      this.side_Afactor_original = Math.round(this.side_Afactor_original * 1e2) / 1e2;
      this.service.changeSide_Afactor_original(this.side_Afactor_original);
    } else if ((ucs / this.sideIndStress) >= 10) {
      this.side_Afactor_original = 1;
      this.service.changeSide_Afactor_original(this.side_Afactor_original);
    }
    //A FACTOR Calculation - SIDE_modified
    if ((ucs / this.sideIndStress) >= 10) {
      this.side_Afactor_modified =1;
      this.service.changeSide_Afactor_modified(this.crown_Afactor_modified);
    } else if ((ucs/this.sideIndStress) <= 2) {
      this.side_Afactor_modified = 0.1;
      this.service.changeSide_Afactor_modified(this.crown_Afactor_modified);
    } else if ((2 < ucs/this.sideIndStress) && (ucs / this.sideIndStress) <= 10) {
      this.side_Afactor_modified = 9/80*ucs/this.sideIndStress-0.125;
      this.side_Afactor_modified = Math.round(this.side_Afactor_modified * 1e2) / 1e2;
      this.service.changeSide_Afactor_modified(this.crown_Afactor_modified);
    }
    //A FACTOR Calculation - FW&HW_original
    if (0 < (ucs / this.fhIndStress) && (ucs / this.fhIndStress) <= 10 ) {
      this.fh_Afactor_original = 9/80*ucs/this.fhIndStress-0.125;
      this.fh_Afactor_original = Math.round(this.fh_Afactor_original * 1e2) / 1e2;
      this.service.changeFh_Afactor_original(this.fh_Afactor_original);
    } else if ((ucs / this.fhIndStress) >= 10) {
      this.fh_Afactor_original = 1;
      this.service.changeFh_Afactor_original(this.fh_Afactor_original);}
    //A FACTOR Calculation - FW&HW_modified
    if ((ucs / this.fhIndStress) >= 10) {
      this.fh_Afactor_modified = 1;
      this.service.changeFh_Afactor_modified(this.fh_Afactor_modified);
    } else if ((ucs / this.fhIndStress) <= 2) {
      this.fh_Afactor_modified = 0.1;
      this.service.changeFh_Afactor_modified(this.fh_Afactor_modified);
    } else if (2 < (ucs / this.fhIndStress) && (ucs / this.fhIndStress) <= 10) {
      this.fh_Afactor_modified = 9/80*ucs/this.fhIndStress-0.125;
      this.fh_Afactor_modified = Math.round(this.fh_Afactor_modified * 1e2) / 1e2;
      this.service.changeFh_Afactor_modified(this.fh_Afactor_modified);
    }
   /*
    if (0 < (ucs / this.crownIndStress) && (ucs / this.crownIndStress) <= 10) {
      this.crown_Afactor_original = 9/80*ucs/this.crownIndStress-0.125;
      this.crown_Afactor_original = Math.round(this.crown_Afactor_original * 1e2) / 1e2;
      this.service.changeCrown_Afactor_original(this.crown_Afactor_original);
    } else if ( (ucs / this.crownIndStress) >= 10) {
      this.crown_Afactor_original = 1;
      this.service.changeCrown_Afactor_original(this.crown_Afactor_original);
      this.crown_Afactor_modified = this.crown_Afactor_original;
      this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
    } else if ((ucs / this.crownIndStress) <= 2) {
      this.crown_Afactor_modified = 0.1;
      this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
    } else if (2 < (ucs/this.crownIndStress) && (ucs / this.crownIndStress) <= 10) {
      this.crown_Afactor_modified = 9/80*ucs/this.crownIndStress-0.125;
      this.crown_Afactor_modified = Math.round(this.crown_Afactor_modified * 1e2) / 1e2;
      this.service.changeCrown_Afactor_modified(this.crown_Afactor_modified);
    } else if (0 < (ucs/this.sideIndStress) && (ucs / this.sideIndStress) <= 10 ) {
      this.side_Afactor_original = 9/80*ucs/this.sideIndStress-0.125;
      this.side_Afactor_original = Math.round(this.side_Afactor_original * 1e2) / 1e2;
      this.service.changeSide_Afactor_original(this.side_Afactor_original);
    } else if ((ucs / this.sideIndStress) >= 10) {
      this.side_Afactor_original = 1;
      this.service.changeSide_Afactor_original(this.side_Afactor_original);
      this.side_Afactor_modified =this.side_Afactor_original;
      this.service.changeSide_Afactor_modified(this.crown_Afactor_modified);
    } else if ((ucs/this.sideIndStress) <= 2) {
      this.side_Afactor_modified = 0.1;
      this.service.changeSide_Afactor_modified(this.crown_Afactor_modified);
    } else if ((2 < ucs/this.sideIndStress) && (ucs / this.sideIndStress) <= 10) {
      this.side_Afactor_modified = 9/80*ucs/this.sideIndStress-0.125;
      this.side_Afactor_modified = Math.round(this.side_Afactor_modified * 1e2) / 1e2;
      this.service.changeSide_Afactor_modified(this.crown_Afactor_modified);
    } else if (0 < (ucs / this.fhIndStress) && (ucs / this.fhIndStress) <= 10 ) {
      this.fh_Afactor_original = 9/80*ucs/this.fhIndStress-0.125;
      this.fh_Afactor_original = Math.round(this.fh_Afactor_original * 1e2) / 1e2;
      this.service.changeFh_Afactor_original(this.fh_Afactor_original);
    } else if ((ucs / this.fhIndStress) >= 10) {
      this.fh_Afactor_original = 1;
      this.service.changeFh_Afactor_original(this.fh_Afactor_original);
      this.fh_Afactor_modified = this.fh_Afactor_original;
      this.service.changeFh_Afactor_modified(this.fh_Afactor_modified);
    } else if ((ucs / this.fhIndStress) <= 2) {
      this.fh_Afactor_modified = 0.1;
      this.service.changeFh_Afactor_modified(this.fh_Afactor_modified);
    } else if (2 < (ucs / this.fhIndStress) && (ucs / this.fhIndStress) <= 10) {
      this.fh_Afactor_modified = 9/80*ucs/this.fhIndStress-0.125;
      this.fh_Afactor_modified = Math.round(this.fh_Afactor_modified * 1e2) / 1e2;
      this.service.changeFh_Afactor_modified(this.fh_Afactor_modified);
    }  else {
      "Check UCS value";
    } */

    // B FACTOR Calculation 
    this.crown_Bfactor_original = 0.5 - - 0.01*0;
    this.crown_Bfactor_original = Math.round(this.crown_Bfactor_original * 1e1) / 1e1;
    this.service.changeCrown_Bfactor_original(this.crown_Bfactor_original);

    this.crown_Bfactor_modified = 0.3 - - 0.01*0;
    this.crown_Bfactor_modified = Math.round(this.crown_Bfactor_modified * 1e1) / 1e1;
    this.service.changeCrown_Bfactor_modified(this.crown_Bfactor_modified);

    this.side_Bfactor_original = 1/150 * 90 + + 0.4;
    this.side_Bfactor_original = Math.round(this.side_Bfactor_original * 1e1) / 1e1;
    this.service.changeSide_Bfactor_original(this.side_Bfactor_original);

    this.side_Bfactor_modified = this.side_Bfactor_original;
    this.service.changeSide_Bfactor_modified(this.side_Bfactor_modified);

    if (0 <= diffDip && diffDip <= 20) {
      this.fh_Bfactor_original = 0.5 - - 0.01*diffDip;
      this.fh_Bfactor_original = Math.round(this.fh_Bfactor_original * 1e1) / 1e1;
      this.service.changeFh_Bfactor_original(this.fh_Bfactor_original);

      this.fh_Bfactor_modified = 0.3 - - 0.01*diffDip;
      this.fh_Bfactor_modified = Math.round(this.fh_Bfactor_modified * 1e1) / 1e1;
      this.service.changeFh_Bfactor_modified(this.fh_Bfactor_modified);
    } else if ( 20 < diffDip && diffDip <= 45) {
      this.fh_Bfactor_original = 0.004*diffDip + +0.22;
      this.fh_Bfactor_original = Math.round(this.fh_Bfactor_original * 1e1) / 1e1;
      this.service.changeFh_Bfactor_original(this.fh_Bfactor_original);
    } else if (45 < diffDip && diffDip <= 60) {
      this.fh_Bfactor_original = 2/75*diffDip - -0.8;
      this.fh_Bfactor_original = Math.round(this.fh_Bfactor_original * 1e1) / 1e1;
      this.service.changeFh_Bfactor_original(this.fh_Bfactor_original);
    } else if (60 < diffDip && diffDip <= 90) {
      this.fh_Bfactor_original = 1/150*diffDip + + 0.4;
      this.fh_Bfactor_original = Math.round(this.fh_Bfactor_original * 1e1) / 1e1;
      this.service.changeFh_Bfactor_original(this.fh_Bfactor_original);
      this.fh_Bfactor_modified = 1/150*diffDip + + 0.4;
      this.fh_Bfactor_modified = Math.round(this.fh_Bfactor_modified * 1e1) / 1e1;
      this.service.changeFh_Bfactor_modified(this.fh_Bfactor_modified);
    } else if (10 < diffDip && diffDip <= 30) {
      this.fh_Bfactor_modified = 0.2;
      this.service.changeFh_Bfactor_modified(this.fh_Bfactor_modified);
    } else if (30 < diffDip && diffDip <= 60 ) {
      this.fh_Bfactor_modified = 0.02*diffDip - - 0.4;
      this.fh_Bfactor_modified = Math.round(this.fh_Bfactor_modified * 1e1) / 1e1;
      this.service.changeFh_Bfactor_modified(this.fh_Bfactor_modified);
    } else {
      "Check UCS value"
    }
    //C FACTOR Calculation 
    this.crown_Cfactor_original = 8 - 7 * Math.cos(0);
    this.crown_Cfactor_original = Math.round(this.crown_Cfactor_original * 1e2) / 1e2;
    this.service.changeCrown_Cfactor_original(this.crown_Cfactor_original);

    this.crown_Cfactor_modified = 8 - 6 * Math.cos(0);
    this.crown_Cfactor_modified = Math.round(this.crown_Cfactor_modified * 1e2) / 1e2;
    this.service.changeCrown_Cfactor_modified(this.crown_Cfactor_modified);

    this.side_Cfactor_original = 8 - 7 * Math.cos(90/180*Math.PI);
    this.side_Cfactor_original = Math.round(this.side_Cfactor_original * 1e2) / 1e2;
    this.service.changeSide_Cfactor_original(this.side_Cfactor_original);

    this.side_Cfactor_modified = 8 - 6 * Math.cos(90/180*Math.PI);
    this.side_Cfactor_modified = Math.round(this.side_Cfactor_modified * 1e2) / 1e2;
    this.service.changeSide_Cfactor_modified(this.side_Cfactor_modified);

    this.hw_Cfactor_original = 8 - 7 * Math.cos(stopeDip/180*Math.PI);
    this.hw_Cfactor_original = Math.round(this.hw_Cfactor_original * 1e2) / 1e2;
    this.service.changeHw_Cfactor_original(this.hw_Cfactor_original);

    this.hw_Cfactor_modified = 8 - 6 * Math.cos(stopeDip/180*Math.PI);
    this.hw_Cfactor_modified = Math.round(this.hw_Cfactor_modified * 1e2) / 1e2;
    this.service.changeHw_Cfactor_modified(this.hw_Cfactor_modified);

    this.fw_Cfactor_original = 8 - 7 * Math.cos(stopeDip/180*Math.PI);
    this.fw_Cfactor_original = Math.round(this.fw_Cfactor_original * 1e2) / 1e2;
    this.service.changeFw_Cfactor_original(this.fw_Cfactor_original);

    this.fw_Cfactor_modified = 8 - 6 * Math.cos(stopeDip/180*Math.PI);
    this.fw_Cfactor_modified = Math.round(this.fw_Cfactor_modified * 1e2) / 1e2;
    this.service.changeFw_Cfactor_modified(this.fw_Cfactor_modified);

  //Stability Number calculation 
    this.crownSN = this.qRes * this.crown_Afactor_original * this.crown_Bfactor_original * this.crown_Cfactor_original;
    this.crownSN = Math.round(this.crownSN * 1e2) / 1e2;
    this.service.changeCrownSN(this.crownSN);

    this.crownSN_mod = this.qRes * this.crown_Afactor_modified * this.crown_Bfactor_modified * this.crown_Cfactor_modified;
    this.crownSN_mod = Math.round(this.crownSN_mod * 1e2) / 1e2;
    this.service.changeCrownSN_mod(this.crownSN_mod);

    this.sideSN = this.qRes * this.side_Afactor_original * this.side_Bfactor_original * this.side_Cfactor_original;
    this.sideSN = Math.round(this.sideSN * 1e2) / 1e2;
    this.service.changeSideSN(this.sideSN);

    this.sideSN_mod = this.qRes * this.side_Afactor_modified * this.side_Bfactor_modified * this.side_Cfactor_modified;
    this.sideSN_mod = Math.round(this.sideSN_mod * 1e2) / 1e2;
    this.service.changeSideSN_mod(this.sideSN_mod);
    this.hwSN = this.qRes * this.fh_Afactor_original * this.fh_Bfactor_original * this.hw_Cfactor_original;
    this.hwSN = Math.round(this.hwSN * 1e2) / 1e2;
    this.service.changeHwSN(this.hwSN);

    this.hwSN_mod = this.qRes * this.fh_Afactor_modified * this.fh_Bfactor_modified * this.hw_Cfactor_modified;
    this.hwSN_mod = Math.round(this.hwSN_mod * 1e2) / 1e2;
    this.service.changeHwSN_mod(this.hwSN_mod);
    
    this.fwSN = this.qRes * this.fh_Afactor_original * this.fh_Bfactor_original * this.fw_Cfactor_original;
    this.fwSN = Math.round(this.fwSN * 1e2) / 1e2;
    this.service.changeFwSN(this.fwSN);
    
    this.fwSN_mod = this.qRes * this.fh_Afactor_modified * this.fh_Bfactor_modified * this.fw_Cfactor_modified;
    this.fwSN_mod = Math.round(this.fwSN_mod * 1e2) / 1e2;
    this.service.changeFwSN_mod(this.fwSN_mod);
  }

  ngOnInit(): void {
    this.service.currentCrownIndStress.subscribe(crownIndStress => this.crownIndStress = crownIndStress);
    this.service.currentSideIndStress.subscribe(sideIndStress => this.sideIndStress = sideIndStress);
    this.service.currentFhIndStress.subscribe(fhIndStress => this.fhIndStress = fhIndStress);
    this.service.currentQRes.subscribe(qRes => this.qRes = qRes);
  }

}
