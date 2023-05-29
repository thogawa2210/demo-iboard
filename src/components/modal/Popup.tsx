import React, { useState, Suspense } from 'react';

interface PopupProps {
    chartComponent: React.LazyExoticComponent<React.ComponentType<any>>;
    chartProps?: React.ComponentProps<any>;
  }

const Popup: React.FC<PopupProps> = ({ chartComponent: LazyComponent, chartProps}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openPopup}
      >
        Open Popup
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent {...chartProps}/>
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
