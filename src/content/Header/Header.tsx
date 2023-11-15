import React from "react"
import {
  SearchIcon,
  HomeIcon,
  PeopleAltIcon,
  BusinessCenterIcon,
  InsertCommentIcon,
  NotificationsIcon,
  PersonIcon,
  AppsIcon,
  MoreHorizIcon,
} from "../../assets/icons"

import { NavContainer, NavIcons, NavText } from "../../components/UI/Navbar"

const Header: React.FC = () => {
  return (
    <NavContainer>
      <div className="flex align-center text-center items-center gap-2 p-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt="logo"
          className="w-[2rem] h-[2rem]"
        />
        <div className="flex align-center bg-[#edf3f8] border-none outline-none items-center w-10/12 max-[1025px]:hidden">
          <SearchIcon fontSize="small" />
          <input
            type="text"
            className="border-none outline-none bg-[#edf3f8] pl-1 h-[2rem] w-full max-[1025px]:hidden"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex align-center justify-evenly items-center">
        <div className="hidden max-[1025px]:block cursor-pointer flex-col text-center w-fit px-5 max-[660px]:px-2">
          <SearchIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>Search</NavText>
        </div>
        <NavIcons>
          <HomeIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>Home</NavText>
        </NavIcons>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer whitespace-nowrap">
          <PeopleAltIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>My Network</NavText>
        </div>
        <NavIcons>
          <BusinessCenterIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>Jobs</NavText>
        </NavIcons>
        <NavIcons>
          <InsertCommentIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>Messaging</NavText>
        </NavIcons>
        <NavIcons>
          <NotificationsIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>Notifications</NavText>
        </NavIcons>
        <NavIcons>
          <PersonIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <NavText>Me</NavText>
        </NavIcons>
        <div className="border-l-[1px] text-color[#000000] h-full"></div>
        <NavIcons>
          <AppsIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black max-[520px]:hidden"
          />
          <MoreHorizIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hidden max-[520px]:block"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden whitespace-nowrap">
            For Business
          </h2>
        </NavIcons>
      </div>
    </NavContainer>
  )
}

export default Header
