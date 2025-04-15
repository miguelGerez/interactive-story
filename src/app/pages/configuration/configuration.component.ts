import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../_service/language.service';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent {
  showSettingsPopup = false;

  // Inyectamos el servicio de idioma
  constructor(public languageService: LanguageService, private router: Router) {}

  toggleSettingsPopup() {
    this.showSettingsPopup = !this.showSettingsPopup;
  }

  saveLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Hacemos un cast a HTMLSelectElement
    const newLanguage = selectElement.value; // Obtenemos el valor seleccionado
    this.languageService.changeLanguage(newLanguage as 'en' | 'es'); // Actualizamos el idioma
  }
}
