import React from "react";
import {
  List,
  Link,
} from './styled';
import telegram from './img/telegram.svg';
import github from './img/github.svg';
import upwork from './img/upwork.png';

interface Links {
  href: string;
  title: string;
  icon: string;
}

const links = [
  {
    title: 'telegram',
    href: 'tg://resolve?domain=pure_code',
    icon: telegram,
  },
  {
    title: 'github',
    href: 'https://github.com/pure-code',
    icon: github,
  },
  {
    title: 'upwork',
    href: 'https://www.upwork.com/o/profiles/users/_~0192f5835e541f3b30/',
    icon: upwork,
  }
];

const Social: React.FC = ()=> (

  <List>
    {
      links.map( ({href, title, icon}: Links) =>
        <Link
          key={icon}
          icon={icon}
          href={href}
          title={title}
          target='_blank'
          rel="noopener noreferrer" />
      )
    }

  </List>
);

export default Social;
