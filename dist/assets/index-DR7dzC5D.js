(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();const P="/assets/roguelikeChar_transparent-DP2joJTf.png",w=[];class d{constructor(){this.beforeStart&&this.beforeStart(),setTimeout(()=>{this.start&&this.start()},0),w.push(this)}drawElement(){}beforeStart(){}start(){}update(){}static updateAll(){for(const i of w)i.update&&i.update();requestAnimationFrame(d.updateAll)}static run(){requestAnimationFrame(d.updateAll)}}d.run();var n=(a=>(a[a.ARROWUP=38]="ARROWUP",a[a.ARROWDOWN=40]="ARROWDOWN",a[a.ARROWLEFT=37]="ARROWLEFT",a[a.ARROWRIGHT=39]="ARROWRIGHT",a[a.E=69]="E",a))(n||{});const f={38:38,40:40,37:37,39:39,69:69},y={[n.ARROWUP]:[],[n.ARROWDOWN]:[],[n.ARROWLEFT]:[],[n.ARROWRIGHT]:[],[n.E]:[],CollitionAviable:[function(){console.log("do something")}]};class u{static subscribe(i,t){y[i].push(t)}static unsubscribe(i,t){y[i]=y[i].filter(s=>s!==t)}static notify(i){y[i].forEach(t=>t())}}class M{colliders=[];constructor(i){const t=i.layers.filter(s=>s.type==="objectgroup"&&s.name==="Collisions");for(const s of t)for(const e of s.objects)e.name==="Collider"&&this.colliders.push({id:e.id,x:e.x,y:e.y,width:e.width,height:e.height,name:e.name})}getColliders(){return this.colliders}}function F(a,i){return a.x<i.x+i.w&&a.x+a.w>i.x&&a.y<i.y+i.h&&a.y+a.h>i.y}const D={colliders:{},isMute:!0};function b(a,i){D[a]=i}function C(a){return D[a]}const k=16,N=485,L=225;class _ extends d{context;characterSprite;camera;x=360;y=208;speed=16;collisionManager;constructor(i,t,s){super(),this.context=i,this.camera=t,this.collisionManager=s}drawElement(){if(this.characterSprite){this.camera.follow(this.x,this.y);const i=this.x-this.camera.x,t=this.y-this.camera.y;this.context.drawImage(this.characterSprite,17,138,k,k,i,t,16,16)}}beforeStart(){let i=new Image;i.src=P,i.onload=()=>{this.characterSprite=i},u.subscribe(n.ARROWUP,t=>{t?.preventDefault(),this.move(0,-this.speed)}),u.subscribe(n.ARROWDOWN,t=>{t?.preventDefault(),this.move(0,this.speed)}),u.subscribe(n.ARROWLEFT,t=>{t?.preventDefault(),this.move(-this.speed,0)}),u.subscribe(n.ARROWRIGHT,t=>{t?.preventDefault(),this.move(this.speed,0)})}move(i,t){const s=this.x+i,e=this.y+t,l=16,o=16,r=Math.max(0,Math.min(s,N-l)),h=Math.max(0,Math.min(e,L-o)),m={x:s,y:e,w:16,h:16},p=this.collisionManager.getColliders().filter(c=>{const g={x:c.x,y:c.y,w:c.width,h:c.height,id:c.id};return F(m,g)});p.length>0?p.forEach(c=>{b("colliders",c)}):b("colliders",{}),this.x=r,this.y=h}start(){}}const A="/assets/tilemap-DEMLg4oH.png",R=1,z=[{firstgid:1,image:A}],E=new Image;E.src=A;class H{context;map;tileSize;tilesets=[];constructor(i,t){this.context=i,this.map=t,this.tileSize=t.tilewidth,z.forEach(s=>{const e=new Image;e.src=s.image,console.log(e.width,e.height),this.tilesets.push({firstgid:s.firstgid,image:e,imageWidth:e.width>0?e.width:200,imageHeight:e.height>0?e.height:200})})}start(){this.draw()}draw(i){for(const t of this.map.layers)if(!(!t.visible||!t.chunks))for(const s of t.chunks){let e=0;for(let l=0;l<s.height;l++)for(let o=0;o<s.width;o++){const r=s.data[e++];if(r===0)continue;const h=[...this.tilesets].find(I=>r>=I.firstgid);if(!h)continue;const m=r-h.firstgid,p=Math.floor(h.imageWidth/this.tileSize),c=m%p*(this.tileSize+R),g=Math.floor(m/p)*(this.tileSize+R),O=(s.x+o)*this.tileSize-(i?.x??0),W=(s.y+l)*this.tileSize-(i?.y??0);this.context.drawImage(E,c,g,this.tileSize,this.tileSize,O,W,this.tileSize,this.tileSize)}}}}const j=-1,T=20,B=!0,G=JSON.parse('[{"chunks":[{"data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":0,"y":0},{"data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":16,"y":0}],"height":16,"id":1,"locked":true,"name":"Ground","opacity":1,"startx":0,"starty":0,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"chunks":[{"data":[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,30,1,0,0,0,2,0,3,0,0,0,0,0,1,1,1,1,0,30,0,0,0,2,0,0,3,2,0,2,1,1,1,1,0,0,2,0,0,0,0,3,0,0,0,0,1,1,1,1,0,30,2,0,0,0,0,2,2,3,0,0,1,1,0,30,2,0,0,0,3,0,0,2,0,3,0,2,0,0,3,0,0,0,0,0,0,3,0,0,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,2,0,0,3,3,0,0,0,0,0,30,0,0,0,0,0,0,0,2,2,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,3,13,14,14,14,14,15,0,0,3,0,0,0,0,0,0,2,25,26,26,26,26,27,0,0,0,0,0,0,0,3,0,0,25,26,26,26,26,26,15,0,0,0,0,0,18,0,0,0,37,38,38,38,38,38,39,0,0,18,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":0,"y":0},{"data":[0,0,0,0,0,0,14,14,14,14,14,14,14,14,14,14,0,2,0,0,0,25,26,26,26,26,26,26,26,26,40,40,0,0,2,0,0,25,26,26,26,26,26,26,26,26,40,40,0,2,0,0,0,25,26,26,26,26,26,26,26,26,40,40,0,0,0,0,0,25,26,26,26,26,26,26,26,26,40,40,0,0,0,2,0,25,26,26,26,26,26,26,26,26,40,40,0,0,0,0,0,25,26,26,26,26,26,26,26,26,40,40,0,30,0,30,0,25,26,26,26,38,38,38,38,38,38,38,0,30,0,0,0,37,38,38,39,1,1,1,1,1,1,1,0,0,0,2,30,0,0,0,1,1,1,1,1,1,1,1,0,0,0,2,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,2,0,0,1,1,1,1,1,1,1,1,0,2,0,2,0,0,2,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":16,"y":0}],"height":16,"id":4,"locked":true,"name":"Grass","opacity":1,"startx":0,"starty":0,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"chunks":[{"data":[20,20,20,20,20,20,21,0,0,0,0,0,0,0,0,0,20,20,20,20,33,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,21,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,21,0,0,0,0,0,0,0,0,0,0,0,20,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,24,0,28,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":0,"y":0},{"data":[0,0,0,0,0,0,0,22,23,23,23,23,23,23,23,23,0,0,0,0,0,0,0,0,34,23,23,23,23,23,23,23,0,0,0,0,0,0,0,0,0,35,35,35,34,23,23,23,0,0,0,0,0,0,0,0,0,0,0,0,0,34,23,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,20,0,0,0,0,0,0,0,0,0,0,0,0,8,7,20,20,0,0,0,0,0,0,0,0,0,0,0,7,20,20,20,20,0,0,0,0,0,0,0,0,0,0,7,20,20,20,20,20,0,0,0,0,0,0,0,0,0,7,20,20,20,20,20,20,0,0,0,0,0,0,0,0,19,20,20,20,20,20,20,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":16,"y":0}],"height":16,"id":5,"locked":true,"name":"Trees","opacity":1,"startx":0,"starty":0,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"chunks":[{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,54,55,0,0,0,0,0,0,0,0,0,0,0,0,0,65,66,67,53,54,55,0,0,0,0,0,0,0,0,0,0,77,89,80,65,68,67,0,0,0,0,0,0,0,0,0,0,77,90,80,77,90,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,46,46,46,46,49,52,50,51,0,0,0,0,0,0,0,57,0,0,0,0,61,62,64,63,0,0,0,0,0,0,0,69,83,0,81,46,73,85,86,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,82,82,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":0,"y":0},{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,52,51,0,0,0,0,0,0,0,0,0,0,0,0,0,61,62,63,0,0,0,0,0,0,0,0,0,0,0,0,0,73,86,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,56,56,54,55,0,0,0,0,0,0,0,0,0,0,0,65,66,66,68,67,0,0,0,0,0,0,0,0,0,0,0,77,112,113,78,80,0,0,0,0,0,0,0,0,0,0,0,77,124,125,78,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,50,51,0,0,0,0,0,0,0,0,0,0,0,0,0,61,64,63,0,0,0,0,0,0,0,0,0,0,0,81,82,73,86,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":16,"y":0}],"height":16,"id":6,"locked":true,"name":"Buildings","opacity":1,"startx":0,"starty":0,"type":"tilelayer","visible":true,"width":48,"x":0,"y":0},{"chunks":[{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,44,44,44,44,44,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,44,44,44,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,44,44,44,44,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":0,"y":0},{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,44,44,0,0,0,0,44,0,0,0,0,0,0,0,0,0,44,44,0,0,0,0,44,44,44,44,44,44,44,44,44,44,44,0,0,0,0,0,44,44,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,0,44,44,44,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":16,"y":0}],"height":16,"id":9,"locked":true,"name":"Roads","opacity":1,"startx":0,"starty":0,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"chunks":[{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,95,0,0,95,0,0,0,0,0,0,0,0,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,105,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":0,"y":0},{"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":16,"width":16,"x":16,"y":0}],"height":16,"id":10,"locked":true,"name":"Accessories","opacity":1,"startx":0,"starty":0,"type":"tilelayer","visible":true,"width":32,"x":0,"y":0},{"draworder":"topdown","id":11,"name":"Humans","objects":[{"gid":404,"height":16,"id":2,"name":"Langueages","rotation":0,"type":"NPC","visible":true,"width":16,"x":224.475891825619,"y":111.977554051824,"imgPosition":{"x":18,"y":86}},{"gid":458,"height":16,"id":3,"name":"WorkExperience","rotation":0,"type":"NPC","visible":true,"width":16,"x":143.937095585224,"y":175.499385699074,"imgPosition":{"x":18,"y":103}},{"gid":457,"height":16,"id":4,"name":"Education","rotation":0,"type":"NPC","visible":true,"width":16,"x":416.686706527971,"y":144.374805471374,"imgPosition":{"x":1,"y":103}},{"gid":673,"height":16,"id":5,"name":"Hobbies","rotation":0,"type":"NPC","visible":true,"width":16,"x":352.389876320747,"y":193.518879515112,"imgPosition":{"x":1,"y":171}},{"gid":620,"height":16,"id":7,"name":"ContactInformation","rotation":0,"type":"NPC","visible":true,"width":16,"x":368.725512841665,"y":48.1473904196227,"imgPosition":{"x":18,"y":154}},{"gid":674,"height":16,"id":8,"name":"Skills","rotation":0,"type":"NPC","visible":true,"width":16,"x":351.529366747513,"y":96.2189237504122,"imgPosition":{"x":18,"y":171}}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0},{"draworder":"topdown","id":13,"name":"Collisions","objects":[{"height":32,"id":22,"name":"Collider","rotation":0,"type":"","visible":true,"width":32,"x":224.475891825619,"y":111.977554051824},{"height":32,"id":23,"name":"Collider","rotation":0,"type":"","visible":true,"width":32,"x":143.937095585224,"y":175.499385699074},{"height":32,"id":24,"name":"Collider","rotation":0,"type":"","visible":true,"width":32,"x":352.389876320747,"y":193.518879515112},{"height":32,"id":25,"name":"Collider","rotation":0,"type":"","visible":true,"width":32,"x":415.969877113295,"y":128.119369490867},{"height":32,"id":26,"name":"Collider","rotation":0,"type":"","visible":true,"width":32,"x":368.725512841665,"y":48.1473904196227},{"height":32,"id":27,"name":"Collider","rotation":0,"type":"","visible":true,"width":32,"x":351.529366747513,"y":96.2189237504122}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}]'),J=12,X=10,Y="orthogonal",q="right-down",U="1.11.2",K=16,$=[{firstgid:1,source:"./tileset2.tsx"},{firstgid:133,source:"./roguelikeChar_transparent.tsx"}],Q=16,V="map",Z="1.10",i0=30,e0={compressionlevel:j,height:T,infinite:B,layers:G,nextlayerid:J,nextobjectid:X,orientation:Y,renderorder:q,tiledversion:U,tileheight:K,tilesets:$,tilewidth:Q,type:V,version:Z,width:i0};class t0{x=0;y=0;width;height;worldWidth;worldHeight;constructor(i,t,s,e){this.width=i,this.height=t,this.worldWidth=s,this.worldHeight=e}follow(i,t){this.x=i-this.width/2,this.y=t-this.height/2,this.x=Math.max(0,Math.min(this.x,this.worldWidth-this.width)),this.y=Math.max(0,Math.min(this.y,this.worldHeight-this.height))}}const S=16;class s0{name;classType;x;y;sprite;spritePositionX;sptitePositionY;constructor(i,t,s,e,l,o,r){this.classType=t,this.name=i,this.x=s,this.y=e,this.sprite=l,this.spritePositionX=o,this.sptitePositionY=r}draw(i,t,s){const e=this.x-t,l=this.y-s;i.drawImage(this.sprite,this.spritePositionX,this.sptitePositionY,S,S,e,l,16,16)}}class a0{npcs=[];constructor(i){const t=i.layers.filter(s=>s.type==="objectgroup");for(const s of t)for(const e of s.objects)if(e.type==="NPC"){const l=new Image;l.src=P;const o=new s0(e.name,e.class,e.x,e.y,l,e.imgPosition.x,e.imgPosition.y);this.npcs.push(o)}}draw(i,t,s){for(const e of this.npcs)e.draw(i,t,s)}}class l0 extends d{ctx;notification=document.getElementById("notification");constructor(i){super(),this.ctx=i}drawElement(){C("colliders").id?this.notification.classList.add("animate"):this.notification.classList.remove("animate")}drawPressEText(){}}const x=e0;class o0 extends d{context;player;map;camera;canvas;npc;collision;modalHandler;constructor(i,t){super(),this.canvas=t,this.context=i,this.camera=new t0(this.canvas.width,this.canvas.height,485,225),this.collision=new M(x),this.player=new _(this.context,this.camera,this.collision),this.map=new H(this.context,x),this.npc=new a0(x),this.modalHandler=new l0(this.context)}update(){this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.map.draw(this.camera),this.npc.draw(this.context,this.camera.x,this.camera.y),this.player.drawElement(),this.modalHandler.drawElement()}start(){this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.map.draw(this.camera),this.npc.draw(this.context,this.camera.x,this.camera.y),this.player.drawElement(),this.modalHandler.drawElement()}}class n0{canvas=document.getElementById("game");mute=document.getElementById("mute");sound=document.getElementById("sound");audio=document.getElementById("audio");game=new o0(this.canvas.getContext("2d"),this.canvas);run(){this.mute.addEventListener("click",()=>{this.sound.classList.add("active"),this.mute.classList.remove("active"),this.audio.play()}),this.sound.addEventListener("click",()=>{this.mute.classList.add("active"),this.sound.classList.remove("active"),this.audio.pause(),this.audio.currentTime=0}),this.game.start()}}let v={};class c0{static initialized=!1;static init(){if(this.initialized)return;this.initialized=!0;const i=document.querySelectorAll(".modal");window.addEventListener("keyup",t=>{const s=C("colliders");t.code==="KeyE"&&!t.repeat&&s.id&&(console.log(s),i.forEach(l=>{Number(l.id)===Number(s.id)&&l?.classList.toggle("open")}));const e=f[t.keyCode];e&&delete v[e]}),window.addEventListener("keydown",t=>{const s=f[t.keyCode];s&&(v={...v,[t.keyCode]:s},Object.values(v).forEach(e=>{u.notify(e)}))})}}document.querySelector("#app").innerHTML=`
    <div class="container">
      <canvas id="game"></canvas>
      <div id="notification">
        Press E
      </div>
      </div>
    <div id="modals_container" class="modals">
  <div class="modal" id="22">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Professional experience</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="23">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Hobbies</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="24">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Education</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">Maritime College named after O.I.Marinesko of National University "Odessa Maritime Academy"</h5>
        <p class="company">2017-2020</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="25">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">About me</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="26">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Skills</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="modal" id="27">
    <div class="overlay"></div>
    <div class="content">
      <div>
        <h3 class="title">Hobbies</h3>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Strong Middle) | 2022-2024</h5>
        <p class="company">Gremcy</p>
        <ul class="experience-list">
          <li class="skill">
            Developed web applications using React, Redux Toolkit, React Router,
            Typescript and modern frontend tools.
          </li>
          <li class="skill">
            Implemented Feature-Slides Design (FSD) architecture for better
            scalability and maintainability.
          </li>
          <li class="skill">
            Optimized application perfomance and enhanced user experience.
          </li>
          <li class="skill">Conducted code reviews.</li>
        </ul>
      </div>
      <div class="wokr_experience_container">
        <h5 class="position">React Developer(Junior) | 2021-2022</h5>
        <p class="company">Filancy</p>
        <ul class="experience-list">
          <li class="skill">
            Built and maintained SPA applications with React.
          </li>
          <li class="skill">Configured project builds using Webpack.</li>
          <li class="skill">
            Developed a React Native mobile app with API intergation and push
            notifications.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

`;c0.init();const r0=new n0;r0.run();
