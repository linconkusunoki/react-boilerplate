import React from 'react'
import Nav from 'components/Nav'
import LoginForm from 'components/LoginForm'

const Home = ({ signIn }) => (
  <React.Fragment>
    <Nav />
    <h1>Home</h1>
    <pre>
      email: peter@klaven <br />
      password: cityslicka
    </pre>
    <LoginForm onSubmit={signIn} />
  </React.Fragment>
)

export default Home
