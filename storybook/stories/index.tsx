import React from 'react';
import { Text } from 'react-native';

import { storiesOf, getStorybookUI } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onPress={() => { console.log('!') }}>
      <Text>{text("Label", "Hello Button!")}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      { boolean("Show emoji", true) ? (
        <Text>😀 😎 👍 💯</Text>
      ) : (
        <Text>No emoji</Text>
      )}
    </Button>
  ), {notes: 'lorem ipsum'});
