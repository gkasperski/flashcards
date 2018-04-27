import React, { Component } from 'react';
import { Container, Header, Button, Icon, Content, Body } from 'native-base';
import FlipCard from 'react-native-flip-card';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import styles from './flashCards.style';
import { flashcard } from '../../../../reducers/setsReducer';
import FlipFlashCard from './flipFlashCard';
import { noContentStyle } from '../../../home/home.style';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDE_ITEM_MARGIN = 40;
const SLIDE_ITEM_WIDTH = SLIDER_WIDTH - (SLIDE_ITEM_MARGIN * 2);

class FlashCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `${this.props.navigation.state.params.set.title} 0/${this.props.flashcards.length}`,
    };
  }

  componentDidMount() {
    this.updateTitle();
  }

  _renderItem = ({ item }) => (
    <FlipCard key={item.id} perspective={1000} style={styles.flipCard} >
      <FlipFlashCard text={item.frontSide} />
      <FlipFlashCard text={item.backSide} />
    </FlipCard>
  );

  updateTitle = (currentElement = 0) => {
    const flashcardsLength = this.props.flashcards.length;
    let title = { title: `${this.props.navigation.state.params.set.title}` };
    if (flashcardsLength > 0) {
      title = { title: `${this.props.navigation.state.params.set.title} ${currentElement + 1}/${flashcardsLength}` };
    }
    this.setState(title);
  }


  render = () => (
    <Container style={styles.container}>
      <View style={styles.statusBar} />
      <Header style={styles.header}>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon style={{ color: '#fff' }} name="arrow-back" type="MaterialIcons" />
        </Button>
        <Body>
          <Text style={styles.title}>{this.state.title}</Text>
        </Body>
      </Header>
      <Content style={styles.content} contentContainerStyle={styles.contentContainer}>
        {this.props.flashcards.length > 0 ?
          <Carousel
            ref={(c) => { this._carousel = c; }}
            style={{ paddingHorizontal: 0 }}
            data={this.props.flashcards}
            renderItem={this._renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDE_ITEM_WIDTH}
            enableMomentum={false}
            inactiveSlideOpacity={0.5}
            inactiveSlideScale={0.9}
            onSnapToItem={this.updateTitle}
          /> :
          <Content contentContainerStyle={noContentStyle.content}>
            <Icon type="MaterialCommunityIcons" name="cards" style={noContentStyle.icon} />
            <Text style={noContentStyle.statement}>Set {`"${this.props.navigation.state.params.set.title}"`} is empty.</Text>
            <Text style={noContentStyle.statement}>
              Edit the set to add some flashcards.
            </Text>
          </Content>
        }

      </Content>
    </Container>
  );
}

FlashCards.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.shape(flashcard).isRequired).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  flashcards: state.setsReducer.flashcards
    .filter(fc => fc.setId === ownProps.navigation.state.params.set.id),
});

const FlashCardsContainer = connect(mapStateToProps, {})(FlashCards);
export default FlashCardsContainer;
