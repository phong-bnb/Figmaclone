import { EllipsisOutlined, PushpinOutlined } from "@ant-design/icons";
import DateTele from "../../date";
function Anouncement() {
  return (
    <>
      <div className="relative lg:flex lg:flex-col border divide-solid lg:gap-2 xs:gap-10 xs:w-[300px] lg:w-widthtb rounded-xl">
        <div className="flex flex-col lg:pl-5 lg:pr-5 gap-[17px] xs:pl-5 xs:pr-5">
          <div className="flex pt-4 lg:gap-10 xs:gap-16 items-center">
            <h1 className="pl-3 font-semibold sm:pr-[50px] w-[427px]">
              Announcement
            </h1>
            <DateTele/>
          </div>
          <div className="flex flex-col gap-[8px] ">
            <div className="flex justify-between rounded-lg">
            <div className=" flex justify-between bg-[#FAFAFA] lg:w-[600px]  border-[1px] rounded-lg  gap-[95px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <h4 className="font-normal">Outing schedule for every departement</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-[20px]">
                  <PushpinOutlined />
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
            <div className="flex justify-between rounded-lg">
            <div className=" flex justify-between bg-[#FAFAFA] lg:w-[600px]  border-[1px] rounded-lg  gap-[95px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <h4 className="font-normal">Outing schedule for every departement</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-[20px]">
                  <PushpinOutlined />
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
            <div className="flex justify-between rounded-lg">
            <div className=" flex justify-between bg-[#FAFAFA] lg:w-[600px]  border-[1px] rounded-lg  gap-[95px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <h4 className="font-normal">Outing schedule for every departement</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-[20px]">
                  <PushpinOutlined />
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="absolute bottom-0 bg-[white] xs:w-[300px] lg:w-[639px]">
              <h1 className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl text-center text-[14px] font-semibold p-[10px]">See All Announcement</h1>
            </div>
      </div>
    </>
  );
}
export default Anouncement;
