export interface Link {
  label: string;
  url: string;
}

export type CardProps = {
  imageSrc: string;
  imageLink?: string;
  title: string;
  description: string;
  tags: string[];
  links: Link[];
};

export type ProjectProps = {
  cards?: CardProps[];
  sectionId?: string;
  title?: string;
};
