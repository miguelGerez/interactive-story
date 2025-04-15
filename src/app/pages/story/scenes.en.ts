import { Scene } from "../../_model/scene";

export const scenesEn: Scene[] = [
    {
      id: 1,
      text: 'You wake up in a dark room. There’s a door to your left and a window to your right.',
      options: [
        { text: 'Go to the door', nextScene: 2 },
        { text: 'Look out the window', nextScene: 3 }
      ]
    },
    {
      id: 2,
      text: 'The door creaks open. You see a long hallway.',
      options: [
        { text: 'Walk down the hallway', nextScene: 4 },
        { text: 'Go back', nextScene: 1 }
      ]
    },
    {
      id: 3,
      text: 'Through the window, you see a dense forest. It feels ominous.',
      options: [
        { text: 'Open the window and climb out', nextScene: 5 },
        { text: 'Go back', nextScene: 1 }
      ]
    },
    {
      id: 4,
      text: 'The hallway leads to another door. You hear strange noises behind it.',
      options: [
        { text: 'Open the door', nextScene: 6 },
        { text: 'Run back', nextScene: 1 }
      ]
    },
    {
      id: 5,
      text: 'You climb out into the forest. The air is cold and filled with whispers.',
      options: [
        { text: 'Explore the forest', nextScene: 7 },
        { text: 'Go back inside', nextScene: 1 }
      ]
    },
    {
      id: 6,
      text: 'You find a room filled with treasures. You’ve won!',
      options: []
    },
    {
      id: 7,
      text: 'The forest engulfs you. You’ve met your end.',
      options: []
    }
  ];