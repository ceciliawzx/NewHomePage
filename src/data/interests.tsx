import { Interest, InterestType } from '../util/types';
import { interestUrl } from './data';

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
  {
    title: InterestType.Traveling,
    intro: `Read ten thousand books, travel ten thousand miles.`,
    description: `I love traveling.`,
    imgLink: `${interestUrl}traveling.jpg`
  },
  {
    title: InterestType.Food,
    intro: `Live for love and love for food.`,
    description: ``,
    imgLink: `${interestUrl}food.jpg`,
  },
];
