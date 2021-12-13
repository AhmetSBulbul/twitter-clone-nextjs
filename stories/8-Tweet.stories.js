import React from 'react'
import Tweet from '../components/tweet'

export default {
  title: 'Components/Tweet',
  component: Tweet
}

const Template = (args) => <Tweet {...args} />

export const SimpleTweet = Template.bind({})

SimpleTweet.args = {
  dateTime: new Date('2021-06-05'),
  text: `İlk Tweetim
  `
}
