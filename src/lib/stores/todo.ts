import {writable} from "svelte/store";

export type Todo = {
    id: number,
    title: string,
    description: string,
    estimated: number,
    completed?: boolean
}

export const todos = writable({
    id: 0,
    title: "",
    description: "",
    estimated: 0,
    completed: false,

})
