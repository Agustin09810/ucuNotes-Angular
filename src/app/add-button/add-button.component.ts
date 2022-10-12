import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  classTextAddButton: string = "btn btn-outline-dark me-3";

  constructor() { }

  ngOnInit(): void {
  }

  
}
