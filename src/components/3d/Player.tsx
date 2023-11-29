// React
import { useEffect, useRef } from "react";

// Hooks
import { usePlayerMovements } from "./hooks/usePlayerMovements";

// Three.js
import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";

// Constants
const PLAYER_WALK_SPEED = 7;

const Player: React.FC = () => {
  // Values
  const positionRef = useRef([0, 0, 0]);
  const velocityRef = useRef([0, 0, 0]);

  // Hooks
  const movements = usePlayerMovements();

  // Camera for player perspective
  const { camera } = useThree();

  // Player
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 5, 0],
  }));

  // link camera with player position
  useFrame(() => {
    camera.position.copy(new Vector3(...positionRef.current));

    const { moveForward, moveBackguard, moveLeft, moveRight } = movements;

    const frontVector = new Vector3(0, 0, +moveBackguard - +moveForward);
    const sideVecttor = new Vector3(+moveLeft - +moveRight, 0, 0);

    const direction = new Vector3();

    direction
      .subVectors(frontVector, sideVecttor)
      .normalize()
      .multiplyScalar(PLAYER_WALK_SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocityRef.current[1], direction.z);
  });

  // suscribe to player position changes
  useEffect(() => {
    api.position.subscribe((currentPosition) => {
      positionRef.current = currentPosition;
    });
  }, []);

  // suscribe to player velocity change
  useEffect(() => {
    api.velocity.subscribe((currentVelocity) => {
      velocityRef.current = currentVelocity;
    });
  }, []);

  return <mesh ref={ref as MeshGeometryRef} />;
};

export { Player };
