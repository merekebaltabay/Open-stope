import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForAllService } from '../for-all.service';
import { FormControl, FormGroup, FormBuilder, Validator} from '@angular/forms';

@Component({
  selector: 'app-symmetric',
  templateUrl: './symmetric.component.html',
  styleUrls: ['./symmetric.component.scss']
})
export class SymmetricComponent implements OnInit {
  public stopeHeight: number;
  public sideWidth: number;
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

  constructor(private router: Router, private route: ActivatedRoute, private service: ForAllService) { }

  calculate(stopeHeight: number, sideWidth: number, fhWidth: number) {
   
    this.router.navigate(['sym-res'], {relativeTo: this.route});
    
    this.stopeHeight = stopeHeight;
    this.service.changeStopeHeight(this.stopeHeight);
    this.sideWidth = sideWidth;
    this.service.changeSideWidth(this.sideWidth);
    this.fhWidth = fhWidth;
    this.service.changeFhWidth(this.fhWidth);
    
    this.volume = stopeHeight * sideWidth * fhWidth;
    this.volume = Math.round(this.volume * 1e1) / 1e1;
    this.service.changeVolume(this.volume);

    this.hrCrown = sideWidth * fhWidth / 2 / (+sideWidth + +fhWidth);
    this.hrCrown = Math.round(this.hrCrown * 1e2) / 1e2;
    this.service.changeHrCrown(this.hrCrown);

    this.crownP = 2 * (+sideWidth + +fhWidth);
    this.crownP = Math.round(this.crownP * 1e2) / 1e2;
    this.service.changeCrownP(this.crownP);

    this.crownA = sideWidth * fhWidth;
    this.crownA = Math.round(this.crownA * 1e2) / 1e2;
    this.service.changeCrownA(this.crownA);

    this.hrFoot = stopeHeight * fhWidth / 2 / (+stopeHeight + +fhWidth);
    this.hrFoot = Math.round(this.hrFoot * 1e2) / 1e2;
    this.service.changeHrFoot(this.hrFoot);

    this.footP = 2 * (+stopeHeight + +fhWidth);
    this.footP = Math.round(this.footP * 1e2) / 1e2;
    this.service.changeFootP(this.footP);

    this.footA = stopeHeight * fhWidth;
    this.footA = Math.round(this.footA * 1e2) / 1e2;
    this.service.changeFootA(this.footA);

    this.hrHang = stopeHeight * fhWidth / 2 / (+stopeHeight + +fhWidth);
    this.hrHang = Math.round(this.hrHang * 1e2) / 1e2;
    this.service.changeHrHang(this.hrHang);

    this.hangP = 2 * (+stopeHeight + +fhWidth);
    this.hangP = Math.round(this.hangP * 1e2) / 1e2;
    this.service.changeHangP(this.hangP);

    this.hangA = stopeHeight * fhWidth;
    this.hangA = Math.round(this.hangA * 1e2) / 1e2;
    this.service.changeHangA(this.hangA);

    this.hrSide = sideWidth * stopeHeight / 2 / (+sideWidth + +stopeHeight);
    this.hrSide = Math.round(this.hrSide * 1e2) / 1e2;
    this.service.changeHrSide(this.hrSide);

    this.sideP = 2 * (+stopeHeight + +sideWidth);
    this.sideP = Math.round(this.sideP * 1e2) / 1e2;
    this.service.changeSideP(this.sideP);

    this.sideA = stopeHeight * sideWidth;
    this.sideA = Math.round(this.sideA * 1e2) / 1e2;
    this.service.changeSideA(this.sideA);


  }


  ngOnInit(): void {
    
     }

}
