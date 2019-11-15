import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../../services/developer.service';
import { Developer } from '../../models/developer.model';
 
@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  providers: [DeveloperService]
})
export class DevelopersComponent implements OnInit {

    title="Developers"
    developers: Developer[]

  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.developerService.getDevelopers()
      .then(developers => this.developers = developers)
      .catch(error => console.log(error));
  }

}