import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{path: 'about', component:AboutComponent},
                        {path: 'skills', component:SkillsComponent},
                      {path: 'portfolio', component:PortfolioComponent},
                    {path: 'contacts', component:ContactsComponent},
                    {path: 'header', component:HeaderComponent},];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],

 
})
export class AppRoutingModule { }
