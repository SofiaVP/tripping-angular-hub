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
  clickedClothes = false;

  displayedColumns: string[] = ['item', 'quantity'];
  
  listeItems : Item[];
  newItem: Item;
  newItemLabel: string; 
  newItemQuantity : number; 
  newItemListe : Liste;
  newItemInBag : boolean;
  
  idListOfNewItem : number;

  listeAvecBonId: Liste;
  listeClothesAvecBonId: Liste;
  listeToiletriesAvecBonId: Liste;
  listeEntertainmentAvecBonId: Liste;
  listeImportantAvecBonId: Liste;
  beachList : Liste;
  clothesList : Liste;
  toiletriesList : Liste;
  entertainmentList : Liste;
  importantList : Liste;
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

   demoOne(){
     this.newItemLabel = "Contact lenses"
     this.newItemQuantity = 9
   }

   demoTwo(){
     this.newItemLabel = "Harry potter socks"
     this.newItemQuantity = 1
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
  this.listsService.fetchListByCategoryAndUser("Beach", sessionStorage.getItem("user")).subscribe(
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
    this.beachList = new Liste( Math.random(),"Beach", sessionStorage.getItem("user") );
    console.log("3 -> this.beachList : "+ JSON.stringify(this.beachList));
    this.tabs.push("Beach");
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

addClothesItems(){
  this.listsService.fetchListByCategoryAndUser("Clothes", sessionStorage.getItem("user")).subscribe(
    (res)=>{
      this.listeClothesAvecBonId = res;
      const socks = new Item(Math.random(), "Socks", 9, this.listeClothesAvecBonId, false);
      const underwear = new Item(Math.random(), "Underwear", 9, this.listeClothesAvecBonId, false); 
      const pants = new Item(Math.random(), "Pants", 2, this.listeClothesAvecBonId, false); 
      const tshirts = new Item(Math.random(), "T-shirts", 8, this.listeClothesAvecBonId, false); 
      const sweatshirt = new Item(Math.random(), "Sweatshirt", 1, this.listeClothesAvecBonId, false); 
      const lightsweater = new Item(Math.random(), "Light sweater", 2, this.listeClothesAvecBonId, false); 
      const pjs = new Item(Math.random(), "PJ's", 1, this.listeClothesAvecBonId, false); 
      const fancyClothes = new Item(Math.random(), "Fancy Clothes", 2, this.listeClothesAvecBonId, false); 
      const shoes = new Item(Math.random(), "Shes", 2, this.listeClothesAvecBonId, false); 
      console.log("4 -> this.listeClothesAvecBonId : "+ JSON.stringify(this.listeClothesAvecBonId));
      this.listsService.createNewItem(socks).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(socks));})
      this.listsService.createNewItem(underwear).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(underwear));})
      this.listsService.createNewItem(pants).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(pants));})
      this.listsService.createNewItem(tshirts).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(tshirts));})
      this.listsService.createNewItem(sweatshirt).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(sweatshirt));})
      this.listsService.createNewItem(lightsweater).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(lightsweater));})
      this.listsService.createNewItem(pjs).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(pjs));})
      this.listsService.createNewItem(fancyClothes).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(fancyClothes));})
      this.listsService.createNewItem(shoes).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(shoes));})
    }
  )  
}

addClothes(){
  //this.hiddenBeach = false;

    console.log("2 -> this.clothesList : "+ JSON.stringify(this.clothesList));
    this.clothesList = new Liste( Math.random(),"Clothes", sessionStorage.getItem("user") );
    console.log("3 -> this.clothesList : "+ JSON.stringify(this.clothesList));
    this.tabs.push("Clothes");
    this.listsService.createNewList(this.clothesList).subscribe(
      (liste) => {
       //this.clothesList=liste;
       this.addClothesItems();
       console.log("5 -> this.clothesList : "+ JSON.stringify(this.clothesList));
       console.log("6 -> this.listeAvecBonId : "+ JSON.stringify(this.listeClothesAvecBonId));
        
        this.selected.setValue(this.tabs.length - 1);
        this.fetchingItemsByCategoryAndUser(this.tabs[this.tabs.length - 1]);
      },
      (error) => {console.log(error)}
    )
}

