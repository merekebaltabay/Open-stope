import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asymmetric',
  templateUrl: './asymmetric.component.html',
  styleUrls: ['./asymmetric.component.scss']
})
export class AsymmetricComponent implements OnInit {
  isShow = false;
  public stopeHeight: number;
  public sideTopWidth: number;
  public sideBottomWidth: number;
  public fhWidth: number;
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

  constructor(private router: Router, private route: ActivatedRoute) { }
  unsymmetric(stopeHeight: number, sideTopWidth: number, sideBottomWidth: number, sideLength: number, fhWidth: number) {

    this.volume = (+sideTopWidth + +sideBottomWidth) / 2 * stopeHeight * sideLength;
    this.volume = Math.round(this.volume * 1e1) / 1e1;

    this.hrCrown = sideTopWidth * fhWidth / 2 / (+sideTopWidth + +fhWidth);
    this.hrCrown = Math.round(this.hrCrown * 1e2) / 1e2;
    this.crownP = 2 * (+sideTopWidth + +fhWidth);
    this.crownP = Math.round(this.crownP * 1e2) / 1e2;
    this.crownA = sideTopWidth * fhWidth;
    this.crownA = Math.round(this.crownA * 1e2) / 1e2;

    this.hrFoot = stopeHeight * fhWidth / 2 / (+stopeHeight + +fhWidth);
    this.hrFoot = Math.round(this.hrFoot * 1e2) / 1e2;
    this.footP = 2 * (+stopeHeight + +fhWidth);
    this.footP = Math.round(this.footP * 1e2) / 1e2;
    this.footA = stopeHeight * fhWidth;
    this.footA = Math.round(this.footA * 1e2) / 1e2;

    this.hrHang = sideLength * fhWidth / 2 / (+sideLength + +fhWidth);
    this.hrHang = Math.round(this.hrHang * 1e2) / 1e2;
    this.hangP = 2 * (+sideLength + +fhWidth);
    this.hangP = Math.round(this.hangP * 1e2) / 1e2;
    this.hangA = sideLength * fhWidth;
    this.hangA = Math.round(this.hangA * 1e2) / 1e2;

    this.hrSide = (+sideTopWidth + +sideBottomWidth) / 2 * stopeHeight / (+stopeHeight + +sideTopWidth + +sideBottomWidth + +sideLength);
    this.hrSide = Math.round(this.hrSide * 1e2) / 1e2;
    this.sideP = +stopeHeight + +sideTopWidth + +sideBottomWidth + +sideLength;
    this.sideP = Math.round(this.sideP * 1e2) / 1e2;
    this.sideA = (+sideTopWidth + +sideBottomWidth) / 2 * stopeHeight;
    this.sideA = Math.round(this.sideA * 1e2) / 1e2;
  }
  ngOnInit(): void {
  }

}
