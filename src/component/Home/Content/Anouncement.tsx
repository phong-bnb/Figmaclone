import { EllipsisOutlined, PushpinOutlined } from "@ant-design/icons";
import DateTele from "../../date";
function Anouncement() {
  return (
    <>
      <div className="md:flex md:flex-col border divide-solid gap-2 w-[360px] lg:w-widthtb rounded-xl">
        <div className="md:flex md:flex-col md:pl-5 gap-2">
          <div className="flex pt-4 xs:gap-16 gap-[21px] items-center">
            <h1 className="pl-3 font-semibold sm:pr-[50px] md:pr-pright">Announcement</h1>
            <DateTele/>
          </div>
          <div className="flex flex-col gap-5 lg:pl-[0px] sm:pl-[10px]">
          <div className="flex justify-between bg-[#ececef] lg:w-[600px] h-[60px] pl-[16px] lg:pr-[16px] pt-[12px] pb-[12px] rounded-md">
            <div >
              <h4 className="sm:align-center">Outing schedule for every departement</h4>
              <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
              </div>
              <div className=" flex gap-3">
              <PushpinOutlined />
              <EllipsisOutlined />
              </div>
            </div>
            <div>
            <div className="flex justify-between  pl-[16px] pr-[16px] pt-[12px] pb-[12px] rounded-md">
            <div className=" flex justify-between bg-[#ececef] lg:w-[600px] h-[60px] rounded-md">
            <div>
              <h4>Outing schedule for every departement</h4>
              <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
              </div>
              <div className=" flex gap-3">
              <PushpinOutlined />
              <EllipsisOutlined />
              </div>
            </div>
            </div>
            </div>
           <div className="flex justify-between bg-[#ececef] lg:w-[600px]  h-[60px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] rounded-md">
            <div>
              <h4>Outing schedule for every departement</h4>
              <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
              </div>
              <div className=" flex gap-3">
              <PushpinOutlined />
              <EllipsisOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Anouncement;
