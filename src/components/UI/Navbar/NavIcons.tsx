import React from "react"

interface IProps {
  children: JSX.Element | JSX.Element[] | string
}

const NavIcons = ({ children }: IProps) => {
  return (
    <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
      {children}
    </div>
  )
}

export default NavIcons
