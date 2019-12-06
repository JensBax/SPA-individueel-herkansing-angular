import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Developer } from '../models/developer.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DeveloperService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/developers'; // URL to web api
  private developers: Developer[] = [];

  developersChanged = new Subject<Developer[]>();
  startedEditing = new Subject<number>();
  
  constructor(private http: Http) {
   }

  public getDevelopers(): Promise<Developer[]> {
    console.log('Developers ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.developers = response.json() as Developer[];
        console.log(this.developers);
        return this.developers
      })
      .catch(error => { 
        console.log(error)
        return this.handleError(error) 
      });

  }

  public getDeveloper(index: number): Promise<Developer> {
    console.log('Developer ophalen met id');
    console.log(this.developers[index]._id)
    return this.http.get(this.serverUrl + '/' + this.developers[index]._id, { headers: this.headers })
      .toPromise()
      .then(response => {
          console.dir(response.json());
          return response.json() as Developer;
      })
      .catch( error => {
          return this.handleError(error);
      });
}

public updateDeveloper(index: number, newDeveloper : Developer){
    this.http.put(this.serverUrl + "/" + this.developers[index]._id, { name: newDeveloper.name, imagePath: newDeveloper.imagePath})
      .toPromise()
      .then( () => {
        this.getDevelopers()
        .then(
          developers => {
            this.developers = developers
            this.developersChanged.next(this.developers.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public deleteDeveloper(index: number){
    var deletedDeveloper = this.developers[index];
    this.http.delete(this.serverUrl + "/" + this.developers[index]._id)
      .toPromise()
      .then( () => {
        this.getDevelopers()
        .then(
          developers => {
            this.developers = developers
            this.developersChanged.next(this.developers.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public addDeveloper(developer: Developer) {
    this.http.post(this.serverUrl, { name: developer.name, imagePath: developer.imagePath})
      .toPromise() 
      .then( () => {
        this.getDevelopers()
        .then(
            developers => {
                this.developers = developers
                this.developersChanged.next(this.developers.slice());
              }
        )
        .catch(error => console.log(error));
      }
      )
      .catch( error => { return this.handleError(error) } );
    }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}