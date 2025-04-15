import { Injectable } from '@angular/core';
import { Scene } from '../_model/scene';
import { scenesEn } from '../pages/story/scenes.en';
import { scenesEs } from '../pages/story/scenes.es';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private scenes: { [key: string]: Scene[] } = {
    en: scenesEn,
    es: scenesEs
  };

  private currentSceneId = 1;
  
  constructor(private languageService: LanguageService) {}

  getCurrentScene() {
    const currentLanguage = this.languageService.language();

    return this.scenes[currentLanguage].find(scene => scene.id === this.currentSceneId);
  }

  setNextScene(sceneId: number) {
    this.currentSceneId = sceneId;
  }

}
