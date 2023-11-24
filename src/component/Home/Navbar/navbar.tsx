import MainmenuNavbar from "./mainmenu";
import OrtherOfNavbar from "./orther";
import SiderBarofNavBar from "./sidebar";
function Navbar() {
  

  return (
    <div className="md:flex">
      <div className="xs:hidden h-screen lg:flex md:flex lg:max-w-[450px]:hidden md:w-[90px] lg:w-[242px] p-[20px_0px_0px_0px] flex-col gap-39 text-center bg-white flex-shrink-0">
        <div>
          <SiderBarofNavBar />
          <MainmenuNavbar />
          <OrtherOfNavbar />
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
