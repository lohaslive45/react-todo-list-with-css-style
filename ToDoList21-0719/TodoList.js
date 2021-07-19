//!==========內容 儲存格式
import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './todolist.css'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return; //!---此判斷式，能排除全空白鍵輸入 & 多個空白鍵合併成一個
        }

        //!---內容 儲存的格式
        const newTodos = [todo, ...todos]; 

        setTodos(newTodos);
        //console.log(todo, ...todos);
    }

    //!---內容 編輯 功能
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return; //!---此判斷式，能排除全空白鍵輸入 & 多個空白鍵合併成一個
        }

        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item))
        );
    };

    //!---內容 移除 功能
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    //!---連結 todo.js 內容顯示
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos); 
    }

    return (
        <div>
            <h1>今天要完成的事</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
