import * as THREE from 'three'

export const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
export const boxMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });
export const shapeMaterial = new THREE.MeshStandardMaterial({
  color: "orangered",
});
export const endMaterial = new THREE.MeshStandardMaterial({ color: "greenyellow" });