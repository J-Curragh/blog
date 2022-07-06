import React from 'react';
import * as S from './style';

import { ReactComponent as Github } from './assets/Github.svg';
import { ReactComponent as Spotify } from './assets/Spotify.svg';
import { ReactComponent as Discord } from './assets/Discord.svg';
import { ReactComponent as Twitter } from './assets/Twitter.svg';
// import { ReactComponent as League} from './assets/LGW.svg';
import { ReactComponent as Blog } from './assets/Blog.svg';
import { Badge } from '../Badge';
import { Socials } from '../../../constants/Socials';
import { Projects } from '../../../constants/Projects';

// Desktop-only component
export const Social = (props: {}) => {
  const DEFAULT_WIDTH = 32;
  const DEFAULT_HEIGHT = 32;
  return (
    <S.Container>
      <S.Section>
        <h1>Social</h1>
        <Badge href={Socials.Github.uri} label={Socials.Github.title}>
          <Github width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
        </Badge>
        <Badge href={Socials.Spotify.uri} label={Socials.Spotify.title}>
          <Spotify width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
        </Badge>
        <Badge href={Socials.Discord.uri} label={Socials.Discord.title}>
          <Discord width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
        </Badge>
        <Badge href={Socials.Twitter.uri} label={Socials.Twitter.title}>
          <Twitter width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
        </Badge>
      </S.Section>
      <S.Section>
        <h1>Projects</h1>
        <Badge href={Projects.Blog.uri} label={Projects.Blog.title}>
          <Blog width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
        </Badge>
      </S.Section>
    </S.Container>
  );
};
