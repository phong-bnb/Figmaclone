import MainmenuNavbar from "./mainmenu";
import OrtherOfNavbar from "./orther";
import SiderBarofNavBar from "./sidebar";
import Button1 from "./button1";
function Navbar() {
  

  return (
    <div>
      <div className="hidden lg:flex max-w-[450px]:hidden w-[242px] p-[20px_0px_272px_0px] flex-col gap-39 text-center bg-white flex-shrink-0">
        <div>
          <SiderBarofNavBar />
          <MainmenuNavbar />
          <OrtherOfNavbar />
        </div>
      </div>
      <Button1/>
    </div>
  );
}

export default Navbar;
