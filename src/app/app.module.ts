import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CrudComponent } from './components/crud/crud.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatButtonModule} from '@angular/material/button'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatTableModule} from '@angular/material/table'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddFilmDialogComponent } from './components/add-film-dialog/add-film-dialog.component'
import { FormsModule } from '@angular/forms';
import { EditFilmDialogComponent } from './components/edit-film-dialog/edit-film-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    CrudComponent,
    FooterComponent,
    AddFilmDialogComponent,
    EditFilmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
