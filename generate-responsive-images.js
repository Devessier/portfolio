const { join, parse } = require('path')
const fs = require('fs')
const sharp = require('sharp')
const rimraf = require('rimraf')

const IN_DIRECTORY = join(__dirname, 'static/_img')
const OUT_DIRECTORY = join(__dirname, 'static/img')

function getName(path) {
    const { name } = parse(path)

    return name
}

rimraf.sync(OUT_DIRECTORY)

fs.mkdirSync(OUT_DIRECTORY)

fs.readdirSync(IN_DIRECTORY).forEach((path) => {
    const WIDTHS = [
        {
            size: 15,
            id: 'tiny',
            formats: ['jpeg'],
        },
        {
            size: 480,
            id: '480',
            formats: ['jpeg', 'webp'],
        },
        {
            size: 640,
            id: '640',
            formats: ['jpeg', 'webp'],
        },
        {
            size: 768,
            id: '768',
            formats: ['jpeg', 'webp'],
        },
        {
            size: 1024,
            id: '1024',
            formats: ['jpeg', 'webp'],
        },
        {
            size: 1280,
            id: '1280',
            formats: ['jpeg', 'webp'],
        },
        {
            size: null,
            id: 'full',
            formats: ['jpeg', 'webp'],
        },
    ]

    const name = getName(path)

    for (const { size, id, formats } of WIDTHS) {
        for (const format of formats) {
            sharp(join(IN_DIRECTORY, path))
                .resize({
                    width: size,
                })
                .toFormat(format)
                .toFile(join(OUT_DIRECTORY, `${name}-${id}.${format}`))
        }
    }
})
