//Three.js
import { useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

const FirstPerson: React.FC = () => {
  const { camera, gl } = useThree();

  return <PointerLockControls args={[camera, gl.domElement]} />;
};

export { FirstPerson };
