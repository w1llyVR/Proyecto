import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  private dataSource: Film[]=[]

  constructor(){
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

  add_film(film:Film){
    this.dataSource.push(film);
    console.log(this.dataSource)
    }

  get_films():Film[] {
       return this.dataSource;
  }

  update_film(film:Film){
      const index = this.dataSource.findIndex(e => e.id === film.id);
      this.dataSource[index]= {...film};

   }


  // elements: any[] =[
  //    { id: 1,nombre: "Titanic", photo: "fotito.png", duracion: 2.34, genero:"terror"},
  //    { id: 2,nombre: "Titanic1", photo: "fotito.png", duracion: 2.34, genero:"terror"},
  //    { id: 3,nombre: "Titanic2", photo: "fotito.png", duracion: 2.34, genero:"terror"}
  //    ];

  // delete_element(element:any){
  //     const index = this.elements.findIndex(e => e.id === element.id);
  //     if (index !== -1)
  //     {
  //        this.elements.splice(index,1);
  //     }
  //  }

}
