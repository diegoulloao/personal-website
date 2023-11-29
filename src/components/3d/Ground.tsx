// Three.js
import { usePlane } from "@react-three/cannon";

const Ground: React.FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  return (
    <mesh ref={ref as MeshGeometryRef}>
      <planeGeometry attach="geometry" args={[15, 15]} />
      <meshStandardMaterial
        attach="material"
        color="#FFE5CA"
        /* map prop for texture */
      />
    </mesh>
  );
};

export { Ground };
