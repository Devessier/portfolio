<script>
    import { onMount } from 'svelte'

    export let value
    export let name
    export let label
    export let placeholder

    let className = ''
    export { className as class }

    let ref

    function handleInput() {
        ref.style.height = 'auto'
        ref.style.height = `${ref.scrollHeight}px`
    }

    onMount(() => {
        ref.style.height = `${ref.scrollHeight}px`
    })
</script>

<label class="text-sm font-semibold flex flex-col {className}">
    {label}
    <textarea
        bind:this={ref}
        {name}
        {placeholder}
        bind:value
        class="text-sm p-2 border-2 border-gray-300 focus:border-red-400
        placeholder-gray-500 rounded focus:shadow focus:outline-none
        transition-colors duration-100 resize-y overflow-y-hidden mt-1"
        on:input={handleInput} />
</label>
