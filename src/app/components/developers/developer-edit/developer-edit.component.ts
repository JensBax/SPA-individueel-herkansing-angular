import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Developer } from '../../../models/developer.model';
import { DeveloperService } from '../../../services/developer.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
  
  @Component({
    selector: 'app-developer-edit',
    templateUrl: './developer-edit.component.html'
 })
  export class DeveloperEditComponent implements OnInit, OnDestroy {
    @ViewChild("developerF") slForm: NgForm;
    subscription: Subscription;
    editMode: boolean = false;
    editedItemId: number;
    editedItem: Developer;
  
    constructor(private developerService: DeveloperService) { }
  
    ngOnInit() {
  
      this.subscription = this.developerService.startedEditing
        .subscribe(
          (id:number) => {
  
            this.editedItemId = id;
  
            this.editMode = true;
  
            this.developerService.getDeveloper(id)
              .then( developer => {
                this.editedItem = developer
                this.slForm.setValue({
                  name : this.editedItem.name,
                  imagePath: this.editedItem.imagePath 
                })
              })
              .catch( error => console.log(error) );
            });
          };
    
  
    onSubmit(form: NgForm) {
      const value = form.value;
      this.EditDeveloper(value);
      form.reset();
    }

    EditDeveloper(value: any){
      const newDeveloper = new Developer(value.name, value.imagePath);
      if (this.editMode) {
        this.developerService.updateDeveloper(this.editedItemId, newDeveloper);
      } else {
        this.developerService.addDeveloper(newDeveloper);
      }
      this.editMode = false;
    }
  
    onDelete() {
      this.developerService.deleteDeveloper(this.editedItemId);
      this.onClear();
    }
  
    onClear(){
      this.slForm.reset();
      this.editMode = false;
    }
  
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
    
  }