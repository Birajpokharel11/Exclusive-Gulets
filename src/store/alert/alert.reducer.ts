const INITIAL_STATE = {
  openAlert: false,
  message: '',
  severity: ''
};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'OPEN_ALERT':
      console.log('open aleret herer');
      return {
        openAlert: true,
        message: payload.message,
        severity: payload.severity
      };
    case 'CLOSE_ALERT':
      return { ...state, openAlert: false };
    default:
      return state;
  }
};

export default alertReducer;
