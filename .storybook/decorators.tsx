import {AppContainer} from '../src/App';

const withAppContainer = (StoryFn) => (
  <AppContainer>
    <StoryFn />
  </AppContainer>
);


export const globalDecorators = [withAppContainer]