import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevelopersComponent } from '../developers//developers.component';
import { DeveloperStartComponent } from '../developers/developer-start/developer-start.component';
import { DeveloperEditComponent } from '../developers/developer-edit/developer-edit.component';
import { DeveloperDetailComponent } from '../developers/developer-detail/developer-detail.component';
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

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

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
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title Characters', () => {
    expect(component.title).toBe('Characters')  
})
});