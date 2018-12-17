const initialValue = {
  defaultValue: 0,
}

initialValue.defaultValue = (localStorage.getItem('sliderDefaultValue')) ?
parseInt(localStorage.getItem('sliderDefaultValue')) : 2500;

export default function counter(state = initialValue, action) {
  switch (action.type) {
    case 'SET_VALUE': {
      return {
        ...state,
        value: action.value
      }
    } 
    default: {
      return state;
    }
  }
}