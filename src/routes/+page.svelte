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

    let todos = $todosStore;
    console.log(todos);
</script>

<section class="w-5/12 mx-auto">
    {#each todos as {...rest}, index (rest.id)}
        <ToDoCard {...rest}/>
    {/each}
</section>