addToiletriesItems(){
  this.listsService.fetchListByCategoryAndUser("Toiletries", sessionStorage.getItem("user")).subscribe(
    (res)=>{
      this.listeToiletriesAvecBonId = res;
      const toothbrush = new Item(Math.random(), "Toothbrush", 1, this.listeToiletriesAvecBonId, false);
      const toothpaste = new Item(Math.random(), "Toothpaste", 1, this.listeToiletriesAvecBonId, false); 
      const deodorant = new Item(Math.random(), "Deodorant", 1, this.listeToiletriesAvecBonId, false); 
      const perfume = new Item(Math.random(), "Perfume", 1, this.listeToiletriesAvecBonId, false); 
      const cream = new Item(Math.random(), "Cream", 1, this.listeToiletriesAvecBonId, false); 
      const shampoo = new Item(Math.random(), "Shampoo", 1, this.listeToiletriesAvecBonId, false); 
      const soap = new Item(Math.random(), "Soap", 1, this.listeToiletriesAvecBonId, false); 
      console.log("4 -> this.listeClothesAvecBonId : "+ JSON.stringify(this.listeToiletriesAvecBonId));
      this.listsService.createNewItem(toothbrush).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(toothbrush));})
      this.listsService.createNewItem(toothpaste).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(toothpaste));})
      this.listsService.createNewItem(deodorant).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(deodorant));})
      this.listsService.createNewItem(perfume).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(perfume));})
      this.listsService.createNewItem(cream).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(cream));})
      this.listsService.createNewItem(shampoo).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(shampoo));})
      this.listsService.createNewItem(soap).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(soap));})
    }
  )  
}

addToiletries(){
  //this.hiddenBeach = false;

    console.log("2 -> this.toiletriesList : "+ JSON.stringify(this.toiletriesList));
    this.toiletriesList = new Liste( Math.random(),"Toiletries", sessionStorage.getItem("user") );
    console.log("3 -> this.toiletriesList : "+ JSON.stringify(this.toiletriesList));
    this.tabs.push("Toiletries");
    this.listsService.createNewList(this.toiletriesList).subscribe(
      (liste) => {
       //this.clothesList=liste;
       this.addToiletriesItems();
       console.log("5 -> this.toiletriesList : "+ JSON.stringify(this.toiletriesList));
       console.log("6 -> this.listeToiletriesAvecBonId : "+ JSON.stringify(this.listeToiletriesAvecBonId));
        
        this.selected.setValue(this.tabs.length - 1);
        this.fetchingItemsByCategoryAndUser("Toiletries");
      },
      (error) => {console.log(error)}
    )
}


addEntertainmentItems(){
  this.listsService.fetchListByCategoryAndUser("Entertainment", sessionStorage.getItem("user")).subscribe(
    (res)=>{
      this.listeEntertainmentAvecBonId = res;
      const book = new Item(Math.random(), "Book", 1, this.listeEntertainmentAvecBonId, false);
      const headphones = new Item(Math.random(), "Headphones", 1, this.listeEntertainmentAvecBonId, false); 
      const pen = new Item(Math.random(), "Pen", 1, this.listeEntertainmentAvecBonId, false); 
      const cwp = new Item(Math.random(), "Crossword puzzle", 1, this.listeEntertainmentAvecBonId, false); 
      const computer = new Item(Math.random(), "Computer", 1, this.listeEntertainmentAvecBonId, false); 
      const ComputerCharger = new Item(Math.random(), "Computer charger", 1, this.listeEntertainmentAvecBonId, false); 
      const notepad = new Item(Math.random(), "Notepad", 1, this.listeEntertainmentAvecBonId, false); 
      console.log("4 -> this.listeClothesAvecBonId : "+ JSON.stringify(this.listeEntertainmentAvecBonId));
      this.listsService.createNewItem(book).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(book));})
      this.listsService.createNewItem(headphones).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(headphones));})
      this.listsService.createNewItem(pen).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(pen));})
      this.listsService.createNewItem(cwp).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(cwp));})
      this.listsService.createNewItem(computer).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(computer));})
      this.listsService.createNewItem(ComputerCharger).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(ComputerCharger));})
      this.listsService.createNewItem(notepad).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(notepad));})
    }
  )  
}

