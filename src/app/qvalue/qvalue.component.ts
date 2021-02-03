import { Component, OnInit,Inject, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ForAllService } from '../for-all.service';
import { EventEmitter } from 'events';

export interface DialogData {
  coreL: number;
  totalL: number;
}

@Component({
  selector: 'app-qvalue',
  templateUrl: './qvalue.component.html',
  styleUrls: ['./qvalue.component.scss']
})
export class QvalueComponent implements OnInit {
  public rqd: number;
  public jointSet: number;
  public jointRoughness: number;
  public jointAlteration: number;
  public qRes: number;
  public qQuality: string;
  public rqdQuality: string;
  public coreL: number;
  public totalL: number;
  public description: string;
  public sendValue: number;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private service: ForAllService) { }

  
  openModal(): void {
    const dialogRef = this.dialog.open(QvalueComponentRqd, {
      width: '40%',
      data: { coreL: this.coreL }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.rqd = result.data;
    });
  }
  massive(){
        this.jointSet=0.75;
  }
  openModal2(): void {
    const dialogRef = this.dialog.open(QvalueComponentSets, {
      width: '45%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.jointSet=result.data;
    });
  }

  openModal3(): void {
    const dialogRef = this.dialog.open(QvalueComponentRoughness, {
      width: '45%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openModal4(): void {
    const dialogRef = this.dialog.open(QvalueComponentAlteration, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  indexCalc(rqd: number, jointSet: number, jointRoughness: number, jointAlteration: number) {
    this.router.navigate(['q-res'], {relativeTo: this.route});
    this.rqd = rqd;
    this.service.changeRqd(this.rqd);
    this.qRes = (rqd / jointSet * jointRoughness / jointAlteration);
    this.qRes = Math.round(this.qRes * 1e2) / 1e2;
    this.service.changeQRes(this.qRes);

    if(0.001 < this.qRes && this.qRes <=0.01){
     this.qQuality = 'exceptionally poor';
     this.service.changeQQuality(this.qQuality);
    } else if (0.01 < this.qRes && this.qRes <=0.5) {
      this.qQuality = 'extremely poor';
      this.service.changeQQuality(this.qQuality);
    } else if (0.5 < this.qRes && this.qRes <=1) {
      this.qQuality = 'very poor';
      this.service.changeQQuality(this.qQuality);
    } else if (1 < this.qRes && this.qRes <=4) {
      this.qQuality = 'poor';
      this.service.changeQQuality(this.qQuality);
    } else if (4 < this.qRes && this.qRes <=10){
      this.qQuality = 'fair';
      this.service.changeQQuality(this.qQuality);
    } else if (10 < this.qRes && this.qRes <=40){
      this.qQuality = 'good';
      this.service.changeQQuality(this.qQuality);
    } else if (40 < this.qRes && this.qRes <=100){
      this.qQuality = 'very good';
      this.service.changeQQuality(this.qQuality);
    } else if (100 < this.qRes && this.qRes <=1000){
      this.qQuality = 'extremely good';
      this.service.changeQQuality(this.qQuality);
    } else {
      this.qQuality = 'Check modified Q value';
      this.service.changeQQuality(this.qQuality);
    }

    if(0 < this.rqd && this.rqd <=25){
      this.rqdQuality = 'very poor';
      this.service.changeRqdQuality(this.rqdQuality);
     } else if (25 < this.rqd && this.rqd <=50) {
       this.rqdQuality = 'poor';
       this.service.changeRqdQuality(this.rqdQuality);
     } else if (50 < this.rqd && this.rqd <=75) {
       this.rqdQuality = 'fair';
       this.service.changeRqdQuality(this.rqdQuality);
     } else if (75 < this.rqd && this.rqd <=100) {
       this.rqdQuality = 'good';
       this.service.changeRqdQuality(this.rqdQuality);
     } else {
      this.rqdQuality = 'Check RQD value';
      this.service.changeRqdQuality(this.rqdQuality);
     }
  }
  ngOnInit(): void {
  }

}
//Modal 1 component - RQD calculation
@Component({
  selector: 'qvalue-component-rqd',
  templateUrl: './qvalue.component-rqd.html',
  styleUrls: ['./qvalue.component-rqd.scss']
})
export class QvalueComponentRqd {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentRqd>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

// Modal 2 - Joint Sets
@Component({
  selector: 'qvalue-component-sets',
  templateUrl: './qvalue.component-sets.html',
  styleUrls: ['./qvalue.component-sets.scss']
})

export class QvalueComponentSets {
  public js1:number;
  @Output() onAdd = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<QvalueComponentSets>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onClick() {
      const data1=0.75;
      
  }
}
// Modal 3 - Joint Roughness
@Component({
  selector: 'qvalue-component-roughness',
  templateUrl: './qvalue.component-roughness.html',
  styleUrls: ['./qvalue.component-roughness.scss']
})
export class QvalueComponentRoughness {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentRoughness>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

// Modal 4 - Joint Alteration
@Component({
  selector: 'qvalue-component-alteration',
  templateUrl: './qvalue.component-alteration.html',
  styleUrls: ['./qvalue.component-alteration.scss']
})
export class QvalueComponentAlteration {

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentAlteration>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

