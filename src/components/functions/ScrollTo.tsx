export const scrollTo = (id: string) => {
    const topOffset = document.getElementById(id)?.offsetTop
    let yScroll = scrollY
    setInterval(() => {
        if (topOffset && yScroll < topOffset) {
            const addPoint = 20
            window.scrollTo(yScroll - addPoint, yScroll - addPoint)
            yScroll += addPoint;
        }
    }, 1)  
}