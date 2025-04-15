export interface Scene {
    id: number;
    text: string;
    options: { text: string; nextScene: number }[];
  }