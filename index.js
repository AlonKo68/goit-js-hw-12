import{a as b,S as L,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const w="49502034-df263a01178fc9ef1a0cdcc0b",x="https://pixabay.com/api/";async function p(o,t){try{const{data:i}=await b.get(x,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return{hits:i.hits,totalHits:i.totalHits}}catch(i){throw console.error("Error fetching images:",i),i}}const g=document.querySelector(".gallery"),S=new L(".gallery a",{captionsData:"alt"});function f(o){const t=o.map(({webformatURL:i,largeImageURL:c,tags:e,likes:r,views:s,comments:h,downloads:m})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${c}">
                        <img class="gallery-image" src="${i}" alt="${e}" width="360" height="200"/>
                        <ul class="gallery-text-list">
                            <li class="gallery-text-item"><h3>Likes</h3><p>${r}</p></li>
                            <li class="gallery-text-item"><h3>Views</h3><p>${s}</p></li>
                            <li class="gallery-text-item"><h3>Comments</h3><p>${h}</p></li>
                            <li class="gallery-text-item"><h3>Downloads</h3><p>${m}</p></li>
                        </ul>
                    </a>
                </li>`).join("");g.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){g.innerHTML=""}const u=document.querySelector(".form"),d=document.querySelector(".loader"),n=document.querySelector(".btn-load");n.style.display="none";let l,y="";u.addEventListener("submit",async o=>{if(o.preventDefault(),q(),n.style.display="none",d.style.display="flex",l=1,y=o.currentTarget.elements.query.value.trim(),!y){a.error({title:"Error",message:"Please enter a search term!",position:"topRight"}),d.style.display="none";return}try{const{hits:t,totalHits:i}=await p(y,l);t.length===0?a.warning({message:"No images found. Try again!!",position:"topRight"}):(f(t),i>15&&(n.style.display="flex"))}catch{a.error({title:"Error",message:"Failed to fetch images. Try again later!",position:"topRight"})}finally{d.style.display="none",u.reset()}});n.addEventListener("click",async()=>{l+=1;try{const{hits:o,totalHits:t}=await p(y,l);f(o),E(),l*15>=t&&(n.style.display="none",a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({title:"Error",message:"Failed to fetch images. Try again later!",position:"topRight"})}});function E(){var t;const o=((t=document.querySelector(".gallery-item"))==null?void 0:t.getBoundingClientRect().height)||0;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
