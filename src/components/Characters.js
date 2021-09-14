import albertoURL from '../assets/images/alberto.png';
import angerURL from '../assets/images/anger.png';
import arloURL from '../assets/images/arlo.png';
import booURL from '../assets/images/boo.png';
import buzzURL from '../assets/images/buzz.png';
import carlURL from '../assets/images/carl.png';
import danteURL from '../assets/images/dante.png';
import dashURL from '../assets/images/dash.png';
import disgustURL from '../assets/images/disgust.png';
import doryURL from '../assets/images/dory.png';
import dugURL from '../assets/images/dug.png';
import elastigirlURL from '../assets/images/elastigirl.png';
import fearURL from '../assets/images/fear.png';
import flikURL from '../assets/images/flik.png';
import forkyURL from '../assets/images/forky.png';
import frozoneURL from '../assets/images/frozone.png';
import giuliaURL from '../assets/images/giulietta.png';
import joeURL from '../assets/images/joe.png';
import joyURL from '../assets/images/joy.png';
import lucaURL from '../assets/images/luca.png';
import mcqueenURL from '../assets/images/mcqueen.png';
import meridaURL from '../assets/images/merida.png';
import miguelURL from '../assets/images/miguel.png';
import mikeURL from '../assets/images/mike.png';
import mrIncredibleURL from '../assets/images/mr. incredible.png';
import nemoURL from '../assets/images/nemo.png';
import randallURL from '../assets/images/randall.png';
import remyURL from '../assets/images/remy.png';
import russellURL from '../assets/images/russell.png';
import sadnessURL from '../assets/images/sadness.png';
import sulleyURL from '../assets/images/sulley.png';
import towmaterURL from '../assets/images/towmater.png';
import violetURL from '../assets/images/violet.png';
import wallEURL from '../assets/images/wall-e.png';
import woodyURL from '../assets/images/woody.png';
import uniqid from 'uniqid';

const characters = {
  alberto: {
    name: 'Alberto Scorfano',
    url: albertoURL,
    isActive: false,
    id: uniqid(),
  },
  anger: {
    name: 'Anger',
    url: angerURL,
    isActive: false,
    id: uniqid(),
  },
  arlo: {
    name: 'Arlo',
    url: arloURL,
    isActive: false,
    id: uniqid(),
  },
  boo: {
    name: 'Boo',
    url: booURL,
    isActive: false,
    id: uniqid(),
  },
  buzz: {
    name: 'Buzz Lightyear',
    url: buzzURL,
    isActive: false,
    id: uniqid(),
  },
  carl: {
    name: 'Carl Fredricksen',
    url: carlURL,
    isActive: false,
    id: uniqid(),
  },
  dante: {
    name: 'Dante',
    url: danteURL,
    isActive: false,
    id: uniqid(),
  },
  dash: {
    name: 'Dash Parr',
    url: dashURL,
    isActive: false,
    id: uniqid(),
  },
  disgust: {
    name: 'Disgust',
    url: disgustURL,
    isActive: false,
    id: uniqid(),
  },
  dory: {
    name: 'Dory',
    url: doryURL,
    isActive: false,
    id: uniqid(),
  },
  dug: {
    name: 'Dug',
    url: dugURL,
    isActive: false,
    id: uniqid(),
  },
  elastigirl: {
    name: 'Elastigirl',
    url: elastigirlURL,
    isActive: false,
    id: uniqid(),
  },
  fear: {
    name: 'Fear',
    url: fearURL,
    isActive: false,
    id: uniqid(),
  },
  flik: {
    name: 'Flik',
    url: flikURL,
    isActive: false,
    id: uniqid(),
  },
  forky: {
    name: 'Forky',
    url: forkyURL,
    isActive: false,
    id: uniqid(),
  },
  frozone: {
    name: 'Frozone',
    url: frozoneURL,
    isActive: false,
    id: uniqid(),
  },
  giulia: {
    name: 'Giulia Marcovaldo',
    url: giuliaURL,
    isActive: false,
    id: uniqid(),
  },
  joe: {
    name: 'Joe Gardner',
    url: joeURL,
    isActive: false,
    id: uniqid(),
  },
  joy: {
    name: 'Joy',
    url: joyURL,
    isActive: false,
    id: uniqid(),
  },
  luca: {
    name: 'Luca Paguro',
    url: lucaURL,
    isActive: false,
    id: uniqid(),
  },
  mcqueen: {
    name: 'Lightning McQueen',
    url: mcqueenURL,
    isActive: false,
    id: uniqid(),
  },
  merida: {
    name: 'Princess Merida',
    url: meridaURL,
    isActive: false,
    id: uniqid(),
  },
  miguel: {
    name: 'Miguel Rivera',
    url: miguelURL,
    isActive: false,
    id: uniqid(),
  },
  mike: {
    name: 'Mike Wazowski',
    url: mikeURL,
    isActive: false,
    id: uniqid(),
  },
  mrIncredible: {
    name: 'Mr. Incredible',
    url: mrIncredibleURL,
    isActive: false,
    id: uniqid(),
  },
  nemo: {
    name: 'Nemo',
    url: nemoURL,
    isActive: false,
    id: uniqid(),
  },
  randall: {
    name: 'Randall Boggs',
    url: randallURL,
    isActive: false,
    id: uniqid(),
  },
  remy: {
    name: 'Remy',
    url: remyURL,
    isActive: false,
    id: uniqid(),
  },
  russell: {
    name: 'Russell',
    url: russellURL,
    isActive: false,
    id: uniqid(),
  },
  sadness: {
    name: 'Sadness',
    url: sadnessURL,
    isActive: false,
    id: uniqid(),
  },
  sulley: {
    name: 'James P. Sullivan (Sulley)',
    url: sulleyURL,
    isActive: false,
    id: uniqid(),
  },
  towmater: {
    name: 'Sir Tow Mater',
    url: towmaterURL,
    isActive: false,
    id: uniqid(),
  },
  violet: {
    name: 'Violet Parr',
    url: violetURL,
    isActive: false,
    id: uniqid(),
  },
  wallE: {
    name: 'WALL-E',
    url: wallEURL,
    isActive: false,
    id: uniqid(),
  },
  woody: {
    name: 'Sheriff Woody',
    url: woodyURL,
    isActive: false,
    id: uniqid(),
  },
};

export default characters;
