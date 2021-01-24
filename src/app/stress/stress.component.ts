import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-stress',
  templateUrl: './stress.component.html',
  styleUrls: ['./stress.component.scss']
})
export class StressComponent implements OnInit {

  public depth: number;
  public modulus: number;
  public Verticalstress: number;
  public Horizontalstress: number;
  public vertStr: number;
  public horStr: number;
  public stopeHeight: number;
  public sideWidth: number;
  public fhWidth: number;
  public Kratio: number;
  public HSratio: number; 
  public HSratio2: number; 
  public crownIndStress: number;
  public sideIndStress: number;
  public fh1IndStress: number;
  public fh2IndStress: number;
  public fhIndStress: number;
  public selectedIndex: number;
  public enableDepth: boolean;
  public enableModulus: boolean;
  public enableVertStress: boolean;
  public enableHorStress: boolean;
  
  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) {
    }
    option1(){
      this.enableHorStress=true;
      this.enableVertStress=true;
      this.enableDepth=false;
      this.enableModulus=false;
    }
    option2(){
    this.enableHorStress=false;
    this.enableVertStress=false;
    this.enableDepth=true;
    this.enableModulus=true;
  }
  enableDisableRule(selectedIndex:number){
    if(this.selectedIndex = 1){
       this.selectedIndex = selectedIndex;
    } else{
       this.selectedIndex = 2;
    }
 }
 
  calcStress(depth:number, modulus:number, vertStr: number, horStr:number) {
      this.router.navigate(['stress-res'], {relativeTo: this.route});

    if (this.vertStr=vertStr) {
      this.Verticalstress = vertStr;
      this.Verticalstress = Math.round(this.Verticalstress * 1e2) / 1e2;
      this.service.changeVerticalstress(this.Verticalstress);
    } else {this.Verticalstress = 0.027 * depth;
      this.Verticalstress = Math.round(this.Verticalstress * 1e2) / 1e2;
      this.service.changeVerticalstress(this.Verticalstress);}
  
     if (this.horStr=horStr) {
      this.Horizontalstress =horStr;
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e3) / 1e3;
      this.service.changeHorizontalstress(this.Horizontalstress);
     }
     else if (0 < modulus && modulus <= 10) {
      this.Horizontalstress = 16.47 / Math.pow(depth, 0.522);
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e3) / 1e3;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (10 < modulus && modulus <= 25) {
      this.Horizontalstress = 28.78 / Math.pow(depth, 0.554);
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e3) / 1e3;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (25 < modulus && modulus <= 50) {
      this.Horizontalstress = 44.35 / Math.pow(depth, 0.54);
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e2) / 1e2;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (50 < modulus && modulus <= 75) {
      this.Horizontalstress = 52.83 / Math.pow(depth, 0.528);
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e2) / 1e2;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else if (75 < modulus && modulus <= 100) {
      this.Horizontalstress = 59.84 / Math.pow(depth, 0.511);
      this.Horizontalstress = Math.round(this.Horizontalstress * 1e2) / 1e2;
      this.service.changeHorizontalstress(this.Horizontalstress);
    } else {
      "Check Elastic Modulus!";
    }
    this.Kratio = this.Horizontalstress / this.Verticalstress;
    this.HSratio = this.stopeHeight / this.sideWidth;

// CROWN - estimation of induced stress
  if (this.Kratio <= 2 && this.Kratio > 1.5) {
    this.crownIndStress = (1.5713 + + 1.0259 * this.HSratio - - 0.0502* Math.pow(this.HSratio, 2))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
  } else if (this.Kratio <= 1.5 && this.Kratio > 1) {
    this.crownIndStress = (1.1732 + + 0.6881 * this.HSratio - - 0.0297* Math.pow(this.HSratio, 2))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
    } else if (this.Kratio <= 1 && this.Kratio > 0.5) {
    this.crownIndStress = (0.4196 + + 0.486 * this.HSratio - - 0.0237* Math.pow(this.HSratio, 2))*this.Verticalstress;
    this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
    this.service.changeCrownIndStress(this.crownIndStress);
    } else if (this.Kratio <= 0.5 && this.Kratio > 0) {
      this.crownIndStress = (0.2892* this.HSratio - - 0.1634 - - 0.0193* Math.pow(this.HSratio, 2))*this.Verticalstress;
      this.crownIndStress = Math.round(this.crownIndStress * 1e2) / 1e2;
      this.service.changeCrownIndStress(this.crownIndStress);
      } else {
        "Check Elastic Modulus!"
      }

      // SIDEWALL - estimation of induced stress
    this.HSratio2 = this.fhWidth / this.sideWidth;
    this.sideIndStress = (0.4196 + + 0.486 * this.HSratio2 - - 0.0237*Math.pow(this.HSratio2,2))*this.Verticalstress;
    this.sideIndStress = Math.round(this.sideIndStress * 1e2) / 1e2;
    this.service.changeSideIndStress(this.sideIndStress);

    // HW & FW - estimation of induced stress - 1
  
  if (this.Kratio <= 2 && this.Kratio > 1.5) {
    this.fh1IndStress = (0.4456 - - 0.5802 * this.HSratio - - 0.0056*Math.pow(this.HSratio, 3) + + 0.0991*Math.pow(this.HSratio, 2))*this.Verticalstress;
  } else if (this.Kratio <= 1.5 && this.Kratio > 1) {
    this.fh1IndStress = (0.969- - 0.6286 * this.HSratio - - 0.0057*Math.pow(this.HSratio, 3) + + 0.1021*Math.pow(this.HSratio, 2))*this.Verticalstress;
    } else if (this.Kratio <= 1 && this.Kratio > 0.5) {
    this.fh1IndStress = (1.46 - - 0.7108 * this.HSratio - - 0.0081*Math.pow(this.HSratio, 3)+ +0.1343*Math.pow(this.HSratio, 2))*this.Verticalstress;
    } else if (this.Kratio <= 0.5 && this.Kratio > 0) {
      this.fh1IndStress = (1.829 - - 0.6545* this.HSratio - - 0.0071*Math.pow(this.HSratio, 3)+ +0.1203*Math.pow(this.HSratio, 2))*this.Verticalstress;
      } else {
        "Check Elastic Modulus!"
      }
   // HW & FW - estimation of induced stress - 2
   this.fh2IndStress = (1.46 - - 0.7108 * this.HSratio2 - - 0.0081*Math.pow(this.HSratio2, 3)+ +0.1343*Math.pow(this.HSratio2, 2))*this.Verticalstress;
   if (this.fh1IndStress > this.fh2IndStress) {
    this.fhIndStress = this.fh2IndStress;
    this.fhIndStress = Math.round(this.fhIndStress * 1e2) / 1e2;
    this.service.changeFhIndStress(this.fhIndStress);
  } else {
    this.fhIndStress = this.fh1IndStress;
    this.fhIndStress = Math.round(this.fhIndStress * 1e2) / 1e2;
    this.service.changeFhIndStress(this.fhIndStress);
  }
  }

  ngOnInit(): void {
    this.selectedIndex=1;
    this.enableDepth=false;
    this.enableModulus=false;;
    this.enableVertStress=true;
    this.enableHorStress=true;
    this.service.currentStopeHeight.subscribe(stopeHeight => this.stopeHeight = stopeHeight);
    this.service.currentSideWidth.subscribe(sideWidth => this.sideWidth = sideWidth);
    this.service.currentFhWidth.subscribe(fhWidth => this.fhWidth = fhWidth);
  }

}
