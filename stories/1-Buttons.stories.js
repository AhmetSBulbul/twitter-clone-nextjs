import React from 'react'
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
export default {
    title: 'Twitter/Buttons'
}

export const Normal = () => <Button>Save</Button>
export const MenuItem = () => <NavButton >
                <Home/>
                <TextTitle>Home</TextTitle>
            </NavButton>
export const Menu = () => <Navigation selectedKey='explore'/>