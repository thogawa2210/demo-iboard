import { useState, useEffect, lazy, useRef, Suspense } from "react";

const TestChart = lazy(() => import("./components/chartWrap/TestChart"));

function App() {
  const ref = useRef<any>(null);
  const [show, toggle] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (show) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [ref, show]);

  return (
    <div className="">
      <button className="p-2 bg-blue-500 text-white rounded m-1" onClick={() => toggle(!show)}>
        Open
      </button>
      <dialog
        ref={ref}
        // className={`dialog ${show ? "open opacity-100" : "opacity-0"}`}
        onClick={(e) => {
          const dialogDimensions = ref.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            toggle(false);
            ref.current.close();
          }
        }}
      >
        {/* <ChartContainer /> */}
        <Suspense fallback={<div>Loading...</div>}>
          {show && (
            <div className="w-screen">
              <TestChart />
            </div>
          )}
        </Suspense>
        <button className="p-2 bg-red-500 text-white rounded m-1" onClick={() => toggle(!show)}>
          Close
        </button>
      </dialog>
    </div>
  );
}

export default App;
