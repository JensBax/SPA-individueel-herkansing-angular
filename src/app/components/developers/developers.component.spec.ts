// import {TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
// import { DevelopersComponent } from './developers.component';
// import { HttpModule } from '@angular/http';
// import { DeveloperStartComponent } from './developer-start/developer-start.component';
// import { DeveloperEditComponent } from './developer-edit/developer-edit.component';
// import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
// import { AppRoutingModule } from '../../app-routing.module';
// import { GamesComponent } from '../games/games.component';
// import { GameStartComponent } from '../games/game-start/game-start.component';
// import { GameEditComponent } from '../games/game-edit/game-edit.component';
// import { GameDetailComponent } from '../games/game-detail/game-detail.component';
// import { GameListComponent } from '../games/game-list/game-list.component';
// import { GameItemComponent } from '../games/game-list/game-item/game-item.component';
// import { CharactersComponent } from '../characters/characters.component';
// import { CharacterStartComponent } from '../characters/character-start/character-start.component';
// import { CharacterEditComponent } from '../characters/character-edit/character-edit.component';
// import { CharacterDetailComponent } from '../characters/character-detail/character-detail.component';
// import { CharacterListComponent } from '../characters/character-list/character-list.component';
// import { CharacterItemComponent } from '../characters/character-list/character-item/character-item.component';
// import { LoginComponent } from '../login/login.component';
// import { RegisterComponent } from '../register/register.component';
// import { FavoritesComponent } from '../favorites/favorites.component';
// import { FavoriteListComponent } from '../favorites/favorites-list/favorites-list.component';
// import { FavoriteItemComponent } from '../favorites/favorites-list/favorites-item/favorites-item.component';
// import { FavoriteStartComponent } from '../favorites/favorites-start/favorites-start.component';
// import { FavoriteEditComponent } from '../favorites/favorites-edit/favorites-edit.component';
// import { FavoriteDetailComponent } from '../favorites/favorites-detail/favorites-detail.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { APP_BASE_HREF } from '@angular/common';
// import { Developer } from '../../models/developer.model';
// import { DeveloperService } from '../../services/developer.service';
// import { HttpClientModule } from '@angular/common/http';
// import { of } from 'rxjs/observable/of';

// const testDeveloper = {
//     id: 1,
//     name: "EA Sports",
//     imagePath: "https://www.easports.com/nl/fifa/ultimate-team/web-app/images/logo/dark/ea_sports_logo.png",
//   }

// describe('Developer tests', () => {
//     let component: DevelopersComponent
//     let developers: Developer[]
//     let fixture: ComponentFixture<DevelopersComponent>;
//     let developerService: { getDevelopers: jasmine.Spy }

//     beforeEach(() => {

//         developerService = jasmine.createSpyObj('DeveloperService', ['getDevelopers'])

//         TestBed.configureTestingModule({
//             declarations:[
//                 DevelopersComponent,
//                 DeveloperStartComponent,
//                 DeveloperEditComponent,
//                 DeveloperDetailComponent,
//                 GamesComponent,
//                 GameStartComponent,
//                 GameEditComponent,
//                 GameDetailComponent,
//                 GameListComponent,
//                 GameItemComponent,
//                 CharactersComponent,
//                 CharacterStartComponent,
//                 CharacterEditComponent,
//                 CharacterDetailComponent,
//                 CharacterListComponent,
//                 CharacterItemComponent,
//                 LoginComponent,
//                 RegisterComponent,
//                 FavoritesComponent,
//                 FavoriteListComponent,
//                 FavoriteItemComponent,
//                 FavoriteStartComponent,
//                 FavoriteEditComponent,
//                 FavoriteDetailComponent,
//             ],
//             imports:[
//                 HttpModule,
//                 AppRoutingModule,
//                 FormsModule,
//                 ReactiveFormsModule,
//                 HttpModule,
//                 HttpClientModule,
//             ],
//             providers: [{provide: APP_BASE_HREF, useValue: '/'},
//                         DeveloperService]
//         });
//     });

//     beforeEach(() => {
//         fixture = TestBed.createComponent(DevelopersComponent);
//         component = fixture.debugElement.componentInstance;
//         // service = new DeveloperService();

//       });

//         afterEach(() => {
//     fixture.destroy()
//   })


//     it('should have the title developers', async(() => {
//         let fixture = TestBed.createComponent(DevelopersComponent)
//         let app = fixture.debugElement.componentInstance;
//         expect(app.title).toEqual('Developers');
//     }));

//     // it('should return a resolved Promise', async(inject([DeveloperService], (service: DeveloperService)=>{
//     //     // service.getDevelopers() 
//     //     service.getDeveloper(1).then((value) => {
//     //         expect(value.name).toEqual("EA Sports")
//     //     });
//     //   })));

//     // it('should be created', () => {
//     //     developerService.getDevelopers.and.returnValue(of([]))

//     //     fixture.whenStable().then(() => {
//     //         fixture.detectChanges()
//     //         expect(component).toBeTruthy()
//     //         expect(component.developers.length).toBe(0)
//     //       })
//     //   });

// }) 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevelopersComponent } from './developers.component';
import { DeveloperStartComponent } from './developer-start/developer-start.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { GamesComponent } from '../games/games.component';
import { GameStartComponent } from '../games/game-start/game-start.component';
import { GameEditComponent } from '../games/game-edit/game-edit.component';
import { GameDetailComponent } from '../games/game-detail/game-detail.component';
import { GameListComponent } from '../games/game-list/game-list.component';
import { GameItemComponent } from '../games/game-list/game-item/game-item.component';
import { CharactersComponent } from '../characters/characters.component';
import { CharacterStartComponent } from '../characters/character-start/character-start.component';
import { CharacterEditComponent } from '../characters/character-edit/character-edit.component';
import { CharacterDetailComponent } from '../characters/character-detail/character-detail.component';
import { CharacterListComponent } from '../characters/character-list/character-list.component';
import { CharacterItemComponent } from '../characters/character-list/character-item/character-item.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { FavoriteListComponent } from '../favorites/favorites-list/favorites-list.component';
import { FavoriteItemComponent } from '../favorites/favorites-list/favorites-item/favorites-item.component';
import { FavoriteStartComponent } from '../favorites/favorites-start/favorites-start.component';
import { FavoriteEditComponent } from '../favorites/favorites-edit/favorites-edit.component';
import { FavoriteDetailComponent } from '../favorites/favorites-detail/favorites-detail.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('DevelopersComponent', () => {
  let component: DevelopersComponent;
  let fixture: ComponentFixture<DevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations:[
                DevelopersComponent,
                DeveloperStartComponent,
                DeveloperEditComponent,
                DeveloperDetailComponent,
                GamesComponent,
                GameStartComponent,
                GameEditComponent,
                GameDetailComponent,
                GameListComponent,
                GameItemComponent,
                CharactersComponent,
                CharacterStartComponent,
                CharacterEditComponent,
                CharacterDetailComponent,
                CharacterListComponent,
                CharacterItemComponent,
                LoginComponent,
                RegisterComponent,
                FavoritesComponent,
                FavoriteListComponent,
                FavoriteItemComponent,
                FavoriteStartComponent,
                FavoriteEditComponent,
                FavoriteDetailComponent,
            ],
            imports:[
                HttpModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                HttpClientModule,
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title Developers', () => {
    expect(component.title).toBe('Developers')
})
});