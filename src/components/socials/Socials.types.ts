interface Social {
  icon: JSX.Element;
  href: string;
}

interface Hover {
  fill?: string;
}
export interface SocialsTypes {
  facebook?: Social;
  twitter?: Social;
  instagram?: Social;
  linkedin?: Social;
  pinterest?: Social;
  youtube?: Social;
  size?: number;
  hover?: Hover;
  transition?: number;
}
