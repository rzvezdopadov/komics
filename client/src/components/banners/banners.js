export function CreateBannerCircleEdge(title) {
    const elemDiv = document.createElement('div');
    elemDiv.classList.add('bannerCircleEdgeWrapper');
  
    const elemSpan = document.createElement('span');
    elemSpan.classList.add('bannerCircleEdge');
    elemSpan.innerHTML = title;
  
    elemDiv.appendChild(elemSpan);
      
    return elemDiv;
}
