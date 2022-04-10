import { ADD, DELETE_TODO, DONE, EDIT } from "./Actiontypes"

export const add_todo =(newItem)=>{
    return{
        type:ADD , payload:newItem
    }
}
export const delete_todo=(id)=>{
    return{
        type:DELETE_TODO , payload:id
    }
}
export const edit_todo =(item,id)=>{
    return{
        type:EDIT ,payload:{item,id}
    }
}
export const done_todo =(id)=>{
    return{
        type:DONE ,payload:id
    }
}
 