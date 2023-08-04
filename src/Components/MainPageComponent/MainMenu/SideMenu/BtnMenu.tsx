import "../../css/SidePanel.css"
import * as React from 'react';
type BtnMenuProps = {
    btnClassName: string;
}
function BtnMenu({btnClassName}: BtnMenuProps) {
    return (
        <span className={btnClassName}>
            <div><button >My long name country</button></div>
            <div><button >test4</button></div>
            <div><button className=" lastButton">test5</button></div>
        </span>

    );
};

export default BtnMenu;