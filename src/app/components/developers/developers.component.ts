import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DeveloperService } from '../../services/developer.service';
import { Developer } from '../../models/developer.model';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  providers: [DeveloperService]
})
export class DevelopersComponent implements OnInit {

    title="Developers"
    developers: Developer[]
    private subscription: Subscription

  constructor(private developerService: DeveloperService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.developerService.getDevelopers()
      .then(developers => this.developers = developers)
      .catch(error => console.log(error));

      this.subscription = this.developerService.developersChanged
      .subscribe(
        (developers: Developer[]) => {
          this.developers = developers;
        }
      );
    }

onEditItem(id:number){
  console.log(id);
  this.router.navigate([id],{relativeTo: this.route})
  this.developerService.startedEditing.next(id);
}

ngOnDestroy(){
 this.subscription.unsubscribe();
}
}