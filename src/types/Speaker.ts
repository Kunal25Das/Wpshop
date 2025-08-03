export interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
  handle?: string;
  status?: string;
  socials: {
    twitter: string;
    linkedin: string;
  };
}

export interface RevealingSoon {
  revealingSoon: true;
}

export type SpeakerData = Speaker | RevealingSoon;
