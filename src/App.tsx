import Navbar from './component/Home/Navbar/navbar'
import Content from './component/Home/Content/Content'
function App() {
  return (
    <>
    <div className='flex'>
    <Navbar/>
    <div className='flex md:flex-col w-full'>
    <Content/>
    </div>
    </div>
    </>  
  )
}
export default App
