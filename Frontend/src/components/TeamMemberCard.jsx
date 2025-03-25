import React from 'react'

export const TeamMemberCard = ({data}) => {
  return (
    <>
    <div>
      <h1>About us Page</h1> 
        <h2>
            {data.name}
        </h2>
        <h2>
            {data.jobtitle}
        </h2>
    </div>
    </>
  )
}
export default TeamMemberCard;

