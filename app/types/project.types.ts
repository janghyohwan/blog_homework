export interface Link {
  label: string;
  url: string;
}

export interface CardProps {
  imageSrc: string;
  imageLink?: string;
  title: string;
  description: string;
  tags: string[];
  links: Link[];
}

export interface ProjectProps {
  cards?: CardProps[];
  sectionId?: string;
  title?: string;
}
