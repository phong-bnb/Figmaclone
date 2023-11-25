import { useState } from "react";
import DateTele from "../../date";
import IconOfChedule from "../../icons/PushandEllipIcon";
function Recently() {
  const [isShow, setIsShow] = useState(false);
  const showAll = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="relative lg:flex lg:flex-col  rounded-xl xs:flex-col md:flex md:flex-row gap-5 lg:px-0 md:w-full xs:w-full xs:px-[20px]">
        <div className="flex flex-col bg-[#121843] md:w-[250px] lg:w-full  rounded-lg ">
          <p className="bg-[#1b204a] pl-[24px] pt-[10px] pr-[10px] pb-[10px] text-lg text-[#FFF] font-normal rounded-lg">
            Recently Activity
          </p>
          <div className="px-[20px] lg:w-full md:w-[250px]">
            <div className=" gap-[6px] flex   xs:px-0 lg:pr-[50px] flex-col">
              <p className="text-graytext text-xs pt-6">
                10.40 AM, Fri 10 Sept 2021
              </p>
              <p className="text-white font-semibold text-lg">
                You Posted a New Job
              </p>
              <p className="text-white text-sm">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
            </div>
            <div className="flex flex-row  xs:flex-wrap justify-between gap-3 pt-[18px] lg:pr-[14px] px-[20px] xs:px-0 pb-[26px]">
              <p className="text-[#FFF] text-base text-center pt-1">
                Today you makes 12 Activity
              </p>
              <button className="bg-[#ff5151] text-center rounded-lg">
                <p className="text-[#FFF] text-sm py-[10px] px-[16px]">
                  See All Activity
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="relative lg:flex lg:flex-col border divide-solid lg:gap-2  rounded-xl">
          <div className=" flex flex-col  overflow-hidden w-full lg:pl-5 lg:pr-5  gap-[10px] xs:pl-5 xs:pr-5">
            <div className="flex pt-[21px] justify-between  xs:gap-16 items-center">
              <p className="text-base font-medium md:w-[250px]">Upcoming Schedule</p>
              <DateTele />
            </div>
            <div className="flex cursor-pointer flex-col gap-[8px] ">
              <p className="text-xs text-graytext">Priority</p>

              <div className="flex justify-between rounded-lg">
                <div className=" flex hover:opacity-50 justify-between bg-[#FAFAFA] w-full  border-[1px] rounded-lg  gap-[29px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <div className="flex  flex-col gap-[6px]">
                    <p className="font-normal">
                      Review candidate applications
                    </p>
                    <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                  </div>
                  <IconOfChedule />
                </div>
              </div>
              <p className="text-xs text-graytext">Priority</p>

              <div className="flex justify-between rounded-lg">
                <div className=" flex hover:opacity-50 justify-between bg-[#FAFAFA] w-full  border-[1px] rounded-lg  gap-[29px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-normal">
                    Short meeting with product designer from IT Departement
                    </p>
                    <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                  </div>
                  <IconOfChedule />
                </div>
              </div>
              <div className="flex justify-between rounded-lg">
                <div className=" flex hover:opacity-50 justify-between bg-[#FAFAFA] w-full  border-[1px] rounded-lg  gap-[29px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-normal">
                      Short meeting with product designer from IT Departement
                    </p>
                    <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                  </div>
                  <IconOfChedule />
                </div>
              </div>
              {
            isShow ? (
              <div className="flex flex-col gap-[8px]">
                <div className="flex justify-between rounded-lg">
                <div className=" flex hover:opacity-50 justify-between bg-[#FAFAFA] w-full  border-[1px] rounded-lg  gap-[29px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-normal">
                      Short meeting with product designer from IT Departement
                    </p>
                    <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                  </div>
                  <IconOfChedule />
                </div>
              </div>
              <div className="flex justify-between rounded-lg">
                <div className=" flex hover:opacity-50 justify-between bg-[#FAFAFA] w-full  border-[1px] rounded-lg  gap-[29px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-normal">
                      Short meeting with product designer from IT Departement
                    </p>
                    <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                  </div>
                  <IconOfChedule />
                </div>
              </div>
              </div>
            ) : ( "")
          }
            </div>
          </div>
          {
            !isShow ?  <button className="absolute bottom-0 bg-[white]  w-full" onClick={showAll}>
            <p className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl p-[10px] text-center font-semibold ">
              See All Announcement
            </p>
          </button> : ""
          }
         
        </div>
      </div>
    </>
  );
}
export default Recently;
