// Component imports
import TopBar from './components/TopBar'

//Function imports
import useDisableCopyPaste from './functions/useDisableCopyPaste'

// Some stuff 
//import NotificationCard from './modules/NotificationCard'
//import LoginForm from './components/LoginForm';

function App() {
  useDisableCopyPaste({ enableOnInputFields: true });

  return (
    <>

      <div className='select-none h-screen w-screen bg-gradient-to-br from-purple-700 to-purple-950'>
        <TopBar />







      </div>
    </>
  )
}

export default App
