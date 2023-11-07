import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import NotificationsIcon from "@mui/icons-material/Notifications"
import PersonIcon from "@mui/icons-material/Person"
import AppsIcon from "@mui/icons-material/Apps"

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between align-center py-[.5rem] px-[2rem] bg-[#fff]">
      <div className="flex align-center text-center items-center gap-5 w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt="logo"
          className="w-[2rem] h-[2rem]"
        />
        <div className="flex align-center bg-[#edf3f8] border-none outline-none items-center w-full">
          <SearchIcon fontSize="small" />
          <input
            type="text"
            className="border-none outline-none bg-[#edf3f8] pl-1 h-[2rem] w-full"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex align-center justify-evenly items-center">
        <div className="flex-col text-center w-fit px-5">
          <HomeIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs">Home</h2>
        </div>
        <div className="flex-col text-center w-fit px-5 whitespace-nowrap">
          <PeopleAltIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs">My Network</h2>
        </div>
        <div className="flex-col text-center w-fit px-5">
          <BusinessCenterIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs">Jobs</h2>
        </div>
        <div className="flex-col text-center w-fit px-5">
          <InsertCommentIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs">Messaging</h2>
        </div>
        <div className="flex-col text-center w-fit px-5">
          <NotificationsIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs">Notifications</h2>
        </div>
        <div className="flex-col text-center w-fit px-5">
          <PersonIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs">Me</h2>
        </div>
        <div className="border-l-[1px] text-color[#000000] h-full"></div>
        <div className="flex-col text-center w-fit px-5">
          <AppsIcon sx={{ color: "#666666", fontSize: 30 }} />
          <h2 className="text-[#666666] font-light text-xs whitespace-nowrap">
            For Business
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
