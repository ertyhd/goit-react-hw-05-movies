"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[363],{363:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(689),o=r(791),u=r(742),p=r(630),v=r(404),f=r(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],d=(0,s.UO)().id,h=(0,o.useState)(!1),l=(0,a.Z)(h,2),g=l[0],m=l[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,p.oH)(d,"/credits");case 4:t=e.sent,c(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r=e.t0.responce,console.log(r.data.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);return function(e){var t=e.cast;if(t){var r=t.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.character;return(0,f.jsxs)("li",{children:[r?(0,f.jsx)("img",{alt:"actors",width:"120px",src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(r," ")}):(0,f.jsx)("img",{alt:"actors",width:"120px",src:v}),(0,f.jsxs)("p",{children:["Name: ",n]}),(0,f.jsxs)("p",{children:["Character: ",a]})]},t)}));return(0,f.jsxs)("ul",{children:[g?u.Loading.standard("Loading..."):u.Loading.remove(),r]})}}(r)}},630:function(e,t,r){r.d(t,{XT:function(){return o},fh:function(){return u},oH:function(){return p},z1:function(){return s}});var n=r(861),a=r(757),c=r.n(a),i=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"633bd9c8c9bc68a8c4a40449237d5fcd"}}),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,s,o,u,p,v,f,d,h;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,a=n.original_title,s=void 0===a?"n/a":a,o=n.poster_path,u=n.vote_average,p=n.overview,v=n.release_date,f=void 0===v?"n/a":v,d=n.genres,h={original_title:s,poster_path:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(o),vote_average:u,overview:p,release_date:f.slice(0,4),genres:d.map((function(e){return e.name})).join(", ")},e.abrupt("return",h);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"",e.next=3,i.get("/movie/".concat(t).concat(r));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},404:function(e,t,r){e.exports=r.p+"static/media/no_photo.c68589f4dc97c93d9bab.jpg"}}]);
//# sourceMappingURL=363.9efcfdfe.chunk.js.map