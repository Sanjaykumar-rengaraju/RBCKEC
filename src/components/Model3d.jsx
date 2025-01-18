import React from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Model = () => {
  const gltf = useLoader(GLTFLoader, './model/finalRobot.glb');
  // const gltf = useLoader(GLTFLoader, './model/cybercorp.glb');

  const mixer = React.useMemo(() => new THREE.AnimationMixer(gltf.scene), [gltf]);

  React.useEffect(() => {
    const actions = gltf.animations.map((clip) => mixer.clipAction(clip));
    actions.forEach((action) => action.play());

    return () => {
      actions.forEach((action) => action.stop());
    };
  }, [gltf.animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={gltf.scene} position={[0, 0, 0]} scale={[0.8,0.8,0.8]}/>;
  // return <primitive object={gltf.scene} position={[0, -2, -2]} scale={[3,3,3]}/>;

};

const Model3d = () => {
  return (
    <Canvas>
      <directionalLight position={[10, 10, 10]} intensity={10}/>
      <Model />
    </Canvas>
  );
};

export default Model3d;