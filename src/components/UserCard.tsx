import React from "react"

const UserCard: React.FC = () => {
  return (
    <div className="w-full flex-col bg-[#fff]">
      <div className="w-full py-1 px-2">
        <div className="w-[3.5rem] rounded-full ">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"
            alt="profile-cover"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default UserCard
