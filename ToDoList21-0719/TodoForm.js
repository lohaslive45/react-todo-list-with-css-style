//!==========輸入框 + 確認添加按鈕========== 
import React, { useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value); //!---可在欄位中 輸入文字
    }

    const handleSubmit = e =>{
        e.preventDefault(); //!---點選"按鈕"後，網頁不會被重新整理

        //!---給予 儲存的文字串 "隨機的id號碼"
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput(''); //!---輸入完畢，按下確認按鈕後，欄位會"清空"
    };

    return (
       <form className='todo-form' onSubmit={handleSubmit}>
           {props.edit ? ( 
            <>
                <input
                    type="text"
                    placeholder="更新內容"
                    value={input}
                    name="text"
                    className="todo-input edit"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button edit">更新</button>
            </>
           ) : (
            <>
                <input
                    type="text"
                    placeholder="在這裡寫下待會要做的事"
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button">添加</button>
            </>
           ) }
       </form>
    )
}

export default TodoForm
