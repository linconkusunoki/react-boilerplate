import React from 'react'
import * as S from './styles'
import * as Layout from '../../layouts'

const Home = () => {
  return (
    <S.Wrapper>
      <Layout.Sidebar />
      <Layout.TopBar />
    </S.Wrapper>
  )
}

export default Home
