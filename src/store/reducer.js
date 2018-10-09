const initialState = {
  message: "Jaka to nutka",
  pitches: [
    "G",
    "A",
    "H",
    "C",
    "D",
    "E",
    "F",
    "G1",
    "A1",
    "H1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G2",
    "A2",
    "H2"
  ],
  score: 0,
  canGuess: true,
  currentNote: null,
  currentNoteNumber: null
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "CHANGE_MESSAGE") {
    newState.message = action.value;
  }

  if (action.type === "SCORE_UP") {
    newState.score += 1;
  }

  if (action.type === "BLOCK_GUESSING") {
    newState.canGuess = false;
  }

  if (action.type === "UNBLOCK_GUESSING") {
    newState.canGuess = true;
  }

  if (action.type === "RESET_SCORE") {
    newState.score = 0;
  }

  if (action.type === "SET_NEW_NOTE") {
    console.log("new note number from SET_NEW_NOTE reducer" + action.value);
    newState.currentNoteNumber = action.value;

    console.log("new note name from SET_NEW_NOTE reducer" + action.value);
    newState.currentNote = newState.pitches[action.value];
  }

  return newState;
};

export default reducer;
