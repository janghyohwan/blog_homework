export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "google";
  url: string;
}

export interface ContactPageProps {
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
}
