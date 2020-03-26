<script>
    import { setContext, createEventDispatcher } from 'svelte'

    import { createFormStore } from '../store'

    export let method = 'POST'
    export let name
    let className
    export { className as class }

    const dispatch = createEventDispatcher()

    const { inputs, isValid } = createFormStore()
    setContext('inputs', inputs)

    function validate() {
        let valid = true

        for (const input of Object.values($inputs)) {
            const result = input.validate()
            if (result !== true) valid = false
        }

        if (valid === true) {
            dispatch('submit')
        }
    }
</script>

<form
    novalidate
    {method}
    {name}
    class={className}
    on:submit|preventDefault={validate}>
    <slot isValid={$isValid} />
</form>
