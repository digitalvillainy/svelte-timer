<script lang="ts">
    import ToDoCard from "$lib/components/ToDoCard.svelte";
    import {modalStore} from "$lib/stores/modal";
    import EditToDo from "$lib/components/EditToDo.svelte";

    $modalStore.registerConfig({
        title: "Edit To Do Card",
        component: EditToDo,
        outsideclose: true
    });

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
        },
        {
            id: 2,
            title: "Hello World 2!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            id: 3,
            title: "Hello World 3!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            id: 4,
            title: "Hello World 4!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            id: 5,
            title: "Hello World 5!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            id: 6,
            title: "Hello World 6!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            id: 7,
            title: "Hello World 7!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        }
    ];
</script>

<section class="w-5/12 mx-auto">
    {#each todos as {...rest}, index (rest.id)}
        <ToDoCard {...rest}/>
    {/each}
</section>