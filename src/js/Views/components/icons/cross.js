const svg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 42 42');
svg.setAttribute('width', 42);
svg.setAttribute('height', 42);
svg.setAttribute('fill', "none");
svg.classList.add("close-modal");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
    "d",
    "M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" 
)
svg.append(path);

const cross = svg;   

export default cross;
