import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  elements: any[] =[
     { id: 1,nombre: "Titanic", photo: "fotito.png", duracion: 2.34, genero:"terror"},
     { id: 2,nombre: "Titanic1", photo: "fotito.png", duracion: 2.34, genero:"terror"}, 
     { id: 3,nombre: "Titanic2", photo: "fotito.png", duracion: 2.34, genero:"terror"} 
     ];

   constructor(){} 
   
   add_element(element:any){
   this.elements.push(element);
   }

   get_elements() {
      return this.elements;
   } 

   update_element(element:any){
      const index = this.elements.findIndex(e => e.id === element.id);
      if (index !== -1)
      {
         this.elements[index] = element;
      } 
   } 

  delete_element(element:any){
      const index = this.elements.findIndex(e => e.id === element.id);
      if (index !== -1)
      {
         this.elements.splice(index,1);
      } 
   } 

}
