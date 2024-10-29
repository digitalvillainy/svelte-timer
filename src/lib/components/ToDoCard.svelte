<script lang="ts">
    //Props declaration
    import {CheckCircleOutline, CloseOutline, EditOutline} from "flowbite-svelte-icons";
    import {modalStore} from "$lib/stores/modal.ts";
    import {todosStore} from "$lib/stores/todo";

    export let title: string, description: string, estimated: number, current: number;
    export let id: number = 0;
    export let elapsed = "00:00:00";
    export let completed = false;
    export let created_at = null;
    export let updated_at = null;
    export let value = null;

    const editModal = (): void => {
        $modalStore.open = true;
        $modalStore.props = {
            title,
            description,
            estimated,
            current
        }
    };

    const deleteTodo = (id: number): void => {
        todosStore.removeTodo(id);
    };

    const completeTodo = (id: number): void => {
        todosStore.completeTodo(id, {
            id,
            title,
            description,
            estimated,
            current,
            completed: !completed
        });
    };
</script>
<div class="flex flex-row justify-between w-full bg-slate-800 pr-2 border-2 border-gray-500 rounded my-4">
    <div class="text-white flex flex-col border-gray-500 border-l-8 py-2 pl-2">
        <div class="flex flex-row justify-between w-full">
            <h4 class="text-2xl mb-3">
                {title}
            </h4>
        </div>
        <p>
            {description}
        </p>
    </div>
    <div class="text-white flex flex-col py-2 pr-2">
        <ul class="flex flex-row place-self-end space-x-2 mb-3">
            <li>
                <EditOutline class="size-3 hover:text-blue-400 cursor-pointer"
                             on:click={() => editModal()}/>
            </li>
            <li>
                <CheckCircleOutline
                        class={
                        completed ?
                        "text-green-300 size-3 hover:text-green-400 cursor-pointer"
                        : "text-gray-300 size-3 hover:text-green-400 cursor-pointer"
                        }
                        on:click={() => completeTodo(id)}/>
            </li>
            <li>
                <CloseOutline class="size-2 hover:text-red-300 cursor-pointer"
                              on:click={() => deleteTodo(id)}/>
            </li>
        </ul>
        <span>Estimated Time: {estimated}</span>
        <span>Current Time: {current}</span>
        <span>Elapsed Time: {elapsed}</span>
    </div>
</div>