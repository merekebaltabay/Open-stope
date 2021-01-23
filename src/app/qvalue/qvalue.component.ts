import { Component, OnInit,Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ForAllService } from '../for-all.service';

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

  public coreL: number;
  public totalL: number;
  public description: string;

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

  openModal2(): void {
    const dialogRef = this.dialog.open(QvalueComponentSets, {
      width: '45%',
      data: { coreL: this.coreL, totalL: this.totalL }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.coreL = result;
    });
  }

  openModal3(): void {
    const dialogRef = this.dialog.open(QvalueComponentRoughness, {
      width: '45%',
      data: { coreL: this.coreL, totalL: this.totalL }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.coreL = result;
    });
  }
  openModal4(): void {
    const dialogRef = this.dialog.open(QvalueComponentAlteration, {
      width: '60%',
      data: { coreL: this.coreL, totalL: this.totalL }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.coreL = result;
    });
  }

  indexCalc(rqd: number, jointSet: number, jointRoughness: number, jointAlteration: number) {
    this.router.navigate(['q-res'], {relativeTo: this.route});
    this.rqd = rqd;
    this.service.changeRqd(this.rqd);
    this.qRes = (rqd / jointSet * jointRoughness / jointAlteration);
    this.qRes = Math.round(this.qRes * 1e2) / 1e2;
    this.service.changeQRes(this.qRes);
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

  constructor(
    public dialogRef: MatDialogRef<QvalueComponentSets>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
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

