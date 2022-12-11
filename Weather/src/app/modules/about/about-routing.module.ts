import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutThisProjectComponent } from './pages/about-this-project/about-this-project.component';
import { AppliedKnowledgeComponent } from './pages/applied-knowledge/applied-knowledge.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "this-project",
    pathMatch: "full"
  },
  {
    path: "this-rpoject",
    component: AboutThisProjectComponent
  },
  {
    path: "applied-knowledge",
    component: AppliedKnowledgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
