import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-add-film-dialog',
  templateUrl: './add-film-dialog.component.html',
  styleUrls: ['./add-film-dialog.component.css']
})
export class AddFilmDialogComponent {

  film: Film = { id: 0, name: '', photo: '', duration: '', genero: '' };

  constructor(
    public dialogRef: MatDialogRef<AddFilmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film
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
