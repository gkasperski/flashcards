import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Text, Icon } from 'native-base';
import { noContentStyle } from '../../home.style';
import styles from './sets.style';
import SetCard from './set';
import { newSet } from '../../../../reducers/setsReducer';

/**
 * Tab which displays user's saved sets
 */
const Sets = ({ sets }) => {
  const setList = sets.map(set => (
    <SetCard set={set} key={set.id} />
  ));
  if (sets.length > 0) {
    return (
      <Container>
        <Content style={styles.content}>
          {setList}
        </Content>
      </Container>
    );
  }
  return (
    <Container style={noContentStyle.container}>
      <Content contentContainerStyle={noContentStyle.content}>
        <Icon type="MaterialCommunityIcons" name="folder-multiple" style={noContentStyle.icon} />
        <Text style={noContentStyle.statement}>You have no sets</Text>
      </Content>
    </Container>
  );
};

Sets.propTypes = {
  sets: PropTypes.arrayOf(PropTypes.shape(newSet)).isRequired,
};

const mapStateToProps = state => ({
  sets: state.setsReducer.sets,
});

const SetsContainer = connect(mapStateToProps, {})(Sets);

export default SetsContainer;
