import { Project, Technology } from '../util/types';
import { projectUrl } from './data';

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
      text: `    DRP stands for Design for Real People. It was a group project for 4 people in 2nd year. 
    Our object was to find and solve a problem in the real-world. 
    The project mainly included making elevator pitch, iterating prototypes, implementing the real app, and a final presentation.
    It was a relatively short project, but we were able to learn the process of delivering a product from the very beginning, and also learned about the differences between school knowledge and designing for the real-world. `,
      imgLink: `${projectUrl}drp/drp-intro.png`,
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
    How might we assist young adults in effectively tracking the expiration date of perishable items they consider most important, based on their individual concerns.`,
      title2: `Follow-up Research`,
      text2: `    1. 74% people forget to replace expired products
    2. 64% people placed items in the back of their medicine cabinet and forgot to purchase them
    3. 55% people don't check expiration dates at first place
    4. 9.52 million tonnes of food waste per year in UK
    5. Households produces 70% of food waste
    6. 4 million tonnes of edible food thrown away`,
    },
    {
      title: `Implementation`,
      text: `    We implemented an Android application that allowed users to log in items with expiration dates, and customize the notifications based on their needs.
    We learned and applied technologies like Human-centered design strategies, Kotlin, SQLite, Firebase to implement the app. `,
      imgLink: `${projectUrl}drp/drp-implementation-basic.png`,
    },
    {
      title: `Iterations`,
      text: `    Based on users feedback, we did several iterations on the app. For example, in order to simplify the process of logging items, we implemented a barcode scanner and connected it to an open source barcode database.
    We also implemented embedded chatting system that allowed users to share/request items, and did several iterations based on users feedback.`,
      imgLink: `${projectUrl}drp/drp-implementation-share.png`,
    },
    {
      title: `Impact Asset`,
      text: `    Imagine a world where we no longer have to worry about forgetting exiration dates of important items, and no more last-minute trip to the store. 
    Users can easily log in and manage their items, which allows them to stay organized, and can also save time and reduce frustration when they need to search for items. 
    Additionally, users can form a habit of planning shopping lists, consuming or restocking items before they expire, and making more responsible choices. This would optimize their consumption and encourage behaviours change. `,
      imgLink: `${projectUrl}drp/drp.png`,
    },
  ],
  imgLink: `${projectUrl}drp/drp.png`,
  pageLink: `${projectUrl}drp`,
};

export const WACC: Project = {
  title: 'WACC',
  time: 'Jan - Mar 2023',
  technologies: [Technology.Scala, Technology.Compiler],
  description: `WACC was a group project of 4 people.
  We wrote a compiler for a simple language from scratch. `,
  projectDetails: [
    {
      title: 'Introduction',
      text: `    WACC was a group project of 4 people in 2nd year. 
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
  pageLink: `${projectUrl}wacc`,
};

export const Pintos: Project = {
  title: 'Pintos',
  time: 'Oct - Dec 2022',
  technologies: [Technology.C, Technology.OS],
  description: `Pintos was a group project of 4 people. 
  We worked on a simple operating system framework to enhance features of scheduling,
  file system and added a virtual memeory implementation.`,
  projectDetails: [
    {
      title: 'Introduction',
      text: `    Pintos was a group project in 2nd year. 
    We worked on a simple OS framework for 80*86 architecture that supports kernel threads, 
    loading and running user programs, and a file system. 
    Our objectives was to strengthen these areas and add a virtual memory implementation. 
    We faced challenges like concurrency, memory leak and data structure design, but also learned a lot about C language and the overall operating system.`,
      imgLink: `${projectUrl}pintos.jpg`,
    },
  ],
  imgLink: `${projectUrl}pintos.jpg`,
  pageLink: `${projectUrl}pintos`,
};

export const projects: Project[] = [DRP, WACC, Pintos];