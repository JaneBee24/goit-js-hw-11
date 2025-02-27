/* empty css                      */import{a as p,S as f}from"./assets/vendor-DTuICwlt.js";import a from"izitoast";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49034890-15d0e202b9bb59c7b310d7a4f",d="https://pixabay.com/api/";async function y(i,t=1,o=40){try{const s=await p.get(d,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}});return s.data.hits.length===0&&a.warning({title:"Внимание",message:"По вашему запросу ничего не найдено!",position:"topRight"}),s.data}catch(s){throw a.error({title:"Ошибка",message:"Не удалось загрузить изображения. Попробуйте позже!",position:"topRight"}),console.error("Ошибка при загрузке изображений:",s),s}}function h(i){const t=document.querySelector(".gallery"),o=i.map(({webformatURL:e,largeImageURL:r,tags:n,likes:l,views:c,comments:u,downloads:g})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${e}" alt="${n}" loading="lazy">
        </a>
        <div class="image-info">
          <p><strong>Likes:</strong> ${l}</p>
          <p><strong>Views:</strong> ${c}</p>
          <p><strong>Comments:</strong> ${u}</p>
          <p><strong>Downloads:</strong> ${g}</p>
        </div>
      </li>`).join("");t.innerHTML=o,new f(".gallery a").refresh()}const b=document.querySelector("#search-form"),L=document.querySelector(".gallery");b.addEventListener("submit",async i=>{i.preventDefault();const t=i.target.elements.searchQuery.value.trim();if(!t){alert("Введите поисковый запрос!");return}L.innerHTML="";try{const o=await y(t);if(o.hits.length===0){alert("Картинки не найдены. Попробуйте другой запрос.");return}h(o.hits)}catch(o){console.error("Ошибка загрузки изображений:",o)}});
//# sourceMappingURL=index.js.map
