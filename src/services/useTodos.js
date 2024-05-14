import { API_URL } from "./apiConfig";

export async function getTodos(){
    const res = await fetch(`${API_URL}/todos`);
    const data = await res.json();


    return data;
}