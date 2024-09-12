import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem;
  @Output() wishChange = new EventEmitter<WishItem>

  constructor(private events: EventService) {

  }

  
  toggleFullfilled = () => { 
    this.wish.isComplete = !this.wish.isComplete
    //this.fullfilledChange.emit(this.fullfilled)
  }

  removeWish = () => { 
    this.events.emit('removeWish', this.wish)
  }
}
