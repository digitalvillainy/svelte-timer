<script lang="ts">
    import {Button, Input, Label, Textarea} from "flowbite-svelte";

    let textAreaProps = {
        id: "description",
        name: "description",
        label: "Description",
        placeholder: "Description",
        rows: 4,
    };

    let title: string = '';
    let description: string = '';
    let estimated: string = '';
    let id: number = 0;
    let current: string = '';

</script>
<form>
    <div class="mb-6">
        <Label for="title" class="block mb-2">Title</Label>
        <Input id="title" name="title" placeholder="Title" required bind:value={title}/>
    </div>
    <div class="mb-6">
        <Textarea {...textAreaProps} bind:value={description}/>
    </div>
    <div class="mb-6">
        <Label for="title" class="block mb-2">Time To complete</Label>
        <Input id="number" name="estimated" placeholder="Estimated Time to Complete" required bind:value={estimated}/>
    </div>
    <Button type="submit">
        Submit
    </Button>
</form>