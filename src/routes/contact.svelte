<script>
    import Page from '../components/Page.svelte'
    import Input from '../components/Input.svelte'
    import TextArea from '../components/TextArea.svelte'
    import { LocationMarkerIcon, AtIcon } from '../components/Icons'

    let name = ''
    let email = ''
    let message = ''
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
        name="contact"
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
        netlify>
        <Input
            name="name"
            autocomplete="name"
            label="Nom"
            placeholder="Tom Delorme"
            bind:value={name} />
        <Input
            name="email"
            autocomplete="email"
            label="Adresse mail"
            placeholder="tom.delorme@gmail.com"
            type="email"
            bind:value={email} />

        <TextArea
            name="message"
            label="Message"
            placeholder="Bonjour Baptiste, …"
            bind:value={message}
            class="sm:col-span-2" />

        <div class="sm:col-span-2">
            <button
                type="submit"
                class="px-4 py-2 rounded shadow bg-red-500 hover:bg-red-400
                focus:bg-red-400 focus:outline-none text-white transition-colors
                duration-150">
                Envoyer
            </button>
        </div>
    </form>
</Page>
