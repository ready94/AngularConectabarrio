import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {
   
  opciones: any[] = [
    {id: 1, value: 'Noticias', url: '/news'},
    {id: 2, value: 'Eventos', url: '/events'},
    {id: 3, value: 'Comunidades', url: '/comunities'},
    {id: 4, value: 'Denuncias', url: '/complaints'}
  ]
}
