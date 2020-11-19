import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import EpisodeCard from './components/EpisodeCard'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <EpisodeCard />
    </div>
  )
}

export default App
