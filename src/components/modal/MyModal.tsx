import { useState, lazy, Suspense } from 'react';
import { PRODUCTS } from '../../App';

// Lazy load the component
const ModalContent = lazy(() => import('../filterableProductTable/FilterableProductTable'))

function MyModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal} >Open Modal</button>
      {showModal && (
        <div className="modal-container bg-white w-1/2 rounded-lg shadow-lg">
          <div className="modal-content p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <ModalContent products={PRODUCTS} />
            </Suspense>
          </div>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={closeModal}>
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
}

export default MyModal;
