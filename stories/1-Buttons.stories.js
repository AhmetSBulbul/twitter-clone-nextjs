import React from 'react'
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'
export default {
    title: 'Twitter/Buttons'
}

export const Normal = () => <Button>Save</Button>
export const MenuItem = () => <NavButton >
                <Home/>
                <TitleBold>Home</TitleBold>
            </NavButton>
export const Menu = () => <Navigation selectedKey='explore'/>