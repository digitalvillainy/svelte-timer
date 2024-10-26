<script lang="ts">
    import "../app.postcss";
    import {Button, Footer, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import ReusableModal from "$lib/components/ReusableModal.svelte";
    import {ClockOutline} from "flowbite-svelte-icons";
</script>
<div>
    <Navbar color="transparent" class="z-10 w-full" let:hidden let:toggle>
        <NavBrand href="/">
            <ClockOutline class="w-12 h-12 fill-red-600 mr-4"/>
            <span class="text-white text-3xl font-bold">Svelte Time</span>
        </NavBrand>
        <NavHamburger on:click={toggle}/>
        <NavUl {hidden}>
            <NavLi href="/" on:click={toggle}>
                <Button color="blue" class="text-white">
                    Current Tasks
                </Button>
            </NavLi>
            <NavLi href="/completed" on:click={toggle}>
                <Button color="green" class="text-white">
                    Completed
                </Button>
            </NavLi>
        </NavUl>
    </Navbar>
    <slot/>
    <Footer class="fixed inset-x-0 bottom-0 pb-2">
        <div class="w-5/12 h-16 rounded mx-auto bg-red-600 p-1">
            Test
        </div>
    </Footer>
    <ReusableModal/>
</div>
