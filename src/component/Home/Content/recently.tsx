import { EllipsisOutlined, PushpinOutlined } from "@ant-design/icons";
import DateTele from "../../date";
function Recently() {
  return (
    <>
      <div className="relative flex flex-col rounded-xl gap-5">
        <div className="flex flex-col bg-[#121843] lg:w-[427px] md:w-[360px] xs:w-[300px] rounded-lg ">
          <h1 className="bg-[#1b204a] pl-[24px] pt-[10px] pr-[10px] pb-[10px] text-lg text-[#FFF] font-normal rounded-lg">
            Recently Activity
          </h1>
          <div className=" gap-[6px] flex lg:w-[427px] md:w-[360px] xs:w-[320px] pl-[24px] xs:pr-1 pr-[63px] flex-col">
            <p className="text-graytext text-xs pt-6">
              10.40 AM, Fri 10 Sept 2021
            </p>
            <h2 className="text-white font-semibold text-lg">
              You Posted a New Job
            </h2>
            <p className="text-white text-sm">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>
            <div className="flex xs:flex-wrap gap-3 pt-[18px] pb-[26px]">
              <p className="text-[#FFF] text-base text-center pt-1">
                Today you makes 12 Activity
              </p>
              <div className="bg-[#ff5151] text-center rounded-lg">
                <h3 className="text-[#FFF] text-sm py-[10px] px-[16px]">See All Activity</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:flex lg:flex-col border divide-solid lg:gap-2 xs:gap-10 rounded-xl">
        <div className="flex flex-col lg:w-[427px] md:w-[360px] xs:w-[300px] lg:pl-5 lg:pr-5 gap-[17px] xs:pl-5 xs:pr-5">
          <div className="flex pt-4 lg:gap-10 xs:gap-16 items-center">
            <h1 className="text-base font-medium lg:w-[235px] xs:w-[185px]">
              Upcoming Schedule
            </h1>
            <DateTele />
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
            <div className=" flex justify-between bg-[#FAFAFA] lg:w-[600px] border-[1px] rounded-lg  gap-[95px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
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
        <div className="absolute bottom-0 bg-[white] xs:w-[300px] lg:w-[427px]">
          <h1 className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl p-[10px] text-center font-semibold ">
            See All Announcement
          </h1>
        </div>
        </div>
       
      </div>
    </>
  );
}
export default Recently;
