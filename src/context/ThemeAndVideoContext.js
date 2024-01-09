import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideos: [],
  addVideo: () => {},
})

export default ThemeAndVideoContext
