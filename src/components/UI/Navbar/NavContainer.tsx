import React from "react"

interface IProps {
  children: JSX.Element | JSX.Element[] | string
}

const NavContainer = ({ children }: IProps) => {
  return (
    <div className="w-full flex align-center py-[.5rem] bg-[#fff] justify-center">
      {children}
    </div>
  )
}

export default NavContainer
