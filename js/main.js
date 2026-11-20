(function(){
var FR={skip:"Aller au contenu",n_about:"À propos",n_skills:"Compétences",n_exp:"Expérience",n_proj:"Projets",n_edu:"Formation",n_contact:"Contact",
h_tag:"Ouvert aux stages PFE et opportunités",h_title:"Étudiant en génie électrique – Automatisme & Informatique Industrielle",
h_intro:"Étudiant en 3ᵉ année de Licence, avec deux stages chez DRÄXLMAIER (DETJ). J’associe automates, supervision, systèmes embarqués et outils numériques pour concevoir des solutions utiles à l’industrie.",
h_cv:"Télécharger le CV",h_contact:"Me contacter",
a1t:"Parcours académique",a1:"3ᵉ année de Licence en génie électrique, spécialité Automatisme et Informatique Industrielle.",
a2t:"Centres d’intérêt",a2:"Automatisme industriel, programmation d’automates, IHM et SCADA, supervision industrielle, IoT et systèmes embarqués, conception électrique et électronique, transformation digitale et optimisation des processus.",
a3t:"Ambitions",a3:"Je recherche un stage de PFE et des opportunités professionnelles où appliquer mes connaissances, développer mes compétences d’ingénieur et contribuer à des projets industriels innovants.",
s1:"Programmation",s2:"Automatisme industriel",s3:"Électronique & systèmes embarqués",s4:"Conception électrique & électronique",s5:"Ingénierie & simulation",s6:"Solutions numériques & données",
e2t:"(second stage)",e2:"Second stage dans la même entreprise, dans la continuité de mon immersion en milieu industriel et de mon développement professionnel. Domaines : méthodologie de résolution de problèmes, outils d’amélioration continue, méthodes de travail industrielles.",
e1t:"(premier stage)",e1:"Domaines d’expérience : méthodologie de résolution de problèmes, outils d’amélioration continue et méthodes de travail industrielles.",
p1t:"01 – Bureau d’étude électrique",p1:"Étude de conception électrique et d’éclairage avec des logiciels d’ingénierie professionnels.",
p2t:"02 – Application de calcul de capacité industrielle",p2:"Application de calcul de capacité de production et de charge de travail, développée en collaboration avec le département CIP de DRÄXLMAIER (DETJ). Elle relie un besoin industriel à une solution numérique.",
p3t:"03 – Station météo IoT",p3:"Conception et réalisation d’une station météo connectée qui collecte des données environnementales et les transmet à une interface web.",
p4t:"04 – Serrure électrique intelligente RFID",p4:"Système électronique de contrôle d’accès combinant authentification RFID et clavier numérique avec écran LCD.",
lt:"Technologies",lo:"Objectif",ls:"Compétences",
p1o:"Réaliser une étude de conception électrique et d’éclairage.",p1s:"CAO électrique, conception d’éclairage.",
p2o:"Aider au calcul de la capacité et de la charge de travail.",p2s:"Solutions numériques, analyse des besoins industriels.",
p3o:"Collecter des données environnementales et les envoyer vers une interface web.",p3s:"Systèmes embarqués, IoT, intégration de capteurs.",
p4o:"Contrôler l’accès par RFID et clavier.",p4s:"Programmation Arduino, intégration électronique.",
d1:"2024 – Présent",ed1:"Licence en génie électrique",ed1d:"Spécialité : Automatisme et Informatique Industrielle.",ed2:"Baccalauréat",
c_intro:"Ouvert aux stages PFE et aux opportunités en automatisme industriel et génie électrique, en Tunisie et à l’international.",c_phone:"Téléphone",c_loc:"Localisation"};
var nodes=document.querySelectorAll("[data-i18n]"),EN={};
nodes.forEach(function(n){EN[n.dataset.i18n]=n.innerHTML});
var btn=document.getElementById("lang"),cv=document.getElementById("cvbtn");
function setLang(l){
 nodes.forEach(function(n){var k=n.dataset.i18n;n.textContent=(l==="fr"?FR[k]:null)||"";if(l!=="fr")n.innerHTML=EN[k];else if(!FR[k])n.innerHTML=EN[k]});
 document.documentElement.lang=l;btn.textContent=l==="fr"?"EN":"FR";
 cv.href="cv/AZZABI_MOUHAMED_YASSINE_CV_"+(l==="fr"?"FR":"EN")+".pdf";
 try{localStorage.setItem("lang",l)}catch(e){}
}
var saved=null;try{saved=localStorage.getItem("lang")}catch(e){}
var cur=saved||((navigator.language||"").toLowerCase().indexOf("fr")===0?"fr":"en");
setLang(cur);
btn.addEventListener("click",function(){cur=cur==="fr"?"en":"fr";setLang(cur)});
var m=document.getElementById("menu"),b=document.getElementById("burger");
b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)});
m.addEventListener("click",function(e){if(e.target.tagName==="A"){m.classList.remove("open");b.setAttribute("aria-expanded","false")}});
document.getElementById("yr").textContent=new Date().getFullYear();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
})();
