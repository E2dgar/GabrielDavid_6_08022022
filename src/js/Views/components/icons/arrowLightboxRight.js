const arrowRight = () => {
    const svg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 30 48')
    svg.setAttribute('width', 30)
    svg.setAttribute('height', 48)
    svg.setAttribute('fill', "none")
    svg.setAttribute('aria-hidden', true)

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute(
        'd',
        'M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z'
    )
    svg.append(path)

    return svg
}
    
export default arrowRight