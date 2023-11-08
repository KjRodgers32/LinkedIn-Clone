import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import NotificationsIcon from "@mui/icons-material/Notifications"
import PersonIcon from "@mui/icons-material/Person"
import AppsIcon from "@mui/icons-material/Apps"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

const Header: React.FC = () => {
  return (
    <div className="w-full flex align-center py-[.5rem] bg-[#fff] justify-center">
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
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            Search
          </h2>
        </div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
          <HomeIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            Home
          </h2>
        </div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer whitespace-nowrap">
          <PeopleAltIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            My Network
          </h2>
        </div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
          <BusinessCenterIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            Jobs
          </h2>
        </div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
          <InsertCommentIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            Messaging
          </h2>
        </div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
          <NotificationsIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            Notifications
          </h2>
        </div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
          <PersonIcon
            sx={{ color: "#666666", fontSize: 30 }}
            className="hover:text-black"
          />
          <h2 className="text-[#666666] font-light text-xs max-md:hidden">
            Me
          </h2>
        </div>
        <div className="border-l-[1px] text-color[#000000] h-full"></div>
        <div className="flex-col text-center w-fit px-5 max-[660px]:px-2 cursor-pointer">
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
        </div>
      </div>
    </div>
  )
}

export default Header
