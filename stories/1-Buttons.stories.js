import React from 'react'
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'

export default {
    title: 'Twitter/Buttons'
}

export const Normal = () => <Button>Save</Button>
export const MenuItem = () => <NavButton>Save</NavButton>
export const Menu = () => <Navigation />