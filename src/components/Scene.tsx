// Three.js
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

// 3D
import { Ground } from "@components/3d/Ground";
import { FirstPerson } from "@components/3d/FirstPerson";
import { Player } from "@components/3d/Player";

const Scene: React.FC = () => {
  return (
    <Canvas>
      <Sky
        distance={450000}
        sunPosition={[100000, 0, 0]}
        inclination={0}
        rayleigh={4}
        azimuth={180}
        mieDirectionalG={0.9}
        mieCoefficient={0.02}
        turbidity={20}
      />

      <ambientLight intensity={0.6} />

      <FirstPerson />

      <Physics>
        <Player />
        <Ground />
      </Physics>
    </Canvas>
  );
};

export default Scene;
