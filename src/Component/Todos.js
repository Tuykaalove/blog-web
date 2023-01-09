import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
//const todos = ['geree tseverleh', 'geree tseverleh1', 'geree tseverleh2'];

const a = ["asfgvhj"]; //huuchin butets
const a1 = [{text: "adadafa", id: 123, done: true}]; //shine butets


export function Todos() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");
    const [editing, setEditing] = useState();

    function handleTextChange(e){
        setText(e.target.value);
    }
    
    function addTodo(){
        if(text === ""){
            setError("Utgaa bichne uu");
        }
        else {
            if(editing === undefined){
                const newTodo = {
                    text: text,
                    done: false,
                    id: uuidv4(),
                };
                const newTodos = [newTodo, ...todos];
                setTodos(newTodos);
            }  else {
                const newTodos = [...todos];
                newTodos[editing].text = text;  
                setTodos(newTodos);
                setEditing(undefined);
        }
        setText("");
        setError("");
        }
    }

    function handleDelete12(bairlal1){
        if(window.confirm("Устгах уу?")){
            const newTodos = [...todos];
            newTodos.splice(bairlal1, 1); 
            setTodos(newTodos);
        }
    }

    function handleDoneChange(id, e){
        const newTodos = [...todos];

        let index;
        for(let i = 0; i < todos.length; i++){
            if(id === todos[i].id){
                index = i;
                break;
            }
        }
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }
    //zasah arga1
    function editTodoWithPrompt(id){
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) =>todo.id === id);
        
        const editedText = prompt("Todo zasah", todos[index].text);
        newTodos[index].text = editedText;

        setTodos(newTodos);
    }

    //zasah arga2

    function editTodoWithCreatInput(index){
        setEditing(index);
        setText(todos[index].text);
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
                    <li key={todo1.id} style={{textDecoration: todo1.done ?"line-through" : "none"}}>
                        <input type="checkbox" onChange={(e) => handleDoneChange(todo1.id, e)}/> {todo1.text} {!todo1.done && (
                            <>
                            {/*zasah arga 1*/}
                            {/*<button onClick={() => editTodoWithPrompt(todo1.id)}> Засах </button>  */}

                            {
                                /* zasah arga 2*/
                                <button onClick={() => editTodoWithCreatInput(index1)}>Засах</button>
                            }
                            </>
                        )}<button onClick={()=>handleDelete12(index1,d)}>Устгах</button>
                    </li>
                    );
                    })}
            </ul>
        </div>
    );
}