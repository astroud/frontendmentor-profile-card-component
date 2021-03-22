import React from 'react'
import { createGlobalStyle } from 'styled-components'
import StyledWrapper from './app.elements'
import ProfileCard from './components/ProfileCard/ProfileCard'
import profilePicture from './image-victor.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    --dark-cyan: hsl(185, 75%, 39%);
    --text-color: hsl(229, 23%, 23%);
    --dark-grayish-blue: hsl(227, 10%, 46%);
    --text-color-light: hsl(0, 0%, 59%);
    --stats-border: #E8E9EC;
  }

  body {
    background: url(bg-pattern-top.svg) -250px -530px no-repeat,
                url(bg-pattern-bottom.svg) 650px 400px no-repeat,
                var(--dark-cyan);
    padding: 1.5rem;
  }
`

const sampleProfile = {
  profilePicture,
  name: 'Victor Crest',
  age: '26',
  location: 'London',
  followers: '80K',
  likes: '803K',
  photos: '1.4K',
}

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <ProfileCard profile={sampleProfile} />
      </StyledWrapper>
    </>
  )
}

export default App
