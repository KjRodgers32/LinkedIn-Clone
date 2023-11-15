import React from "react"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap, SvgIcon } from "@mui/material"

interface IProps {
  children: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const NavSVG = ({ children }: IProps) => {
  return (
    <SvgIcon
      component={children}
      sx={{ color: "#666666", fontSize: 30 }}
      className="hover:text-black"
    />
  )
}

export default NavSVG
