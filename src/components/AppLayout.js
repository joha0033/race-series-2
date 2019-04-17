import React from 'react'
import { LinkItem } from '../Context/Authorization/Routing/linkItem'
import './AppLayout.css'

const Races = () => (
  <div className={'races-link'}>
    Races
  </div>
) // onClick?!

const Participants = () => (
  <div className={'participants-link'}>
    Participants
  </div>
) // onClick?!


export const AppLayout = ({ children }) => (
  <div className={'app-container'}>
    <div className={'nav-container'}>
      <h1>Welcome</h1>

      {/* FADE DOWN - Links and/or Height */}
      <div className={'nav-links'}>
        <LinkItem
          href="/admin/participants/"
          activeStyle={{ color: '#3c6e71', textDecoration: 'underline' }}
          disabled-style={{ color: 'lightgrey' }}
        >
          <Participants />
        </LinkItem>

        <LinkItem
          href="/admin/races/"
          activeStyle={{ color: '#3c6e71', textDecoration: 'underline' }}
          disabled-style={{ color: 'lightgrey' }}
        >
          <Races />
        </LinkItem>
      </div>

    </div>

    <main>
      {children}
    </main>
  </div>
)