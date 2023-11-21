import { EllipsisOutlined, PushpinOutlined } from "@ant-design/icons";
import DateTele from "../../date";
function Anouncement() {
  return (
    <>
      <div className="relative md:flex md:flex-col border divide-solid gap-2 w-[360px] lg:w-widthtb rounded-xl">
        <div className="flex flex-col md:pl-5 md:pr-5 md:gap-2 xs:pl-5 xs:pr-5 xs:gap-6">
          <div className="flex pt-4 md:gap-10 xs:gap-16 items-center">
            <h1 className="pl-3 font-semibold sm:pr-[50px] md:pr-pright">
              Announcement
            </h1>
            <DateTele />
          </div>
          <div className="flex flex-col gap-y-5 ">
            <div className="flex justify-between rounded-md">
              <div className=" flex justify-between bg-[#ececef] lg:w-[600px]  md:h-[60px] xs:h-[80px] rounded-md">
                <div className="pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <h4>Outing schedule for every departement</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-3">
                  <PushpinOutlined />
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
            <div className="flex justify-between rounded-md">
              <div className=" flex justify-between bg-[#ececef] lg:w-[600px] h-[60px] xs:h-[80px] rounded-md">
                <div className="pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <h4>Outing schedule for every departement</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-3">
                  <PushpinOutlined />
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
            <div className="flex justify-between rounded-md">
              <div className=" flex justify-between bg-[#ececef] lg:w-[600px] h-[60px] xs:h-[80px] rounded-md">
                <div className="pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
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
        <div className="absolute bottom-0 bg-[white] xs:w-[358px] md:w-[639px]">
              <h1 className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl text-center font-semibold h-[40px]">See All Announcement</h1>
            </div>
      </div>
    </>
  );
}
export default Anouncement;
