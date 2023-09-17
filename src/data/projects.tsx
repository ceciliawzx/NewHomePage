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
      text2: `    1. 74% people forget to replace expired products.
    2. 64% people placed items in the back of their medicine cabinet and forgot to purchase them.
    3. 55% people don't check expiration dates at first place.
    4. 9.52 million tonnes of food waste per year in UK.
    5. Households produces 70% of the food waste.
    6. 4 million tonnes of edible food is thrown away. `,
    },
    {
      title: `Implementation`,
      text: `    We implemented an Android application that allowed users to log in items with expiration dates, and customize the notifications based on their needs.
    We learned and applied technologies like Human-centered design strategies, Kotlin, SQLite, Firebase to implement the app. 
    As we only had one month in total, we worked in smaller groups to ensure efficiency. `,
      imgLink: `${projectUrl}drp/drp-implementation-basic.png`,
    },
    {
      title: `Iterations`,
      text: `    Based on users feedback, we did several iterations on the app. For example, in order to simplify the process of logging items, we implemented a barcode scanner and connected it to an open source barcode database.
    We also implemented embedded chatting system that allowed users to share/request items, so users can engage in meaningful interactions, and improve the utilisation of resources.`,
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
      text: `    WACC was a group project of 4 people.
    We wrote a compiler for a simple language from scratch using Scala. 
    In the front end we performed lexical analysis, syntactic analysis and semantic analysis to generate an AST and a symbol table, 
    In the back end we added a code generator by visiting the AST and generate assembly for ARM11 architecture.`,
      imgLink: `${projectUrl}wacc/wacc.jpg`,
    },
    {
      title: `Syntax Analysis`,
      text: `    In the first stage, the main function loads the WACC file and calls .parse() function to start syntactic analysis. 
    We followed the WACC language specification and modelled everything as Traits, Case Classes and Case Objects. 
    This enabled us to easily integrate with the Parsley tool and pattern matching for later stages. `,
      title2: `Semantic Analysis`,
      text2: `   After the AST is generated in syntactic analysis, the compiler begins semantic analysis. 
    For each node defined in the AST, we created a corresponding visit function, which performs top-down semantic checking on the AST to ensure the correctness of the arguments of the node.`,
    },
    {
      title: `Intermediate Representation`,
      text: `    In the back end, We introduced an Intermediate Representation (IR) class to abstract away from our assembly code. For each semantically correct WACC program, an IR object is passed as an implicit variable, and an abstract representation of an instruction is added to the IR. 
    All abstracted assembly code is assembled after the entire AST has been processed. 
    This abstraction decouples code generation from the details of architecture-specific assembly code, creating flexibility for future extensions.`,
      title2: `Variable declaration and access`,
      text2: `    During the code generation process, we maintain a VarMap as an implicit variable corresponding to the symbol table. 
    When a new variable is declared, we record the variable name associated with its location(register, stack, or heap address) so that we can access the variable when needed.
    To comply with the ARM11 architecture, we keep a list of registers (R1 to R10) as available registers, reserving R0 as a return/scratch register, and R12 as a scratch register. 
    We also implemented a StackManager class to abstract out the responsibility of handling stack offset tracking.`,
    },
    {
      title: `Label Management`,
      text: `     We created a class LabelManager to abstract out the responsibility of managing all labels we created during code generation. 
    This label maker is shared everywhere to eliminate label duplication.`,
      title2: `Translation to assembly`,
      text2: `    After the IR is generated, we call ir.assembleIR() to generate the assembly code. 
    This function iterates through every directive and instruction under orderedLabels and reusedLabels and calls .assemble().`,
    },
    {
      title: `Overview`,
      text: `     In this project, we faced challenges of learning and applying new language, and registers/stack management, but we were able to solve them and also gained comprehensive understanding of compilers.
    Beyond the specification, we also implemented some extensions respectively, including function overload, pointers, full/safe pair types and register allocation optimisation.
    (and we got the carrot mark every time)
    Overall, it was a very educational project. 
      `,
      imgLink: `${projectUrl}wacc/wacc-file-structure.png`,
    },
  ],
  imgLink: `${projectUrl}wacc/wacc.jpg`,
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
    We faced challenges like concurrency, memory leak and data structure design, but also learned a lot about C language and the overall operating system.
    (Due to the fact that it was the first big project in our uni lives, and it was so hard, everyone got a pintos glass as souvenirs.)`,
      imgLink: `${projectUrl}pintos.jpg`,
    },
    {
      title: 'Task 0 - Alarm Clock',
      text: `    The main object of this task was to gain an overall understanding of the codebase, and reimplement the timer_sleep() function, which did busy waiting at the moment.
    We added a semaphore to the thread structure in order to block and unblock the threads. 
    With consideration of complexity, we chose and put all sleeping threads in an ordered list based on their waking time. 
     `,
      title2: `Task 1 - Priority Scheduling`,
      text2: `    The objects of this task were priority scheduling, priority donation and advanced scheduler. The challenges here included synchronisation and structure design.
    We spent a lot of time designing and changing the structures to deal with different cases in priority donation, such as multiple donations and nested donations.
    We ran into a lot of unexpected bugs, but luckily everyone worked hard enough to solve all of them.`,
    },
    {
      title: 'Task 2 - User Program',
      text: `     The object here was to implement argument passing, memory access and system calls. 
    We implemented the required features quite quickly, however for the whole first week, we could not let anything work, even the TAs were unable to figure out the bug.
    We spent a lot of time debugging, staring at the gdb for hours every day, and it turned out that the issue was as simple as an unbroken for loop.
    The simplest bugs are usually hardest to find :)
     `,
      title2: `Task 3 - Virtual Memory`,
      text2: `    The main obejct here was to remove the limitation of memory size. 
    Sub tasks included implementing page table, frame table, swap table and managing memory mapped files. 
    We split in smaller groups to work in parallel in order to ensure efficiency. `,
    },
  ],
  imgLink: `${projectUrl}pintos.jpg`,
  pageLink: `${projectUrl}pintos`,
};

export const projects: Project[] = [DRP, WACC, Pintos];
