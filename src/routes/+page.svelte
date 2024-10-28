<script lang="ts">
    import ToDoCard from "$lib/components/ToDoCard.svelte";
    import {modalStore} from "$lib/stores/modal";
    import EditToDo from "$lib/components/EditToDo.svelte";

    $modalStore.registerConfig({
        title: "Edit To Do Card",
        component: EditToDo,
        outsideclose: true
    })

    let todos: {
        title: string,
        description: string,
        estimated: string,
        current: string
    }[] = [
        {
            id: 1,
            title: "Hello World 1!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        }
    ]
</script>

<section class="w-5/12 mx-auto">
    {#each todos as {...rest}, index (rest.id)}
        <ToDoCard {...rest}/>
    {/each}
</section>