import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListsService } from '../common/service/lists.service';
import { Item } from '../common/data/item';

import { Liste } from '../common/data/liste';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  
  displayedColumns: string[] = ['item', 'quantity'];
  
  listeItems : Item[];
  newItem: Item;
  newItemLabel: string; 
  newItemQuantity : number; 
  idListOfNewItem : number;
  newItemInBag : boolean;

  liste : Liste;
  listeItemsByCategory : Item[];
  listCategories : Liste[];
  inBag : boolean;
  category : string;
  tabCat : string;
  tab : string;
  tabs = [];
  selected = new FormControl(0);
  tabName: string;
  
  
  constructor( public listsService : ListsService) {
    
    //+++++++++++++++ fetching items from spring ++++++++++++++++++++++++++++
    listsService.fetchItems().subscribe(
      (items)=>{this.listeItems = items ;
        for (const i of this.listeItems){
          this.inBag = i.inBag;
        }
        ; 
        console.log("---------> in ListComponent in constructor, this.listeItems = " + this.listeItems)},
      (error) =>{console.log(error)}
    )

    

    //+++++++++++++++ fetching lists from spring ++++++++++++++++++++++++++++
    listsService.fetchLists().subscribe(
      (lists) => {this.listCategories = lists ;  
        for (const l of this.listCategories){
          const category = l.category;
          //console.log("---------> in contructor ListComponent, this.listCategories = "+category);
          this.tabs.push(category);
        };
        console.log("---------> in ListComponent in constructor, this.listCategories = " + this.listCategories)
        this.fetchingItemsByCategory(this.listCategories[0].category);
      },
      (error) => {console.log(error)}
    )
    
    
   }

  //+++++++++++++++++++++++++ chckbox in bag +++++++++++++++++++++++++++++++++

   show: boolean = true;

  // pour chaque element si inBag = true 
  // this.show = true 


  //+++++++++++++++++++++++++ tabs +++++++++++++++++++++++++++++++++
  addTab(tabName: string) {
    const newListe = new Liste( Math.random(),tabName);
    this.tabs.push(tabName.valueOf());
    this.listsService.createNewList(newListe).subscribe(
      (liste) => {console.log("Je ne sais pas pourquoi il faut un subscribe"); 
                  this.selected.setValue(this.tabs.length - 1);
                  this.fetchingItemsByCategory(tabName);
                },
      (error) => {console.log(error)}
    )
  }

  removeTab(index: number, category: string) {
    
    this.listsService.removeList(category).subscribe(
      (liste) => {console.log("dans remove tab"); 
                  this.tabs.splice(index, 1);
                  this.fetchingItemsByCategory(this.tabs[this.tabs.length - 1]);
                },
      (error) => {console.log(error)}
    )

  }

//+++++++++++++++ items ++++++++++++++++++++++++++++

fetchingItemsByCategory(c : string){
  //console.log("---------> in fetchingItemsByCategory in ListComponent, c="+c)
  this.tabCat = c;
this.listsService.fetchItemsByCategory(this.tabCat).subscribe(
  (items)=>{this.listeItemsByCategory = items ;
    for (const i of this.listeItemsByCategory){
      this.inBag = i.inBag;
    }
    ; 
    console.log("---------> in ListComponent in fetchingItemsByCategory , this.listeItemsByCategory = " + JSON.stringify (this.listeItemsByCategory) +"this.tabCat="+this.tabCat)},
  (error) =>{console.log(error)}
)
}

addItem(category : string, selectInBag : boolean){
  if(selectInBag){
    this.newItemInBag = true;
  }else{
    this.newItemInBag = false;
  }
  this.listsService.fetchListIdByCategory(category).subscribe(
    (number) => {this.idListOfNewItem = number; 
      const itemToAdd = new Item( 
        Math.random(), 
        this.newItemLabel,
        this.newItemQuantity, 
        {"id": this.idListOfNewItem,"category":category}, 
        this.newItemInBag
        ); 
        this.listsService.createNewItem(itemToAdd).subscribe(
          (i) => {console.log("Je ne sais pas pourquoi il faut un subscribe ++++++++++++, this.newItem = " + JSON.stringify(itemToAdd)); 
          this.fetchingItemsByCategory(this.tabs[this.selected.value]);        
        },
          (error) => {console.log(error)}
        )
    },
    (error)=> {console.log(error)}
  )
  console.log("---------> in ListComponent in fetchListeIdByCategory, this.idListOfNewItem = " + this.idListOfNewItem);
}

onDeleteItem(itemLabel : string){
  console.log("in lists.component.ts itemLabel = "+itemLabel); 
  this.listsService.removeItem(itemLabel).subscribe(
    (i) => {console.log("Je ne sais pas pourquoi il faut un subscribe" ); 
    this.fetchingItemsByCategory(this.tabs[this.selected.value])},
    (error) => {console.log(error)}
  )
}


  ngOnInit(): void {
    //this.tab
    //this.idListOfNewItem =4
    //console.log("---------> in ListComponent in ngOnit, this.tabcat = "+JSON.stringify (this.tabCat) + "this.tabs[0]= "+ JSON.stringify (this.tabs[0]));
    //this.fetchingItemsByCategory(this.tabs[0]);

    // this.listsService.fetchListByCategory(this.tabCat).subscribe(
    //   (liste) => {this.liste  = liste },
    //   (error) => {console.log(error)}
    //   )
    
  }

}
