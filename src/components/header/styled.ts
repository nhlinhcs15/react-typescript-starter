import styled from 'styled-components';
import { ScreenSize } from '../../ulti';

export const Root = styled.div`
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: overlay;
  position: relative;
`;

export const ContentRoot = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  font-family: 'Concert One';
`;

export const WelcomeRoot = styled.div`
  font-size: 1.75em;
  margin: 20px 8px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${ScreenSize.sm}px) {
    margin-top: 10%;
    margin-bottom: 10%;
  }
  @media (min-width: ${ScreenSize.md}px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;
export const SologanRoot = styled.div`
  margin-top: 24px;
  max-width: ${ScreenSize.sm}px;
  font-size: 0.8em;
`;

export const SologanText = styled.span`
  font-family: Damion;
  text-align: ${(p: { margin?: 'left' | 'center' | 'right' | 'justify' }) => 'initial'};
`;
