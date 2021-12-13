import React from 'react'

import Navigation from '../components/navigation/navigation'

export default {
  title: 'Components/NavigationMenu',
  component: Navigation
}

const Template = (args) => <Navigation {...args} />

export const Menu = Template.bind({})

Menu.args = {
  flat: false,
  selectedKey: 'explore'
}
