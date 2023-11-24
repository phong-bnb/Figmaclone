import {
  BellFilled,
  DownOutlined,
  MessageFilled,
  SearchOutlined,
} from "@ant-design/icons";
import avt from "../../../assets/avt.jpg"

function SiderBar() {
  return (
    <div className="flex justify-between items-center  lg:w-full md:w-full tb:h-[61px] border-b border-gray-300">
      <div className="lg:hidden">
        <SearchOutlined className="text-gray-400" />
      </div>

      <div className="hidden lg:block relative py-[24px] px-[16px]">
        <input
          type="text"
          placeholder="Search"
          className=" py-[10px] px-[16px] g-slate-400 lg:h-[44px] h-8 border border-solid border-gray-300 rounded relative "
        />
        <SearchOutlined className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400" />
      </div>
      <div className="flex gap-[30px]">
        <BellFilled
          style={{ color: "#686868", borderColor: "#EFEFEF", borderRadius: 4 }}
        />
        <MessageFilled
          style={{ color: "#686868", borderColor: "#EFEFEF", borderRadius: 4 }}
        />
        <div className="flex gap-4">
          <img
            src={avt}
            alt="avt"
            className="w-[42px] h-[42px] rounded-full"
          />
          <div className="flex gap-[4px]">
            <h3 className="font-medium text-[#161E54] text-base pt-2">
              {" "}
              Admirra John
            </h3>
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
  );
}
export default SiderBar;
