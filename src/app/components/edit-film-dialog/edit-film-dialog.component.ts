import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-edit-film-dialog',
  templateUrl: './edit-film-dialog.component.html',
  styleUrls: ['./edit-film-dialog.component.css']
})
export class EditFilmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditFilmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public film: Film,
  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Aquí puedes hacer lo que necesites con la información del formulario
    // En este ejemplo, simplemente cerramos el dialog
    this.dialogRef.close();
  }


}
