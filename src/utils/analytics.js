const analyticsTracking = (eventeName) => {
    if (typeof window !== 'undefined') {
        window.ga('send', 'event', 'social', 'click', eventeName, {
            nonInteraction: true
        })
    }
}

export default analyticsTracking