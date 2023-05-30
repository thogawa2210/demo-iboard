import React, { useState } from 'react';
import Modal from './Modal';

const ParentComponent: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false);

  const onProceed = () => {
    console.log("Proceed clicked");
  };

  return (
    <div>
      <button onClick={() => setIsOpened(true)}>Open "dialog" modal</button>

      <Modal
        title="Dialog modal example"
        isOpened={isOpened}
        onProceed={onProceed}
        onClose={() => setIsOpened(false)}
      >
        <p>To close: click Close, press Escape, or click outside.</p>
      </Modal>
    </div>
  );
};

export default ParentComponent;
