import React from 'react'

import TextTitle from '../components/text-title'

export default {
    title: 'Twitter/Typography'
};

export const Title = () => (
    <div>
        <TextTitle>Bold Title!</TextTitle>
        <TextTitle bold={false}>Title!</TextTitle>
    </div>
)