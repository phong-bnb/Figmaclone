import Anouncement from "./Anouncement";
import Dashbroard from "./dashbroad";
import Recently from "./recently";
import SiderBar from "../SiderBar/SiderBar";
function Content() {
  return (
    <>
      <div className=" md:flex md:flex-col lg:w-full md:w-full xs:w-full ">
        <div className="md:flex md:flex-col px-[20px] ">
          <SiderBar />
          <h1 className="font-semibold text-3xl pb-3 lg:pl-[20px] xs:w-[300px]">
            Dashboard
          </h1>
        </div>
        <div className="flex xs:gap-6 gap-[30px]  md:flex-col lg:flex-row xs:flex-col">
          <div className="flex flex-col lg:pl-[40px] gap-6 md:px-[20px] w-full">
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
