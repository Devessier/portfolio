<script context="module">
    let counter = 0
</script>

<script>
    import { slide } from 'svelte/transition'
    import { cubicInOut } from 'svelte/easing'

    export let value
    export let label
    export let rules = []
    export let lazy = true
    export let isValid = lazy === true

    let className = ''
    export { className as class }

    const id = `input-${counter++}`

    let initialized = false
    let state = true

    $: {
        if (initialized === false) {
            initialized = Boolean(value)
        }
    }
    $: {
        if ((lazy && initialized) || !lazy) {
            state = checkRules(rules, value)
        }
    }
    $: isValid = state === true

    function checkRules(rules, value) {
        for (const fn of rules) {
            const result = fn(value)
            if (result !== true) return result
        }

        return true
    }
</script>

<style lang="postcss">
    label + :global(input:required:not(:focus), textarea:required:not(:focus)) {
        @apply shadow-none;
    }
</style>

<div class="flex flex-col {className}">
    <label for={id} class=" text-sm font-semibold">{label}</label>

    <slot
        {id}
        {isValid}
        baseClass="text-sm p-2 border-2 rounded focus:shadow
        placeholder-gray-500 focus:outline-none transition-colors duration-100
        mt-1 {isValid ? 'border-gray-300 focus:border-gray-400' : 'border-red-400 focus:border-red-500'}" />

    {#if !isValid}
        <div
            transition:slide={{ duration: 200, easing: cubicInOut }}
            class="flex flex-col"
            role="alert">
            <div class="text-xs text-red-700">{state}</div>
        </div>
    {/if}
</div>
