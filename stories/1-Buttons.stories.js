import React from 'react'
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme-button'
export default {
  title: 'Twitter/Buttons'
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <div>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton stretch>Theme Stretch</ThemeButton>
  </div>
)
export const MenuItem = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
)
export const Menu = () => <Navigation selectedKey="explore" />
