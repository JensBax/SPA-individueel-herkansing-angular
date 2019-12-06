import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { GamesComponent } from './components/games/games.component';
import { GameStartComponent } from './components/games/game-start/game-start.component';
import { GameEditComponent } from './components/games/game-edit/game-edit.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';

import { DevelopersComponent } from './components/developers/developers.component';
import { DeveloperStartComponent } from './components/developers/developer-start/developer-start.component';
import { DeveloperDetailComponent } from './components/developers/developer-detail/developer-detail.component';

import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';

import { CharactersComponent } from './components/characters/characters.component';
import { CharacterStartComponent } from './components/characters/character-start/character-start.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharacterEditComponent } from './components/characters/character-edit/character-edit.component';

import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoriteStartComponent } from './components/favorites/favorites-start/favorites-start.component';
import { FavoriteDetailComponent } from './components/favorites/favorites-detail/favorites-detail.component';
import { FavoriteEditComponent } from './components/favorites/favorites-edit/favorites-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'}, 
  { path: 'games', component: GamesComponent, children: [
    { path: '',component: GameStartComponent },
    { path: 'new', component: GameEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: GameDetailComponent },
    { path: ':id/edit' , component: GameEditComponent, canActivate: [AuthGuard] }
  ]},
  { path: 'developers', component: DevelopersComponent, children: [
    { path: '', component: DeveloperStartComponent},
    {path: ':id', component: DeveloperDetailComponent, canActivate: [AuthGuard]}
  ]},
  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: CharacterStartComponent},
    { path: 'new', component: CharacterEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: CharacterDetailComponent },
    { path: ':id/edit' , component: CharacterEditComponent, canActivate: [AuthGuard] }
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard], children: [
    { path: '', component: FavoriteStartComponent},
    { path: 'edit', component: FavoriteEditComponent , },
    { path: ':id', component: FavoriteDetailComponent }
  ]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
