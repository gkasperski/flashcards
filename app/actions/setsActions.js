import shortid from 'shortid';
import {
  SET_CREATE_TITLE_HAS_CHANGED,
  SET_CREATE_REQUEST_WAS_MADE,
  SET_CREATE_SUCCESS,
  SET_HAS_BEEN_DELETED,
  SET_MODIFICATION_REQUEST,
  SET_FLASHCARD_ADD,
  SET_FLASHCARD_REMOVE,
  SET_FLASHCARD_HAS_CHANGED,
  SET_MODIFICATION_SUBMIT,
} from '../actionTypes';

export const setCreateTitleHasChanged = title => ({
  type: SET_CREATE_TITLE_HAS_CHANGED,
  value: { title },
});

const setCreateRequestWasMade = () => ({
  type: SET_CREATE_REQUEST_WAS_MADE,
});

const setCreateRequestSuccess = newSet => ({
  type: SET_CREATE_SUCCESS,
  newSet,
  newSetId: shortid.generate(),
});

/**
 * Adds new set to redux store and to native storage
 * @param newSet - new set object
 */
export const createNewSet = newSet => (dispatch) => {
  dispatch(setCreateRequestWasMade());
  // just for a guest until api is done
  // TODO: handle api request
  dispatch(setCreateRequestSuccess(newSet));
};

/**
 * Set was deleted
 */
export const userHasDeletedSet = setId => ({
  type: SET_HAS_BEEN_DELETED,
  setId,
});

/**
 * Handle new set modification
 * @param {String} setId
 */
export const setModificationRequest = setId => ({
  type: SET_MODIFICATION_REQUEST,
  setId,
});

export const setModificationSubmit = setId => ({
  type: SET_MODIFICATION_SUBMIT,
  setId,
});

/** Set flashcards actions */

export const userHasAddedNewFlashcardToSet = setId => ({
  type: SET_FLASHCARD_ADD,
  setId,
  newFlashcardId: shortid.generate(),
});

export const userHasDeletedFlashcardFromSet = flashcardId => ({
  type: SET_FLASHCARD_REMOVE,
  flashcardId,
});

export const flashcardFrontSideHasChanged = (flashcardId, frontSide) => ({
  type: SET_FLASHCARD_HAS_CHANGED,
  flashcardId,
  value: { frontSide },
});

export const flashcardBackSideHasChanged = (flashcardId, backSide) => ({
  type: SET_FLASHCARD_HAS_CHANGED,
  flashcardId,
  value: { backSide },
});
