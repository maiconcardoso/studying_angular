import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

/* import { routing } from './app.routing'; */
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivateGuard } from './guards/alunos.deactivate.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    /* routing */
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard,
    AlunosDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
