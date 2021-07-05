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
    path: '/',
    key: 'home',
    icon: <Home />,
    title: 'Home',
    notify: 0
  },
  { path: '/explore', key: 'explore', icon: <Explore />, title: 'Explore', notify: 0 },
  {
    path: '/notifications',
    key: 'notifications',
    icon: <Notification />,
    title: 'Notifications',
    notify: 0
  },
  {
    path: '/messages',
    key: 'messages',
    icon: <Messages />,
    title: 'Messages',
    notify: 4
  },
  {
    path: '/bookmarks',
    key: 'bookmarks',
    icon: <Bookmark />,
    title: 'Bookmarks',
    notify: 0
  },
  { path: '/lists', key: 'lists', icon: <Lists />, title: 'Lists', notify: 0 },
  { path: '/profile', key: 'profile', icon: <Profile />, title: 'Profile', notify: 0 },
  { path: '/more', key: 'more', icon: <More />, title: 'More', notify: 0 }
]
