import Navbar from './component/Home/Navbar/navbar'
import Content from './component/Home/Content/Content'
function App() {
  return (
    <>
    <div className='flex pr-[50px] space-between '>
    <Navbar/>
    <div className='flex md:flex-col w-screen'>
    <Content/>
    </div>
    </div>
    </>  
  )
}
export default App
