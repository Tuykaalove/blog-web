import { useState } from "react";
//const todos = ['geree tseverleh', 'geree tseverleh1', 'geree tseverleh2'];

export function Todos() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    function handleTextChange(e){
        setText(e.target.value);
    }
    
    function addTodo(){
        if(text === ""){
            setError("Utgaa bichne uu");
        }
        else{
        const newTodos = [text, ...todos];
        setTodos(newTodos);
        setText("");
        setError("");
        }
    }

    function handleDelete12(bairlal){
        if(window.confirm("Устгах уу?")){
            const newTodos = [...todos];
            newTodos.splice(bairlal, 1); 
            setTodos(newTodos);
        }
    }
    return (
        <div>
            <input value={text} style={{borderColor: error ? "red": "black"}} onChange={handleTextChange}/>
            <button onClick={addTodo}>Нэмэх</button>
            {error && <div style={{color: "red"}}>Aldaa: {error}</div>}
            
            <ul>
                {todos.map((todo1, index1) => {
                    const d = index1 * 2; 
                    return (
                    <li key={index1} style={{textDecoration: "line-through"}}>
                        <input type="checkbox"/> {todo1} <button onClick={()=>handleDelete12(index1,d)}>Устгах</button>
                    </li>
                    );
                    })}
            </ul>
        </div>
    );
}