(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+DWa":function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),i=a("dI71"),s=a("q1tI"),r=a.n(s),o=a("qhky"),c=a("Wbzz"),l=a("hpys"),m=a("1wty"),u=(a("1b6i"),a("0h69"),a("rWKE")),g=a.n(u),p=a("feVc"),d=a("jIiK"),I=a("QeUd"),h=a("WF3u"),E=a("aWbt"),N=a("EHkr"),v=a("l73V"),f=a("VKJ7"),M=a("kZHF"),x=a("ynSH"),b=a("exmQ"),C=(a("T/ZZ"),a("IpnI")),S=a.n(C),T=a("TSYQ"),y=a.n(T);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}function L(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var z=a("i8i4"),k=a.n(z),j=!1,Z=r.a.createContext(null),G=function(e){return e.scrollTop},w=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var i,s=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(i="exited",n.appearStatus="entering"):i="entered":i=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",n.state={status:i},n.nextCallback=null,n}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?"entering"!==a&&"entered"!==a&&(t="entering"):"entering"!==a&&"entered"!==a||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),"entering"===t){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:k.a.findDOMNode(this);a&&G(a)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},a.performEnter=function(e){var t=this,a=this.props.enter,n=this.context?this.context.isMounting:e,i=this.props.nodeRef?[n]:[k.a.findDOMNode(this),n],s=i[0],r=i[1],o=this.getTimeouts(),c=n?o.appear:o.enter;!e&&!a||j?this.safeSetState({status:"entered"},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,r),this.safeSetState({status:"entering"},(function(){t.props.onEntering(s,r),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(s,r)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:k.a.findDOMNode(this);t&&!j?(this.props.onExit(n),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(n),e.onTransitionEnd(a.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:k.a.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(a&&!n){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],s=i[0],r=i[1];this.props.addEndListener(s,r)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,n=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,D(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(Z.Provider,{value:null},"function"==typeof a?a(e,n):r.a.cloneElement(r.a.Children.only(a),n))},t}(r.a.Component);function U(){}w.contextType=Z,w.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:U,onEntering:U,onEntered:U,onExit:U,onExiting:U,onExited:U},w.UNMOUNTED="unmounted",w.EXITED="exited",w.ENTERING="entering",w.ENTERED="entered",w.EXITING="exiting";var P=w,R=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return n=t,void((a=e).classList?a.classList.remove(n):"string"==typeof a.className?a.className=L(a.className,n):a.setAttribute("class",L(a.className&&a.className.baseVal||"",n)));var a,n}))},O=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,a){var n=t.resolveArguments(e,a),i=n[0],s=n[1];t.removeClasses(i,"exit"),t.addClass(i,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,a)},t.onEntering=function(e,a){var n=t.resolveArguments(e,a),i=n[0],s=n[1]?"appear":"enter";t.addClass(i,s,"active"),t.props.onEntering&&t.props.onEntering(e,a)},t.onEntered=function(e,a){var n=t.resolveArguments(e,a),i=n[0],s=n[1]?"appear":"enter";t.removeClasses(i,s),t.addClass(i,s,"done"),t.props.onEntered&&t.props.onEntered(e,a)},t.onExit=function(e){var a=t.resolveArguments(e)[0];t.removeClasses(a,"appear"),t.removeClasses(a,"enter"),t.addClass(a,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var a=t.resolveArguments(e)[0];t.addClass(a,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var a=t.resolveArguments(e)[0];t.removeClasses(a,"exit"),t.addClass(a,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,a){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,a]},t.getClassNames=function(e){var a=t.props.classNames,n="string"==typeof a,i=n?""+(n&&a?a+"-":"")+e:a[e];return{baseClassName:i,activeClassName:n?i+"-active":a[e+"Active"],doneClassName:n?i+"-done":a[e+"Done"]}},t}Object(i.a)(t,e);var a=t.prototype;return a.addClass=function(e,t,a){var n=this.getClassNames(t)[a+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===a&&i&&(n+=" "+i),"active"===a&&e&&G(e),n&&(this.appliedClasses[t][a]=n,function(e,t){e&&t&&t.split(" ").forEach((function(t){return n=t,void((a=e).classList?a.classList.add(n):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(a,n)||("string"==typeof a.className?a.className=a.className+" "+n:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+n)));var a,n}))}(e,n))},a.removeClasses=function(e,t){var a=this.appliedClasses[t],n=a.base,i=a.active,s=a.done;this.appliedClasses[t]={},n&&R(e,n),i&&R(e,i),s&&R(e,s)},a.render=function(){var e=this.props,t=(e.classNames,D(e,["classNames"]));return r.a.createElement(P,A({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r.a.Component);O.defaultProps={classNames:""};var F=O,H=function(e){function t(){var t;return(t=e.call(this)||this).toggleMenu=function(){t.setState({menu:!t.state.menu})},t.toggleSearch=function(){t.setState({search:!t.state.search})},t.togglenavbarHover=function(){t.setState({navbarHover:!t.state.navbarHover})},t.toggleTopicIdeas=function(){t.setState({topicIdeas:!t.state.topicIdeas,freshIdeas:!t.state.freshIdeas})},t.toggleTopicFashion=function(){t.setState({topicFashion:!t.state.topicFashion,freshFashion:!t.state.freshFashion})},t.toggleTopicMusic=function(){t.setState({topicMusic:!t.state.topicMusic,freshMusic:!t.state.freshMusic})},t.toggleTopicArt=function(){t.setState({topicArt:!t.state.topicArt,freshArt:!t.state.freshArt})},t.toggleTopicFilm=function(){t.setState({topicFilm:!t.state.topicFilm,freshFilm:!t.state.freshFilm})},t.toggleTopicVideos=function(){t.setState({topicVideos:!t.state.topicVideos,freshVideos:!t.state.freshVideos})},t.toggleSearchTransition=function(){t.setState({searchTransition:!t.state.searchTransition})},t.state={menu:!1,Search:!1,topicIdeas:!1,navbarHover:!1,topicFashion:!1,topicMusic:!1,topicArt:!1,topicFilm:!1,topicVideos:!1,freshIdeas:!1,freshFashion:!1,freshMusic:!1,freshArt:!1,freshFilm:!1,freshVideos:!1,searchTransition:!1},t}Object(i.a)(t,e);var a=t.prototype;return a.getFreshList=function(){var e=[];return this.props.postEdges.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,category:t.node.frontmatter.category,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e},a.render=function(){var e,t,a,n,i=this,s=this.getFreshList(),o=(this.state.freshStories,this.state.searchTransition,y()({"row link--active":this.state.topicIdeas,"":!this.state.topicIdeas})),l=y()({"row link--active":this.state.topicFashion,"":!this.state.topicFashion}),m=y()({"link--active":this.state.topicMusic,"":!this.state.topicMusic}),u=y()({"link--active":this.state.topicArt,"":!this.state.topicArt}),C=y()({"link--active":this.state.topicFilm,"":!this.state.topicFilm}),S=y()({"link--active":this.state.topicVideos,"":!this.state.topicVideos}),T=y()({"dropdown-menu":!0,"dropdown-menu--hover":this.state.navbarHover,"dropdown-menu--quick":!this.navbarHover}),A="navbar navbar--black navbar--collapse";this.state.menu?A+=" navbar--expand":(this.state.search||"navbar navbar--black navbar--collapse navbar--expand"===A)&&(A+=" navbar-search--expand"),console.log(A),console.log(T);var D=s.filter((function(e){return"ideas"===e.category})),L=s.filter((function(e){return"fashion"===e.category})),z=s.filter((function(e){return"music"===e.category})),k=s.filter((function(e){return"art"===e.category})),j=s.filter((function(e){return"film"===e.category})),Z=s.filter((function(e){return"videos"===e.category})),G=this.props.mobile?28:44;return r.a.createElement("div",{className:A},r.a.createElement("div",{className:"Navbar__click-catcher",onClick:this.toggleMenu}),r.a.createElement("div",{className:"Navbar__center",onMouseEnter:this.togglenavbarHover,onMouseLeave:this.togglenavbarHover},r.a.createElement("div",{className:"Navbar",style:{windowHeight:"611px"}},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav-item--left"},r.a.createElement("div",{className:"nav__burger-hit util__display-cursor",onClick:this.toggleMenu},r.a.createElement("div",{className:"nav__icon nav__icon--burger"}))),r.a.createElement("div",{className:"nav-item--center util__display-cursor nav-logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:g.a,alt:"no_image",style:{width:"80px"}}))),r.a.createElement("div",{className:"nav-item--right",onClick:function(){i.toggleSearchTransition(),i.toggleSearch()}},r.a.createElement("span",{className:"Search"},r.a.createElement("svg",{x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"}},r.a.createElement("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none",fillRule:"evenodd",style:{stroke:"currentColor"}},r.a.createElement("circle",{cx:"6.5",cy:"6.5",r:"6.5"}),r.a.createElement("path",{d:"M12 12l2 2",strokeLinecap:"round",strokeLinejoin:"round"}))))),r.a.createElement("div",{className:"navbar-menu",style:{windowHeight:"400px"}},r.a.createElement("div",{className:"nav-menu"},r.a.createElement("div",{onMouseEnter:this.toggleTopicIdeas,onMouseLeave:this.toggleTopicIdeas},r.a.createElement("div",{className:o},r.a.createElement("a",{"aria-current":"page",href:"/categories/fashion/"},"Ideas")),r.a.createElement("div",{className:"container"},r.a.createElement(F,{in:this.state.freshIdeas,timeout:10,classNames:"row--transition",unmountOnExit:!0,appear:!0},r.a.createElement("div",{className:"row"},D.map((function(e){return r.a.createElement(c.Link,{className:"three columns",to:e.path,key:e.title},"// ",r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x56",alt:"img"}),r.a.createElement("div",{className:"para",style:{color:"#000"}},e.title),r.a.createElement("div",{className:"para"},e.excerpt),"//"))})))))),r.a.createElement("div",{onMouseEnter:function(){i.toggleTopicFashion()},onMouseLeave:function(){i.toggleTopicFashion()}},r.a.createElement("div",{className:l},r.a.createElement("a",((e={"aria-current":"page",href:"/categories/fashion"}).href="/fashion",e),"Fashion")),r.a.createElement("div",{className:"container"},r.a.createElement(F,{in:this.state.freshFashion,timeout:10,classNames:"row--transition",unmountOnExit:!0},r.a.createElement("div",{className:"row"},L.map((function(e){return r.a.createElement(c.Link,{className:"four columns",to:e.path,key:e.title},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x56",alt:"img"}),r.a.createElement("div",{className:"para",style:{color:"#000"}},e.title),r.a.createElement("div",{className:"para"},e.excerpt))})))))),r.a.createElement("div",{onMouseEnter:function(){i.toggleTopicMusic()},onMouseLeave:function(){i.toggleTopicMusic()}},r.a.createElement("div",{className:m},r.a.createElement("a",((t={"aria-current":"page",href:"/music"}).href="/music",t),"Music")),r.a.createElement("div",{className:"container"},r.a.createElement(F,{in:this.state.freshMusic,timeout:50,classNames:"row--transition",unmountOnExit:!0},r.a.createElement("div",{className:"row"},z.map((function(e){return r.a.createElement("div",{className:"four columns"},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x56",alt:"img"}),r.a.createElement("div",{className:"para",style:{color:"#000"}},e.title),r.a.createElement("div",{className:"para"},e.excerpt))})))))),r.a.createElement("div",{onMouseEnter:function(){i.toggleTopicArt()},onMouseLeave:function(){i.toggleTopicArt()}},r.a.createElement("div",{className:u},r.a.createElement("a",((a={"aria-current":"page",href:"/art&photography"}).href="/art & Photography",a),"Art & Photography")),r.a.createElement("div",{className:"container"},r.a.createElement(F,{in:this.state.freshArt,timeout:50,classNames:"row--transition",unmountOnExit:!0},r.a.createElement("div",{className:"row"},k.map((function(e){return r.a.createElement("div",{className:"four columns"},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x56",alt:"img"}),r.a.createElement("div",{className:"para",style:{color:"#000"}},e.title),r.a.createElement("div",{className:"para"},e.excerpt))})))))),r.a.createElement("div",{onMouseEnter:this.toggleTopicFilm,onMouseLeave:this.toggleTopicFilm},r.a.createElement("div",{className:C},r.a.createElement("a",((n={"aria-current":"page",href:"/films"}).href="/films",n),"Film & TV")),r.a.createElement("div",{className:"container"},r.a.createElement(F,{in:this.state.freshFilm,timeout:50,classNames:"row--transition",unmountOnExit:!0},r.a.createElement("div",{className:"row"},j.map((function(e){return r.a.createElement("div",{className:"four columns"},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x56",alt:"img"}),r.a.createElement("div",{className:"para",style:{color:"#000"}},e.title),r.a.createElement("div",{className:"para"},e.excerpt))})))))),r.a.createElement("div",{onMouseEnter:this.toggleTopicVideos,onMouseLeave:this.toggleTopicVideos},r.a.createElement("div",{className:S},r.a.createElement("a",{"aria-current":"page",href:"/videos"},"Videos")),r.a.createElement("div",{className:"container"},r.a.createElement(F,{in:this.state.freshVideos,timeout:50,classNames:"row--transition",unmountOnExit:!0},r.a.createElement("div",{className:"row"},Z.map((function(e){return r.a.createElement("div",{className:"four columns"},r.a.createElement("img",{src:"https://source.unsplash.com/random/100x56",alt:"img"}),r.a.createElement("div",{className:"para",style:{color:"#000"}},e.title),r.a.createElement("div",{className:"para"},e.excerpt))}))))))),r.a.createElement("div",{className:"nav-feature",style:{backgroundColor:"#fff",padding:"10px 20px",marginTop:"20px",borderRadius:"2px"}},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{style:{margin:"10px"}},r.a.createElement(d.a,{round:!0,size:G})),r.a.createElement(I.a,{style:{margin:"10px"}},r.a.createElement(h.a,{round:!0,size:G})),r.a.createElement(E.a,{style:{margin:"10px"}},r.a.createElement(N.a,{round:!0,size:G}),r.a.createElement(v.a,null,(function(e){return function(e){return r.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))}(e)}))),r.a.createElement(f.a,{style:{margin:"10px"}},r.a.createElement(M.a,{round:!0,size:G})),r.a.createElement(x.a,{style:{margin:"10px"}},r.a.createElement(b.a,{round:!0,size:G}))),r.a.createElement("div",{className:"nav-feature__Text"},"feature")),r.a.createElement("div",{className:"nav-footer"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/careers"},"Careers")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact"))),r.a.createElement("hr",null),r.a.createElement("li",null,r.a.createElement("a",{href:"https://Zen.com"},"© Copyright Zen | All Rights Reserved")))))),r.a.createElement("div",{className:T},r.a.createElement("div",{className:"dropdown-menu--transition"},r.a.createElement(F,{in:this.state.searchTransition,timeout:350,classNames:"dropdown-menu-notification--transition",unmountOnExit:!0},r.a.createElement("div",{className:"SearchBar dropdown-menu-notification--transition"},r.a.createElement("div",{className:"SearchBar__Search"},r.a.createElement("input",{placeholder:"Search",type:"text",onKeyUp:function(e){return i.props.onTextChange(e.target.value)}}))))))))},t}(s.Component),W=a("okzv"),J=(a("zfG9"),function(e){function t(){var t;return(t=e.call(this)||this).state={filterString:""},t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;setTimeout((function(){e.setState({filterString:""})}),1e3)},a.renderPaging=function(){var e=this.props.pageContext,t=e.currentPageNum,a=e.pageCount,i=t-1==1?"/":"/"+(t-1)+"/",s="/"+(t+1)+"/",o=1===t,l=t===a;return r.a.createElement("div",{className:"paging-container"},!o&&r.a.createElement(c.Link,{to:i},"Previous"),Object(n.a)(Array(a)).map((function(e,t){var a=t+1;return r.a.createElement(c.Link,{key:"listing-page-"+a,to:1===a?"/":"/"+a+"/"},a)})),!l&&r.a.createElement(c.Link,{to:s},"Next"))},a.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges,a=this.props;a.data,a.pageContext.slug;return r.a.createElement(l.a,null,t?r.a.createElement("div",null,r.a.createElement(H,{postEdges:t,onTextChange:function(t){e.setState({filterString:t})}}),r.a.createElement("div",{className:"listing-container"},r.a.createElement("div",{className:"posts-container"},r.a.createElement(o.a,{title:S.a.siteTitle}),r.a.createElement(W.a,null),t.filter((function(t){return t.node.frontmatter.title.toLowerCase().includes(e.state.filterString.toLowerCase())})).map((function(e){return r.a.createElement(m.a,{postEdges:t})}))),this.renderPaging())):r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card-loader card-loader--tabs"})))},t}(r.a.Component));t.default=J},"0h69":function(e,t,a){},"1wty":function(e,t,a){"use strict";var n=a("dI71"),i=a("q1tI"),s=a.n(i),r=a("Wbzz"),o=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,category:t.node.frontmatter.category,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e},a.render=function(){return this.getPostList().map((function(e){return s.a.createElement("li",{className:"teaser-wrapper teaser-wrapper--type-post post-status--publish util__bg--grey"},s.a.createElement("article",{class:"TeaserBlock TeaserBlock--style-sans TeaserBlock--layout_direction-ltr"},s.a.createElement("div",{className:"TeaserBlock__content"},s.a.createElement("h2",null,s.a.createElement(r.Link,{to:e.path,key:e.title},e.title)),s.a.createElement("span",null,"MILAN-BASED EDITOR CARLO ANTONELLI VISITS THE PALAZZO DELLE ESPOSIZIONI FOR THE 2020 QUADRIENNALE D'ARTE, AND SENDS OUR EDITOR A POSTCARD."),s.a.createElement("time",{class:"Date"},"November 16, 2020",s.a.createElement("div",{class:"ClipboardLink"},s.a.createElement("div",{class:"ClipboardLink__content"},s.a.createElement("svg",{width:"17",height:"22",viewBox:"0 0 13 22"},s.a.createElement("g",{fill:"currentColor"},s.a.createElement("path",{id:"box",d:"M10.916,9C11.79,9,12.5,9.706,12.5,10.575v7.851c0,0.868-0.71,1.575-1.584,1.575 H2.084C1.21,20,0.5,19.294,0.5,18.425v-7.851C0.5,9.706,1.21,9,2.084,9h2.01C4.43,9,4.703,9.271,4.703,9.606 c0,0.335-0.273,0.606-0.609,0.606h-2.01c-0.201,0-0.365,0.163-0.365,0.363v7.851c0,0.2,0.164,0.363,0.365,0.363h8.833 c0.201,0,0.365-0.163,0.365-0.363v-7.851c0-0.2-0.164-0.363-0.365-0.363h-2.01c-0.336,0-0.609-0.271-0.609-0.606 C8.297,9.271,8.57,9,8.906,9H10.916z"}),s.a.createElement("path",{id:"arrow",d:"M3.574,7.362c-0.246,0.241-0.644,0.241-0.889,0c-0.246-0.241-0.246-0.632,0-0.873l3.37-3.308 C6.169,3.069,6.326,3,6.5,3s0.331,0.069,0.446,0.181l3.37,3.308c0.246,0.241,0.246,0.632,0,0.873 c-0.123,0.12-0.284,0.181-0.445,0.181c-0.161,0-0.322-0.06-0.445-0.181L7.129,5.108v9.275C7.129,14.724,6.847,15,6.5,15 s-0.629-0.276-0.629-0.617V5.108L3.574,7.362z"})))))))))}))},t}(s.a.Component);t.a=o},rWKE:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDcuNzk1IiBoZWlnaHQ9IjkxLjUxNyIgdmlld0JveD0iMCAwIDI0Ny43OTUgOTEuNTE3Ij4NCiAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDQuOTYxIC0zMTQpIj4NCiAgICA8ZyBpZD0ibiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1MS41NDggLTcwMikiPg0KICAgICAgPGcgaWQ9Im91dGxpbmUiPg0KICAgICAgICA8cGF0aCBpZD0iUGF0aF80MiIgZGF0YS1uYW1lPSJQYXRoIDQyIiBkPSJNLTU1MzEuNTc0LDE4NTAuMjc1bDUuMTU0LDEyLjc0MmgxMC45ODNsMzMuOTMzLTY4LjJoMjAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQzNyAtNzU3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNDEiIGRhdGEtbmFtZT0iUGF0aCA0MSIgZD0iTS01NDg5LjY3OSwxODUwLjI0OGw1LjUsMTIuNzI3aDEwLjA4NWwzOS42NDEtNzguMTkzLTguMDM1LTEwLjg3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQzNyAtNzU3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfMSIgZGF0YS1uYW1lPSJMaW5lIDEiIHgyPSI2IiB5Mj0iMTMuNzgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTQuNSAxMDkxLjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICA8bGluZSBpZD0iTGluZV8yIiBkYXRhLW5hbWU9IkxpbmUgMiIgeDI9IjgiIHkyPSIxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ3LjUgMTAyNS41KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfMyIgZGF0YS1uYW1lPSJMaW5lIDMiIHgyPSI3IiB5Mj0iMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1NS41IDEwOTEuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgICA8L2c+DQogICAgICA8cGF0aCBpZD0iYm9keSIgZD0iTS0yMTUzLjI4OS05MDAuMjE4aC0xMC44NTFsMzMuNS02Ni41OTVoLTMxLjMzM2wtMzMuMTA4LDY2LjU5NWgtMTEuMDUyTC0yMTY2LjE0OS05NzhoNTEuNjQyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzExMC4xMzYgMTk5NCkiLz4NCiAgICA8L2c+DQogICAgPGcgaWQ9ImUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTUgLTY5Mi43OCkiPg0KICAgICAgPGcgaWQ9Im91dGxpbmUtMiIgZGF0YS1uYW1lPSJvdXRsaW5lIj4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfNDAiIGRhdGEtbmFtZT0iUGF0aCA0MCIgZD0iTS01NTIyLjAxNCwxNzk5Ljk1NWw3LjY0Mi0xNS4xMzFoNDEuMjY3bDQuODMtNi4zNDQtNi40LTEzLjk4NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQzNyAtNzU3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzkiIGRhdGEtbmFtZT0iUGF0aCAzOSIgZD0iTS01NTM5LjUxMSwxODMzLjAzN2w4LjM0LTE2LjE1Mmg0MS41NjlsNC41LTYuMjgzLTYuNi0xMS4yNDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0MzcgLTc1NykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM4IiBkYXRhLW5hbWU9IlBhdGggMzgiIGQ9Ik0tNTU2My41NjEsMTg0MS4xbDUuMjQ5LDExLjloNTMuMDg0bDQuMjI5LTUuODA2LTcuODMxLTE0LjE1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQzNyAtNzU3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNCIgZGF0YS1uYW1lPSJMaW5lIDQiIHgyPSI4IiB5Mj0iMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyMy41IDEwODIuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgICAgIDxsaW5lIGlkPSJMaW5lXzUiIGRhdGEtbmFtZT0iTGluZSA1IiB4Mj0iNyIgeTI9IjEwLjc4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDAuNSAxMDQ4LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICA8bGluZSBpZD0iTGluZV82IiBkYXRhLW5hbWU9IkxpbmUgNiIgeDI9IjUiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAwLjUgMTA1MC4yOCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgICAgIDxsaW5lIGlkPSJMaW5lXzUtMiIgZGF0YS1uYW1lPSJMaW5lIDUiIHgyPSI2IiB5Mj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1NyAxMDE1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNi0yIiBkYXRhLW5hbWU9IkxpbmUgNiIgeDI9IjYiIHkyPSIxMS4yMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE2LjUgMTAxNy4yOCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgICA8L2c+DQogICAgICA8cGF0aCBpZD0iYm9keS0yIiBkYXRhLW5hbWU9ImJvZHkiIGQ9Ik0tMjEyMS4xMzYtOTY2LjgxMmgtNDAuODRsLTExLjM0OSwyMy42MWg0MS44bC00LjQ2OSw4LjkzOC00MS40NDktLjA0Ni0xMi43MzQsMjQuNzMzLDQxLjUuMDc1LTQuNjM0LDkuMjg0aC01Mi44MjhMLTIxNjYuMTQ5LTk3OGg1MS42NDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDc4LjEzNiAxOTg0Ljc4KSIvPg0KICAgIDwvZz4NCiAgICA8ZyBpZD0ieiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzOSAtNjk0KSI+DQogICAgICA8ZyBpZD0ib3V0bGluZS0zIiBkYXRhLW5hbWU9Im91dGxpbmUiPg0KICAgICAgICA8cGF0aCBpZD0iUGF0aF8zNiIgZGF0YS1uYW1lPSJQYXRoIDM2IiBkPSJNLTU2OTEuNjU5LDE4NDIuMDYyLTU2ODcsMTg1M2g1Mi40ODRsNC4zMzctNS43MzktNi42NTYtMTMuMjA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NDM3IC03NTcpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICA8cGF0aCBpZD0iUGF0aF8zNSIgZGF0YS1uYW1lPSJQYXRoIDM1IiBkPSJNLTU2MDEuMzg2LDE3NjUuNzEybDUuNTkzLDExLjU2M0wtNTY1NS44NzYsMTgzNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQzNyAtNzU3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz4NCiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNyIgZGF0YS1uYW1lPSJMaW5lIDciIHgyPSI2Ljk5MSIgeTI9IjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTUuNSAxMDgzLjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMyIvPg0KICAgICAgICA8cGF0aCBpZD0iUGF0aF8zNyIgZGF0YS1uYW1lPSJQYXRoIDM3IiBkPSJNLTU2NTguMjEzLDE3NzUuNDNsNi4wNyw5LjIyN2gyMC41MzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0MzcgLTc1NykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+DQogICAgICA8L2c+DQogICAgICA8cGF0aCBpZD0iYm9keS0zIiBkYXRhLW5hbWU9ImJvZHkiIGQ9Ik0tMjIwNy41LTkwMC4yNDFsNjcuOTkxLTY2LjdoLTM0LjY0Mmw2LjgxNC0xMS4wNThoNTIuODI4bC03MC42NTMsNjguMzcyaDM1LjE3OGwtNC43NTQsOS4zODdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTUxLjQ5OCAxOTg2KSIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="},zfG9:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-listing-jsx-ca3c25b8a069d8fd095f.js.map