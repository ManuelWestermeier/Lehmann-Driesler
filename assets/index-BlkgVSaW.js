(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const n=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting?t.target.classList.remove("hidden-elem"):t.target.classList.add("hidden-elem"),t.target.classList.contains("user")&&(t.isIntersecting?t.target.classList.add("user-animated"):t.target.classList.remove("user-animated"))})}),l=document.querySelectorAll(".hidden");l.forEach(s=>n.observe(s));