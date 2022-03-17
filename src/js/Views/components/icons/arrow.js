const arrow = () => {
    const svg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 16 11')
    svg.setAttribute('aria-hidden', true)
    svg.setAttribute('width', 16)
    svg.setAttribute('height', 11)
    svg.setAttribute('fill', "none")

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute(
        'd',
        'M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z'
    )
    svg.append(path)

    return svg
}
    
export default arrow
