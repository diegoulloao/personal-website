// Three.js
import { usePlane } from "@react-three/cannon";

// Textures
import { sandTexture } from "@components/3d/textures";

// Interfaces
interface GroundProps {
  size?: [number, number];
}

// Settings
sandTexture.repeat.set(10, 10);

const Ground: React.FC<GroundProps> = ({ size = [15, 15] }) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  return (
    <mesh ref={ref as MeshGeometryRef}>
      <planeGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" map={sandTexture} />
    </mesh>
  );
};

export { Ground };
