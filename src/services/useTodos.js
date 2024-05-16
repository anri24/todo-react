import { API_URL } from "./apiConfig";

export async function getTodos(){
    const res = await fetch(`${API_URL}/todos`);
    const data = await res.json();
    return data;
}

export async function getTodo(id){
    const res = await fetch(`${API_URL}/todo/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export async function createTodo(data){
    await fetch(`${API_URL}/store/todo`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data,
    })
}