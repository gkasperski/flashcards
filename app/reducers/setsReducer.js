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

/**
 * New set template
 */
export const newSet = {
  id: '',
  title: '',
};

/**
 * Saved sets template
 */
const sets = [];

/**
 * Sets which are being modified and are not saved yet template
 */
const unsavedSets = [];

/**
 * New flashcard template
 */
export const flashcard = {
  id: '',
  setId: '',
  frontSide: '',
  backSide: '',
};

/**
 * All saved flashcards
 */
const flashcards = [];

/**
 * Flashcards which are being modified and are not saved yet template
 */
const unsavedFlashcards = [];


const setsReducer = (state = {
  loadingState: false,
  newSet,
  sets,
  unsavedSets,
  flashcards,
  unsavedFlashcards,
}, action) => {
  switch (action.type) {
    case SET_CREATE_TITLE_HAS_CHANGED:
      return {
        ...state,
        newSet: { ...state.newSet, ...action.value },
      };
    case SET_CREATE_REQUEST_WAS_MADE:
      return {
        ...state,
        loadingState: true,
      };
    case SET_CREATE_SUCCESS: // create new set with unique id
      return {
        ...state,
        sets: [
          ...state.sets,
          { ...action.newSet, id: action.newSetId },
        ],
        newSet,
        loadingState: false,
      };
    case SET_HAS_BEEN_DELETED:
      return {
        ...state,
        sets: state.sets.filter(set => set.id !== action.setId),
        flashcards: state.flashcards.filter(fc => fc.setId !== action.setId),
      };
    case SET_MODIFICATION_REQUEST:
      return (state.unsavedSets.find(set => set.id === action.setId) === undefined) ?
        {
          ...state,
          unsavedSets: [...state.unsavedSets, state.sets.find(set => set.id === action.setId)],
          unsavedFlashcards: [...state.unsavedFlashcards,
            ...state.flashcards.filter(fc => fc.setId === action.setId)],
        } : state;
    case SET_MODIFICATION_SUBMIT:
      return {
        ...state,
        unsavedSets: state.unsavedSets.filter(set => set.id !== action.setId),
        flashcards: [...state.flashcards.filter(fc => fc.setId !== action.setId),
          ...state.unsavedFlashcards.filter(fc => fc.setId === action.setId)],
        unsavedFlashcards: state.unsavedFlashcards.filter(fc => fc.setId !== action.setId),
      };
    case SET_FLASHCARD_ADD:
      return {
        ...state,
        unsavedFlashcards: [...state.unsavedFlashcards,
          { ...flashcard, setId: action.setId, id: action.newFlashcardId }],
      };
    case SET_FLASHCARD_REMOVE:
      return {
        ...state,
        unsavedFlashcards: state.unsavedFlashcards.filter(fc => fc.id !== action.flashcardId),
      };
    case SET_FLASHCARD_HAS_CHANGED:
      return {
        ...state,
        unsavedFlashcards: state.unsavedFlashcards.map(fc =>
          (fc.id === action.flashcardId ? { ...fc, ...action.value } : fc)),
      };
    default:
      return state;
  }
};

export default setsReducer;
