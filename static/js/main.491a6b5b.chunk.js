(this.webpackJsonpmoive_app_2020=this.webpackJsonpmoive_app_2020||[]).push([[0],{21:function(e,a,t){e.exports=t(48)},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),i=t.n(s),o=t(3),c=t.n(o),m=t(14),l=t(15),u=t(16),d=t(19),v=t(17),p=t(20),g=t(18),y=t.n(g),_=t(2),f=t.n(_);t(46);function E(e){e.id;var a=e.year,t=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:t,title:t}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("h3",{className:"movie__title"},t),n.a.createElement("h5",{className:"movie__year"},a),n.a.createElement("ul",{className:"genres"},i.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres__genre"},e)}))),n.a.createElement("p",{className:"movie__summary"},r)))}E.prototypes={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var h=E,b=(t(47),function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(n)))).state={isLoading:!0,movies:[]},t.getMovies=Object(m.a)(c.a.mark((function e(){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,r=a.data.data.movies,console.log(r),t.setState({movies:r,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("section",{className:"loader"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading ...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.491a6b5b.chunk.js.map