import { useState } from 'react';
import RegistrationCard from './organisms/RegistrationCard';
import Button from './atoms/Button';
import Modal from './organisms/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button text='Sign Up' action={openModal} />

      {isOpen && (
        <Modal onClose={closeModal}>
          <RegistrationCard />
        </Modal>
      )}
    </div>
  );
}

export default App;
