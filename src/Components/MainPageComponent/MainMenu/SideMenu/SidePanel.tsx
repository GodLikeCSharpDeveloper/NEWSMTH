import "../../../../css/SidePanel.css"
import SideBtnGroup1 from "./SideBtnGroup";

function SidePanel() {
    return (
        <div className="col-1 text-break sidePanel">
            <SideBtnGroup1></SideBtnGroup1>
            <div className="lineSepparator"></div>
           
        </div>
    )
}
export default SidePanel;