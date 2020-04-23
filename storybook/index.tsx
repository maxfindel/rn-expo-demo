import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import '@storybook/addon-ondevice-knobs/register';
import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-actions/register';


// import stories
configure(() => {
  require('./stories/index');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export const StorybookUI = getStorybookUI({
  onDeviceUI: true,
  secured: true,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);

export default StorybookUI;
