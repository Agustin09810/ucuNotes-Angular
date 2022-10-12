import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-night-mode-switch',
  templateUrl: './night-mode-switch.component.html',
  styleUrls: ['./night-mode-switch.component.css']
})
export class NightModeSwitchComponent implements OnInit {

  classText: string = "form-check form-switch position-fixed bottom-0 start-0";
  
  constructor() { }

  ngOnInit(): void {
  }
  nightMode(){
    
    // if(document.getElementById('modoOscuro').checked){
    //     document.getElementById('navSup').classList.remove('bg-light');
    //     document.getElementById('navSup').classList.add('bg-secondary');
    //     document.getElementById('navSup').classList.add('text-white');
    //     document.getElementById('footer').classList.remove('bg-light');
    //     document.getElementById('footer').classList.add('bg-secondary');
    //     document.getElementById('navbar-inf-text').classList.add('text-white');
    //     document.getElementById('body').classList.add('bg-light');
    //     document.getElementById('nav-link-a').classList.remove('active');
    //     document.getElementById('nav-link-a').classList.add('text-white');
    //     document.getElementById('body').classList.remove('bg-transparent');
    //     document.getElementById('body').classList.add('bg-dark');
    //     document.getElementById('switchMN').classList.add('text-white');
    //     document.getElementById('botonA').classList.remove('btn-outline-dark');
    //     document.getElementById('botonA').classList.add('btn-outline-light');
    // }else{
    //     document.getElementById('navSup').classList.add('bg-light');
    //     document.getElementById('navSup').classList.remove('bg-secondary');
    //     document.getElementById('navSup').classList.remove('text-white');
    //     document.getElementById('footer').classList.add('bg-light');
    //     document.getElementById('footer').classList.remove('bg-secondary');
    //     document.getElementById('navbar-inf-text').classList.remove('text-white');
    //     document.getElementById('body').classList.remove('bg-light');
    //     document.getElementById('nav-link-a').classList.add('active');
    //     document.getElementById('nav-link-a').classList.remove('text-white');
    //     document.getElementById('body').classList.add('bg-transparent');
    //     document.getElementById('body').classList.remove('bg-dark');
    //     document.getElementById('switchMN').classList.remove('text-white');
    //     document.getElementById('botonA').classList.add('btn-outline-dark');
    //     document.getElementById('botonA').classList.remove('btn-outline-light');
    // }
}

}
