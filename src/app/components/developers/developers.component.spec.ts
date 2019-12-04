import {TestBed, async } from '@angular/core/testing';
import { DevelopersComponent } from './developers.component';
import { HttpModule } from '@angular/http';
import { DeveloperStartComponent } from './developer-start/developer-start.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { AppRoutingModule } from '../../app-routing.module';
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


describe('Developer tests', () => {
    beforeEach(() => {
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

            ]
        });
    });

    it('should have the title developers', async(() => {
        let fixture = TestBed.createComponent(DevelopersComponent)
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Developers');
    }))
}) 