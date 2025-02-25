import { Component } from '@angular/core';

@Component({
  selector: 'app-footerl',
  standalone: false,
  
  templateUrl: './footerl.component.html',
  styleUrl: './footerl.component.css'
})
export class FooterlComponent {

  showModal = false;
  
  copyEmail() {
    navigator.clipboard.writeText('mecg1994@gmail.com')
      .then(() => {
        alert('Email copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar el email:', err);
      });
  }
}

