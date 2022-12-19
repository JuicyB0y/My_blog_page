import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import { AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import ScreenEgg from '../ScreenEgg';
const socialNetworks = [
  {
    id: 1,
    href: 'https://github.com/JuicyB0y',
    icon: AiFillYoutube,
  },
  {
    id: 2,
    href: 'https://github.com/JuicyB0y',
    icon: AiFillTwitterCircle,
  },
  {
    id: 3,
    href: 'https://github.com/JuicyB0y',
    icon: AiFillInstagram,
  },
  {
    id: 4,
    href: 'https://github.com/JuicyB0y',
    icon: AiFillGithub,
  },
];

const SocialNetwork = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((item) => (
          <li key={item.id}>
            <a href={item.href} target="_blank" rel="noreferrer" className={styles.listLink}>
              {React.createElement(item.icon, { color: 'black', size: 50 })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetwork;
