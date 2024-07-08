import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss',
})
export class MenuLateralComponent {
  opciones: any[] = [
    { id: 1, value: 'Noticias' },
    { id: 2, value: 'Eventos' },
    { id: 3, value: 'Alertas' },
    { id: 4, value: 'Calendario' },
  ];

  constructor(
    private router: Router){}


  openOption(option: any): void {
    switch(option.id){
      case 1: this.router.navigate(['news']); break;
      case 2: this.router.navigate(['activities']); break;
      case 3: this.router.navigate(['alerts']); break;
      case 4: this.router.navigate(['calendar']); break;
    }
  }

}
