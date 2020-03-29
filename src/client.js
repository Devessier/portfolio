import * as sapper from '@sapper/app'
import { Workbox } from 'workbox-window'

import { toasts } from './store'

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

    setupServiceWorker()

    console.log('> client-side app has been started')

    await resolveAfter(200)

    await sapper.prefetchRoutes()

    console.log('> prefetched all routes')
}

function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        const wb = new Workbox('/service-worker.js')

        wb.addEventListener('installed', (event) => {
            if (event.isUpdate) {
                toasts.trigger({
                    title: 'Mise à jour',
                    text:
                        "Une nouvelle version est disponible. Rechargez la page pour qu'elle soit prise en compte.",
                    buttons: [
                        {
                            text: 'Recharger',
                            action: () => window.location.reload(),
                        },
                    ],
                })
            }
        })

        wb.register()
    }
}

load()
