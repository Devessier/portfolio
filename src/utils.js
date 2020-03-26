const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function nodeContainsTarget(node, target) {
    while (target !== null) {
        if (target === node) return true

        target = target.parentNode
    }

    return false
}

export function notEmpty(value) {
    return value ? true : 'Le champ est requis'
}

export function emailValid(value) {
    return EMAIL_REGEX.test(value) || "L'adresse mail n'est pas valide"
}
