import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ButtonLink } from '../base';
import { Root } from './styled';

type Props = {};

type States = {};

export class NavigationBar extends React.Component<Props, States> {
  render() {
    return (
      <Root>
        <HashRouter basename="/">
          <ButtonLink to="/home">Home</ButtonLink>
        </HashRouter>
      </Root>
    );
  }
}
