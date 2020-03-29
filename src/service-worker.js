import { timestamp, files, shell, routes } from '@sapper/service-worker'

import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'

const toCache = shell.concat(
    files.filter((file) => {
        if (file.startsWith('_')) return false

        if (!(file.endsWith('.webp') || file.endsWith('.jpeg'))) return true

        const SUBSTRINGS_TO_BAN = ['480', '640', '768', '1024', '1280', 'full']

        return !SUBSTRINGS_TO_BAN.some((substring) => file.includes(substring))
    })
)

skipWaiting()
clientsClaim()

precacheAndRoute(
    toCache.map((resource) => {
        const dotsCount = [...resource].filter((c) => c === '.').length
        const revision = dotsCount === 2 ? null : timestamp

        return { url: resource, revision }
    })
)

// CSS files are not available in `shell` array and we can't precache them currenty.
// Anyway we must cache them
registerRoute(/\.(?:css)$/, new StaleWhileRevalidate())

// Cache our fonts stylesheets with a stale while revalidate strategy.
registerRoute(
    /^https:\/\/(?:fonts\.googleapis\.com)|(?:rsms.me\/inter\/inter.css)/,
    new StaleWhileRevalidate({
        cacheName: 'fonts-stylesheets',
    })
)
// Cache our fonts webfont files with a cache first strategy for 1 year.
registerRoute(
    /^https:\/\/(?:fonts\.gstatic\.com)|(?:rsms\.me\/inter\/font-files)/,
    new CacheFirst({
        cacheName: 'fonts-webfonts',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    })
)

registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    })
)

const navigationRoute = new NavigationRoute(
    createHandlerBoundToURL('/service-worker-index.html'),
    {
        allowlist: routes.map(({ pattern }) => pattern),
    }
)
registerRoute(navigationRoute)
