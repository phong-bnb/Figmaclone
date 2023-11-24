import IconOfChedule from "./icons/PushandEllipIcon";

const Chedule = ()=>{
    return(
        <div className=" flex justify-between bg-[#FAFAFA] w-full border-[1px] rounded-lg pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <h4 className="font-normal">Outing schedule for every departement</h4>
                  <p className="text-xs text-graytext">Yesterday, 12:30 PM</p>
                </div>
                <div className=" flex gap-[20px]">
                  <IconOfChedule/>
                </div>
              </div>
    )
}
export default Chedule;