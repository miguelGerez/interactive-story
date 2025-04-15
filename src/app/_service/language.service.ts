import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Signal para almacenar el idioma actual
  private _language = signal<string>(localStorage.getItem('language') || 'en');

  // Getter para exponer el Signal
  get language() {
    return this._language;
  }

  // Método para cambiar el idioma
  changeLanguage(newLanguage: 'en' | 'es') {
    this._language.set(newLanguage); // Actualiza el Signal
    localStorage.setItem('language', newLanguage); // Persistencia en localStorage
    console.log(`Language changed to: ${newLanguage}`);
  }
}
