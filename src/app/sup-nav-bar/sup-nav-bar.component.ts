import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sup-nav-bar',
  templateUrl: './sup-nav-bar.component.html',
  styleUrls: ['./sup-nav-bar.component.css']
})
export class SupNavBarComponent implements OnInit {

  constructor() { }

  classTextSupNav: string = "navbar navbar-expand-lg navbar-light bg-light";

  ngOnInit(): void {
  }

}
