import {combineReducers} from 'redux';
import resumeReducer from './ResumeReducer';
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
    resume: resumeReducer,
    form: formReducer
});