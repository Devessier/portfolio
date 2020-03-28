import * as sapper from '@sapper/app'

function resolveAfter(ms, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, ms)
    })
}

async function load() {
    await sapper.start({
        target: document.querySelector('#sapper'),
    })

    console.log('> client-side app has been started')

    await resolveAfter(200)

    await sapper.prefetchRoutes()

    console.log('> prefetched all routes')
}

load()
