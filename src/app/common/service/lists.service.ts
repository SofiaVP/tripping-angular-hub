import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../data/item';
import { Liste } from '../data/liste';
import { JsonPipe } from '@angular/common';
import { stringify } from 'querystring';
//require('dotenv').config();

@Injectable({
  providedIn: 'root'
})
export class ListsService {

   baseURL = 'https://tripping-ms-lists.herokuapp.com';
  //  baseURL = 'http://localhost:9998';

  constructor(private http: HttpClient) {
    //const BASE_URL = process.env.BASE_URL;
   }
  

  public fetchItems(): Observable<Item[]>{
    let url = `${this.baseURL}`+`/tripping/lists/item/findAllItems`;
    return this.http.get<Item[]>(url);
  }

  public fetchLists(): Observable<Liste[]>{
    let url = `${this.baseURL}`+`/tripping/lists/findAllLists`
    return this.http.get<Liste[]>(url);
  }

  public fetchItemsByCategory(category : string): Observable<Item[]>{
    let url = `${this.baseURL}`+`/tripping/lists/items/findItemsByListeCategory/`+`${category}`;
    return this.http.get<Item[]>(url);
  }

  public fetchListByCategory(category : string): Observable<Liste>{
    let url = `${this.baseURL}`+`/tripping/lists/findListByCategory/`+`${category}`;
    return this.http.get<Liste>(url);
  }

  public fetchListIdByCategory(category : string): Observable<number>{
    let url = `${this.baseURL}`+`/tripping/lists/findListIdByCategory/`+`${category}`;
    console.log(url)
    return this.http.get<number>(url);
  }

  public createNewList(newListe : Liste){
    let url = `${this.baseURL}`+`/tripping/lists/createList`;
    console.log("dans listsService dans la méthose createnewliste, newListe = "+JSON.stringify(newListe)+ "url = " + url);
    return this.http.post<Liste>(url, newListe);
  }

  public createNewItem(newItem : Item){
    console.log("in listsService method createnewItem, newItem = "+ JSON.stringify(newItem) )
    let url = `${this.baseURL}`+`/tripping/lists/item/createItem`
    return this.http.post<Item>(url, newItem);
  }

  public removeItem(itemLabel : string){
    let url = `${this.baseURL}`+`/tripping/lists/items/removeItemByItemLabel/`+`${itemLabel}`;
    console.log("in listsService, url : "+ url);
    return this.http.delete<Item>(url);
  }

  public removeList(category : string){
    let url = `${this.baseURL}`+`/tripping/lists/removeListByCategory/`+`${category}`;
   // tripping/lists/items/removeItemByItemLabel
    console.log("in listsService, url : " + url); 
    return this.http.delete<Liste>(url);
  }
}
