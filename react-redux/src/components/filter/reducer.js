/*
* @Author: Frank
* @Date:   2018-04-08 14:52:48
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-19 16:31:42
*/
import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js'

export default (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}
