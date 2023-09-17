import {
  Project,
  Technology,
  MenuItem,
  Interest,
  InterestType,
  SocialMedia,
  SocialMediaType,
  ProjectDetail,
} from '../util/types';

export const mainUrl = '/~zw4021/';
export const projectUrl = `${mainUrl}projects/`;
export const interestUrl = `${mainUrl}interests/`;
export const contactUrl = `${mainUrl}contact/`;

export const menuItems: MenuItem[] = [
  {
    text: 'HOME',
    pageLink: mainUrl,
  },
  {
    text: 'PROJECTS',
    pageLink: projectUrl,
  },
  {
    text: 'INTERESTS',
    pageLink: interestUrl,
  },
  {
    text: 'CONTACT',
    pageLink: contactUrl,
  },
];

export const DRP: Project = {
  title: 'DRP',
  time: 'May - Jun 2023',
  technologies: [Technology.Kotlin, Technology.Firebase, Technology.SQLite],
  description: `DRP stands for Design for Real People, a group project of 4 people.
  we aimed to target and try to solve a real-world problem 
  by learning and applying technologies. `,
  projectDetails: [
    {
      title: `Introduction`,
      text: `    DRP was a group project for 4 people in 2nd year. Our object was to find and solve a problem in the real-world. 
    The project mainly included making elevator pitch, iterating prototypes, implementing the real app, and a final presentation.
    It was a relatively short project, but we were able to learn the process of delivering a product from the very beginning, and also learned about the differences between school knowledge and designing for the real-world. `,
      imgLink: `${projectUrl}drp/drp.png`,
    },
    {
      title: `Initial Research`,
      text: `    Food waste has always been a serious problem in the world. 
    We interviewed 32 young adults and found that 29 of them have the problem of wasting food. The reasons most frequently mentioned were that they bought too much food and that they forgot what they had in the fridge.
    Therefore, we wanted to design a fridge management app. This would help the users to track the expiration date of food in fridges and promote use before expriation date.`,
      imgLink: `${projectUrl}drp/drp-current-journey.png`,
    },
    {
      title: `Idea Change`,
      text: `    After making some paper prototypes and asked for users feedback, we realised two problems:
      1. Users found it frustrating to log in everything in their fridges.
      2. Different users care more about different food.
      We therefore decided to let users choose what to be tracked. 
      At the same time, we also realised there are more things that would expire other than food, e.g medicines, cosmetics, or even credit cards. 
      We therefore decided the final problem statement: 
      How might we assist young adults in effectively tracking the expiration date of perishable items they consider most important, based on their individual concerns.
      `,
      imgLink: ``,
    },
    {
      title: `Implementation`,
      text: `    We implemented an Android application that allowed users to log in items with expiration dates, and customize the notifications based on their needs.
      We learned and applied technologies like Kotlin, SQLite, Firebase to implement the app. `,
      imgLink: ``,
    },
    {
      title: `Iterations`,
      text: `    Based on users feedback, we did several iterations on the app. 
      We also implemented embedded chatting system that allowed users to share/request items, and did several iterations based on users feedback.`,
      imgLink: `${projectUrl}drp/drp-implementation-share.png`
    },
    {
      title: `Impact Asset`,
      text: `    Imagine a world where we no longer have to worry about forgetting exiration dates of important items, and no more last-minute trip to the store. 
      Users can easily log in and manage their items, which allows them to stay organized, and can also save time and reduce frustration when they need to search for items. 
      Additionally, users can form a habit of planning shopping lists, consuming or restocking items before they expire, and making more responsible choices. This would optimize their consumption and encourage behaviours change. `,
      imgLink: ``,
    },
  ],
  imgLink: `${projectUrl}drp/drp.png`,
  pageLink: `${projectUrl}drp`,
};

const WACC: Project = {
  title: 'WACC',
  time: 'Jan - Mar 2023',
  technologies: [Technology.Scala, Technology.Compiler],
  description: `WACC was a group project of 4 people.
  We wrote a compiler for a simple language from scratch. `,
  projectDetails: [
    {
      title: 'Introduction',
      text: `WACC was a group project of 4 people in 2nd year. 
  We wrote a compiler for a simple language from scratch using Scala. 
  In front end we performed lexical analysis, 
  syntactic analysis and semantic analysis to generate an AST and a symbol table, 
  and in back end we added a code generator by
  visiting the AST and generate assembly for ARM11 architecture. 
  We faced challenges of learning and applying new language, 
  and registers/stack management, 
  but gained comprehensive understanding of compilers.`,
      imgLink: `${projectUrl}wacc.jpg`,
    },
  ],
  imgLink: `${projectUrl}wacc.jpg`,
};

const Pintos: Project = {
  title: 'Pintos',
  time: 'Oct - Dec 2022',
  technologies: [Technology.C, Technology.OS],
  description: `Pintos was a group project of 4 people. 
  We worked on a simple operating system framework to enhance features of scheduling,
  file system and added a virtual memeory implementation.`,
  projectDetails: [
    {
      title: 'Introduction',
      text: `Pintos was a group project in 2nd year. 
  We worked on a simple OS framework for 80*86 architecture that supports kernel threads, 
  loading and running user programs, and a file system. 
  Our objectives was to strengthen these areas and add a virtual memory implementation. 
  We faced challenges like concurrency, memory leak and data structure design, 
  but also learned a lot about C language and the overall operating system.`,
      imgLink: `${projectUrl}pintos.jpg`,
    },
  ],
  imgLink: `${projectUrl}pintos.jpg`,
};

export const projects: Project[] = [DRP, WACC, Pintos];

export const interests: Interest[] = [
  {
    title: InterestType.ClassicalMusic,
    intro: `"Music is art decorating time."`,
    description: `I started playing violin when I was 6 years old.
    Despite the lackness of practice, I'm still playing it anyways.
    My favourite composers are Debussy, Sibelius and Tchaikovsky. 
    I play in IC Sinfonietta and IC String Ensemble. 
    `,
    imgLink: `${interestUrl}music-score.jpg`,
  },
  {
    title: InterestType.Cats,
    intro: `As you might have found out, I love cats.`,
    description: `I've had many cats in my life, and I used to have 7 cats at the same time.
    I only have one now, her name is Chloe.
    I wish she could be happier and healthier than any other cats I had before. `,
    imgLink: `${interestUrl}cat.jpg`,
  },
  {
    title: InterestType.Musicals,
    intro: `"Measure your life in love."`,
    description: `My favourite musical is Les Miserables. 
    I also love Phantom of the Opera, Hamilton, Cats, Elisabeth, 
    Rent, Mozart!, Mozart l'opéra rock, Le Rouge et le Noir and so on...`,
    imgLink: `${interestUrl}musical.jpg`,
  },
  {
    title: InterestType.Poems,
    intro: `『曾批给雨支风券，累上留云借月章。』`,
    description: `"Shall I compare thee to a summer's day?"`,
    imgLink: `${interestUrl}poem.jpg`,
  },
];

export const socialMedias: SocialMedia[] = [
  {
    type: SocialMediaType.Email,
    data: 'zixiwangcecilia@gmail.com',
    imgLink: `${mainUrl}icon/email.png`,
  },
  {
    type: SocialMediaType.Wechat,
    data: 'wechat',
    imgLink: `${mainUrl}wechat.jpg`,
  },
  {
    type: SocialMediaType.LinkedIn,
    data: 'zixi-wang-cecilia',
    imgLink: `${mainUrl}icon/linkedin.png`,
  },
];
