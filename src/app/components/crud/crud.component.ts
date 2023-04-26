import { Component,OnInit} from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { MatDialog } from '@angular/material/dialog';
import { CineService } from 'src/app/services/cine.service';
import { AddFilmDialogComponent } from '../add-film-dialog/add-film-dialog.component'; // Nuevo componente para agregar película
import { EditFilmDialogComponent } from '../edit-film-dialog/edit-film-dialog.component';
import Swal from 'sweetalert2';

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
    console.log('dialogRef ', dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.filmService.update_film(result)
        const updatedDataSource = this.filmService.get_films();
        this.dataSource = [...updatedDataSource];
      }
    });
  }

  deleteElement(film: Film):void{
    const film_tittle = this.filmService.get_film(film)?.name;
    this.filmService.delete_film(film);
    const updatedDataSource =  this.filmService.get_films();
    this.dataSource = [...updatedDataSource];
    Swal.fire({
      title: "Mensaje",
      icon: 'success',
      //text: "Se ha eliminado Correctamente",
      text: `${film_tittle} ha sido eliminado`,
      position: "center",
      timer: 3000,
      showConfirmButton: false
    })
    
  }

  





}
