import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { NewEstudiosComponent } from './components/estudios/new-estudios.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'nuevoestudio', component:NewEstudiosComponent},
  {path:'editestu/:id', component:EditEstudiosComponent},
  {path:'nuevaskill', component: NewSkillsComponent},
  {path:'editskill/:id', component: EditSkillsComponent},
  {path:'nuevoproy', component: NewProjectsComponent},
  {path:'editproy/:id', component: EditProjectsComponent},
  {path:'editabout/:id', component: EditAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
