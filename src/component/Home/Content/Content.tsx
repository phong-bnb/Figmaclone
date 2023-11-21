import Anouncement from "./Anouncement";
import Dashbroard from "./dashbroad";
import Recently from "./recently";
import SiderBar from "../SiderBar/SiderBar";
function Content() {
  return (
    <> 
   <div className=" md:flex md:flex-col md:w-[1190px] space-between">
   <div className="md:flex md:flex-col md:pl-50px">
   <SiderBar/>
    <h1 className="font-semibold text-3xl pb-3">Dashboard</h1>
   </div>
      <div className="md:flex gap-[30px]">
        <div className="md:flex md:flex-col md:pl-50px">
          <Dashbroard />
          <Anouncement />
        </div>
        <div className="flex">
          <Recently />
        </div>
      </div>
   </div>
    </>
  );
}
export default Content;
