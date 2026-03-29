import * as THREE from "three";
import { GLTF } from "three-stdlib";

const setAnimations = (gltf: GLTF) => {
  let character = gltf.scene;
  let mixer = new THREE.AnimationMixer(character);

  if (gltf.animations && gltf.animations.length > 0) {
    // Play the idle animation (the only animation in the new model)
    const idleClip = gltf.animations[0]; // "IdleV4.2(maya_head)"
    if (idleClip) {
      const idleAction = mixer.clipAction(idleClip);
      idleAction.setLoop(THREE.LoopRepeat, Infinity);
      idleAction.play();
    }
  }

  function startIntro() {
    // The new model doesn't have a separate intro animation
    // The idle animation is already playing, so just let it continue
  }

  function hover(_gltf: GLTF, _hoverDiv: HTMLDivElement) {
    // The new model doesn't have eyebrow animations
    // No-op for now
  }

  return { mixer, startIntro, hover };
};

export default setAnimations;
