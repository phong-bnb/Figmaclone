import DateTele from "../../date";
import Chedule from "../../chedule";
import { useState } from "react";
function Anouncement() {
  const [isShow, setIsShow] = useState(false);
  const showAll = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="relative flex flex-col tb:w-full  border divide-solid gap-2 mx-5 md:mx-0 rounded-xl">
        <div className="flex flex-col gap-[17px]  xs:px-[20px] w-full ">
          <div className="flex pt-4 justify-between gap-4 w-full items-center">
            <h1 className=" font-semibold ">Announcement</h1>
            <DateTele />
          </div>
          <div className="flex cursor-pointer flex-col gap-[8px] w-full md:px-0 ">
            <Chedule />
            <Chedule />
            <Chedule />

            {isShow ? (
              <div className="flex cursor-pointer flex-col gap-[8px]">
                <Chedule />
                <Chedule />
                <Chedule />
                <Chedule />
                <Chedule />
                <Chedule />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {
          !isShow ?  <button
          className="absolute bottom-0 bg-[white] w-full"
          onClick={showAll}
        >
          <h1 className="text-[#FF5151] border divide-solid rounded-es-xl rounded-ee-xl text-center text-[14px] font-semibold p-[10px]">
            See All Announcement
          </h1>
        </button> : ''
        }
       
      </div>
    </>
  );
}
export default Anouncement;
