import React from 'react'

import TextTitle from '../components/text/title'
import TextBody from '../components/text/body'

export default {
  title: 'Twitter/Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Bold Title!</TextTitle>
    <TextTitle bold={false}>Title!</TextTitle>
  </div>
)

export const Body = () => (
  <div>
    <TextBody>Body!</TextBody>
    <TextBody bold style={{ display: 'block' }}>
      Bold Body!
    </TextBody>
  </div>
)
