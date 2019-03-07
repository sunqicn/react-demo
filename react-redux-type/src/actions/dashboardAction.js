let nextID = 0;

export const addTodo= text =>({
    type:'ADD_TODO',
    id:nextID++,
    text,
})

export const setVisibilityFilter=filter=>({
    type:'SET_VISIBILITY_FILTER',
    filter,
})
export const toggleTodo = id =>({
    type:'TOGGLETODO',
    id,
})

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}