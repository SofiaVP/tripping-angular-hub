import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
})
export class DragAndDropComponent {
  newTask : string;
  todo = [
    
  ];

  done = [
    
  ];

  addTask(newTask : string){
    this.todo.push(newTask);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  demo(){
    this.todo.push("MERCI aux papas de la promotions - Andre, Alpha et Prot");
    this.todo.push("谢谢 (Xièxiè) Ying et Zhifeng, pour tous les fous rires qu'on a eu ensembles"); 
    this.todo.push("MERCI Lylia, Camille et Nawel - vous être des femmes extraoirdinaires et des exemples à suivre")
    this.todo.push("MERCI The BEST DREAM TEAM EVER !! - Hanane, Angélique et Stéphane")
    this.todo.push("MERCI David - pour toute ta patience et ton soutient inconditionnel "); 
    this.todo.push("MERCI à toute la famille Isika"); 
    this.todo.push("Finir ma présentation et aller prendre l'apéro 🍺 "); 
  }
}
