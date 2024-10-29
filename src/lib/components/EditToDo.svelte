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
    export let estimated: string = '';
    export let id: number = 0;
    export let current: string = '0';

    const submit = (): void => {

        const todo: Todo = {
            id,
            title,
            description,
            estimated,
            current,
            completed: false
        };


        if (title.length > 0 && description.length > 0 && estimated.length > 0) {
            todosStore.addTodo(todo);
        } else {
            todosStore.updateTodo(id, todo);
        }

        $modalStore.open = false;
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
    <div class="mb-6">
        <Label for="title" class="block mb-2">Time To complete</Label>
        <Input id="number" name="estimated" placeholder="Estimated Time to Complete" required bind:value={estimated}/>
    </div>
    <Button type="submit">
        Submit
    </Button>
</form>