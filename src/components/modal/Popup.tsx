import React, { useState, Suspense, lazy } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  component: React.ComponentType<any> | null;
  componentProps?: any;
}

const LazyComponent = ({ Component, componentProps }: { Component: React.ComponentType<any>; componentProps: any }) => {
  const LazyLoadedComponent = lazy(() => import(`./components/${Component}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedComponent {...componentProps} />
    </Suspense>
  );
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, component: Component, componentProps }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                Close
              </button>
            </div>
            <div className="mt-4">
            {Component && <LazyComponent Component={Component} componentProps={componentProps} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
