<script lang="ts">
    //Props declaration
    import {CheckCircleOutline, CloseOutline, EditOutline} from "flowbite-svelte-icons";
    import {modalStore} from "$lib/stores/modal.ts";

    export let title: string, description: string, estimated: number, current: number;
    export let id: number = 0;
    let elapsed = "00:00:00";

    const editModal = (): void => {
        $modalStore.open = true;
        $modalStore.props = {
            title,
            description,
            estimated,
            current
        }
    }
</script>
<div class="flex flex-row justify-between w-full bg-slate-800 pr-2 border-2 border-gray-500 rounded my-4">
    <div class="text-white flex flex-col border-gray-500 border-l-8 py-2 pl-2">
        <div class="flex flex-row justify-between w-full">
            <h4 class="text-2xl mb-3">
                {title}
            </h4>
        </div>
        <p class="w-8/12">
            {description}
        </p>
    </div>
    <div class="text-white flex flex-col py-2 pr-2">
        <ul class="flex flex-row place-self-end space-x-2 mb-3">
            <li>
                <EditOutline class="size-3 hover:text-blue-300 cursor-pointer"
                             on:click={() => editModal()}/>
            </li>
            <li>
                <CheckCircleOutline class="size-3 hover:text-green-300 cursor-pointer"/>
            </li>
            <li>
                <CloseOutline class="size-2 hover:text-red-300 cursor-pointer"/>
            </li>
        </ul>
        <span>Estimated Time: {estimated}</span>
        <span>Current Time: {current}</span>
        <span>Elapsed Time: {elapsed}</span>
    </div>
</div>