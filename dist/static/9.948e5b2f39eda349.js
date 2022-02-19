"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[9],{6009:(_,l,a)=>{a.r(l),a.d(l,{ContactPageModule:()=>v});var p=a(6019),n=a(5903);const s="Beogradska 45/10, 11000 Beograd",m="060770634",r="vencanice_studioluna",P=[{value:m,label:"Telefon",iconPath:"/assets/icons/call_black_24dp.svg",href:"tel:"+m},{value:s,label:"Adresa",iconPath:"/assets/icons/location_on_black_24dp.svg",href:"https://goo.gl/maps/dM1xmXa2aoHVKoGR7"},{value:"@"+r,label:"Instagram",iconPath:"/assets/icons/instagram.svg",href:"https://www.instagram.com/"+r}];var t=a(2383),O=a(5427),u=a(7495);function h(o,g){if(1&o&&(t.ynx(0),t.TgZ(1,"div",3),t._UZ(2,"img",4),t.TgZ(3,"div",5),t._uU(4),t.qZA(),t.TgZ(5,"div",6),t._uU(6),t.qZA(),t.qZA(),t.BQk()),2&o){const e=g.$implicit;t.xp6(2),t.Q6J("src",e.iconPath,t.LSH)("alt",e.label+" icon"),t.xp6(2),t.Oqu(e.label),t.xp6(2),t.Oqu(e.value)}}let c=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["luna-contact-info"]],inputs:{contactInfoItems:"contactInfoItems"},decls:4,vars:1,consts:[[1,"contact-info"],[1,"title"],[4,"ngFor","ngForOf"],[1,"contact-info-item"],[1,"icon",3,"src","alt"],[1,"label"],[1,"value"]],template:function(e,M){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"Kontakt"),t.qZA(),t.YNc(3,h,7,4,"ng-container",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",M.contactInfoItems))},directives:[p.sg],styles:['[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{background-color:#fffaf6;font-family:"SortsMillGoudy";font-size:20px;border-radius:8px;padding:16px;box-sizing:border-box;display:flex;flex-direction:column;grid-gap:16px;gap:16px}@media screen and (max-width: 959px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:none}}@media screen and (min-width: 960px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{box-shadow:1px 1px 5px #ccc,-1px -1px 5px #ccc;position:absolute;left:calc(50% - 400px);top:calc(50% - 200px);width:320px;height:400px;z-index:2}}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]{display:flex;grid-gap:8px;gap:8px}@media screen and (min-width: 960px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-weight:600}}@media screen and (max-width: 959px){[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]{flex-direction:row;align-items:center}[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:none}}'],changeDetection:0}),o})();const i=[{path:"",component:(()=>{class o{constructor(e){this.domSanitizer=e,this.googleMapsKey="AIzaSyCKABfmlHXaYSU3mFv1CJcYsfdK2ht58A0",this.contactInfoItems=P}get mapSrc(){return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=${this.googleMapsKey}&q=${s}&zoom=19`)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["luna-contact-page"]],decls:6,vars:2,consts:[[1,"page"],[1,"page-header"],[1,"page-content"],[3,"contactInfoItems"],["width","600","height","450","allowfullscreen","","loading","lazy",1,"map",2,"border","0",3,"src"]],template:function(e,M){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-page-navbar"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"luna-contact-info",3),t._UZ(5,"iframe",4),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("contactInfoItems",M.contactInfoItems),t.xp6(1),t.Q6J("src",M.mapSrc,t.uOi))},directives:[u.b,c],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{min-height:100vh;height:100%;width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{padding-bottom:16px;z-index:1}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{flex:1 1;position:relative;display:flex}@media screen and (max-width: 959px){[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .page[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]{width:100%;background-color:#eee}"]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.Bz.forChild(i)],n.Bz]}),o})();var f=a(3371);let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,C,f.F]]}),o})()},4685:(_,l,a)=>{a.d(l,{I:()=>p});const p=[{imgPath:"assets/images/la-sposa/logo.svg",title:"La Sposa",path:"/la-sposa"},{imgPath:"assets/images/nicole-couture/logo.png",title:"Nicole Couture",path:"/nicole-couture"},{imgPath:"assets/images/st-patrick/logo.png",title:"St. Patrick",path:"/st-patrick"}]},7495:(_,l,a)=>{a.d(l,{b:()=>h});var p=a(4685),n=a(2383),s=a(5903),m=a(6019);let r=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["luna-navbar-creator-card"]],inputs:{creatorCard:"creatorCard"},decls:2,vars:1,consts:[[1,"card-wrapper"],["id","creatorHighlight","alt","Creator Highlight",3,"src"]],template:function(i,C){1&i&&(n.TgZ(0,"div",0),n._UZ(1,"img",1),n.qZA()),2&i&&(n.xp6(1),n.Q6J("src",C.creatorCard.imgPath,n.LSH))},styles:['[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;flex:1;cursor:pointer;width:100%;height:100%}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]:before{content:"";pointer-events:none;position:absolute;top:0;left:0;background-color:#fdf4eb4d;width:100%;height:100%;transform:scale(0);transform-origin:50% 50%;transition:.1s transform}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]:hover:before{transform:scale(1)}[_nghost-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}']}),c})();function P(c,d){if(1&c&&(n.ynx(0),n._UZ(1,"luna-navbar-creator-card",8),n.BQk()),2&c){const i=d.$implicit;n.xp6(1),n.Q6J("creatorCard",i)("routerLink",i.path)}}const t=function(){return["/"]},O=function(){return["/about"]},u=function(){return["/contact"]};let h=(()=>{class c{constructor(i){this.route=i,this.creatorCards=p.I,this.selectedModule=this.route.snapshot.data.menuItem}ngOnInit(){}}return c.\u0275fac=function(i){return new(i||c)(n.Y36(s.gz))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-page-navbar"]],decls:17,vars:11,consts:[[1,"logo"],[3,"routerLink"],["src","assets/images/logo.png"],[1,"nav-items"],["tabindex","1",1,"dropdown"],[1,"dropdown-items"],[4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"],[1,"card","small",3,"creatorCard","routerLink"]],template:function(i,C){1&i&&(n.TgZ(0,"nav"),n.TgZ(1,"div",0),n.TgZ(2,"a",1),n._UZ(3,"img",2),n.qZA(),n.qZA(),n.TgZ(4,"ul",3),n.TgZ(5,"li"),n.TgZ(6,"div",4),n.TgZ(7,"span"),n._uU(8,"Haljine"),n.qZA(),n.TgZ(9,"div",5),n.YNc(10,P,2,2,"ng-container",6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"li"),n.TgZ(12,"a",7),n._uU(13," O Nama "),n.qZA(),n.qZA(),n.TgZ(14,"li"),n.TgZ(15,"a",1),n._uU(16," Kontakt "),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&i&&(n.xp6(2),n.Q6J("routerLink",n.DdM(8,t)),n.xp6(3),n.ekj("selected","dress"===C.selectedModule),n.xp6(5),n.Q6J("ngForOf",C.creatorCards),n.xp6(2),n.Q6J("routerLink",n.DdM(9,O)),n.xp6(2),n.ekj("selected","contact"===C.selectedModule),n.xp6(1),n.Q6J("routerLink",n.DdM(10,u)))},directives:[s.yS,m.sg,s.Od,r,s.rH],styles:['[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{padding:8px 32px 0;display:flex;align-items:center;height:100%;grid-column-gap:32px;column-gap:32px;box-sizing:border-box}@media screen and (max-width: 1023px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;height:94px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:90px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{display:flex;list-style-type:none;grid-gap:16px;gap:16px;padding-left:0!important}@media screen and (max-width: 769px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{grid-gap:0;gap:0}}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px;border-radius:24px;margin:2px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:none;color:#585858;font-size:32px;font-family:"NotoSans";cursor:pointer;white-space:nowrap;transition:.3s color}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#ce7532}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-items[_ngcontent-%COMP%]{display:none;position:absolute;grid-gap:16px;gap:16px;background:#fdf4ebee}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 16px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:focus-within   .dropdown-items[_ngcontent-%COMP%], [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover   .dropdown-items[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{margin:0;border:2px solid;border-color:#585858b3}'],changeDetection:0}),c})()},3371:(_,l,a)=>{a.d(l,{F:()=>m});var p=a(6019),n=a(5903),s=a(2383);let m=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[p.ez,n.Bz]]}),r})()}}]);