import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Body, Text, Icon, Button } from 'native-base';
import styles from './sets.style';
import showMenu from '../../../../components/showMenu';
import { userHasDeletedSet, setModificationRequest } from '../../../../actions/setsActions';
import { getNav } from '../../../../navigator';
import { newSet } from '../../../../reducers/setsReducer';

class SetCard extends Component {
  handleEditButton = (setId) => {
    this.props.setModificationRequest(setId);
    getNav().navigate('SetEdit', { setId });
  };

  handleDeleteButton = (setId) => {
    this.props.userHasDeletedSet(setId);
  };

  menuButtons = {
    Edit: this.handleEditButton,
    Delete: this.handleDeleteButton,
  };

  render = () => (
    <TouchableOpacity onPress={() => getNav().navigate('SetFlashcards', { set: this.props.set })}>
      <Card>
        <CardItem style={styles.cardHeader}>
          <Text style={styles.setItemsIndicator}>{this.props.setItemsQuantity > 0 ? `${this.props.setItemsQuantity} flashcards` : 'Empty set'}</Text>
          <Button
            transparent
            ref={(menu) => { this.set = menu; return menu; }}
            onPress={() => showMenu(this.set, this.menuButtons, this.props.set.id)}
          >
            <Icon type="MaterialCommunityIcons" name="dots-vertical" style={styles.setMenuButton} />
          </Button>
        </CardItem>
        <CardItem style={styles.cardBody}>
          <Body>
            <Text style={styles.setTitle}>
              {this.props.set.title}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

SetCard.propTypes = {
  set: PropTypes.shape(newSet).isRequired,
  userHasDeletedSet: PropTypes.func.isRequired,
  setModificationRequest: PropTypes.func.isRequired,
  setItemsQuantity: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  setItemsQuantity: state.setsReducer.flashcards.filter(fc => fc.setId === ownProps.set.id).length,
});


const SetContainer = connect(mapStateToProps, {
  userHasDeletedSet,
  setModificationRequest,
})(SetCard);
export default SetContainer;
