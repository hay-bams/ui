import { DecoratorFn } from '@storybook/react';
import {AppContainer} from '../src/App';

const withAppContainer: DecoratorFn = (StoryFn) => (
  <AppContainer>
    <StoryFn />
  </AppContainer>
);


export const globalDecorators = [withAppContainer]