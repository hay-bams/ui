import {useState} from 'react';
import styled from 'styled-components';

import {Button} from 'components/Button';
import {Modal} from 'components/Modal';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <AppContainer>
      <Button size="xs" variant="filled" onClick={() => setShowModal(true)}>
        Show Modal
      </Button>
      <Modal open={showModal} onClose={() => setShowModal(false)} />
    </AppContainer>
  );
};

export default App;
