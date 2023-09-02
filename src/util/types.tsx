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
