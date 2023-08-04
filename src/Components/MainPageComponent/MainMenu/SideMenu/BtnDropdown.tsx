import * as React from 'react';
// import "../../css/SidePanel.css"
// import BtnMenu from './BtnMenu';
// import { useRef } from 'react';
// import { Transition } from 'react-transition-group'

// type BtnDropdownProps = {
//     BtnClass: string;
//     dropBtnClass: string;
//     where?: boolean; // Optional boolean parameter
// };
// type TransitionStyles = {
//     entering: React.CSSProperties;
//     entered: React.CSSProperties;
//     exiting: React.CSSProperties;
//     exited: React.CSSProperties;
//     unmounted?: React.CSSProperties; // optional if you don't plan to use it
// };
// const BtnDropdown: React.FC<BtnDropdownProps> = ({ BtnClass, dropBtnClass, where = false }) => {
//     const transitionStyles: TransitionStyles = {
//         entering: { opacity: 0 },
//         entered:  { opacity: 1 },
//         exiting:  { opacity: 0 },
//         exited:  { opacity: 0 },
//     };
//     const defaultStyle = {
//         transition: `opacity 500ms ease-in-out`,
//         opacity: 0,
//     }
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         // Prevent the default behavior of the button
//         event.preventDefault();
//         // Your custom logic here
//       };
//     const [open, setOpen] = React.useState(false);
//     const nodeRef = useRef(null);
//     const handleOpen = () => {
//         setOpen(!open);
//     };
  
//     const combinedClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//         handleOpen();
//         handleClick(event);
//       };
// if (!where)
//     return (
//         <>
//             <button className={` ${BtnClass}`} onClick={combinedClickHandler}>Dropdown</button>
//             <Transition  nodeRef={nodeRef} in={open} timeout={200}>
//             {state => ( <span style={{
//                         ...defaultStyle,
//                         ...transitionStyles[state]
//                     }}>
                        
//                 {open && <BtnMenu btnClassName={dropBtnClass} />}
//             </span> )}
//             </Transition>
//         </>
//     );
//     else{
//         return ( <>
            
//             <Transition  nodeRef={nodeRef} in={open} timeout={200}>
//             {state => ( <span style={{
//                         ...defaultStyle,
//                         ...transitionStyles[state]
//                     }}>
                        
//                 {open && <BtnMenu btnClassName={dropBtnClass} />}
//             </span> )}
//             </Transition>
//             <button className={` ${BtnClass}`} onClick={combinedClickHandler}>Dropdown</button>
//         </>)
//     }

// };

export {}