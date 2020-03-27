import * as sapper from '@sapper/app'

sapper
    .start({
        target: document.querySelector('#sapper'),
    })
    .then(() => {
        console.log('> client-side app has been started')

        return sapper.prefetchRoutes()
    })
    .then(() => {
        console.log('> prefetched all routes')
    })
