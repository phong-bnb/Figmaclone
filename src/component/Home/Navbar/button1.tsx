import { useState } from "react";
import MainmenuNavbar from "./mainmenu";
import OrtherOfNavbar from "./orther";
import SiderBarofNavBar from "./sidebar";
import { MenuOutlined } from "@ant-design/icons";

function Button1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <button onClick={toggleMobileMenu} className="lg:hidden h-5 pt-2">
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
    </div>
  );
}
export default Button1;
