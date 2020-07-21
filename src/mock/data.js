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
  name: 'Centre Évangélique Néhémie',
  subtitle: "Faisons le possible, laissons l'impossible à Dieu",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'centreevangeliqeunehemie.jpeg',
  paragraphOne:
    'Dieu : sa Parole, sa création, son plan rédempteur pour le monde en Christ et sa présence par le Saint-Esprit. ',
  paragraphTwo:
    'Ceux et celles qui vivent sans Christ et à qui nous devons la compassion de Christ et une occasion de recevoir le salut et d’entrer dans la fraternité chrétienne.  ',

  paragraphThree:
    'Chaque croyant à titre individuel et son engagement envers Christ, le baptême dans le Saint-Esprit, le discipulat, la vie de famille chrétienne et l’accomplissement de la volonté de Dieu.  ',
  paragraphFour:
    'Les églises locales qui, partout dans le monde, sont caractérisées par la saine doctrine, une adoration pentecôtiste, le ministère de chaque membre, des relations fondées sur l’amour, une évangélisation par la puissance du Saint-Esprit, une proclamation sous son onction et une expression pratique de la foi chrétienne.',
  paragraphFive:
    'La collaboration dans la fraternité afin de favoriser la capacité de l’église à remplir son mandat, par un leadership animé d’un esprit de service, une vision partagée, des structures flexibles et une mobilisation stratégique de ses ressources.',
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
