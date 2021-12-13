import React from 'react'
import Avatar from '../components/avatar'
import ProfileBox from '../components/profile-box'
import Byline from '../components/byline'

export default {
  title: 'Components/Profile',
  component: ProfileBox
}

const Template = (args) => <ProfileBox {...args} />

export const ProfilePhoto = () => <Avatar />
export const ProfileLine = () => <Byline />
export const ProfileSettings = Template.bind({})

ProfileSettings.args = {
  flat: false
}
