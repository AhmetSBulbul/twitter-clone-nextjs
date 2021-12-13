import React from 'react'
import ExtrasContact from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: ExtrasContact,
    title: 'Modules/ExtrasContact',
    args: {
    }
}

const Template = (args) => <ExtrasContact {...args}></ExtrasContact>

export const Default = Template.bind({});