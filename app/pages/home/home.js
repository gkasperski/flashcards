import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Container, Header, Tabs, Tab, TabHeading, Icon, Right, Button, Fab } from 'native-base';
import { SetsTab, LastActivityTab, FoldersTab } from './Tabs';
import { styles } from './home.style';
import { AppConfig } from '../../config/AppConfig';
import { getNav } from '../../navigator';
import showMenu from '../../components/showMenu';

const handleSettingsButton = () => {
  // TODO: handle the button
};

const handleLogoutButton = async () => {
  const config = await AppConfig.getConfig();
  config.removeApiKey();
  getNav().navigate('AuthStack');
};

const menuButtons = {
  Settings: handleSettingsButton,
  Logout: handleLogoutButton,
};

class Home extends Component {
  constructor() {
    super();
    this.state = ({ headerTitle: this.getTabName() });
  }

  /**
   * Header name handler. Used when swiping across tabs.
   */
  getTabName = (i = 0) => {
    switch (i) {
      case 0: {
        return 'Sets';
      }
      case 1: {
        return 'Latest Activity';
      }
      case 2: {
        return 'Folders';
      }
      default: {
        return 'Sets';
      }
    }
  };

  tabChanged = (i) => {
    this.setState({ headerTitle: this.getTabName(i) });
  }

  render = () => (
    <Container style={styles.container}>
      <View style={styles.statusBar} />
      <Header hasTabs>
        <Text style={styles.headerTitle}>{this.state.headerTitle}</Text>
        <Right>
          <Button transparent>
            <Icon type="Ionicons" name="md-search" />
          </Button>
          <Button
            transparent
            ref={(menu) => { this.menu = menu; return menu; }}
            onPress={() => showMenu(this.menu, menuButtons)}
          >
            <Icon type="MaterialCommunityIcons" name="menu" />
          </Button>
        </Right>
      </Header>
      <Tabs
        tabBarUnderlineStyle={styles.tabUnderline}
        initialPage={0}
        onChangeTab={({ i }) => this.tabChanged(i)}
      >
        <Tab heading={<TabHeading><Icon type="MaterialCommunityIcons" name="folder-multiple" /></TabHeading>}>
          <SetsTab />
        </Tab>
        <Tab heading={<TabHeading><Icon type="MaterialCommunityIcons" name="history" /></TabHeading>}>
          <LastActivityTab />
        </Tab>
        <Tab heading={<TabHeading><Icon type="MaterialCommunityIcons" name="folder" /></TabHeading>}>
          <FoldersTab />
        </Tab>
      </Tabs>
      <Fab
        position="bottomRight"
        style={styles.fab}
        onPress={() => this.props.navigation.navigate('SetCreate')}
      >
        <Icon type="MaterialCommunityIcons" name="plus" />
      </Fab>
    </Container>
  );
}

export default Home;
