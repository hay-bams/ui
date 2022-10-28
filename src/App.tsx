import { Btn } from 'components/Btn/Btn';
import {Button} from 'components/Button';
// import { ButtonUnstyled } from 'components/ButtonUnstyled';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const App = () => (
  <AppContainer>
    {/* <Button variant='default' /> */}

    <Btn>Log out</Btn>

    {/* <ButtonUnstyled /> */}
  </AppContainer>
);

export default App;
