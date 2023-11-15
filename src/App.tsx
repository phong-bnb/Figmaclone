import Navbar from './component/Home/Navbar/navbar'
import Content from './component/Home/Content/Content'
import SiderBar from './component/Home/SiderBar/SiderBar'
function App() {
  return (
    <>
    <div className='flex '>
    <Navbar/>
    <div className='flex flex-col w-screen'>
    <SiderBar/>
    <Content/>
    </div>
    </div>
    </>  
  )
}
export default App
