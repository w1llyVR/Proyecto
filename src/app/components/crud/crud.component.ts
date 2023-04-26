import { Component,OnInit} from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { MatDialog } from '@angular/material/dialog';
import { CineService } from 'src/app/services/cine.service';
import { AddFilmDialogComponent } from '../add-film-dialog/add-film-dialog.component'; // Nuevo componente para agregar película
import { EditFilmDialogComponent } from '../edit-film-dialog/edit-film-dialog.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'photo', 'duration', 'genero','actions'];
  dataSource: Film[]=[];

  constructor(
    private dialog:MatDialog,
    private filmService:CineService
    ) {}

    ngOnInit(): void {
      this.dataSource=this.filmService.get_films()
    }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFilmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      result.id= this.dataSource.length + 1;
      this.filmService.add_film(result);
      const updatedDataSource = this.filmService.get_films();
      this.dataSource = [...updatedDataSource];
    });
  }

  openDialogEdit(film: Film):void{
    const dialogRef = this.dialog.open(EditFilmDialogComponent, {
      data: film
    });
    dialogRef.afterClosed().subscribe(result => {
      this.filmService.update_film(result)
      const updatedDataSource = this.filmService.get_films();
      Object.assign(this.dataSource, updatedDataSource)
      console.log(result)
    });
  }





}
