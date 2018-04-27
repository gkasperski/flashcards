import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Card, CardItem, Body, Text, Item, Input, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import styles from './setCreate.style';
import { setCreateTitleHasChanged, createNewSet } from '../../../actions/setsActions';
import { newSet } from '../../../reducers/setsReducer';

const SetCreate = ({
  loadingState, newSet, navigation, setCreateTitleHasChanged, createNewSet,
}) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <Spinner visible={loadingState} textContent="Creating new set..." textStyle={{ color: '#FFF' }} />
    <View style={styles.cancelBtn}>
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon style={{ color: '#fff' }} name="close" type="MaterialIcons" />
      </Button>
    </View>
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <CardItem style={styles.cardItem} >
          <Body>
            <Item last>
              <Input
                placeholder="New set name"
                value={newSet.title}
                onChangeText={text => setCreateTitleHasChanged(text)}
              />
            </Item>
          </Body>
        </CardItem>
        <CardItem footer style={styles.cardFooter}>
          <Button
            transparent
            style={styles.createButton}
            onPress={() => {
              createNewSet(newSet);
              navigation.goBack();
            }}
          >
            <Text>Create</Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  </KeyboardAvoidingView>
);

SetCreate.propTypes = {
  loadingState: PropTypes.bool.isRequired,
  newSet: PropTypes.shape(newSet).isRequired,
  setCreateTitleHasChanged: PropTypes.func.isRequired,
  createNewSet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loadingState: state.setsReducer.loadingState,
  newSet: state.setsReducer.newSet,
});


const SetCreateContainer = connect(mapStateToProps, {
  setCreateTitleHasChanged,
  createNewSet,
})(SetCreate);
export default SetCreateContainer;
