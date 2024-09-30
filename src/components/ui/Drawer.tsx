import { useTheme } from "next-themes";
import { ReactNode, useEffect, useRef } from "react";

const Drawer = ({
  children,
  toggleDrawer,
  isDrawerOpen,
}: {
  children: ReactNode;
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
}) => {
  const { theme } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isDrawerOpen && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        toggleDrawer();
      }
    };
    if (handleOutsideClick) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDrawerOpen, toggleDrawer]);
  return (
    <div
      id="drawer-example"
      ref={drawerRef}
      className={`fixed top-0 left-0 z-10 h-[96vh] p-4 transition-transform bg-white w-80 dark:bg-black ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <div>
          <svg
            fill={theme == "dark" ? "#ffffff" : "#000000"}
            width="40px"
            height="40px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.25 10.71 11.57 8l2.26-2.26a2.49 2.49 0 0 0 0-3.53 2.5 2.5 0 0 0-3.53 0l-.89.88L8 4.5 5.28 1.75a1.26 1.26 0 0 0-1.76 0L1.75 3.52a1.25 1.25 0 0 0 0 1.77L4.5 8l-.22.22-.89.88-1.75 3.66a1.25 1.25 0 0 0 1.67 1.67l3.62-1.75.49-.49.39-.39.19-.23 2.68 2.68a1.26 1.26 0 0 0 1.76 0l1.77-1.77a1.25 1.25 0 0 0 .04-1.77zm-2.19-8a1.27 1.27 0 0 1 .89.36 1.25 1.25 0 0 1 0 1.77l-1.77-1.72a1.27 1.27 0 0 1 .88-.36zM2.63 4.4 4.4 2.64l.82.82-.87.88.88.88.88-.88 1 1-1.73 1.81zm.13 8.91 1.57-3.23L6 11.74zm4.17-2.4L5.16 9.14 10.3 4l1.76 1.76zm4.67 2.45-2.68-2.67 1.77-1.77.93.93-.88.88.88.89.89-.89.86.87z" />
          </svg>
        </div>
        Batch Tools
      </h5>
      <button
        type="button"
        onClick={toggleDrawer}
        aria-controls="drawer-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      <div className=" pb-12 h-full overflow-scroll">{children}</div>
    </div>
  );
};

export default Drawer;
