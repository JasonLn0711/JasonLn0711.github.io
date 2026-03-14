import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function MeshCloud() {
  const group = useRef<Group>(null);
  const points = useMemo(
    () => Float32Array.from({ length: 360 }, () => (Math.random() - 0.5) * 4.4),
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.12;
    group.current.position.x = state.pointer.x * 0.18;
    group.current.position.y = state.pointer.y * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.28}>
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#6ea8ff" transparent opacity={0.24} wireframe />
        </mesh>
      </Float>
      <Points positions={points} stride={3}>
        <PointMaterial color="#d8e8ff" transparent size={0.04} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.6]}>
      <color attach="background" args={["#0b1020"]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[2, 2, 3]} intensity={1.1} color="#9ec5ff" />
      <MeshCloud />
    </Canvas>
  );
}
