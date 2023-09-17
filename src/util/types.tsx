export type MenuItem = {
  text: string;
  pageLink: string;
};

export type Project = {
  title: string;
  time: string;
  technologies?: Technology[];
  description: string;
  projectDetails: ProjectDetail[];
  imgLink: string;
  pageLink: string;
};

export type ProjectDetail = {
  title: string;
  text: string;
  imgLink?: string;
  title2?: string;
  text2?: string;
}

export type Interest = {
  title: InterestType;
  intro: string;
  description?: string;
  imgLink: string;
};

export enum InterestType {
  ClassicalMusic = 'Classical Music',
  Violin = 'Violin',
  Musicals = 'Musicals',
  Traveling = 'Traveling',
  Cats = 'Cats',
  Poems = 'Poems',
  Food = 'Food',
}

export type SocialMedia = {
  type: SocialMediaType
  data: string;
  imgLink: string;
};

export enum SocialMediaType {
  Wechat = 'Wechat',
  Email = 'Email',
  LinkedIn = 'LinkedIn',
  WhatsApp = 'WhatsApp'
}

export enum Technology {
  Java = 'Java',
  Kotlin = 'Kotlin',
  Scala = 'Scala',
  C = 'C language',
  Python = 'Python',
  MySql = 'MySql',
  PostgreSql = 'PostgreSql',
  SQLite = 'SQLite',
  Firebase = 'Firebase',
  Compiler = 'Compiler',
  OS = 'OS',
}
