import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-reszta',
  templateUrl: './reszta.component.html',
  styleUrls: ['./reszta.component.css']
})
export class ResztaComponent {
  public wyswietlanyTekst = '';
  private pelnyTekst = 'Full-stack Web Developer';
  public selected: any = 'home';
  public isMenuOpen: boolean = false;
  public Editors:string ="⮟ OPEN EDITORS";
  
  constructor(private communicationService: CommunicationService) {}

  
  
  toggleNavbarMenu() {
    const navbar = document.querySelector('.navbar1');
    if (navbar) {
      navbar.classList.toggle('menu-open');
    }
  }

  ngOnInit() {
    this.animacjaPisania();
    this.communicationService.selected$.subscribe(selected => {
      this.selected = selected;
    });
    const wybranyMotyw = getCookie("wybranyMotyw");
    switch (wybranyMotyw) {
      case 'theme1':
        this.theme1();
        break;
      case 'theme2':
        this.theme2();
        break;
      case 'theme3':
        this.theme3();
        break;
      case 'theme4':
        this.theme4();
        break;
      case 'theme5':
        this.theme5();
        break;
    }
  }

  animacjaPisania(i = 0) {
    if (i < this.pelnyTekst.length) {
      this.wyswietlanyTekst += this.pelnyTekst.charAt(i);
      setTimeout(() => this.animacjaPisania(i + 1), 100);
    }else{
      setTimeout(() => {
      this.wyswietlanyTekst = ''; 
      this.animacjaPisania();  
    }, 5000);
    }
  }
  onHome(){
    this.selected="home"
  }
  onHTML(){
    this.selected="html";
    console.log(this.selected);
}

onCSS(){
  this.selected="css"

}
onJS(){
  this.selected="js"

}
onJSON(){
  this.selected="json"

}
onMD(){
  this.selected="md"

}
onSettings(){
  this.selected="settings"

}
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  
  const icon = document.querySelector('.editor-icon');
    if (!icon) return;
  if (this.isMenuOpen) {
    icon.classList.add('rotate');
    this.Editors = "⮞ OPEN EDITORS";
  } else {
    icon.classList.remove('rotate');
    this.Editors = "⮟ OPEN EDITORS";
  }
}
theme1():void{
  document.documentElement.style.setProperty('--accent-color', '#ff0000');
  document.cookie = "wybranyMotyw=theme1; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
}
theme2():void{
  document.documentElement.style.setProperty('--accent-color', '#0e572f');
  document.cookie = "wybranyMotyw=theme2; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
}
theme3():void{
  document.documentElement.style.setProperty('--accent-color', '#8715bf');
  document.cookie = "wybranyMotyw=theme3; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
}
theme4():void{
  document.documentElement.style.setProperty('--accent-color', '#f593eb');
  document.cookie = "wybranyMotyw=theme4; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
}
theme5():void{
  document.documentElement.style.setProperty('--accent-color', '#f9826c');
  document.cookie = "wybranyMotyw=theme5; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
}


}
export function getCookie(cname: string): string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
