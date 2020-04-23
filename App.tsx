import React from 'react';
import '@expo/match-media';
import { Platform, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Navigation } from './navigation';
import { StorybookUI } from './storybook/index';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'orange',
  },
};

export default function App() {
  // Manually activate Storybook here
  if (process.env.STORYBOOK_ACTIVE === 'true') {
    return (
      <StorybookUI />
    )
  }
  return (
    <PaperProvider theme={theme}>
      {Platform.OS === 'ios' && (
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      )}
      <Navigation />
    </PaperProvider>
  );
}
