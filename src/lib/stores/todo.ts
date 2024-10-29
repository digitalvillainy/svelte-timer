import {type Writable, writable} from "svelte/store";
import autoFillStore from "$lib/utils/autoFillStore";

type Todo = {
    id: number
    title: string
    description: string
    completed: boolean
    estimated: number
    current: number
    elapsed: string
}

type TodoStore = Writable<Todo[]> & {
    addTodo: (todo: Todo) => void
    updateTodo: (id: number, updatedTodo: Partial<Todo>) => void
    removeTodo: (id: number) => void
}

const createTodoStore = (): TodoStore => {
    const {
        subscribe,
        set,
        update
    } = writable<Todo[]>([],
        () => autoFillStore(todosStore, '/todos')
    );

    const addTodo = (todo: Todo): void => {
        update((todos) => [...todos, todo]);
    };

    const updateTodo = (id: number, updatedTodo: Partial<Todo>): void => {
        update((todos: Todo[]) =>
            todos.map((todo: Todo) =>
                todo.id === id ? {...todo, ...updatedTodo} : todo
            )
        );
    };

    const removeTodo = (id: number): void => {
        update((todos) => todos.filter((todo) => todo.id !== id));
    };

    return {
        subscribe,
        set,
        update,
        addTodo,
        updateTodo,
        removeTodo
    }
};

export const todosStore: TodoStore = createTodoStore()