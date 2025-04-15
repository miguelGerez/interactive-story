import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../_service/language.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private router: Router,
    public languageService: LanguageService
  ) {}

  startGame() {
    this.router.navigate(['/story']); // Navega al componente de la historia
  }

  get translatedContent() {
    const language = this.languageService.language();
    return {
      title: language === 'en' ? 'Welcome to the Adventure' : 'Bienvenido a la Aventura',
      subtitle: language === 'en' 
        ? 'A journey in 8-bit style awaits you...' 
        : 'Una travesía en estilo 8-bit te espera...',
      button: language === 'en' ? 'Play' : 'Jugar'
    };
  }
}
