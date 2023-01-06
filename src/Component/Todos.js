const todos = ['geree tseverleh', 'geree tseverleh1', 'geree tseverleh2'];

export function Todos() {
    return ( 
    <div>
        <ul>
            {todos.map(todo => <li>{todo}</li>)}
        </ul>
    </div>
    );
}