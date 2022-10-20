import { DiPython, DiNodejs } from 'react-icons/di';
import { SiPostgresql, SiPandas } from 'react-icons/si';

export const outerCircleIcons = [
  <DiPython />,
  <SiPandas />,
  <SiPostgresql />,
  <DiNodejs />,
];

export const aboutMeData = [
  {
    title: 'Machine Learning Engineer',
    location: 'Currently living in Lisbon, Portugal',
    descr:
      'Experienced in all phases of the software development lifecycle, from concept to delivery. Consistently praised for being a hands-on, detail-oriented quick learner who is dedicated to his roles and deadlines.',
  },
];

let it = 0;
export const aboutMeList = [
  {
    id: it++,
    title: '1',
    descr: 'Publication',
  },
  {
    id: it++,
    title: '4+',
    descr: 'Years of Experience',
  }
];
