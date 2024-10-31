<script lang="ts">
    import ToDoCard from "$lib/components/ToDoCard.svelte";
    import {modalStore} from "$lib/stores/modal";
    import EditToDo from "$lib/components/EditToDo.svelte";
    import {todosStore} from "$lib/stores/todo";

    $modalStore.registerConfig({
        title: "Edit To Do Card",
        component: EditToDo,
        outsideclose: true
    })

    $: todos = $todosStore.filter((todo: Todo): boolean => !todo.completed);
</script>

<section class="w-11/12 lg:w-7/12 mx-auto mt-24 pb-16">
    {#each todos as {...rest}, index (rest.id ?? index)}
        <ToDoCard {...rest}/>
    {/each}
</section>