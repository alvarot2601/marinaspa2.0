declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.gif';
declare module '*.mp4';
declare module '*.svg' {
  const src: string;
  export default src;
}