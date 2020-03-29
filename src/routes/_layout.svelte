<script>
    import { stores } from '@sapper/app'

    import { freshNavigation } from '../store'
    import Nav from '../components/Nav.svelte'
    import ToastContainer from '../components/ToastContainer.svelte'

    const { page } = stores()

    export let segment

    page.subscribe(() => {
        freshNavigation.update(value => {
            if (value === undefined) return true

            return false
        })
    })

    function reloadPage() {
        window.location.reload()
    }
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow h-full">
    <slot />
</main>

<ToastContainer />
