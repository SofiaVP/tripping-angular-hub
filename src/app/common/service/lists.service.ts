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

  //  baseURL = 'https://tripping-ms-lists.herokuapp.com';
   baseURL = 'http://localhost:9998';

  constructor(private http: HttpClient) {
  }
  
  
  public fetchListsByUser(user: string): Observable<Liste[]>{
    let url = `${this.baseURL}`+`/tripping/lists/findListsByUser/`+`${user}`;
    console.log("dans listsService dans la méthode fetchListsByUser, url = " + url);
    return this.http.get<Liste[]>(url);
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
  
  public fetchListByCategoryAndUser(category : string, user: String): Observable<Liste>{
    let url = `${this.baseURL}`+`/tripping/lists/findListByCategoryAndUser/category/`+`${category}`+`/user/`+`${user}`;
    console.log("dans listsService dans la méthode fetchListByCategoryAndUser, url = " + url)
    return this.http.get<Liste>(url);
  }

  public fetchItemsByCategoryAndUser(category : string, user: String): Observable<Item[]>{
    let url = `${this.baseURL}`+`/tripping/lists/items/findItemsByListeCategory/category/`+`${category}`+`/user/`+`${user}`;
    console.log("dans listsService dans la méthode fetchItemsByCategoryAndUser, url = " + url);
    return this.http.get<Item[]>(url);
  }

  public createNewList(newListe : Liste){
    let url = `${this.baseURL}`+`/tripping/lists/createList`;
    console.log("dans listsService dans la méthose createnewliste, newListe = "+JSON.stringify(newListe)+ "url = " + url);
    return this.http.post<Liste>(url, newListe);
  }

  public createNewItem(newItem : Item){
    let url = `${this.baseURL}`+`/tripping/lists/item/createItem`
    console.log("in listsService method createnewItem, "+ url+ " newItem = "+ JSON.stringify(newItem) )
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
