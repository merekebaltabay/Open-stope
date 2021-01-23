import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForAllService {

  public stopeHeightSource = new BehaviorSubject<number>(0);
  currentStopeHeight = this.stopeHeightSource.asObservable();

  public sideWidthSource = new BehaviorSubject<number>(0);
  currentSideWidth = this.sideWidthSource.asObservable();

  public fhWidthSource = new BehaviorSubject<number>(0);
  currentFhWidth = this.fhWidthSource.asObservable();

  public volumeSource = new BehaviorSubject<number>(0);
  currentVolume = this.volumeSource.asObservable();

  public hrCrownSource = new BehaviorSubject<number>(0);
  currentHrCrown = this.hrCrownSource.asObservable();

  public hrFootSource = new BehaviorSubject<number>(0);
  currentHrFoot = this.hrFootSource.asObservable();

  public hrHangSource = new BehaviorSubject<number>(0);
  currentHrHang = this.hrHangSource.asObservable();

  public hrSideSource = new BehaviorSubject<number>(0);
  currentHrSide = this.hrSideSource.asObservable();

  public crownPSource = new BehaviorSubject<number>(0);
  currentCrownP = this.crownPSource.asObservable();

  public crownASource = new BehaviorSubject<number>(0);
  currentCrownA = this.crownASource.asObservable();

  public footPSource = new BehaviorSubject<number>(0);
  currentFootP = this.footPSource.asObservable();

  public footASource = new BehaviorSubject<number>(0);
  currentFootA = this.footASource.asObservable();

  public hangPSource = new BehaviorSubject<number>(0);
  currentHangP = this.hangPSource.asObservable();

  public hangASource = new BehaviorSubject<number>(0);
  currentHangA = this.hangASource.asObservable();

  public sidePSource = new BehaviorSubject<number>(0);
  currentSideP = this.sidePSource.asObservable();

  public sideASource = new BehaviorSubject<number>(0);
  currentSideA = this.sideASource.asObservable();

  public rqdSource = new BehaviorSubject<number>(0);
  currentRqd = this.rqdSource.asObservable();
  
  public qResSource = new BehaviorSubject<number>(0);
  currentQRes = this.qResSource.asObservable();

  public depthSource = new BehaviorSubject<number>(0);
  currentDepth = this.depthSource.asObservable();

  public VerticalstressSource = new BehaviorSubject<number>(0);
  currentVerticalstress = this.VerticalstressSource.asObservable();

  public HorizontalstressSource = new BehaviorSubject<number>(0);
  currentHorizontalstress = this.HorizontalstressSource.asObservable();

  public crownIndStressSource = new BehaviorSubject<number>(0);
  currentCrownIndStress = this.crownIndStressSource.asObservable();

  public sideIndStressSource = new BehaviorSubject<number>(0);
  currentSideIndStress = this.sideIndStressSource.asObservable();

  public fhIndStressSource = new BehaviorSubject<number>(0);
  currentFhIndStress = this.fhIndStressSource.asObservable();

  public crown_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentCrown_Afactor_original = this.crown_Afactor_originalSource.asObservable();
  
  public crown_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentCrown_Afactor_modified = this.crown_Afactor_modifiedSource.asObservable();

  public crown_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentCrown_Bfactor_original = this.crown_Bfactor_originalSource.asObservable();

  public crown_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentCrown_Bfactor_modified = this.crown_Bfactor_modifiedSource.asObservable();

  public crown_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentCrown_Cfactor_original = this.crown_Cfactor_originalSource.asObservable();

  public crown_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentCrown_Cfactor_modified = this.crown_Cfactor_modifiedSource.asObservable();

  public fw_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentFw_Cfactor_original = this.fw_Cfactor_originalSource.asObservable();
  
  public fw_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentFw_Cfactor_modified = this.fw_Cfactor_modifiedSource.asObservable();

  public fh_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentFh_Afactor_original = this.fh_Afactor_originalSource.asObservable();
  
  public fh_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentFh_Afactor_modified = this.fh_Afactor_modifiedSource.asObservable();

  public fh_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentFh_Bfactor_original = this.fh_Bfactor_originalSource.asObservable();
  
  public fh_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentFh_Bfactor_modified = this.fh_Bfactor_modifiedSource.asObservable();

  public hw_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentHw_Cfactor_original = this.hw_Cfactor_originalSource.asObservable();
  
  public hw_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentHw_Cfactor_modified = this.hw_Cfactor_modifiedSource.asObservable();

  public side_Afactor_originalSource = new BehaviorSubject<number>(0);
  currentSide_Afactor_original = this.side_Afactor_originalSource.asObservable();
  
  public side_Afactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide_Afactor_modified = this.side_Afactor_modifiedSource.asObservable();

  public side_Bfactor_originalSource = new BehaviorSubject<number>(0);
  currentSide_Bfactor_original = this.side_Bfactor_originalSource.asObservable();
  
  public side_Bfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide_Bfactor_modified = this.side_Bfactor_modifiedSource.asObservable();

  public side_Cfactor_originalSource = new BehaviorSubject<number>(0);
  currentSide_Cfactor_original = this.side_Cfactor_originalSource.asObservable();
  
  public side_Cfactor_modifiedSource = new BehaviorSubject<number>(0);
  currentSide_Cfactor_modified = this.side_Cfactor_modifiedSource.asObservable();

  public crownSNSource = new BehaviorSubject<number>(0);
  currentCrownSN = this.crownSNSource.asObservable();

  public crownSN_modSource = new BehaviorSubject<number>(0);
  currentCrownSN_mod = this.crownSN_modSource.asObservable();

  public sideSNSource = new BehaviorSubject<number>(0);
  currentSideSN = this.sideSNSource.asObservable();
  
  public sideSN_modSource = new BehaviorSubject<number>(0);
  currentSideSN_mod = this.sideSN_modSource.asObservable();

  public fwSNSource = new BehaviorSubject<number>(0);
  currentFwSN = this.fwSNSource.asObservable();
  
  public fwSN_modSource = new BehaviorSubject<number>(0);
  currentFwSN_mod = this.fwSN_modSource.asObservable();

  public hwSNSource = new BehaviorSubject<number>(0);
  currentHwSN = this.hwSNSource.asObservable();
  
  public hwSN_modSource = new BehaviorSubject<number>(0);
  currentHwSN_mod = this.hwSN_modSource.asObservable();

  public timeFactorSource = new BehaviorSubject<number>(0);
  currentTimeFactor = this.timeFactorSource.asObservable();

  public timeSource = new BehaviorSubject<string>('');
  currentTime = this.timeSource.asObservable();
  constructor() { }

  changeDepth(depth: number) {
    this.depthSource.next(depth);
  }
  changeQRes(qRes: number) {
    this.qResSource.next(qRes);
  }
  changeRqd(rqd: number) {
    this.rqdSource.next(rqd);
  }
  changeStopeHeight(stopeHeight: number) {
    this.stopeHeightSource.next(stopeHeight);
  }
  changeSideWidth(sideWidth: number) {
    this.sideWidthSource.next(sideWidth);
  }
  changeFhWidth(fhWidth: number) {
    this.fhWidthSource.next(fhWidth);
  }
  changeVolume(volume: number) {
    this.volumeSource.next(volume);
  }
  changeHrCrown(hrCrown: number) {
    this.hrCrownSource.next(hrCrown);
  }
  changeHrFoot(hrFoot: number) {
    this.hrFootSource.next(hrFoot);
  }
  changeHrHang(hrHang: number) {
    this.hrHangSource.next(hrHang);
  }
  changeHrSide(hrSide: number) {
    this.hrSideSource.next(hrSide);
  }
  changeCrownP(crownP: number) {
    this.crownPSource.next(crownP);
  }
  changeCrownA(crownA: number) {
    this.crownASource.next(crownA);
  }
  changeFootP(footP: number) {
    this.footPSource.next(footP);
  }
  changeFootA(footA: number) {
    this.footASource.next(footA);
  }
  changeHangA(hangA: number) {
    this.hangASource.next(hangA);
  }
  changeHangP(hangP: number) {
    this.hangPSource.next(hangP);
  }
  changeSideP(sideP: number) {
    this.sidePSource.next(sideP);
  }
  changeSideA(sideA: number) {
    this.sideASource.next(sideA);
  }
  changeVerticalstress(Verticalstress: number) {
    this.VerticalstressSource.next(Verticalstress);
  }
  changeHorizontalstress(Horizontalstress: number) {
    this.HorizontalstressSource.next(Horizontalstress);
  }
  changeCrownIndStress(crownIndStress: number) {
    this.crownIndStressSource.next(crownIndStress);
  }
  changeSideIndStress(sideIndStress: number) {
    this.sideIndStressSource.next(sideIndStress);
  }
  changeFhIndStress(fhIndStress: number) {
    this.fhIndStressSource.next(fhIndStress);
  }
  changeCrown_Afactor_original(crown_Afactor_original: number) {
    this.crown_Afactor_originalSource.next(crown_Afactor_original);
  }
  changeCrown_Bfactor_original(crown_Bfactor_original: number) {
    this.crown_Bfactor_originalSource.next(crown_Bfactor_original);
  }
  changeCrown_Cfactor_original(crown_Cfactor_original: number) {
    this.crown_Cfactor_originalSource.next(crown_Cfactor_original);
  }
  changeCrown_Afactor_modified(crown_Afactor_modified: number) {
    this.crown_Afactor_modifiedSource.next(crown_Afactor_modified);
  }
  changeCrown_Bfactor_modified(crown_Bfactor_modified: number) {
    this.crown_Bfactor_modifiedSource.next(crown_Bfactor_modified);
  }
  changeCrown_Cfactor_modified(crown_Cfactor_modified: number) {
    this.crown_Cfactor_modifiedSource.next(crown_Cfactor_modified);
  }
  changeSide_Afactor_original(side_Afactor_original: number) {
    this.side_Afactor_originalSource.next(side_Afactor_original);
  }
  changeSide_Bfactor_original(side_Bfactor_original: number) {
    this.side_Bfactor_originalSource.next(side_Bfactor_original);
  }
  changeSide_Cfactor_original(side_Cfactor_original: number) {
    this.side_Cfactor_originalSource.next(side_Cfactor_original);
  }
  changeSide_Afactor_modified(side_Afactor_modified: number) {
    this.side_Afactor_modifiedSource.next(side_Afactor_modified);
  }
  changeSide_Bfactor_modified(side_Bfactor_modified: number) {
    this.side_Bfactor_modifiedSource.next(side_Bfactor_modified);
  }
  changeSide_Cfactor_modified(side_Cfactor_modified: number) {
    this.side_Cfactor_modifiedSource.next(side_Cfactor_modified);
  }
  changeFw_Cfactor_original(fw_Cfactor_original: number) {
    this.fw_Cfactor_originalSource.next(fw_Cfactor_original);
  }
  changeFw_Cfactor_modified(fw_Cfactor_modified: number) {
    this.fw_Cfactor_modifiedSource.next(fw_Cfactor_modified);
  }
  changeFh_Afactor_original(fh_Afactor_original: number) {
    this.fh_Afactor_originalSource.next(fh_Afactor_original);
  }
  changeFh_Bfactor_original(fh_Bfactor_original: number) {
    this.fh_Bfactor_originalSource.next(fh_Bfactor_original);
  }
  changeHw_Cfactor_original(hw_Cfactor_original: number) {
    this.hw_Cfactor_originalSource.next(hw_Cfactor_original);
  }
  changeFh_Afactor_modified(fh_Afactor_modified: number) {
    this.fh_Afactor_modifiedSource.next(fh_Afactor_modified);
  }
  changeFh_Bfactor_modified(fh_Bfactor_modified: number) {
    this.fh_Bfactor_modifiedSource.next(fh_Bfactor_modified);
  }
  changeHw_Cfactor_modified(hw_Cfactor_modified: number) {
    this.hw_Cfactor_modifiedSource.next(hw_Cfactor_modified);
  }
  changeCrownSN(crownSN: number) {
    this.crownSNSource.next(crownSN);
  }
  changeCrownSN_mod(crownSN_mod: number) {
    this.crownSN_modSource.next(crownSN_mod);
  }
  changeSideSN(sideSN: number) {
    this.sideSNSource.next(sideSN);
  }
  changeSideSN_mod(sideSN_mod: number) {
    this.sideSN_modSource.next(sideSN_mod);
  }
  changeFwSN(fwSN: number) {
    this.fwSNSource.next(fwSN);
  }
  changeFwSN_mod(fwSN_mod: number) {
    this.fwSN_modSource.next(fwSN_mod);
  }
  changeHwSN(hwSN: number) {
    this.hwSNSource.next(hwSN);
  }
  changeHwSN_mod(hwSN_mod: number) {
    this.hwSN_modSource.next(hwSN_mod);
  }
  changeTimeFactor(timeFactor: number) {
    this.timeFactorSource.next(timeFactor);
  }
  changeTime(time:string) {
    this.timeSource.next(time);
  }
}
