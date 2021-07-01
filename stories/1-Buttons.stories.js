import React from 'react'
import Button from '../components/button'
import NavButton from '../components/navigation/nav-button'
import Navigation from '../components/navigation/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text/title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Twitter/Buttons'
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton stretch>Theme Stretch</ThemeButton>
    <ThemeButton stretch big>Theme Stretch</ThemeButton>
  </Stack>
)
export const MenuItem = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
)
export const Menu = () => <Navigation selectedKey="explore" />
