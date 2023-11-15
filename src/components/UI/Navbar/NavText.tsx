import React from "react"

interface IProps {
  children: JSX.Element | JSX.Element[] | string
}

const NavText = ({ children }: IProps) => {
  return (
    <h2 className="text-[#666666] font-light text-xs max-md:hidden">
      {children}
    </h2>
  )
}

export default NavText
