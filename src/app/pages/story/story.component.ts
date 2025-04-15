import { Component } from '@angular/core';
import { StoryService } from '../../_service/story.service';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  constructor(private storyService: StoryService) {}

  get currentScene() {
    return this.storyService.getCurrentScene();
  }

  chooseOption(nextSceneId: number) {
    this.storyService.setNextScene(nextSceneId);
  }

  resetGame() {
    window.location.href = '/';  // Redirige a la raíz del proyecto
  }
}
