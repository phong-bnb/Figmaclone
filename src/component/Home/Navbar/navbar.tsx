import MainmenuNavbar from "./mainmenu";
import OrtherOfNavbar from "./orther";
function Navbar() {
  return (
    <>
      <div className="flex w-[242px] h-screen p-[20px_0px_272px_0px] flex-col gap-39 text-center bg-white flex-shrink-0">
        <MainmenuNavbar />
        <OrtherOfNavbar />
      </div>
    </>
  );
}

export default Navbar;
