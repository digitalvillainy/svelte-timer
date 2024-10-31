import {get, type Writable, writable} from "svelte/store";
import autoFillStore from "$lib/utils/autoFillStore";
import * as api from "$lib/api";

export type Todo = {
    id: number
    title: string
    description: string
    completed: boolean
}

type TodoStore = Writable<Todo[]> & {
    addTodo: (todo: Todo) => void
    updateTodo: (id: number, updatedTodo: Partial<Todo>) => void,
    removeTodo: (id: number) => void,
    completeTodo: (id: number, todo: Todo) => Promise<void>,
    getCompleted: () => Todo[] | undefined
}

const getTodoFromLocalStorage = (): Todo[] => {
    if (typeof window === 'undefined') return [];
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}
const createTodoStore = (): TodoStore => {
    const {
        subscribe,
        set,
        update
    } = writable<Todo[]>(getTodoFromLocalStorage(),
        () => {
            autoFillStore(todosStore, '/todos')
            subscribe((todos: Todo[]): void => {
                localStorage.setItem('todos', JSON.stringify(todos))
            });
            return (): void => {
            }
        }
    );

    //Listen for changes to the store and persist them to localStorage
    // subscribe((todos: Todo[]): void => localStorage.setItem('todos', JSON.stringify(todos)));

    const addTodo = async (todo: Todo): Promise<void> => {
        update((todos: Todo[]) => [...todos, todo]);

        await api.post('/todos', todo);
    };

    const updateTodo = async (id: number, updatedTodo: Partial<Todo>): Promise<void> => {
        update((todos: Todo[]) =>
            todos.map((todo: Todo) =>
                todo.id === id ? {...todo, ...updatedTodo} : todo
            )
        );

        await api.put('/todos', updatedTodo);
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


    return {
        subscribe,
        set,
        update,
        addTodo,
        updateTodo,
        removeTodo,
        completeTodo,
        getCompleted: () => get(todosStore).filter((todo: Todo): boolean => todo.completed)
    }
};

export const todosStore: TodoStore = createTodoStore()