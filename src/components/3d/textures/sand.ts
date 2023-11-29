// Three.js
import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

// Images
import sandImage from "@images/sand.jpg";

// Sand texture
const sandTexture = new TextureLoader().load(sandImage.src);

// Repeat texture in the mesh
sandTexture.wrapT = RepeatWrapping;
sandTexture.wrapS = RepeatWrapping;
sandTexture.magFilter = NearestFilter;

export { sandTexture };
