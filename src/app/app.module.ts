import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/Body/about/about.component';
import { ProjectsComponent } from './Components/Body/projects/projects.component';
import { SkillsComponent } from './Components/Body/skills/skills.component';
import { ContactComponent } from './Components/Body/contact/contact.component';
import { SocialContactComponent } from './Components/Common/social-contact/social-contact.component';
import { ProjectCardComponent } from './Components/Body/Projects/project-card/project-card.component';
import { SeparatorComponent } from './Components/Common/separator/separator.component';
import { SkillsCardFrontEndComponent } from './Components/Body/Skills/skills-card-front-end/skills-card-front-end.component';
import { SkillsCardBackEndComponent } from './Components/Body/Skills/skills-card-back-end/skills-card-back-end.component';
import { SkillsCardOthersComponent } from './Components/Body/Skills/skills-card-others/skills-card-others.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    SocialContactComponent,
    ProjectCardComponent,
    SeparatorComponent,
    SkillsCardFrontEndComponent,
    SkillsCardBackEndComponent,
    SkillsCardOthersComponent, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
