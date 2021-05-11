//action
const CHANGEPAGE = "changePage";

export const changePage = (id) => ({
  type: CHANGEPAGE,
  data: id,
});

// initial state;
const initialState = {
  page: 1,
};

// reducer
export default (state = initialState, { type, data }) => {
  switch (type) {
    case CHANGEPAGE:
      return { ...state, page: data };
    default:
      return state;
  }
};
