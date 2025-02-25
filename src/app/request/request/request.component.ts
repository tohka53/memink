import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  standalone: false,
  
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

  
  
    agregarIdAleatorio(event: Event): void {
      // Generamos un ID aleatorio
      const randomId = this.generarIdAleatorio();
      
      // Asignamos el ID al campo oculto
      const randomIdInput = document.getElementById('randomId') as HTMLInputElement;
      if (randomIdInput) {
        randomIdInput.value = randomId;
      }
      
      // Agregamos el ID al asunto del correo
      const subjectInput = document.getElementById('subject') as HTMLInputElement;
      if (subjectInput) {
        const originalSubject = subjectInput.value;
        const studioSelect = document.getElementById('countries') as HTMLSelectElement;
        const studioValue = studioSelect.value !== 'Select Studio' ? studioSelect.value : 'No Studio Selected';
        
        // Incluimos el estudio seleccionado y el ID en el asunto
        subjectInput.value = `${originalSubject} - Studio: ${studioValue} - ID: ${randomId}`;
        
        console.log('Asunto actualizado:', subjectInput.value);
      } else {
        console.error('No se encontró el elemento de asunto');
      }
      
      // Configuramos el campo CC para enviar una copia al email del cliente
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const ccEmailInput = document.getElementById('ccEmail') as HTMLInputElement;
      
      if (emailInput && ccEmailInput && emailInput.value) {
        ccEmailInput.value = emailInput.value;
        console.log('Se enviará una copia al email:', emailInput.value);
      }
      
      console.log('ID aleatorio generado:', randomId);
    }
    
    private generarIdAleatorio(): string {
      // Genera un ID aleatorio de 8 caracteres
      const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const longitud = 8;
      let resultado = 'TAT-'; // Prefijo para identificar que es un tatuaje
      
      for (let i = 0; i < longitud; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
      
      // Añade un timestamp para mayor unicidad
      return resultado + '-' + new Date().getTime();
    }
  }