<script lang="ts">
    import "../app.postcss";
    import {Button, Footer, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import ReusableModal from "$lib/components/ReusableModal.svelte";
    import {ClockOutline, PauseSolid, PlaySolid, PlusSolid} from "flowbite-svelte-icons";
    import {modalStore} from "$lib/stores/modal";

    const createTask = (): void => {
        $modalStore.open = true;
        $modalStore.title = "Create Task";
        if($modalStore.props) {
            $modalStore.props = {};
        }
    };
</script>
<div>
    <Navbar class="fixed top-0 z-10 w-full bg-black" let:hidden let:toggle>
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
            <Button color="red" class="text-white" alternate="" on:click={createTask}>
                <PlusSolid class="w-4 h-4"/>
            </Button>
        </NavUl>
    </Navbar>
    <slot />
    <Footer class="fixed inset-x-0 bottom-0 pb-2 bg-black">
        <div class="w-5/12 h-16 rounded mx-auto bg-red-600 p-1 flex flex-row justify-between place-items-center">
            <div class="w-32 flex flex-row justify-between py-1 pr-4 border-r-2 border-slate-600">
                <svg class="w-10 h-10 text-white hover:text-blue-200 hover:shadow-black dark:text-white self-center cursor-pointer"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Z"/>
                </svg>
                <PauseSolid
                        class="w-6 h-6 text-yellow-300 self-center cursor-pointer hover:text-yellow-200 hover:shadow-black"/>
                <PlaySolid
                        class="w-6 h-6 text-mint-600 self-center cursor-pointer hover:text-mint-200 hover:shadow-black"/>
            </div>
            <div class="text-white font-bold">
                Test Test Test Test
            </div>
            <div class="w-32 border-l-2 border-slate-600 pl-5 text-white font-bold">
                1H 30M
            </div>
        </div>

    </Footer>
    <ReusableModal/>
</div>
