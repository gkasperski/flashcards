import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native';
import { Text, Fab, Icon, Card, CardItem, Body, Header, Button, Right, View, Content, Input, Item, Title, SwipeRow } from 'native-base';
import { flashcard, newSet } from '../../../reducers/setsReducer';
import styles from './setEdit.style';
import { noContentStyle } from '../../home/home.style';
import {
  setModificationRequest,
  userHasAddedNewFlashcardToSet,
  userHasDeletedFlashcardFromSet,
  flashcardFrontSideHasChanged,
  flashcardBackSideHasChanged,
  setModificationSubmit,
} from '../../../actions/setsActions';

class SetEdit extends Component {
  constructor(props) {
    super(props);
    this.flashcardsRefs = {
      frontside: {},
      backside: {},
    };
    this.state = {
      title: `0/${this.props.flashcards.length}`,
    };
  }

  /**
   * Updates component's header when user focuses a flashcard
   * @param currentElement - currently focused flashcard
   */
  updateHeader(currentElement = 0) {
    const flashcardsLength = this.props.flashcards.length;
    let title = { title: '' };
    if (flashcardsLength) {
      title = { title: `${currentElement + 1}/${flashcardsLength}` };
    }
    this.setState(title);
  }

  /**
   * Asynchronous 'go back' function used just before component's content will be removed.
   */
  goBackAsync = () => {
    const promise = new Promise((resolve) => {
      const subscription = this.props.navigation.addListener('didBlur', () => {
        subscription.remove();
        resolve();
      });
    });
    this.props.navigation.goBack();
    return promise;
  };

  render = () => {
    const flashcards = this.props.flashcards.map((flashcard, currentElement) => (
      <SwipeRow
        style={styles.swipeRow}
        key={flashcard.id}
        disableRightSwipe
        rightOpenValue={-75}
        body={
          <Card style={styles.card}>
            <CardItem style={styles.cardItemTop}>
              <Item>
                <Icon type="MaterialCommunityIcons" name="cards-outline" />
                <Input
                  placeholder="Flashcard frontside"
                  returnKeyType="next"
                  ref={(input) => { this.flashcardsRefs.frontside[`${flashcard.id}`] = input; return input; }}
                  onSubmitEditing={() => this.flashcardsRefs.backside[`${flashcard.id}`]._root.focus()}
                  onFocus={() => this.updateHeader(currentElement)}
                  value={flashcard.frontSide}
                  onChangeText={text => this.props.flashcardFrontSideHasChanged(flashcard.id, text)}
                />
              </Item>
            </CardItem>
            <CardItem style={styles.cardItemBottom}>
              <Item>
                <Icon type="MaterialCommunityIcons" name="cards" />
                <Input
                  placeholder="Flashcard backside"
                  ref={(input) => { this.flashcardsRefs.backside[`${flashcard.id}`] = input; return input; }}
                  onFocus={() => this.updateHeader(currentElement)}
                  value={flashcard.backSide}
                  onChangeText={text => this.props.flashcardBackSideHasChanged(flashcard.id, text)}
                />
              </Item>
            </CardItem>
          </Card>
        }
        right={
          <Button
            transparent
            onPress={() => this.props.userHasDeletedFlashcardFromSet(flashcard.id)
              .then(() => this.updateHeader())}
          >
            <Icon type="MaterialCommunityIcons" name="delete-circle" style={styles.trash} />
          </Button>
        }
      />
    ));

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.statusBar} />
        <Header>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon style={{ color: '#fff' }} name="arrow-back" type="MaterialIcons" />
          </Button>
          <Body>
            <Title>{this.state.title}</Title>
          </Body>
          <Right>
            <Button
              iconRight
              transparent
              onPress={async () => {
                await this.goBackAsync();
                this.props.setModificationSubmit(this.props.set.id);
              }}
            >
              <Icon type="MaterialIcons" name="done" />
            </Button>
          </Right>
        </Header>
        {flashcards.length > 0 ?
          <Content style={styles.content}>
            <Text style={styles.title}>{this.props.set.title}</Text>
            <View>
              {flashcards}
            </View>
            <View style={styles.space} />
          </Content> :
          <Content contentContainerStyle={noContentStyle.content}>
            <Icon type="MaterialCommunityIcons" name="cards" style={noContentStyle.icon} />
            <Text style={noContentStyle.statement}>Set {`"${this.props.set.title}"`} is empty.</Text>
            <Text style={noContentStyle.statement}>
              Try creating some flashcards by clicking the button with plus sign below.
            </Text>
          </Content>
        }
        <Fab
          position="bottomRight"
          onPress={() => {
            this.props.userHasAddedNewFlashcardToSet(this.props.set.id)
              .then(action => this.flashcardsRefs.frontside[action.newFlashcardId]._root.focus());
          }}
          style={styles.fab}
        >
          <Icon type="MaterialCommunityIcons" name="plus" />
        </Fab>
      </KeyboardAvoidingView>
    );
  };
}

SetEdit.propTypes = {
  set: PropTypes.shape(newSet).isRequired,
  flashcards: PropTypes.arrayOf(PropTypes.shape(flashcard).isRequired).isRequired,
  userHasAddedNewFlashcardToSet: PropTypes.func.isRequired,
  userHasDeletedFlashcardFromSet: PropTypes.func.isRequired,
  flashcardFrontSideHasChanged: PropTypes.func.isRequired,
  flashcardBackSideHasChanged: PropTypes.func.isRequired,
  setModificationSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  loadingState: state.userReducer.loadingState,
  set: state.setsReducer.unsavedSets.find(set => set.id === ownProps.navigation.state.params.setId),
  flashcards: state.setsReducer.unsavedFlashcards
    .filter(fc => fc.setId === ownProps.navigation.state.params.setId),
});

const SetEditContainer = connect(mapStateToProps, {
  setModificationRequest,
  userHasAddedNewFlashcardToSet,
  userHasDeletedFlashcardFromSet,
  flashcardFrontSideHasChanged,
  flashcardBackSideHasChanged,
  setModificationSubmit,
})(SetEdit);
export default SetEditContainer;

