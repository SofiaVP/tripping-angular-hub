import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListsService } from '../common/service/lists.service';
import { Item } from '../common/data/item';

import { Liste } from '../common/data/liste';
import { User } from '../common/data/user';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  
  conectedUser: User;

  displayedColumns: string[] = ['item', 'quantity'];
  
  listeItems : Item[];
  newItem: Item;
  newItemLabel: string; 
  newItemQuantity : number; 
  newItemListe : Liste;
  newItemInBag : boolean;
  
  idListOfNewItem : number;

  listeAvecBonId: Liste;
  beachList : Liste;
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

  hidden = true;
  hiddenBeach = true;
  
  constructor( public listsService : ListsService) {
    
    console.log("conected user : "+ sessionStorage.getItem("user"));
    if(this.tabs)
    
    //+++++++++++++++ TO COMPLETE TABS --> fetching lists by user ++++++++++++++++++++++++++++
    listsService.fetchListsByUser(sessionStorage.getItem("user")).subscribe(
      (lists) => {this.listCategories = lists ;  
        for (const l of this.listCategories){
          const category = l.category;
          this.tabs.push(category);
        };
        console.log("---------> in ListComponent in constructor, this.listCategories = " + this.listCategories)
        this.fetchingItemsByCategoryAndUser(this.listCategories[0].category); //pour afficher le premier onglet toujours
      },
      (error) => {console.log(error)}
    )

    //+++++++++++++++ fetching items from spring ++++++++++++++++++++++++++++
    // listsService.fetchItems().subscribe(
    //   (items)=>{this.listeItems = items ;
    //     for (const i of this.listeItems){
    //       this.inBag = i.inBag;
    //     }; 
    //     console.log("---------> in ListComponent in constructor, this.listeItems = " + this.listeItems)},
    //   (error) =>{console.log(error)}
    // )

   }

  //+++++++++++++++++++++++++ tabs +++++++++++++++++++++++++++++++++
  addTab(tabName: string) {
    const newListe = new Liste( Math.random(),tabName, sessionStorage.getItem("user") );
    this.tabs.push(tabName.valueOf());
    this.listsService.createNewList(newListe).subscribe(
      (liste) => {console.log("Je ne sais pas pourquoi il faut un subscribe"); 
                  this.selected.setValue(this.tabs.length - 1);
                  this.fetchingItemsByCategoryAndUser(tabName);
                },
      (error) => {console.log(error)}
    )
  }

  removeTab(index: number, category: string) {
    this.listsService.removeList(category).subscribe(
      (liste) => {console.log("dans remove tab"); 
                  this.tabs.splice(index, 1);
                  this.fetchingItemsByCategoryAndUser(this.tabs[this.tabs.length - 1]);
                },
      (error) => {console.log(error)}
    )

  }

//+++++++++++++++ items ++++++++++++++++++++++++++++

fetchingItemsByCategoryAndUser(c : string){
  //console.log("---------> in fetchingItemsByCategoryAndUser in ListComponent, c="+c)
  this.tabCat = c; //je lui dis sur quelle tab je me trouve
  this.listsService.fetchItemsByCategoryAndUser(this.tabCat, sessionStorage.getItem("user")).subscribe(
  (items)=>{this.listeItemsByCategory = items ;
    for (const i of this.listeItemsByCategory){
      this.inBag = i.inBag;
    }; 
    console.log("---------> in ListComponent in fetchingItemsByCategoryAndUser , this.listeItemsByCategory = " + JSON.stringify (this.listeItemsByCategory) +"this.tabCat="+this.tabCat)},
  (error) =>{console.log(error)}
)
}

addItem(category : string, selectInBag : boolean){
  if(selectInBag){
    this.newItemInBag = true;
  }else{
    this.newItemInBag = false;
  }
  this.listsService.fetchListByCategoryAndUser(category, sessionStorage.getItem("user")).subscribe(
    (liste) => {
      this.newItemListe = liste; 
      const itemToAdd = new Item(Math.random(), this.newItemLabel, this.newItemQuantity, this.newItemListe, this.newItemInBag); 
      this.listsService.createNewItem(itemToAdd).subscribe(
        (i) => {
          console.log("dans lists.component.ts dans addItem, this.newItem = " + JSON.stringify(itemToAdd)); 
          this.fetchingItemsByCategoryAndUser(this.tabs[this.selected.value]);        
          },
        (error) => {console.log(error)}
      )
    },
    (error)=> {console.log(error)}
  )
}

comingSoon(){

}

addBeachItems(){
  this.listsService.fetchListByCategoryAndUser("beach", sessionStorage.getItem("user")).subscribe(
    (res)=>{
      this.listeAvecBonId = res;
      const sunscrean = new Item(Math.random(), "Sunscreen", 1, this.listeAvecBonId, false);
      const swimmingSuit = new Item(Math.random(), "Swimming suit", 1, this.listeAvecBonId, false); 
      const towel = new Item(Math.random(), "Towel", 1, this.listeAvecBonId, false); 
      const ball = new Item(Math.random(), "Ball", 1, this.listeAvecBonId, false); 
      const speakers = new Item(Math.random(), "Speakers", 1, this.listeAvecBonId, false); 
      console.log("4 -> this.listeAvecBonId : "+ JSON.stringify(this.listeAvecBonId));
      this.listsService.createNewItem(sunscrean).subscribe((i)=>{console.log("dans lists.component.ts dans addBeach, this.newItem = " + JSON.stringify(sunscrean));})
      this.listsService.createNewItem(swimmingSuit).subscribe((i)=>{console.log("dans lists.component.ts dans addBeach, this.newItem = " + JSON.stringify(swimmingSuit));})
      this.listsService.createNewItem(towel).subscribe((i)=>{console.log("dans lists.component.ts dans addBeach, this.newItem = " + JSON.stringify(towel));})
      this.listsService.createNewItem(ball).subscribe((i)=>{console.log("dans lists.component.ts dans addBeach, this.newItem = " + JSON.stringify(ball));})
      this.listsService.createNewItem(speakers).subscribe((i)=>{console.log("dans lists.component.ts dans addBeach, this.newItem = " + JSON.stringify(speakers));})
    }
  )  
}

addBeach(){
  this.hiddenBeach = false;

    console.log("2 -> this.beachList : "+ JSON.stringify(this.beachList));
    this.beachList = new Liste( Math.random(),"beach", sessionStorage.getItem("user") );
    console.log("3 -> this.beachList : "+ JSON.stringify(this.beachList));
    this.tabs.push("beach");
    this.listsService.createNewList(this.beachList).subscribe(
      (liste) => {
       //this.beachList=liste;
       this.addBeachItems();
       console.log("5 -> this.beachList : "+ JSON.stringify(this.beachList));
       console.log("6 -> this.listeAvecBonId : "+ JSON.stringify(this.listeAvecBonId));
        
        this.selected.setValue(this.tabs.length - 1);
        this.fetchingItemsByCategoryAndUser(this.tabs[this.tabs.length - 1]);
      },
      (error) => {console.log(error)}
    )
}
 
onDeleteItem(itemLabel : string){
  console.log("in lists.component.ts itemLabel = "+itemLabel); 
  this.listsService.removeItem(itemLabel).subscribe(
    (i) => {console.log("Je ne sais pas pourquoi il faut un subscribe" ); 
    this.fetchingItemsByCategoryAndUser(this.tabs[this.selected.value])},
    (error) => {console.log(error)}
  )
}

  ngOnInit(): void {

  }

}
