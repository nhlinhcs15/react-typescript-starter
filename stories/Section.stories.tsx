import { action } from "@storybook/addon-actions";
import centered from '@storybook/addon-centered/react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Section from "../src/components/Section";

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ options: { panelPosition: 'bottom' } })

  .add('default', () => {
    return (
      <Section title="What is Lorem Ipsum?">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Section>
    );
  })
  .add("with title color", () => {
    return (
      <Section title="What is Lorem Ipsum?" titleColor={color("Title Color", "#123456")}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Section>
    );
  })
  .add("with action", () => {
    return (
      <Section 
        title="What is Lorem Ipsum?" 
        titleColor={color("Title Color", "#123456")}
        action={action("Clicked!")}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry</Section>
    );
  });