import React from 'react';
import { Menu, Container, Grid } from 'semantic-ui-react';

export default function Layout({ onLogout, children, isLoggedIn }) {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Menu fixed='top' inverted>
              { isLoggedIn ?
                <Container>
                  <Menu.Item as='p' header>
                    Doorbot
                  </Menu.Item>
                  <Menu.Item as='a' active>Doors</Menu.Item>
                  <Menu.Item as='a' position='right' onClick={onLogout}>Logout</Menu.Item> :
                </Container> :
                <Container>
                  <Menu.Item as='p' header>
                    Doorbot
                  </Menu.Item>
                  <Menu.Item as='a' position='right' active>Login</Menu.Item>
                </Container>
              }
            </Menu>
          </Grid.Column>
          <Grid.Column width={16} style={ {marginTop: '70px'} }>
            { children }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
