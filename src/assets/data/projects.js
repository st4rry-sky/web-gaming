import { v4 as uuidv4 } from 'uuid';
import DevourImg from '../images/devour.jpg';
import BaccaratImg from '../images/baccarat.jpg';
import SlotImg from '../images/sloths.jpg';
import AyodanceImg from '../images/ayodance.jpg';
import Dota2Img from '../images/dota2.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Baccarats Judai',
    desc:
      'The Best Real Money Baccarat Casinos in 2021 Discover the best casinos to play baccarat online.',
    img: BaccaratImg,
  },
  {
    id: uuidv4(),
    name: 'Slot Judai',
    desc:
      'Slot machines make up the majority of online casino gambling. According to the data, the total return of video slots reaches seventy-five percent of online casino income.',
    img: SlotImg,
  },
  {
    id: uuidv4(),
    name: 'Devour Game',
    desc:
      'Beat the game without breaking a sweat? Try Nightmare mode for the ultimate challenge. Multiplayer features Make use of our in-game positional voice chat',
    img: DevourImg,
  },
  {
    id: uuidv4(),
    name: 'Ayodance The Broken Game',
    desc:
      'AyoDance in Indonesia, is a free-to-play multiplayer online casual rhythm game produced by T3 Entertainment. It was originally released in South Korea in 2004 and has been localized by various publishers around the world.  ',
    img: AyodanceImg,
  },
  {
    id: uuidv4(),
    name: 'Dota2',
    desc:
      'Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve.The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment Warcraft III: Reign of Chaos',
    img: Dota2Img,
  },
];

export default projects;
