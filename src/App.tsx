import Navbar from "./component/Home/Navbar/navbar";
import Content from "./component/Home/Content/Content";
function App() {
  return (
    <div className="">
      <div className="grid md:flex lg:grid-cols-[242px_calc(100%_-_242px)] mr-12">
        <div>
          <Navbar />
        </div>
        <div className="flex md:flex-col w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}
export default App;
