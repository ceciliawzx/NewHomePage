export type MenuItem = {
  text: string;
  pageLink: string;
};

export type Project = {
  title: string;
  time: string;
  technologies?: Technology[];
  description: string;
  detail?: string;
  imgLink: string;
};

export type Interest = {
  title: InterestType;
  intro: string;
  description?: string;
  imgLink: string;
};

export enum InterestType {
  ClassicalMusic = 'Classical Music',
  Violin = 'Violin',
  Musical = 'Musical',
  Traveling = 'Traveling',
  Cat = 'Cat',
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
