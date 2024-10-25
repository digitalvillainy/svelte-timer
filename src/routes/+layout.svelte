<script>
    import "../app.postcss";
    import {Footer, FooterCopyright, DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import ReusableModal from "$lib/components/ReusableModal.svelte";
</script>
<div class="py-2 px-4">
    <Navbar class="z-10 w-full rounded bg-primary-600 border-2 border-[#929292]" let:hidden let:toggle>
        <NavBrand>
            Test
        </NavBrand>
        <NavHamburger on:click={toggle}/>
        <NavUl {hidden}>
        </NavUl>
    </Navbar>
    <slot/>
    <Footer class="fixed inset-x-0 bottom-0 pb-2">
        <div class="w-6/12 h-16 rounded mx-auto bg-yellow-400">
            Test
        </div>
    </Footer>
    <ReusableModal/>
</div>
