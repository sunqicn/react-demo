/*
* @Author: Frank
* @Date:   2018-04-08 14:41:13
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-20 11:07:37
*/

// action 构造函数
import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text)=>({
	type:ADD_TODO,
	completed:false,
	id:nextTodoId++,
	text:text
})

export const toggleTodo = (id)=>({
	type:TOGGLE_TODO,
	id:id
})


export const removeTodo =(id)=>({
	type:REMOVE_TODO,
	id:id
})