<script>
    import Page from '../components/Page.svelte'
    import TextField from '../components/TextField.svelte'
    import TextArea from '../components/TextArea.svelte'
    import { LocationMarkerIcon, AtIcon } from '../components/Icons'
    import { notEmpty, emailValid } from '../utils.js'

    const FORM_NAME = 'contact'

    let name = ''
    let isNameValid = true
    let email = ''
    let isEmailValid = true
    let message = ''
    let isMessageValid = true

    $: disabled = !(isNameValid && isEmailValid && isMessageValid)
    $: console.log('validations', isNameValid, isEmailValid, isMessageValid)

    function encodeRequestBody(body) {
        return Object.entries(body)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            )
            .join('&')
    }

    async function handleSubmit(event) {
        const body = encodeRequestBody({
            'form-name': FORM_NAME,
            name,
            email,
            message,
        })

        console.log('body =', body)

        return

        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        })
            .then(res => res.text())
            .then(console.log)
            .catch(console.error)
    }
</script>

<svelte:head>
    <title>Baptiste Devessier | Contact</title>
</svelte:head>

<Page class="mt-4 sm:mt-10 mb-6 grid grid-cols-1 md:grid-cols-2">
    <div>
        <h1 class="text-4xl mb-6 sm:mb-12">Contactez-moi</h1>

        <div class="flex mb-3">
            <LocationMarkerIcon
                class="w-6 h-6 stroke-current text-red-500 mr-2"
                aria-hidden="true" />

            <span>Seine-et-Marne, France</span>
        </div>

        <div class="flex mb-4 md:mb-0">
            <AtIcon
                class="w-6 h-6 stroke-current text-red-500 mr-2"
                aria-hidden="true" />

            <a href="mailto:baptiste@devessier.fr" class="block">
                baptiste@devessier.fr
            </a>
        </div>
    </div>

    <form
        method="POST"
        name={FORM_NAME}
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
        on:submit|preventDefault={handleSubmit}>
        <TextField
            name="name"
            autocomplete="name"
            label="Nom"
            placeholder="Tom Delorme"
            bind:value={name}
            bind:isValid={isNameValid}
            required
            rules={[notEmpty]} />
        <TextField
            name="email"
            autocomplete="email"
            label="Adresse mail"
            placeholder="tom.delorme@gmail.com"
            type="email"
            bind:value={email}
            bind:isValid={isEmailValid}
            required
            rules={[notEmpty, emailValid]} />

        <TextArea
            name="message"
            label="Message"
            placeholder="Bonjour Baptiste, …"
            bind:value={message}
            class="sm:col-span-2"
            bind:isValid={isMessageValid}
            required
            rules={[notEmpty]} />

        <div class="sm:col-span-2">
            <button
                type="submit"
                {disabled}
                class="px-4 py-2 rounded shadow focus:outline-none
                transition-colors duration-150 {disabled ? 'bg-gray-300 text-gray-800 cursor-not-allowed' : 'bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white cursor-pointer'}">
                Envoyer
            </button>
        </div>
    </form>
</Page>
