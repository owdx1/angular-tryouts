import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {

  @Input() wishes : WishItem[] = []

  constructor() { }

  @Input() isim: string = ""

  ngOnInit(): void {
    
  }


  
}
