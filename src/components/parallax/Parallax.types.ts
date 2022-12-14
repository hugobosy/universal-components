interface Overlay {
  bgColor: string;
  opacity: number;
}

export interface ParallaxTypes {
  width?: string;
  height?: string;
  children: JSX.Element;
  isOverlay?: Overlay;
  image: string;
}
