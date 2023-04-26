import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  other: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 }
    case "other":
      return { ...state, other: action.payload }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.other ? (
          <span className="text">{state.other}</span>
        ) : (
          <span className="text">Sem valor</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: "other", payload: 'Jean' })}>
            Trocar other
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
