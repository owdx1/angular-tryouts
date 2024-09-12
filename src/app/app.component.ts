import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import { EventService } from "../shared/services/EventService"
import { WishService } from './wish.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [EventService]
})
export class AppComponent implements OnInit {

  constructor(private events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      console.log(wish)
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1)
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      console.log(data)
    })
  }

  items!: WishItem[];

  title: string = "ANAN"

  get visibleItems(): WishItem[] {
    let value = this.listFilter;  

    if(value === "0") { 
      return this.items
    }
    else if(value === "1") { 
      return this.items.filter((item) => !item.isComplete)
    }
    else if (value === "2") {
      return this.items.filter((item) => item.isComplete)
    }

    return this.items
  }

  // shared with wist-filter
  listFilter: string = "0";  
}



