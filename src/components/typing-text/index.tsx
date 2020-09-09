import React from 'react';
import styled, { keyframes } from 'styled-components';
import { wait } from '../../ulti';

const animation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Root = styled.span`
  color: seagreen;
  font-family: 'Orbitron';
  :after {
    content: '|';
    font-weight: 900;
    animation: ${animation} 1s infinite;
  }
`;

type Props = {
  children: string;
};

type States = {
  displayText: string;
};

const initState = Object.freeze<States>({
  displayText: '',
});

export class TypingText extends React.Component<Props, States> {
  state = initState;
  running?: Promise<void>;
  UNSAFE_componentWillReceiveProps(nextProps: Readonly<Props>) {
    this.run(nextProps.children);
  }
  componentDidMount() {
    this.run(this.props.children);
  }

  run(text: string) {
    this.setState(initState, () => {
      if (this.token) {
        this.token.cancel = true;
      }
      const txtArr = text.split('||');
      this.token = { cancel: false };
      this.typingText(txtArr, this.token);
    });
  }

  token?: { cancel: boolean };
  do = async (callback: () => void) => {};
  async typingText(txtArr: string[], token?: { cancel: boolean }) {
    const stop = () => {
      if (token?.cancel) {
        throw new Error('Promise canceled.');
      }
    };
    while (true) {
      stop();
      for (const text of txtArr) {
        stop();
        for (const c of text) {
          stop();
          await wait(100);
          stop();
          const displayText = this.state.displayText + c;
          this.setState({ displayText });
        }
        stop();
        await wait(2000);
        stop();
        await this.clearText();
        stop();
        await wait(1000);
      }
    }
  }

  async clearText() {
    while (this.state.displayText.length > 0) {
      await wait(50);
      const text = this.state.displayText;
      this.setState({ displayText: text.slice(0, text.length - 1) });
    }
  }

  render() {
    return <Root>{this.state.displayText}</Root>;
  }
}
