/*
* @Author: Frank
* @Date:   2018-04-08 14:40:55
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-20 10:22:40
*/
import {SET_FILTER} from './actionTypes.js';

export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
});
