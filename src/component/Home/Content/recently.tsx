import { EllipsisOutlined } from "@ant-design/icons";
import DateTele from "../../date";
function Recently() {
  return (
    <>
      <div className="relative flex flex-col rounded-xl md:gap-5">
        <div className="flex flex-col bg-[#121843] md:w-[427px] xs:w-[359px] h-[258px] rounded-lg ">
          <h1 className="bg-[#1b204a] md:w-[427px] xs:w-[359px] text-violetpink pt-2 text-xl h-[70px] rounded-t-lg pl-3 ">
            Recently Activity
          </h1>
          <div className="pr-16 pl-6 flex w-[427px] h-[424px] flex-col gap-3">
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
            <div className="flex gap-3 w-[369px]">
              <p className="text-white pt-1 text-base">
                Today you makes 12 Activity
              </p>
              <div className="bg-[#ff5151] md:w-[149px] xs:w-[110px] md:h-[38px] text-center rounded-lg">
                <h3 className="text-[#ffffff] pt-1">See All Activity</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-[427px] xs:w-[359px] border divide-solid rounded-xl gap-5 md:pl-5 md:pr-5 xs:pl-5 xs:pr-5 ">
          <div className="flex md:w-[427px] xs:w-[359px] xs:pr-4 pt-4">
            <h1 className="font-semibold text-xl md:w-[235px] xs:w-[185px]">
              Upcoming Schedule
            </h1>
            <DateTele />
          </div>
          <div className="flex flex-col gap-y-5 ">
            <p className="text-l text-graytext pl-4">Priority</p>
            <div className="flex justify-between rounded-md">
              <div className=" flex justify-between bg-[#ececef] lg:w-[600px]  h-[60px] xs:h-[80px] rounded-md">
                <div className="pl-[16px] pr-[16px] pt-[12px] pb-[12px] xs:w-[274px] ">
                  <h4>Review candidate applications</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-3 pr-6">
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
            <div className="flex justify-between rounded-md">
              <div className=" flex justify-between bg-[#ececef] lg:w-[600px] h-[60px] xs:h-[80px] rounded-md">
                <div className="pl-[16px] pr-[16px] pt-[12px] pb-[12px] xs:w-[274px]">
                  <h4>Interview with candidates</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-3 pr-6">
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
                <div className=" flex gap-3 pr-6">
                  <EllipsisOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 bg-[white] xs:w-[358px] md:w-[426px]">
          <h1 className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl text-center font-semibold h-[40px]">
            See All Announcement
          </h1>
        </div>
      </div>
    </>
  );
}
export default Recently;
