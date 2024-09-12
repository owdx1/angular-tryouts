import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  
  @Input() listFilter: string = "0";
  @Output() listFilterChange = new EventEmitter<string>

  ngOnInit(): void {

  }
    
  changeFilter = (val: string) => {
    this.listFilter = val
    this.listFilterChange.emit(val)
  } 
}
