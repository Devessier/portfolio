<script>
    export let value
    export let name
    export let autocomplete = 'off'
    export let label
    export let placeholder
    export let type = 'text'

    let className = ''
    export { className as class }

    function handleInput({ target: { value: newValue } }) {
        if (['number', 'range'].includes(type)) {
            value = +newValue
        } else {
            value = newValue
        }
    }
</script>

<label for={name} class="flex flex-col text-sm font-semibold {className}">
    {label}
    <input
        id={name}
        {name}
        {placeholder}
        {autocomplete}
        {type}
        on:input={handleInput}
        class="text-sm p-2 border-2 rounded focus:shadow border-gray-300
        placeholder-gray-500 focus:border-red-400 focus:outline-none
        transition-colors duration-100 mt-1" />
</label>
