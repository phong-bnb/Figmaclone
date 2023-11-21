import { useState } from "react";
import MainmenuNavbar from "./mainmenu";
import OrtherOfNavbar from "./orther";
import SiderBarofNavBar from "./sidebar";
import { MenuOutlined } from "@ant-design/icons";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="hidden md:flex max-w-[450px]:hidden w-[242px] h-screen p-[20px_0px_272px_0px] flex-col gap-39 text-center bg-white flex-shrink-0">
        <div>
          <SiderBarofNavBar />
          <MainmenuNavbar />
          <OrtherOfNavbar />
        </div>
      </div>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden h-5 bg-slate-500"
      >
         <MenuOutlined />
      </button>
      {isMobileMenuOpen && (
        <div className="flex w-[242px] h-screen p-[20px_0px_272px_0px] flex-col gap-39 text-center bg-white flex-shrink-0">
          <div>
            <SiderBarofNavBar />
            <MainmenuNavbar />
            <OrtherOfNavbar />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
