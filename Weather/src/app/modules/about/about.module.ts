import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageViewComponent } from './about-page-view/about-page-view.component';
import { AboutThisProjectComponent } from './pages/about-this-project/about-this-project.component';
import { AppliedKnowledgeComponent } from './pages/applied-knowledge/applied-knowledge.component';


@NgModule({
  declarations: [
    AboutThisProjectComponent,
    AppliedKnowledgeComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
