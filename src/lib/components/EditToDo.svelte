<script lang="ts">
    import {Button, Input, Label, Textarea} from "flowbite-svelte";
    import {todosStore, type Todo} from "$lib/stores/todo";
    import {modalStore} from "$lib/stores/modal";

    let textAreaProps = {
        id: "description",
        name: "description",
        label: "Description",
        placeholder: "Description",
        rows: 4,
    };

    export let title: string = '';
    export let description: string = '';
    export let id: number = 0;
    export let mode = 'create';

    const submit = (): void => {

        const todo: Todo = {
            id,
            title,
            description,
            completed: false
        };

        $modalStore.open = false;
        if (mode === 'create') {
            todosStore.addTodo(todo);
        } else {
            todosStore.updateTodo(id, todo);
        }

    };
</script>
<form on:submit|preventDefault={submit}>
    <div class="mb-6">
        <Label for="title" class="block mb-2">Title</Label>
        <Input id="title" name="title" placeholder="Title" required bind:value={title}/>
    </div>
    <div class="mb-6">
        <Textarea {...textAreaProps} bind:value={description}/>
    </div>
    <Button type="submit">
        Submit
    </Button>
</form>