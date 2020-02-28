import React, { useState } from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import './storybook.css';

// this section is config of state, uncomment to use
/*
function Stage({ children, ...props }) {
  const [state, setState] = useState({});
  return <div {...props}>{children(state, setState)}</div>;
}

function State({ state, ...props }) {
  return (
    <div {...props}>
      Parent state: <pre>{JSON.stringify(state)}</pre>
    </div>
  );
}

addDecorator((story) => (
  <Stage>
    {(state, setState) => (
      <div style={{ display: 'flex', flexFlow: 'column' }}>
        {story({ state, setState })}
        <State state={state} />
      </div>
    )}
  </Stage>
));
*/

const viewports = {
  laptopL: {
    name: 'Laptop L - 1440px',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
  laptop: {
    name: 'Laptop - 1024px',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  tablet: {
    name: 'Tablet - 768px',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  mobileL: {
    name: 'Mobile L - 425px',
    styles: {
      width: '425px',
      height: '100%',
    },
  },
  mobileM: {
    name: 'Mobile M - 375px',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  mobileS: {
    name: 'Mobile S - 320px',
    styles: {
      width: '320px',
      height: '100%',
    },
  },
};

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

addParameters({
  backgrounds: [{ name: '#f1f1f1', value: '#f1f1f1', default: true }],
});

addParameters({
  viewport: {
    viewports: viewports, // newViewports would be an ViewportMap. (see below for examples)
    // defaultViewport: 'laptopL',
  },
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
