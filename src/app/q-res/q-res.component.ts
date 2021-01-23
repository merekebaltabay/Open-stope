import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';

@Component({
  selector: 'app-q-res',
  templateUrl: './q-res.component.html',
  styleUrls: ['./q-res.component.scss']
})
export class QResComponent implements OnInit {
  public rqd: number;
  public jointSet: number;
  public jointRoughness: number;
  public jointAlteration: number;
  public qRes: number;
  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) { }

  ngOnInit(): void {
    this.service.currentRqd.subscribe(rqd => this.rqd = rqd);
    this.service.currentQRes.subscribe(qRes => this.qRes = qRes);
  }

}
