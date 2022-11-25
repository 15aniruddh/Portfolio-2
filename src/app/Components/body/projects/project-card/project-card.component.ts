import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  project_title1 = 'Blood Bank Management System';
  project_about1 = 'Blood Bank Management System collect, store, and provide blood. Typically, these banks collect blood from voluntary blood donors. The banks then sort blood by type, location and then store it for future use. The main mission of a Blood Bank Management System is to provide life-saving blood to hospitals and other health care facilities.';
  tag1_1 = 'Java';
  tag1_2 = 'MySQL';
  tag1_3 = 'JDBC';

  project_title2 = 'LifeCare Portal';
  project_about2 = 'LifeCare Portal aims at to provide easy access to all the aspects of management and operations of Hospital. We have taken the inspiration of the project from the last years Corona Pandemic. So, in the near future a situation like Corona comes again into human life, at that time LifeCare Portal will help the people a lot in the procedure of finding facilities. The main purpose of LifeCare Portal is to make Hospital related task easy and saves the time of public while searching health care facilities. LifeCare Portal helps to maintains the details of Hospital related queries like Oxygen availability, Bed availability, etc. With the help of LifeCare Portal people can get the information of nearby Hospital location from wherever they are.';
  tag2_1 = 'React.js';
  tag2_2 = 'HTML5';
  tag2_3 = 'CSS';
  tag2_4 = 'Java';
  tag2_5 = 'MySQL';
  tag2_6 = 'JavaScript';
  tag2_7 = 'Spring Boot using JPA';
}
