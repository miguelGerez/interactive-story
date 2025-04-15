import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { StoryComponent } from './pages/story/story.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'story', component: StoryComponent},
    
];
