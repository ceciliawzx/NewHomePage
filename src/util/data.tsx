import {
  Project,
  Technology,
  MenuItem,
  Interest,
  SocialMedia,
  SocialMediaType,
} from '../util/types';

export const menuItems: MenuItem[] = [
  {
    text: 'HOME',
    pageLink: '/~zw4021/',
  },
  {
    text: 'PROJECTS',
    pageLink: '/~zw4021/projects',
  },
  {
    text: 'INTERESTS',
    pageLink: '/~zw4021/interests',
  },
  {
    text: 'CONTACT',
    pageLink: '/~zw4021/contact',
  },
];

export const projects: Project[] = [
  {
    title: 'Pintos',
    time: 'Oct - Dec 2022',
    technologies: [Technology.C, Technology.OS],
    description: `Pintos was a group project of 4 people. 
    We worked on a simple operating system framework to enhance features of scheduling,
    file system and added a virtual memeory implementation.`,
    detail: `Pintos was a group project in 2nd year. 
    We worked on a simple OS framework for 80*86 architecture that supports kernel threads, 
    loading and running user programs, and a file system. 
    Our objectives was to strengthen these areas and add a virtual memory implementation. 
    We faced challenges like concurrency, memory leak and data structure design, 
    but also learned a lot about C language and the overall operating system.`,
    imgLink: '/~zw4021/project/pintos.jpg',
  },
  {
    title: 'WACC',
    time: 'Jan - Mar 2023',
    technologies: [Technology.Scala, Technology.Compiler],
    description: `WACC was a group project of 4 people.
    We wrote a compiler for a simple language from scratch. `,
    detail: `WACC was a group project of 4 people in 2nd year. 
    We wrote a compiler for a simple language from scratch using Scala. 
    In front end we performed lexical analysis, 
    syntactic analysis and semantic analysis to generate an AST and a symbol table, 
    and in back end we visited the AST to generate corresponding assembly. 
    We faced challenges of learning and applying new language, 
    and registers/stack management, 
    but gained comprehensive understanding of compilers.`,
    imgLink: '/~zw4021/project/wacc.jpg',
  },
  {
    title: 'DRP',
    time: 'May - Jun 2023',
    technologies: [Technology.Kotlin, Technology.Firebase, Technology.SQLite],
    description: `DRP was a group project of 4 people, 
    which stands for Design for Real People, we aimed to target and try to solve 
    a real-world problem by learning and applying technologies. `,
    detail: `DRP was a group project for 4 people in 2nd year. 
      Our object was to find and solve a problem in the real-world. 
      After research and interview, our group chose the problem statement: 
      How might we assist young adults in effectively tracking the expiration date 
      of perishable items they consider most important. 
      We implemented an Android application that allowed users to log in items 
      with expiration dates, and customize the notifications based on their needs, 
      and we also implemented embedded chatting system 
      that allowed users to share/request items, and did several iterations 
      based on users feedback. It was a relatively short project, 
      but we were able to learn the process of delivering a product from the very beginning, 
      and also learned about the differences between school knowledge and designing for the real-world. `,
    imgLink: '/~zw4021/project/drp.png',
  },
];

export const interests: Interest[] = [
  {
    title: 'Classical Music',
    description: `I started playing violin when I was 6 years old. 
    Despite the lackness of practice, I'm still playing it anyways. 
    My favourite composers are Debussy, Sibelius and Tchaikovsky. 
    I play in IC Sinfonietta and IC String Ensemble. 
    `,
    imgLink: '/~zw4021/bg/bg2.png',
  },
  {
    title: 'Cats',
    description: `As you can see, I love cats. 
    I've had many cats in my life, and I used to have 7 cats at the same time.
    I only have one now, her name is Chloe. 
    I wish she could be happier and healthier than any other cats I had before. `,
    imgLink: '/~zw4021/bg/bg3.png',
  },
  {
    title: 'Musicals',
    description: 'Yes I love musicals',
    imgLink: '/~zw4021/bg/bg4.png',
  },
  {
    title: 'Musicals',
    description: 'Yes I love musicals',
    imgLink: '/~zw4021/bg/bg5.png',
  },
];

export const socialMedias: SocialMedia[] = [
  {
    type: SocialMediaType.Email,
    data: 'ceciliawzx@qq.com',
    imgLink: '/~zw4021/icon/email.png',
  },
  {
    type: SocialMediaType.Wechat,
    data: 'wechat',
    imgLink: '/~zw4021/wechat.jpg',
  },
  {
    type: SocialMediaType.LinkedIn,
    data: 'zixi-wang-cecilia',
    imgLink: '/~zw4021/icon/linkedin.png',
  },
];
