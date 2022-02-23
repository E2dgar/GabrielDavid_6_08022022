const likeSvg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        likeSvg.setAttribute('viewBox', '0 0 20 20');
        likeSvg.setAttribute('aria-hidden', true);

const likePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
likePath.setAttribute(
    "d",
    "M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"
)
likeSvg.append(likePath);

export default likeSvg;