import {type Writable, writable} from "svelte/store";
import autoFillStore from "$lib/utils/autoFillStore";

export const todosStore: Writable<any[]> = writable([], () => autoFillStore(todosStore, '/todos'));