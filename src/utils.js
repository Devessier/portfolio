export function nodeContainsTarget(node, target) {
    while (target !== null) {
        if (target === node) return true

        target = target.parentNode
    }

    return false
}
