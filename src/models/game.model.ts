export interface Game {
  id: string;
  description: string;
  image: string;
  category: string[];
  features: string[];
  rules: string[];
  requirements: {
    minimum: string[];
    recommended: string[];
  };
  name: string;
  players: string;
  duration: string;
}
