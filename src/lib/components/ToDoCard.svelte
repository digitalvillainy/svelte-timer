<script lang="ts">
    import {CheckCircleOutline, CloseOutline, EditOutline} from "flowbite-svelte-icons";
    import {modalStore} from "$lib/stores/modal.ts";
    import {todosStore} from "$lib/stores/todo";

    export let title: string, description: string;
    export let id: number = 0;
    export let completed = false;
    export let created_at = null;
    export let updated_at = null;
    export let value = null;

    const editModal = (): void => {
        $modalStore.open = true;
        $modalStore.props = {
            mode: 'edit',
            id,
            title,
            description
        }
    };

    const deleteTodo = (): void => {
        todosStore.removeTodo(id);
    };

    const completeTodo = (): void => {
        todosStore.completeTodo(id, {
            id,
            title,
            description,
            completed: !completed
        });
    };

    $: completedTaskBorder = completed ? 'bg-green-900 border-green-500' : 'bg-slate-800 border-gray-500';
    $: completedTaskText = completed ? 'text-green-300 border-green-500' : 'text-white border-gray-500';
    $: completedTaskIcon = completed ? 'text-green-300' : 'text-gray-300';
</script>
<div class="flex flex-row justify-between w-full {completedTaskBorder} pr-2 border-2 rounded my-4">
    <div class="flex flex-col {completedTaskText} border-l-8 py-2 pl-2">
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
                <EditOutline class="size-3 hover:text-blue-400 cursor-pointer" on:click={editModal}/>
            </li>
            <li>
                <CheckCircleOutline class="{completedTaskIcon} size-3 hover:text-green-400 cursor-pointer"
                                    on:click={completeTodo}/>
            </li>
            <li>
                <CloseOutline class="size-2 hover:text-red-300 cursor-pointer" on:click={deleteTodo}/>
            </li>
        </ul>
    </div>
</div>