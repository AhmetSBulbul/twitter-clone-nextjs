import React from 'react'
import Tweet from '../components/tweet'

export default {
  title: 'Twitter/Tweet',
  component: Tweet
}

const Template = (args) => <Tweet {...args} />

export const SimpleTweet = Template.bind({})

SimpleTweet.args = {
  dateTime: new Date('2021-06-05'),
  text: `Hey Bu 
      Benim ilk Tweetim
  `
}
