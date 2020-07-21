import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bienvenue au',
  name: 'CentreÉvangéliqueNéhémie',
  subtitle: "Faisons le possible, laissons l'impossible à Dieu",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'centreevangeliqeunehemie.jpeg',
  paragraphOne:
    'Nous croyons en Dieu sa Parole et sa création son dessein rédempteur en Christ pour le monde et sa présence par le Saint-Esprit',
  paragraphTwo:
    'Nous apprécions les églises locales du monde entier qui sont marquées par une saine doctrine, le culte pentecôtiste, le ministère de chaque membre, des relations aimantes, une évangélisation par le Saint-Esprit, une proclamation ointe et une expression pratique de la foi chrétienne.',
  paragraphThree:
    'Nous apprécions une fraternité coopérative qui améliore la capacité de léglise à remplir son mandat, à travers un leadership serviteur, une vision partagée, des structures flexibles et une mobilisation stratégique de ses ressources.',
  resume: 'https://paoc.org/fr/famille/qui-nous-sommes/présentation', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'service du 17.05.2020-2.png',
    title: 'Service du Dimanche 17 Mai 2020',
    info: 'Service maison',
    info2: '',
    url: 'https://www.youtube.com/watch?v=5hbmGvHoYF0',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'service du 26.04.2020.png',
    title: 'Service du Dimanche 26 Avril 2020',
    info: 'Service maison',
    info2: '',
    url: 'https://www.youtube.com/watch?v=VODy8w-BSf4',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Pour les requêtes de prière ou autres questions',
  btn: 'Cliquez pour envoyer',
  email: 'shemitheos@yahoo.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCL5HJlBtWlJN0g2PeQKhDZw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
