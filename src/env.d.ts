/// <reference types="astro/client" />

// Import Types
import type { BufferGeometry, Mesh } from "three";

// Global
declare global {
  type MeshGeometryRef = React.RefObject<Mesh<BufferGeometry>>;
}
