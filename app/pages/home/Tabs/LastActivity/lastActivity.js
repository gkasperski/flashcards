import React, { Component } from 'react';
import { Container, Content, Icon, Text } from 'native-base';
import { noContentStyle } from '../../home.style';


/**
 * This tab displays last user's activity
 */
class LastActivity extends Component {
  componentDidMount() { }

  render = () => (
    <Container style={noContentStyle.container}>
      <Content contentContainerStyle={noContentStyle.content}>
        <Icon type="MaterialCommunityIcons" name="history" style={noContentStyle.icon} />
        <Text style={noContentStyle.statement}>You have no last activity</Text>
      </Content>
    </Container>
  );
}

export default LastActivity;
