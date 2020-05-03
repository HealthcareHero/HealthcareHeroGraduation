import { actionType } from '../action/actionType';

const feedPostThreadReducer = (state, action) => {
  switch (action.type) {
    case actionType.initialiseFeedPostThread:
      return { ...state, ...action.payload };

    case actionType.loadingFeedPostThread:
      return { ...state, ...action.payload };

    case actionType.errorWhileLoading:
      return { ...state, ...action.payload };

    case actionType.updateLikeCount:
      return { ...state, ...action.payload };
    
    case actionType.updateInputText:
      return { ...state, ...action.payload };
    
    case actionType.submittingComment:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

export { feedPostThreadReducer }