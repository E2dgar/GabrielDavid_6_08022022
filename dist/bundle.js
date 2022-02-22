(()=>{"use strict";const e="assets/photographers/",t=async()=>{try{const e=await fetch("src/js/data/photographers.json");return await e.json()}catch(e){console.log(e)}},n=async()=>{const n=document.querySelector("section.hero-photographer");n&&n.remove(),(e=>{const t=document.querySelector("header"),n=document.createElement("a");n.setAttribute("href","/index.html");const a=document.createElement("img");a.setAttribute("alt","Fisheye logo"),a.setAttribute("src","assets/images/logo.png"),a.className="logo",n.appendChild(a),t.appendChild(n),t.append(n);const c=document.createElement("h1");c.textContent="Nos photographes",t.append(c)})();const{photographers:a}=await t(),c=document.getElementById("main-content"),s=document.createElement("div");s.className="photographer_section",s.setAttribute("id","list"),a.forEach((t=>{s.innerHTML+=new class{constructor(e){this.name=e.name,this.id=e.id,this.city=e.city,this.country=e.country,this.tagline=e.tagline,this.price=e.price,this.portrait=e.portrait}createUserCard(){return`\n                <article class="photographer">\n                    <a href="#${this.id}" class="photographer-link data-link" data-link="">\n                        <div class="media-container">\n                            <img src="${e+this.portrait}" alt=""/>\n                        </div>\n                        <h2>${this.name}</h2>\n                    </a>\n                    <h3>${this.country}, ${this.city}</h3>\n                    <p>${this.tagline}</p>\n                    <p>${this.price}€/jour</p>\n                </article>\n                `}}(t).createUserCard()})),c.append(s)},a=class{constructor(e){this.title=e.title,this.likes=e.likes,this.date=e.date,this.price=e.price,this.image=e.image,this.video=e.video}},c=class extends a{constructor(e,t,n,a,c){super(e,t,n,a,c)}createGalleryCard(){const e=document.createElement("article");e.className="media-card";const t=document.createElement("div");t.className="img-container";const n=document.createElement("img");n.setAttribute("alt",this.title),n.setAttribute("src","assets/medias/img/thumbs/"+this.image),t.append(n);const a=document.createElement("p");a.className="media-legend";const c=document.createElement("h3");c.textContent=this.title;const s=document.createElement("span");s.textContent=this.likes;const o=document.createElement("i");return o.className="fa-heart",a.append(c,s,o),e.append(t,a),e}},s=class extends a{constructor(e){super(),this.video=e.video}createGalleryCard(){const e=document.createElement("article");e.className="media-card";const t=document.createElement("div");t.className="img-container";const n=document.createElement("p");n.className="media-legend";const a=document.createElement("h3"),c=document.createElement("span");c.textContent=this.likes;const s=document.createElement("i");s.className="fa-heart",n.append(a,c,s),e.append(t,n)}},o=async n=>{const a=document.getElementById("list");a&&a.remove(),document.title="Fisheye | "+n[0].name;const o=document.getElementById("main-content");let r=document.querySelector("section.hero-photographer");r&&r.remove(),r=document.createElement("section"),r.className="hero-photographer";const i=document.createElement("div"),l=document.createElement("h2");l.textContent=n[0].name;const m=document.createElement("p");m.className="location",m.textContent=n[0].city+", "+n[0].country;const d=document.createElement("p");d.className="tagline",d.textContent=n[0].tagline,i.append(l,m,d);const p=document.createElement("button");p.textContent="Contactez-moi";const h=document.createElement("div");h.className="img-container";const u=document.createElement("img");u.setAttribute("src",e+n[0].portrait),h.append(u),r.append(i,p,h);const{media:g}=await t(),E=g.filter((e=>n[0].id===e.photographerId)),y=document.createElement("section");y.className="medias-section",document.createElement("p").textContent="Filtre à implémenter";const v=document.createElement("div");v.className="medias-wrapper",E.forEach((e=>{e.video||(console.log("add media"),v.append(new class{constructor(e){if(e.image)return new c(e);if(e.video)return new s(e);throw"Invalid format"}}(e).createGalleryCard()),console.log(v))})),y.append(v),o.append(r,y)};window.onload=()=>{n(),history.pushState(null,null,"/index.html");const e=document.querySelectorAll(".data-link");let t="";e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t=e.target.closest("a").href,history.pushState(null,null,t)}))}))},window.onpopstate=async()=>{const{photographers:e}=await t(),a=window.location.hash.substring(1);if(""!==a){const t=e.filter((e=>e.id===parseInt(a)));o(t)}else n()}})();