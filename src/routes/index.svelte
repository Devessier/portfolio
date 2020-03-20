<script>
    import GithubIcon from '../components/GithubIcon.svelte';
</script>

<svelte:head>
    <title>Accueil</title>
</svelte:head>

<div class="mt-10">
    <h1 class="text-2xl font-bold uppercase">Baptiste Devessier</h1>

    <p class="mt-4 font-medium text-lg">Développeur Web, Paris</p>

    <ul class="flex items-center mt-3">
        <li>
            <a
                href="https://github.com/Devessier"
                class="text-red-500"
                title="Github">
                <GithubIcon />
            </a>
        </li>
    </ul>
</div>
