import { MessageOutlined, NotificationOutlined, SearchOutlined } from "@ant-design/icons";

function SiderBar() {
  return (
    <div className="flex justify-between items-center xl:w-widthtb w-[360px] lg:h-16 md:h-12 h-10 border-b border-gray-500">
   <div className="lg:hidden">
  <SearchOutlined className="text-gray-400" />
</div>

<div className="hidden lg:block relative">
  <input
    type="text"
    placeholder="Search"
    className="pl-8 pr-10 g-slate-400 h-8 border border-solid border-gray-500 rounded relative"
  />
  <SearchOutlined className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400" />
</div>
<div className="flex gap-4">
<NotificationOutlined/>
<MessageOutlined />
<div className="flex gap-4">
  <img src="./dist\avt.jpg" alt="avt" className="w-[20px] h-[20px] rounded-full"/>
</div>
</div>
    </div>
   
  );
}
export default SiderBar;
