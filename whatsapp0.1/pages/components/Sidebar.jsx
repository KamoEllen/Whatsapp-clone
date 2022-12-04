import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
const Sidebar = () => {
  return (
    <div>
      <Container>
        <h1>Sidebar</h1>
        <Header>

        </Header>
      </Container>
    </div>
  )
}

export default Sidebar

const Container = styled.div`
`;
const Header = styled.div`
`;

const userAvatar = styled(Avatar)

