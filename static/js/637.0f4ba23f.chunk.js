"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[637],{637:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),i=r(757),s=r.n(i),o=r(87),c=r(689),u=r(791),v=r(742),p=r(630),d=r(238),l="singleMoviePage_movie_details__00KGF",f="singleMoviePage_descr_block__e9Qxl",h="singleMoviePage_btn__gN3oo",g=r(184),_=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],i=t[1],_=(0,u.useState)(!1),x=(0,a.Z)(_,2),m=x[0],w=x[1],b=(0,c.UO)().id,j=(0,c.s0)(),k=(10*r.vote_average).toFixed(0);return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,p.fh)(b);case 4:t=e.sent,i(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r=e.t0.responce,console.log(r.data.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]),(0,g.jsxs)(g.Fragment,{children:[m?v.Loading.standard("Loading..."):v.Loading.remove(),(0,g.jsx)("button",{className:h,onClick:function(){j("/")},children:"\u21a9 Go to home page"}),(0,g.jsxs)("div",{className:l,children:[r.poster_path?(0,g.jsx)("img",{alt:"movie poster",src:r.poster_path}):(0,g.jsx)("img",{alt:"movie poster",width:"300px",src:d}),(0,g.jsxs)("div",{className:f,children:[(0,g.jsxs)("h1",{children:[null===r||void 0===r?void 0:r.original_title," (",null===r||void 0===r?void 0:r.release_date,")"]}),(0,g.jsxs)("p",{children:["Popularity: ",k,"%"]}),(0,g.jsxs)("p",{children:["Overview: ",null===r||void 0===r?void 0:r.overview]}),(0,g.jsxs)("p",{children:["Genres: ",null===r||void 0===r?void 0:r.genres]})]})]}),(0,g.jsxs)("ul",{children:[(0,g.jsx)(o.rU,{to:"cast",children:(0,g.jsx)("li",{children:"Cast"})}),(0,g.jsx)(o.rU,{to:"reviews",children:(0,g.jsx)("li",{children:"Reviews"})})]}),(0,g.jsx)(c.j3,{})]})}},630:function(e,t,r){r.d(t,{XT:function(){return c},fh:function(){return u},oH:function(){return v},z1:function(){return o}});var n=r(861),a=r(757),i=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"633bd9c8c9bc68a8c4a40449237d5fcd"}}),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,s.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,o,c,u,v,p,d,l,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,a=n.original_title,o=void 0===a?"n/a":a,c=n.poster_path,u=n.vote_average,v=n.overview,p=n.release_date,d=void 0===p?"n/a":p,l=n.genres,f={original_title:o,poster_path:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(c),vote_average:u,overview:v,release_date:d.slice(0,4),genres:l.map((function(e){return e.name})).join(", ")},e.abrupt("return",f);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"",e.next=3,s.get("/movie/".concat(t).concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},238:function(e,t,r){e.exports=r.p+"static/media/no-poster-available.aa443dc4d5b164f16654.webp"}}]);
//# sourceMappingURL=637.0f4ba23f.chunk.js.map