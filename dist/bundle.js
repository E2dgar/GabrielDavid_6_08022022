(()=>{"use strict";const t=async()=>{try{const t=await fetch("src/js/data/photographers.json");return await t.json()}catch(t){console.log(t)}};new class{constructor(){window.addEventListener("hashchange",(t=>this.onRouteChange(t)))}async onRouteChange(e){const n=window.location.hash.substring(1),{photographers:a}=await t();if(!isNaN(n)){(t=>{document.querySelector("header h1").remove(),document.getElementById("list").remove(),document.title="Fisheye | "+t[0].name;const e=document.getElementById("main-content"),n=document.createElement("section"),a=document.createElement("h2");a.textContent=t[0].name,n.appendChild(a),e.appendChild(n)})(a.filter((t=>t.id===parseInt(n))))}}},(async()=>{(t=>{const e=document.querySelector("header"),n=document.createElement("a");n.setAttribute("href","index.html");const a=document.createElement("img");a.setAttribute("alt","Fisheye logo"),a.setAttribute("src","assets/images/logo.png"),a.className="logo",n.appendChild(a),e.appendChild(n),e.append(n);const s=document.createElement("h1");s.textContent="Nos photographes",e.append(s)})();const{photographers:e}=await t(),n=document.getElementById("list");e.forEach((t=>{n.innerHTML+=new class{constructor(t){this.name=t.name,this.id=t.id,this.city=t.city,this.country=t.country,this.tagline=t.tagline,this.price=t.price,this.portrait=t.portrait}createUserCard(){return`\n                <article class="photographer">\n                    <a href="#${this.id}" class="photographer-link">\n                        <div class="media-container">\n                            <img src="${"assets/photographers/"+this.portrait}" alt=""/>\n                        </div>\n                        <h2>${this.name}</h2>\n                    </a>\n                    <h3>${this.country}, ${this.city}</h3>\n                    <p>${this.tagline}</p>\n                    <p>${this.price}€/jour</p>\n                </article>\n                `}}(t).createUserCard()}))})()})();