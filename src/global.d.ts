
export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
      group: any;
      mesh: any;
      meshPhysicalMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      primitive: any;
    }
  }
}
