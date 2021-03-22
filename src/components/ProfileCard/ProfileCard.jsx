import React from 'react'
import PropTypes from 'prop-types'
import {
  ProfileCardWrapper, CardTop, Photo, Name, Age,
  Location, ProfileStats, StatWrapper, Stat, Label,
} from './ProfileCard.elements'

const ProfileCard = ({
  profile: {
    profilePicture, name, age, location, followers, likes, photos,
  },
}) => (
  <ProfileCardWrapper>
    <CardTop>
      <Photo src={profilePicture} alt="profile" />
    </CardTop>
    <Name>
      {name}
      <Age>
        {age}
      </Age>
    </Name>
    <Location>
      {location}
    </Location>
    <ProfileStats>
      <StatWrapper>
        <Stat>{followers}</Stat>
        <Label>Followers</Label>
      </StatWrapper>
      <StatWrapper>
        <Stat>{likes}</Stat>
        <Label>Likes</Label>
      </StatWrapper>
      <StatWrapper>
        <Stat>{photos}</Stat>
        <Label>Photos</Label>
      </StatWrapper>
    </ProfileStats>
  </ProfileCardWrapper>
)

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    name: PropTypes.string,
    age: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.string,
    likes: PropTypes.string,
    photos: PropTypes.string,
  }).isRequired,
}

export default ProfileCard
