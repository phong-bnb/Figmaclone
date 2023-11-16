import Navbar from './component/Home/Navbar/navbar'
import Content from './component/Home/Content/Content'
function App() {
  return (
    <>
    <div className='flex pr-[50px] '>
    <Navbar/>
    <div className='flex flex-col w-screen'>
    <Content/>
    </div>
    </div>
    </>  
  )
}
export default App
