import { Scene } from "../../_model/scene";

export const scenesEs: Scene[] = [
  {
    id: 1,
    text: 'Te despiertas en una habitación oscura. Hay una puerta a tu izquierda y una ventana a tu derecha.',
    options: [
      { text: 'Ir hacia la puerta', nextScene: 2 },
      { text: 'Mirar por la ventana', nextScene: 3 }
    ]
  },
  {
    id: 2,
    text: 'La puerta se abre con un crujido. Ves un largo pasillo.',
    options: [
      { text: 'Caminar por el pasillo', nextScene: 4 },
      { text: 'Regresar', nextScene: 1 }
    ]
  },
];