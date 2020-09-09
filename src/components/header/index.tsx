import React from 'react';
import { BgImg } from '../bg-img';
import { TypingText } from '../typing-text';
import { ContentRoot, Root, SologanRoot, SologanText, WelcomeRoot } from './styled';

type Props = {};

export const Header: React.FunctionComponent<Props> = (props) => {
  return (
    <Root>
      <BgImg src={`${process.env.PUBLIC_URL}/assets/gif/bg.gif`} />
      <ContentRoot>
        <WelcomeRoot>
          <span>Hi!</span>
          <span>
            I'm<TypingText> Linh,|| a developer.</TypingText>
          </span>
          <SologanRoot>
            <SologanText>"Somebody said programing is a boring thing. But with me, it's like a pretty girl!"</SologanText>
          </SologanRoot>
        </WelcomeRoot>
      </ContentRoot>
    </Root>
  );
};
