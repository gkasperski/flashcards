import React, { Component } from 'react';
import { Container, Content, Icon, Text } from 'native-base';
import { noContentStyle } from '../../home.style';

/**
 * This tab displays folders interactive cards in home screen
 */
class Folders extends Component {
  componentDidMount() { }

  render = () => (
    <Container style={noContentStyle.container}>
      <Content contentContainerStyle={noContentStyle.content}>
        <Icon type="MaterialCommunityIcons" name="folder" style={noContentStyle.icon} />
        <Text style={noContentStyle.statement}>You have no folders</Text>
      </Content>
    </Container>
  );
}

export default Folders;
