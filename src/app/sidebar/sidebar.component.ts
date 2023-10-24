import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor ( private communicationService:CommunicationService){}
  currentSelected: string = 'home';
  ngOnInit(){
    this.communicationService.selected$.subscribe(selected=>{
      this.currentSelected=selected;
    });
  }
  setSelected(value: string) {
    console.log(value);
    this.communicationService.setSelected(value);
}
  onCSS() {
    this.communicationService.setSelected('css');
  }
  onHome(){
    this.communicationService.setSelected('home');
  }
  onHTML(){
    this.communicationService.setSelected('html');
}
onJS(){
  this.communicationService.setSelected('js');

}
onJSON(){
  this.communicationService.setSelected('json');

}
onMD(){
  this.communicationService.setSelected('md');
}  
onSettings(){
  this.communicationService.setSelected('settings');
}  
isSelected(value: string): boolean {
  console.log(this.currentSelected, value);
  return this.currentSelected === value;
}
}

