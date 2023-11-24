import {
  BellFilled,
  DownOutlined,
  MessageFilled,
  SearchOutlined,
} from "@ant-design/icons";
import avt from "../../../assets/avt.jpg"
import Button1 from "../Navbar/button1";

function SiderBar() {
  return (
    <div className="flex justify-between items-center  w-full tb:h-[61px] border-b border-gray-300">
      <div className="lg:hidden flex gap-4">
     <div className="pb-1">
     <Button1/>
     </div>
        <SearchOutlined className="text-gray-400 pt-2 md:hidden" />
      </div>

     <div className="flex md:justify-between lg:w-full md:w-full">
     <div className="hidden md:block lg:block relative py-[24px] px-[16px]">
        <input
          type="text"
          placeholder="Search"
          className=" py-[10px] px-[16px] g-slate-400  h-8 lg:w-[311px] border border-solid border-gray-300 rounded relative "
        />
        <SearchOutlined className="absolute  inset-y-0 right-5 flex items-center pointer-events-none text-gray-400" />
      </div>
      <div className="flex gap-[20px]">
        <BellFilled
          style={{ color: "#686868", borderColor: "#EFEFEF", borderRadius: 4 }}
        />
        <MessageFilled
          style={{ color: "#686868", borderColor: "#EFEFEF", borderRadius: 4 }}
        />
        <div className="flex gap-4 xs:pb-2 pt-4">
          <img
            src={avt}
            alt="avt"
            className="w-[42px] h-[42px] rounded-full"
          />
          <div className="flex gap-[4px]">
            <h3 className="font-medium text-[#161E54] text-base pt-2 md:hidden xs:hidden lg:block">
              {" "}
              Admirra John
            </h3>
           <div className="pt-2">
           <DownOutlined
              style={{
                color: "#686868",
                borderColor: "#EFEFEF",
                borderRadius: 4,
              }}
            />
           </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}
export default SiderBar;
