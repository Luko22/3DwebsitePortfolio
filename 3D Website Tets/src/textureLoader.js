// textureLoader.js
import { TextureLoader } from 'three';

const textureLoader = new TextureLoader();

export const loadTextures = () => ({
  mountain: textureLoader.load('/textures/mountain.jpg'),
  cube005: textureLoader.load('/textures/WoodFloor.jpg'),
  // Add more textures as needed
});