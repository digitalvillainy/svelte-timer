import {get, type Writable, writable} from "svelte/store";
import autoFillStore from "$lib/utils/autoFillStore";
import * as api from "$lib/api";

type Todo = {
    id: number
    title: string
    description: string
    completed: boolean
    estimated: string
    current: string
    elapsed: string
}

type TodoStore = Writable<Todo[]> & {
    addTodo: (todo: Todo) => void
    updateTodo: (id: number, updatedTodo: Partial<Todo>) => void,
    removeTodo: (id: number) => void,
    completeTodo: (id: number, todo: Todo) => Promise<void>,
    getCompleted: () => Todo[] | undefined
    startTimer: (todo: Todo) => void
}

const createTodoStore = (): TodoStore => {
    const {
        subscribe,
        set,
        update
    } = writable<Todo[]>([],
        () => autoFillStore(todosStore, '/todos')
    );

    const addTodo = async (todo: Todo): Promise<void> => {
        update((todos: Todo[]) => [...todos, todo]);

        const todos: Todo[] = get(todosStore).filter((todo: Todo): boolean => todo.id === 0);

        await api.post('/todos', todos)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    const updateTodo = async (id: number, updatedTodo: Partial<Todo>): Promise<void> => {
        update((todos: Todo[]) =>
            todos.map((todo: Todo) =>
                todo.id === id ? {...todo, ...updatedTodo} : todo
            )
        );

        await api.put('/todos', updatedTodo)
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    const removeTodo = async (id: number): Promise<void> => {
        update((todos: Todo[]) => todos.filter((todo: Todo): boolean => todo.id !== id));

        const updated: Todo[] = get(todosStore).filter((todo: Todo): boolean => todo.id !== id);
        await api.retire('/todos/' + id)
            .then(() => update((todos: Todo[]) => [...todos, ...updated]))
            .catch((err) => console.error(err));
    };

    const completeTodo = async (id: number, todo: Todo): Promise<void> => {
        update((todos: Todo[]) =>
            todos.map((todo: Todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );

        await updateTodo(id, todo);
    };

    const startTimer = (todo: Todo) => {
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");

            todo.current = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }

    return {
        subscribe,
        set,
        update,
        addTodo,
        updateTodo,
        removeTodo,
        completeTodo,
        startTimer,
        getCompleted: () => get(todosStore).filter((todo: Todo): boolean => todo.completed)
    }
};

export const todosStore: TodoStore = createTodoStore()