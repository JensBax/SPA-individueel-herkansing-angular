import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './components/shared/dropdown.directives';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from "./components/helpers/jwt.interceptor";
import { AuthGuard } from "./guards/auth.guard";
import { ToastrModule } from 'ngx-toastr';

import { GameService } from './services/game.service';
import { GamesComponent } from './components/games/games.component';
import { GameStartComponent } from './components/games/game-start/game-start.component';
import { GameEditComponent } from './components/games/game-edit/game-edit.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GameItemComponent } from './components/games/game-list/game-item/game-item.component';

import { DeveloperService } from './services/developer.service';
import { DeveloperStartComponent } from './components/developers/developer-start/developer-start.component';
import { DeveloperEditComponent } from './components/developers/developer-edit/developer-edit.component';
import { DeveloperDetailComponent } from './components/developers/developer-detail/developer-detail.component';
import { DevelopersComponent } from './components/developers/developers.component';

import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';

import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/register.service';

import { CharacterService } from './services/character.service';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { CharacterStartComponent } from './components/characters/character-start/character-start.component';
import { CharacterItemComponent } from './components/characters/character-list/character-item/character-item.component';
import { CharacterEditComponent } from './components/characters/character-edit/character-edit.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';  

import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoriteListComponent } from './components/favorites/favorites-list/favorites-list.component';
import { FavoriteItemComponent } from './components/favorites/favorites-list/favorites-item/favorites-item.component'
import { FavoriteStartComponent } from './components/favorites/favorites-start/favorites-start.component';
import { FavoriteEditComponent } from './components/favorites/favorites-edit/favorites-edit.component';
import { FavoriteDetailComponent } from './components/favorites/favorites-detail/favorites-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    GamesComponent,
    GameStartComponent,
    GameEditComponent,
    GameDetailComponent,
    GameListComponent,
    GameItemComponent,
    DevelopersComponent,
    DeveloperStartComponent,
    DeveloperEditComponent,
    DeveloperDetailComponent,
    LoginComponent,
    RegisterComponent,
    CharactersComponent,
    CharacterStartComponent,
    CharacterEditComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    CharacterItemComponent,
    FavoritesComponent,
    FavoriteListComponent,
    FavoriteItemComponent,
    FavoriteStartComponent,
    FavoriteEditComponent,
    FavoriteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuard,
    UserService,
    GameService,
    DeveloperService,
    CharacterService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
