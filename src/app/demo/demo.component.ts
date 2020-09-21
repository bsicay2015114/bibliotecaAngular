import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'biblioteca-kinal';

  items = ['diego', 'jacobo', 'armando'];

  ngOnInit(){
  }

  addItem() {
    this.items.push('nuevo item');
  }

   deleteItem(index: number) {
    this.items.splice(index, 1);
   }

}
