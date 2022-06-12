import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {BiEditAlt} from 'react-icons/bi'
import {RiCloseLine} from 'react-icons/ri'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    })


    //On receving the updated value, the value and the id are then passed in the updateTodo function
    const sbumitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }


    //Once the edit icon is clicked, the if statement passes the edit id as a param
    //then retruns the form in which the edited value is passed in the submitUpdate function

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={sbumitUpdate} />
    }
   
   return(
       <div>
           {todos.map((todo, index) =>(
               <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className='icons'>
                    <RiCloseLine
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <BiEditAlt
                        onClick={() => setEdit({id: todo.id, value:todo.text})}
                        className='edit-icon'
                    />
                    </div>
                </div>
           ))}
       </div>
   )
   
}

export default Todo