addEntertainment(){
  //this.hiddenBeach = false;

    console.log("2 -> this.entertainmentList : "+ JSON.stringify(this.entertainmentList));
    this.entertainmentList = new Liste( Math.random(),"Entertainment", sessionStorage.getItem("user") );
    console.log("3 -> this.entertainmentList : "+ JSON.stringify(this.entertainmentList));
    this.tabs.push("Entertainment");
    this.listsService.createNewList(this.entertainmentList).subscribe(
      (liste) => {
       //this.clothesList=liste;
       this.addEntertainmentItems();
       console.log("5 -> this.toiletriesList : "+ JSON.stringify(this.entertainmentList));
       console.log("6 -> this.listeToiletriesAvecBonId : "+ JSON.stringify(this.listeEntertainmentAvecBonId));
        
        this.selected.setValue(this.tabs.length - 1);
        this.fetchingItemsByCategoryAndUser("Entertainment");
      },
      (error) => {console.log(error)}
    )
}


addImportantItems(){
  this.listsService.fetchListByCategoryAndUser("Important stuff", sessionStorage.getItem("user")).subscribe(
    (res)=>{
      this.listeImportantAvecBonId = res;
      const passport = new Item(Math.random(), "Passport", 1, this.listeImportantAvecBonId, false);
      const wallet = new Item(Math.random(), "Wallet", 1, this.listeImportantAvecBonId, false); 
      const keys = new Item(Math.random(), "Keys", 1, this.listeImportantAvecBonId, false); 
      const phone = new Item(Math.random(), "Phone", 1, this.listeImportantAvecBonId, false); 
      const phoneCharger = new Item(Math.random(), "Phone charger", 1, this.listeImportantAvecBonId, false); 
      console.log("4 -> this.listeClothesAvecBonId : "+ JSON.stringify(this.listeImportantAvecBonId));
      this.listsService.createNewItem(passport).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(passport));})
      this.listsService.createNewItem(wallet).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(wallet));})
      this.listsService.createNewItem(keys).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(keys));})
      this.listsService.createNewItem(phone).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(phone));})
      this.listsService.createNewItem(phoneCharger).subscribe((i)=>{console.log("dans lists.component.ts dans addClothesItems, this.newItem = " + JSON.stringify(phoneCharger));})
    }
  )  
}

addImportant(){
  //this.hiddenBeach = false;

    console.log("2 -> this.importantList : "+ JSON.stringify(this.importantList));
    this.importantList = new Liste( Math.random(),"Important stuff", sessionStorage.getItem("user") );
    console.log("3 -> this.importantList : "+ JSON.stringify(this.entertainmentList));
    this.tabs.push("Important stuff");
    this.listsService.createNewList(this.importantList).subscribe(
      (liste) => {
       //this.clothesList=liste;
       this.addImportantItems();
       console.log("5 -> this.toiletriesList : "+ JSON.stringify(this.importantList));
       console.log("6 -> this.listeToiletriesAvecBonId : "+ JSON.stringify(this.listeImportantAvecBonId));
        
        this.selected.setValue(this.tabs.length - 1);
      },
      (error) => {console.log(error)}
      )
      this.fetchingItemsByCategoryAndUser("Important stuff");
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
