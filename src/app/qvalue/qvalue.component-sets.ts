import { Component,EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ForAllService } from '../for-all.service';

@Component({
    selector: 'qvalue-component-sets',
    templateUrl: './qvalue.component-sets.html',
    styleUrls: ['./qvalue.component-sets.scss']
  })
  export class QvalueComponentSets {
  @Output() onAdd = new EventEmitter<number>();

constructor(public dialog: MatDialog, private service: ForAllService) { }
 onClick() {
     const data =0.75;
     this.onAdd.emit(data)
 }
}