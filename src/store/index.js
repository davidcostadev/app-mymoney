import { createStore } from 'redux';
import middleware from './middleware';
import reducer from './modules';

export default createStore(reducer, middleware);
