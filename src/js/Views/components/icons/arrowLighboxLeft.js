const arrowLeft = () => {
    const svg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 30 48');
    svg.setAttribute('width', 30);
    svg.setAttribute('height', 48);
    svg.setAttribute('fill', "none");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
        "d",
        "M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z"
    )
    svg.append(path);

    return svg;
}
    
export default arrowLeft;