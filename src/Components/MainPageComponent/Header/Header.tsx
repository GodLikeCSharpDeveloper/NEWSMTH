import "../../../css/Header.css"
import HeaderBtnGroup from "./HeaderBtnGroup";
import Srch from "./SrchComponent"
import LogoComponent from "./LogoComponent";
function Header() {
    return (
        <form className="row">
            <LogoComponent></LogoComponent>
            <Srch></Srch>
            <HeaderBtnGroup></HeaderBtnGroup>
        </form>
    )
}
export default Header