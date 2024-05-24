import TopBar from './pages/TopBar'
import NotificationCard from './components/NotificationCard'
import useDisableCopyPaste from './functions/useDisableCopyPaste'

function App() {
  useDisableCopyPaste({ enableOnInputFields: true });

  return (
    <>

      <div className='select-none h-screen w-screen bg-gradient-to-br from-purple-700 to-purple-950'>
        <TopBar />
        <NotificationCard />




      </div>
    </>
  )
}

export default App
