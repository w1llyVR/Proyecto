import { Component } from '@angular/core';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  displayedColumns: string[] = ['id', 'name', 'photo', 'duration', 'genero','actions'];
  dataSource: Film[];

  constructor() {
    // Aquí creas tu arreglo de películas y lo asignas a dataSource
    this.dataSource = [
      {
        id: 1,
        name: 'The Shawshank Redemption',
        photo: 'https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg',
        duration: '2h 22min',
        genero: 'Drama'
      },
      {
        id: 2,
        name: 'The Godfather',
        photo: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        duration: '2h 55min',
        genero: 'Crime, Drama'
      },
      {
        id: 3,
        name: 'The Dark Knight',
        photo: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        duration: '2h 32min',
        genero: 'Action, Crime, Drama'
      },
      //...
    ];
  }



}
