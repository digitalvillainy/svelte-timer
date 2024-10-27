<script>
    import ToDoCard from "$lib/components/ToDoCard.svelte";

    console.log('Hello World!');
    let title = "Hello World!";
    let description = "Hello World!";
    let estimated = "Hello World!";
    let current = "Hello World!";
    let todos = [
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        },
        {
            title: "Hello World!",
            description: "Hello World!",
            estimated: "Hello World!",
            current: "Hello World!"
        }
    ]
</script>

<section class="w-5/12 mx-auto">
    {#each todos as todo}
        <ToDoCard title={todo.title} description={todo.description} estimated={todo.estimated} current={todo.current}/>
    {/each}
</section>