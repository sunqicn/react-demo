/*
* @Author: Frank
* @Date:   2018-04-20 09:59:47
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-20 10:37:40
*/
import React from 'react';
import Link from './link.js'
import {FilterTypes} from '../../constants.js'

const Filters = () => {
  return (
    <p className="filters">
      <Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
      <Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>
      <Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>
    </p>
  );
};

export default Filters;