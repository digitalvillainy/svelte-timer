import {writable} from "svelte/store";
import type {Todo} from '$lib/stores/todo';

const updateTitle = (todo: Todo) => {
    timerStore.update((storeValue) => ({
        ...storeValue, currentTitle: todo.title
    }));
};

const startTimer = (todo: Todo) => {
    updateTitle(todo);
    setInterval(() => {
        const now: Date = new Date();
        const hours: string = now.getHours().toString().padStart(2, "0");
        const minutes: string = now.getMinutes().toString().padStart(2, "0");
        const seconds: string = now.getSeconds().toString().padStart(2, "0");

        timerStore.update((storeValue) => ({
            ...storeValue,
            timer: `${hours}:${minutes}:${seconds}`
        }))
    }, 1000);
};

export const timerStore = writable({
    currentId: 0,
    currentTitle: '',
    timer: '00:00:00',
});

export {startTimer};