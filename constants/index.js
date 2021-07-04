import {
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from '../components/icons'


export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}
export const BUTTONS = [
  {
    key: 'home',
    icon: <Home />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    title: 'Notification',
    notify: 0
  },
  {
    key: 'messages',
    icon: <Messages />,
    title: 'Messages',
    notify: 4
  },
  {
    key: 'bookmarks',
    icon: <Bookmark />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    title: 'More',
    notify: 0
  }
]

