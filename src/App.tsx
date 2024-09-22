// Importing dependencies 
import { Outlet } from 'react-router-dom'

// Component imports
import TopBar from './modules/TopBar'
import SideBar from './modules/SideBar'

// Function imports
import useDisableCopyPaste from './functions/useDisableCopyPaste'

function App() {
  useDisableCopyPaste({ enableOnInputFields: true });

  return (
    <>
      <div className="select-none h-screen bg-gray-700 flex flex-col">
        {/* TopBar */}
        <TopBar />

        {/* Main content area */}
        <div className="flex flex-grow">
          {/* Sidebar with a fixed width */}
          <div className="w-72">
            <SideBar />
          </div>

          {/* Content area that fills the remaining space */}
          <div className="flex-grow p-4 overflow-auto">
            <div className="flex items-center justify-center h-full">
              <Outlet />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
