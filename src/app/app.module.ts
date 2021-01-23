import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';
import { ForAllService } from './for-all.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HrComponent } from './hr/hr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolNavComponent } from './tool-nav/tool-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StressComponent } from './stress/stress.component';
import { FactorsComponent } from './factors/factors.component';
import { SymmetricComponent } from './symmetric/symmetric.component';
import { AsymmetricComponent } from './asymmetric/asymmetric.component';
import { QvalueComponent, QvalueComponentRqd, QvalueComponentRoughness, QvalueComponentSets, QvalueComponentAlteration } from './qvalue/qvalue.component';
import { AdditionalComponent } from './additional/additional.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { StabilityComponent } from './stability/stability.component';
import { SymResComponent } from './sym-res/sym-res.component';
import { QResComponent } from './q-res/q-res.component';
import { StressResComponent } from './stress-res/stress-res.component';
import { FactorsResComponent } from './factors-res/factors-res.component';
import { MinHeightDirective } from './directives/min-height.directive';
import { MaxHeightDirective } from './directives/max-height.directive';
import { MaxSideWidthDirective } from './directives/max-side-width.directive';
import { MinSideWidthDirective } from './directives/min-side-width.directive';
import { MaxFhWidthDirective } from './directives/max-fh-width.directive';
import { MinFhWidthDirective } from './directives/min-fh-width.directive';
import { MinRqdDirective } from './directives/min-rqd.directive';
import { MaxRqdDirective } from './directives/max-rqd.directive';
import { MinJnDirective } from './directives/min-jn.directive';
import { MaxJnDirective } from './directives/max-jn.directive';
import { MinJrDirective } from './directives/min-jr.directive';
import { MaxJrDirective } from './directives/max-jr.directive';
import { MinJaDirective } from './directives/min-ja.directive';
import { MaxJaDirective } from './directives/max-ja.directive';
import { MinDepthDirective } from './directives/min-depth.directive';
import { MaxDepthDirective } from './directives/max-depth.directive';
import { MinModulusDirective } from './directives/min-modulus.directive';
import { MaxModulusDirective } from './directives/max-modulus.directive';
import { MinVertStressDirective } from './directives/min-vert-stress.directive';
import { MinHorStressDirective } from './directives/min-hor-stress.directive';
import { MinUcsDirective } from './directives/min-ucs.directive';
import { MaxUcsDirective } from './directives/max-ucs.directive';
import { MinStopeDipDirective } from './directives/min-stope-dip.directive';
import { MaxStopeDipDirective } from './directives/max-stope-dip.directive';
import { MinDipDiffDirective } from './directives/min-dip-diff.directive';
import { MaxDipDiffDirective } from './directives/max-dip-diff.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HrComponent,
    ToolNavComponent,
    StressComponent,
    FactorsComponent,
    SymmetricComponent,
    AsymmetricComponent,
    QvalueComponent,
    QvalueComponentRqd,
    QvalueComponentSets,
    QvalueComponentRoughness,
    QvalueComponentAlteration,
    AdditionalComponent,
    OutcomeComponent,
    StabilityComponent,
    SymResComponent,
    QResComponent,
    StressResComponent,
    FactorsResComponent,
    MinHeightDirective,
    MaxHeightDirective,
    MaxSideWidthDirective,
    MinSideWidthDirective,
    MaxFhWidthDirective,
    MinFhWidthDirective,
    MinRqdDirective,
    MaxRqdDirective,
    MinJnDirective,
    MaxJnDirective,
    MinJrDirective,
    MaxJrDirective,
    MinJaDirective,
    MaxJaDirective,
    MinDepthDirective,
    MaxDepthDirective,
    MinModulusDirective,
    MaxModulusDirective,
    MinVertStressDirective,
    MinHorStressDirective,
    MinUcsDirective,
    MaxUcsDirective,
    MinStopeDipDirective,
    MaxStopeDipDirective,
    MinDipDiffDirective,
    MaxDipDiffDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    MatExpansionModule,
    ChartsModule,
    MatFormFieldModule,
    MatTabsModule
 ],
  exports: [
    ToolNavComponent],
  entryComponents: [QvalueComponent, QvalueComponentRqd, QvalueComponentRoughness, QvalueComponentSets, QvalueComponentAlteration],
  providers: [ForAllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
