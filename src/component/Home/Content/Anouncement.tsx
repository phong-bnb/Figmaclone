import DateTele from "../../date";
import Chedule from "../../chedule";
function Anouncement() {
  return (
    <>
      <div className="relative flex flex-col tb:w-full border divide-solid gap-2 mx-5 md:mx-0 rounded-xl">
        <div className="flex flex-col gap-[17px]  xs:px-[20px] ">
          <div className="flex pt-4 justify-between gap-4 w-full items-center">
            <h1 className=" font-semibold ">Announcement</h1>
            <DateTele />
          </div>
          <div className="flex flex-col gap-[8px] w-full  md:px-0 ">
            <div className="flex rounded-lg w-full">
              <Chedule />
            </div>
            <Chedule />
            <Chedule />
          </div>
        </div>
        <div className="absolute bottom-0 bg-[white] w-full">
          <h1 className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl text-center text-[14px] font-semibold p-[10px]">
            See All Announcement
          </h1>
        </div>
      </div>
    </>
  );
}
export default Anouncement;
