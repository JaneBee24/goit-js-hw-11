/* empty css                      */import{a as p,S as f}from"./assets/vendor-DBMDmZZa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="49034890-15d0e202b9bb59c7b310d7a4f",d="https://pixabay.com/api/";async function m(s,t=1,o=40){try{return(await p.get(d,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}})).data}catch(n){throw console.error("Ошибка при загрузке изображений:",n),n}}function y(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:e,largeImageURL:r,tags:a,likes:i,views:c,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${e}" alt="${a}" loading="lazy">
        </a>
        <div class="image-info">
          <p><strong>Likes:</strong> ${i}</p>
          <p><strong>Views:</strong> ${c}</p>
          <p><strong>Comments:</strong> ${l}</p>
          <p><strong>Downloads:</strong> ${u}</p>
        </div>
      </li>`).join("");t.innerHTML=o,new f(".gallery a").refresh()}const h=document.querySelector("#search-form"),b=document.querySelector(".gallery");h.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){alert("Введите поисковый запрос!");return}b.innerHTML="";try{const o=await m(t);if(o.hits.length===0){alert("Картинки не найдены. Попробуйте другой запрос.");return}y(o.hits)}catch(o){console.error("Ошибка загрузки изображений:",o)}});
//# sourceMappingURL=index.js.map
