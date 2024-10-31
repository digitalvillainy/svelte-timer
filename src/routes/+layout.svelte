<script lang="ts">
    import "../app.postcss";
    import {Button, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import ReusableModal from "$lib/components/ReusableModal.svelte";
    import {ClockOutline, PlusSolid} from "flowbite-svelte-icons";
    import {modalStore} from "$lib/stores/modal";
    import {todosStore} from "$lib/stores/todo";

    const createTask = (): void => {
        $modalStore.open = true;
        $modalStore.title = "Create Task";
        $modalStore.mode = 'create';
        if ($modalStore.props) {
            $modalStore.props = {
                id: $todosStore.length + 1,
            };
        }
    };

</script>
<div>
    <Navbar class="fixed top-0 z-10 w-full bg-black" let:hidden let:toggle>
        <NavBrand href="/">
            <ClockOutline class="w-12 h-12 fill-red-600 mr-4"/>
            <span class="text-white text-3xl font-bold">Svelte Time</span>
        </NavBrand>
        <NavHamburger on:click={toggle} menuClass="bg-red-400 mx-2"/>
        <NavUl {hidden}>
            <NavLi href="./" on:click={toggle}>
                <Button outline={window.location.pathname !== "/svelte-timer/"} color="blue" class="text-white">
                    Current Tasks
                </Button>
            </NavLi>
            <NavLi href="./completed" on:click={toggle}>
                <Button color="green" outline={window.location.pathname !== "/svelte-timer/completed"} class="text-white hidden md:block">
                    Completed
                </Button>
                <Button color="green" class="text-white md:hidden">
                    Completed
                </Button>
            </NavLi>
            <Button color="red" class="text-white" alternate="" on:click={createTask}>
                <PlusSolid class="w-4 h-4"/>
            </Button>
        </NavUl>
    </Navbar>
    <slot/>
    <ReusableModal/>
</div>
