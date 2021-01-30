import React, { ReactChildren, ReactElement, useEffect, useRef } from "react";
import DragHandler from "./DragHandler";
import { SwitchWindowsInterface } from "./interfaces/SwitchWindows";

const SwitchWindows:React.FC<SwitchWindowsInterface> = ({children, gridTemplate}) => {
    
    const Self:React.RefObject<HTMLDivElement> = useRef(null)
    
    const gridStyle = {
        display: "grid",
        ...gridTemplate
    }

    function setDragHandler(el:ReactElement):ReactElement{
        console.log(el.props)
        if (el.props.className&&el.props.className.split(" ").includes("drag-handler"))
        return <DragHandler>{el}</DragHandler>
        const children = el.props.children as ReactChildren
        return React.cloneElement(el, {
            children:React.Children.map(children, (child)=>{
                if (React.isValidElement(child)){
                    return setDragHandler(child)
                }
                return child
            })
        })
    }

    function cloneChildrens():React.ReactElement[] | null | undefined{
        return React.Children.map(children, (child, i)=>{
            if (React.isValidElement(child)){
                return React.cloneElement(setDragHandler(child), {
                    className: (child.props.className||"")+" switch-windows-"+i,
                })
            }
        })
    }
    return (
        <div ref={Self} style={gridStyle}>
            {cloneChildrens()}
        </div>
    )
}

export default SwitchWindows;