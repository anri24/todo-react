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

export async function updateTodo(data,id){
    await fetch(`${API_URL}/update/todo/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
}

export async function deleteTodo(id){
    await fetch(`${API_URL}/delete/todo/${id}`,{
        method: 'DELETE',
    })
}

export async function updateStatus(id){
    await fetch(`${API_URL}/update/status/${id}`,{
        method: 'PATCH'
    })
}