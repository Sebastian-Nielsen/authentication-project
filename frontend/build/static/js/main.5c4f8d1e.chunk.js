(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(52),a=c.n(s),o=(c(43),c(4)),i=c(91),u=c(22),l=c(5),j=c.n(l),b=c(11),d=c(14),h=c(15),p=c(17),O=c(16),x=c(23),g=c.n(x),m="https://authentication-react-project.herokuapp.com";console.log("-----------------"),console.log("HostUrl:",m),console.log("-----------------");var f=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[getCurrentUser_1] Sending request now!"),e.prev=1,e.next=4,g.a.get(m+"/loginForm/user",{withCredentials:!0});case 4:return t=e.sent,console.log("[getCurrentUser_2:good] Response data.username:",t.data.username,typeof t.data.username),e.abrupt("return",t.data.username);case 9:return e.prev=9,e.t0=e.catch(1),console.log("[getCurrentUser_2] err msg:",e.t0.message),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(m+"/loginForm/removeAllUsers");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(m+"/loginForm/insertTenUsers");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post(m+"/loginForm/deleteUser",{username:t},{withCredentials:!0});case 3:return n=e.sent,c(),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[api:login] Sending req with:",t,c),e.prev=1,e.next=4,g.a.post(m+"/loginForm/login",{username:t,password:c},{withCredentials:!0});case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0.messages),console.log(e.t0),console.log("[api:login] err message:",e.t0.response.message),console.log("[api:login] err status:",e.t0.response.status),console.log("[api:login] err msg:",e.t0.response.msg),e.abrupt("return",e.t0.response);case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,c){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(j.a.mark((function e(t,c,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=m+"/loginForm/signup",console.log(r),e.next=5,g.a.post(r,{email:c,username:t,password:n},{withCredentials:!0});case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(0),console.log("err 34595:",e.t0.response),e.abrupt("return",e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(m+"/loginForm/logout",{withCredentials:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),E=c(39),M=c(38),T=c(53),z=c(24),R=c(90),S=c(0),k=Object.freeze({ERROR:{type:"Error",notification_duration:5e3},SUCCESS:"Success",NOTICE:{type:"Notice",notification_duration:2e3},WARN:{type:"Warning",notification_duration:2e3}}),_=(Object.freeze({ERR_INCORRECT_PWD_OR_USERNAME:Object(z.a)({msg:"Incorrect password or username"},k.ERROR),ERR_USERNAME_IS_ALREADY_TAKEN:Object(z.a)({msg:"Username is already registered"},k.ERROR),ERR_EMAIL_IS_ALREADY_IN_USE:Object(z.a)({msg:"Email is already in use"},k.ERROR),NOTICE_PWDS_DO_NOT_MATCH:Object(z.a)({msg:"Passwords do not match"},k.NOTICE),WARN_NOT_AUTHENTICATED:Object(z.a)({msg:"You are not authenticated. Please sign in."},k.WARN)}),Object(n.createContext)({})),U=Object(T.a)("notifId"),I=function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(d.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={notifications:[]},e.createNotification=function(t){console.log(t),Object(M.a)(c,U)[U]++,console.log("[createNotification] -----"),console.log("[createNotification] Type:",t.type),console.log("[createNotification] msg:",t.msg),console.log("[createNotification] duration:",t.notification_duration),console.log("[createNotification] id:",Object(M.a)(c,U)[U]),console.log("[createNotification] -----");var n=Object(M.a)(c,U)[U];setTimeout((function(){return e.removeNotifBy(n)}),t.notification_duration);var r={id:n,type:t.type,msg:t.msg};e.setState((function(e){return{notifications:[].concat(Object(E.a)(e.notifications),[r])}})),console.log(e.state.notifications)},e.removeNotifBy=function(t){var c=e.state.notifications.findIndex((function(e){return e.id===t}));-1!==c?(console.log("id is present in notifications-arr, ",t),e.setState((function(e){var t=Object(E.a)(e.notifications);return t.splice(c,1),{notifications:t}}))):console.log("id is not present in notifications-arr, ",t)},e.removeNotifAt=function(t){e.setState((function(e){var c=Object(E.a)(e.notifications);return c.splice(t,1),{notifications:c}}))},e}return Object(h.a)(c,[{key:"render",value:function(){return Object(S.jsx)(_.Provider,{value:{notifications:this.state.notifications,removeNotifAt:this.removeNotifAt,removeNotifBy:this.removeNotifBy,createNotification:this.createNotification},children:this.props.children})}}]),c}(n.Component);Object.defineProperty(I,U,{writable:!0,value:0});var D=function(e){return Object(S.jsx)(i.a,{children:Object(S.jsx)(_.Consumer,{children:function(e){var t=e.notifications,c=e.removeNotifAt;e.removeNotifBy;return Object(S.jsx)("div",{id:"notificationCenter",children:t.map((function(e,t){return Object(S.jsxs)(R.a.div,{className:"notif ".concat(e.type.toLowerCase()),onClick:function(){return c(t)},initial:{scale:.5,x:"-200px"},animate:{scale:1,x:0},exit:{scale:.1,x:"-200px"},children:[Object(S.jsx)("div",{className:"icon",children:Object(S.jsx)("img",{src:window.location.origin+"/times.svg",alt:""})}),Object(S.jsxs)("div",{className:"message",children:[Object(S.jsx)("div",{className:"title"}),e.msg," (",e.id,")"]})]},e.id)}))})}})})},H=r.a.createContext({username:"default___Value"}),P=H.Consumer,V=Object.freeze({AUTHENTICATED:1,UNAUTHENTICATED:2,PENDING:3}),F=function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(d.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:null,isAuthenticated:V.PENDING},e.signup=function(){var t=Object(b.a)(j.a.mark((function t(c,n,r){var s,a,o=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=o.length>3&&void 0!==o[3]?o[3]:function(){},console.log("[auth:signup] Received ",c,n,r),t.next=4,A(c,n,r);case 4:if(200===(a=t.sent).status){t.next=8;break}return e.context.createNotification(a.data),t.abrupt("return",null);case 8:return s(),e.setState({username:a.data.username,isAuthenticated:V.AUTHENTICATED}),t.abrupt("return",a.data.username);case 11:case"end":return t.stop()}}),t)})));return function(e,c,n){return t.apply(this,arguments)}}(),e.login=function(){var t=Object(b.a)(j.a.mark((function t(c,n){var r,s,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:function(){},console.debug("[auth:login] ".concat(c,", ").concat(n)),t.next=4,N(c,n);case 4:return s=t.sent,console.log("[auth:login] res.status:",s.status),200!==s.status?(e.context.createNotification(s.data),e.setState({isAuthenticated:V.UNAUTHENTICATED})):(e.setState({username:s.data.username,isAuthenticated:V.AUTHENTICATED}),r()),t.abrupt("return",s.data.username);case 8:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),e.logout=Object(b.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:c=t.sent,console.log("logout res 1:"),console.log("logout res 2:"),console.log("logout res 3:"),console.log("logout res 4:"),console.log(c),e.setState({username:null,isAuthenticated:V.UNAUTHENTICATED});case 9:case"end":return t.stop()}}),t)}))),e.isAuthenticated=function(){return null!==e.state.username},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[auth:componentDidMount:1] Calling 'getCurrentUser'"),e.next=3,f();case 3:t=e.sent,console.log("[auth:componentDidMount:2] AuthProvider has gotten the username: ",this.state.username),t?this.setState({username:t,isAuthenticated:V.AUTHENTICATED}):this.setState({isAuthenticated:V.UNAUTHENTICATED});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsx)(H.Provider,{value:{username:this.state.username,signup:this.signup,login:this.login,logout:this.logout,isAuthenticated:this.state.isAuthenticated},children:this.props.children})}}]),c}(r.a.Component);F.contextType=_;var L=c(9),B=function(){return Object(S.jsxs)("svg",{stroke:"grey",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",children:[Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsxs)("g",{children:[Object(S.jsx)("path",{d:"M493.225,259.994c-10.862-15.775-25.566-28.211-42.753-36.266c0.001-0.146,0.011-0.289,0.011-0.434     c0-10.11-3.153-19.938-8.956-28.132c3.049-10.104,4.592-20.569,4.592-31.169c0-14.454-2.817-28.5-8.373-41.745     c-0.028-0.068-0.069-0.13-0.099-0.198l0.019-0.009c-16.927-40.137-56.012-66.072-99.57-66.072h-55.694     c-28.525,0-56.079,11.444-76.243,31.518h-26.808c-58.863,0-106.751,47.886-106.751,106.747c0,14.902,3.074,29.099,8.614,41.995     c-4.377-0.878-8.852-1.335-13.365-1.335C30.437,234.893,0,265.33,0,302.743c0,12.041,9.797,21.837,21.837,21.837     s21.839-9.797,21.839-21.837c0-13.331,10.844-24.175,24.174-24.175c13.33,0,24.174,10.844,24.174,24.175v41.077     c0,22.025,8.523,42.828,23.998,58.573c14.505,14.76,33.555,23.492,54.004,24.846c13.453,17.489,34.571,28.791,58.29,28.791h95.23     c1.938,0,3.807-0.286,5.588-0.782c3.506,0.509,7.075,0.782,10.64,0.782h95.23c11.529,0,20.909-9.38,20.909-20.91     c0-11.528-9.379-20.908-20.909-20.908h-21.711V382.51c0-27.396-15.219-52.369-39.196-65.031v-17.808     c0-9.446-1.292-18.7-3.838-27.656h31.502c6.67,0,13.027-1.35,18.822-3.785c23.122,6.771,39.047,27.853,39.047,52.175v30.791     c0,14.439,11.746,26.186,26.185,26.186c14.438,0,26.183-11.747,26.183-26.186v-30.791     C512,298.719,505.507,277.83,493.225,259.994z M187.395,103.572h22.749c5.57,0,10.101,4.531,10.101,10.099     c0,5.568-4.532,10.099-10.101,10.099h-22.749V103.572z M181.385,202.259c3.972,10.491,9.479,20.208,16.469,28.97     c-4.883,5.328-9.157,11.15-12.8,17.386h-5.704c-29.986,0-54.382-24.396-54.382-54.382c0-25.584,17.765-47.085,41.605-52.848     c-3.889,6.801-6.053,14.585-6.053,22.606C160.523,180.019,168.844,194.13,181.385,202.259z M108.109,343.82v-41.077     c0-22.199-18.06-40.26-40.259-40.26c-22.199,0-40.259,18.061-40.259,40.26c0,3.172-2.581,5.753-5.754,5.753     c-3.172,0-5.753-2.581-5.753-5.753c0-28.544,23.222-51.765,51.765-51.765c9.127,0,18.047,2.405,25.897,6.962     c5.61,7.52,12.188,14.278,19.545,20.09c4.124,7.555,6.322,16.06,6.322,24.713v41.077c0,23.547,14.768,44.42,36.5,52.501     c0.867,4.542,2.157,8.934,3.821,13.142C130.321,402.307,108.109,375.411,108.109,343.82z M154.951,377.974     c-11.71-7.106-19.25-19.949-19.25-34.155v-41.076c0-3.889-0.34-7.756-0.999-11.56c11.268,5.209,23.589,8.516,36.551,9.494v35.544     C161.866,347.768,155.915,362.206,154.951,377.974z M285.752,439.946h-57.435c-31.67,0-57.436-25.766-57.436-57.438     c0-31.669,25.765-57.436,57.436-57.436c31.669,0,57.435,25.765,57.435,57.436V439.946z M323.548,439.946h-21.711v-9.649h21.711     c2.66,0,4.825,2.164,4.825,4.823C328.373,437.782,326.208,439.946,323.548,439.946z M331.952,415.99     c-2.575-1.137-5.415-1.778-8.405-1.778h-21.711v-31.704c0-40.539-32.981-73.52-73.519-73.52     c-15.161,0-29.264,4.615-40.981,12.512v-20.518h33.382c4.443,0,8.042-3.6,8.042-8.042s-3.6-8.042-8.042-8.042h-41.366     c-49.993,0-90.666-40.672-90.666-90.664c0-47.279,36.386-86.2,82.624-90.286v20.294c-35.08,4.005-62.424,33.858-62.424,69.991     c0,38.855,31.61,70.466,70.466,70.466h41.366c4.443,0,8.042-3.6,8.042-8.042c0-4.443-3.6-8.042-8.042-8.042H204.32     c2.979-3.978,6.3-7.704,9.955-11.138c3.213-3.017,3.398-8.058,0.416-11.303c-4.741-5.159-8.804-10.771-12.212-16.757     c1.197,0.094,2.403,0.157,3.624,0.157c4.441,0,8.042-3.6,8.042-8.042s-3.601-8.042-8.042-8.042     c-16.265,0-29.497-13.233-29.497-29.499c0-9.734,4.653-18.609,12.542-24.138h8.214c-9.629,3.792-16.466,13.179-16.466,24.138     c0,14.303,11.638,25.94,25.94,25.94c4.443,0,8.042-3.6,8.042-8.042c0-4.443-3.6-8.042-8.042-8.042     c-5.434,0-9.856-4.421-9.856-9.856c0-5.432,4.421-9.852,9.856-9.852c4.443,0,8.042-3.6,8.042-8.042     c0-2.557-1.197-4.83-3.056-6.303c13.657-0.87,24.505-12.251,24.505-26.123c0-8.902-4.47-16.776-11.28-21.509     c16.189-12.896,36.465-20.108,57.353-20.108h55.697c28.131,0,54.061,12.716,71.234,33.773c-1.189-0.365-2.386-0.711-3.595-1.024     c-1.478-0.384-3.036-0.339-4.488,0.132c-10.26,3.312-19.266,9.305-26.197,17.301c-9.749-11.233-23.52-18.44-38.625-19.858     c-0.455-0.044-0.913-0.048-1.363-0.013c-21.296,1.626-41.064,11.152-55.66,26.827c-14.678,15.762-22.761,36.31-22.761,57.863     c0,45.491,35.565,82.721,80.99,84.817c1.256,0.098,2.355,0.143,3.45,0.143h12.309c3.056,8.884,4.626,18.152,4.626,27.656v54.936     C358.014,377.886,348.58,399.938,331.952,415.99z M413.294,430.297h21.711c2.659,0,4.824,2.164,4.824,4.823     c0,2.66-2.165,4.825-4.824,4.825h-21.711V430.297z M374.099,354.605V336.45c14.339,10.697,23.111,27.677,23.111,46.058v57.438     h-53.336c0.369-1.552,0.584-3.162,0.584-4.825c0-2.641-0.513-5.159-1.41-7.487C362.858,408.552,374.099,382.312,374.099,354.605z      M401.763,255.929h-60.684c-0.699,0-1.436-0.032-2.316-0.103c-0.093-0.008-0.185-0.013-0.279-0.017     c-36.875-1.643-65.76-31.843-65.76-68.755c0-35.544,27.557-65.54,62.868-68.594c13.663,1.5,25.747,9.551,32.421,21.639     c1.415,2.564,4.112,4.155,7.041,4.155c2.927,0,5.624-1.591,7.04-4.154c4.86-8.8,12.585-15.51,21.911-19.088     c7.062,2.092,13.685,5.282,19.742,9.51c4.173,10.66,6.287,21.908,6.287,33.469c0,10.284-1.706,20.416-5.07,30.113     c-0.94,2.711-0.365,5.719,1.51,7.89c5.111,5.919,7.924,13.483,7.924,21.297C434.397,241.289,419.757,255.929,401.763,255.929z      M436.618,257.286c4.72-4.84,8.451-10.651,10.843-17.108c27.349,14.361,45.394,41.404,48.09,72.182H475.25     C472.541,288.426,457.881,267.801,436.618,257.286z M495.915,351.194c0,5.57-4.531,10.101-10.099,10.101     c-5.568,0-10.1-4.532-10.1-10.101v-22.749h20.199V351.194z"}),Object(S.jsx)("path",{d:"M370.083,184.628c-3.142-3.14-8.233-3.14-11.374,0c-3.141,3.142-3.141,8.233,0,11.374l4.771,4.771     c1.571,1.57,3.63,2.355,5.688,2.355s4.117-0.785,5.687-2.355c3.141-3.142,3.141-8.233,0-11.374L370.083,184.628z"}),Object(S.jsx)("path",{d:"M392.878,184.628l-4.772,4.771c-3.142,3.141-3.142,8.232-0.001,11.374c1.571,1.571,3.629,2.356,5.687,2.356     c2.058,0,4.117-0.785,5.686-2.355l4.772-4.771c3.142-3.141,3.142-8.232,0.001-11.373     C401.11,181.488,396.018,181.487,392.878,184.628z"}),Object(S.jsx)("path",{d:"M429.472,163.388c0-4.685-3.791-8.478-8.475-8.478c-4.682,0-8.475,3.793-8.475,8.478c0,4.683,3.794,8.478,8.475,8.478     C425.681,171.865,429.472,168.071,429.472,163.388z"}),Object(S.jsx)("path",{d:"M321.541,154.91c-4.684,0-8.475,3.793-8.475,8.478c0,4.683,3.792,8.478,8.475,8.478c4.682,0,8.478-3.795,8.478-8.478     C330.019,158.703,326.224,154.91,321.541,154.91z"})]})})}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{})]})},W=function(){var e=Object(o.g)(),t=Object(n.useContext)(H),c=(Object(n.useContext)(_),Object(n.useState)("sebastian")),r=Object(u.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)("sebastian@mail.dk"),l=Object(u.a)(i,2),j=l[0],b=l[1],d=Object(n.useState)("123"),h=Object(u.a)(d,2),p=h[0],O=h[1];return Object(S.jsxs)(R.a.section,{id:"register",inital:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[Object(S.jsx)(D,{}),Object(S.jsxs)("form",{name:"signup_form",onSubmit:function(c){c.preventDefault(),t.signup(s,j,p,(function(){return e.push("/dashboard")}))},children:[Object(S.jsx)("h2",{children:"Register"}),Object(S.jsx)("input",{type:"text",name:"username",placeholder:"username",className:"field",value:s,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("input",{type:"text",name:"email",placeholder:"email",className:"field",value:j,onChange:function(e){return b(e.target.value)}}),Object(S.jsx)("input",{type:"text",name:"password",placeholder:"password",className:"field",value:p,onChange:function(e){return O(e.target.value)}}),Object(S.jsx)("input",{type:"text",name:"verifyPassword",placeholder:"verify password",className:"field"}),Object(S.jsxs)("div",{className:"buttons flex-row-3-1",children:[Object(S.jsx)("input",{type:"submit",value:"Sign up",className:"btn type-2 primary"}),Object(S.jsx)(L.b,{to:"/login",children:Object(S.jsx)("button",{className:"btn type-2 secondary",children:"Log in"})})]})]}),Object(S.jsx)(R.a.div,{className:"svg-container",initial:{opacity:0},animate:{opacity:1},transition:{duraction:1},children:Object(S.jsx)(B,{})})]})},G=function(){return Object(S.jsxs)("svg",{fill:"white",stroke:"grey",id:"loginMonkey",x:"0px",y:"0px",viewBox:"0 0 512 512",children:[' /*style="enable-background:new 0 0 512 512;" >*/',Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M107.259,141.792c-4.986,0-9.018,4.031-9.018,9.018c0,4.976,4.031,9.007,9.018,9.007c4.976,0,9.007-4.032,9.007-9.007    C116.266,145.823,112.235,141.792,107.259,141.792z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M142.619,186.817l-3.299-3.299c-3.734-3.734-9.771-3.734-13.505,0c-3.724,3.724-3.724,9.771,0,13.505l3.31,3.299    c1.857,1.867,4.307,2.801,6.747,2.801s4.891-0.934,6.747-2.801C146.354,196.599,146.354,190.552,142.619,186.817z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M169.599,183.518c-3.724-3.734-9.771-3.734-13.506,0l-3.299,3.31c-3.734,3.724-3.734,9.771,0,13.495    c1.867,1.867,4.307,2.801,6.747,2.801c2.451,0,4.891-0.934,6.758-2.801l3.299-3.299    C173.333,193.289,173.333,187.242,169.599,183.518z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M188.165,141.792c-4.986,0-9.018,4.031-9.018,9.018c0,4.976,4.031,9.007,9.018,9.007c4.976,0,9.007-4.032,9.007-9.007    C197.172,145.823,193.141,141.792,188.165,141.792z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsxs)("g",{children:[Object(S.jsx)("path",{d:"M353.965,241.487c-3.069-2.867-6.241-5.67-9.51-8.404c-1.635-1.367-3.294-2.717-4.976-4.049     c-8.413-6.659-17.415-12.873-26.91-18.569c-1.571-0.942-3.288-1.429-4.997-1.502c-1.367-0.058-2.731,0.15-4.011,0.604     c-0.64,0.227-1.26,0.515-1.849,0.863c-0.589,0.347-1.148,0.754-1.667,1.217c-0.778,0.695-1.466,1.517-2.031,2.457     c-0.377,0.629-0.681,1.28-0.915,1.946c-1.639,4.657,0.154,9.974,4.554,12.61c13.919,8.349,26.65,17.876,37.832,28.327     c13.622,12.731,24.666,26.64,31.912,40.219c0.955,1.788,2.35,3.191,3.98,4.147c1.63,0.956,3.494,1.465,5.388,1.465     c1.687,0,3.395-0.403,4.986-1.252c5.177-2.758,7.129-9.188,4.36-14.354c-5.813-10.89-13.376-21.564-22.583-31.884     C363.343,250.637,358.819,246.019,353.965,241.487z"}),Object(S.jsx)("path",{d:"M441.078,25.897c-39.116,0-70.933,31.817-70.933,70.923v92.905c-10.015-7.914-20.699-15.277-31.934-22.014     c-15.797-9.474-32.135-17.378-48.728-23.584c3.872-7.787,5.931-16.412,5.931-25.271c0-31.276-25.451-56.727-56.727-56.727     c-1.443,0-2.833,0.064-4.212,0.17c-18.396-30.247-50.988-48.739-86.773-48.739c-35.806,0-68.387,18.492-86.783,48.728     c-1.369-0.096-2.748-0.159-4.191-0.159C25.451,62.127,0,87.579,0,118.855c0,31.287,25.451,56.727,56.727,56.727     c3.024,0,5.984-0.233,8.859-0.69c0.032,0.042,0.053,0.096,0.085,0.138c0.965,26.173,14.556,50.532,36.241,65.151     c4.52,21.749,15.394,44.474,31.658,66.191v121.634c0,11.416,4.445,22.141,12.519,30.226c4.827,4.817,10.758,8.402,17.198,10.471     c5.517,17.229,21.685,29.738,40.718,29.738c23.563,0,42.744-19.181,42.744-42.745v-61.639c7.044,3.098,14.131,5.888,21.229,8.349     c-6.726,7.066-10.874,16.603-10.874,27.107s4.085,20.37,11.522,27.807c5.326,5.315,11.904,8.912,19.065,10.524     c1.613,7.172,5.209,13.76,10.535,19.075c7.426,7.426,17.304,11.511,27.807,11.511h68.811c30.671,0,55.624-24.942,55.624-55.507     l1.209-264.222c5.814,3.193,12.466,5.018,19.553,5.018c22.481,0,40.771-18.29,40.771-40.771V96.82     C512,57.714,480.183,25.897,441.078,25.897z M21.218,118.855c0-17.643,12.943-32.326,29.833-35.053     c-3.268,10.1-4.965,20.72-4.965,31.361c0,13.495,2.695,26.767,7.861,39.084C35.668,152.825,21.218,137.495,21.218,118.855z      M244.34,83.802c16.9,2.716,29.854,17.399,29.854,35.053c0,8.774-3.215,17.198-9.05,23.712     c-6.111,6.811-14.63,10.981-23.712,11.681c1.422-3.384,2.674-6.843,3.713-10.386c2.758-9.283,4.148-18.937,4.148-28.698     C249.295,104.522,247.598,93.902,244.34,83.802z M147.701,34.777c28.698,0,54.797,15.033,69.236,39.54     c-14.906,23.818-40.952,38.395-69.225,38.395c-28.327,0-54.383-14.577-69.278-38.373     C92.884,49.821,118.982,34.777,147.701,34.777z M86.836,172.283c0.021-0.286,0.032-0.573,0.032-0.859     c0-2.387-0.806-4.7-2.281-6.578c-1.888-2.387-3.671-4.933-5.294-7.564c-7.84-12.646-11.988-27.213-11.988-42.119     c0-5.994,0.647-11.861,1.92-17.569c19.319,22.799,47.847,36.336,78.487,36.336c30.597,0,59.104-13.548,78.444-36.368     c1.273,5.718,1.92,11.596,1.92,17.601c0,7.724-1.093,15.352-3.268,22.682l-0.011,0.011c-2.886,9.803-7.596,18.884-14.004,26.99     c-1.475,1.878-2.281,4.191-2.281,6.578c0,0.318,0.021,0.626,0.042,0.944c-0.17,33.419-27.404,60.557-60.854,60.557     c-10.874,0-21.537-2.896-30.841-8.381C98.411,213.669,86.921,193.671,86.836,172.283z M161.26,443.369     c-0.053-0.053-0.106-0.095-0.159-0.149c-4.074-4.063-6.313-9.463-6.313-15.214v-96.989c2.111,2.154,4.265,4.286,6.472,6.387     V443.369z M288.942,445.979c-1.952-0.881-3.766-2.111-5.326-3.671c-3.416-3.416-5.294-7.957-5.294-12.795     c0-9.973,8.116-18.089,18.089-18.089h4.106c8.477,1.75,25.802,3.809,26.12,3.809h0.17c1.326,1.581,2.727,3.119,4.191,4.583     h-4.965C308.834,419.817,294.31,430.649,288.942,445.979z M429.248,442.817c0,18.969-15.436,34.395-34.406,34.395h-68.811     c-4.838,0-9.379-1.878-12.805-5.305c-3.416-3.406-5.294-7.946-5.294-12.784c0-0.191,0-0.382,0.011-0.583     c0.308-9.814,8.254-17.505,18.089-17.505c0,0,55.539-0.021,55.974-0.021c5.856,0,10.609-4.753,10.609-10.609     c0-5.867-4.753-10.609-10.609-10.609c-28.061,0-50.892-22.831-50.892-50.892c0-5.856-4.753-10.609-10.609-10.609     c-5.867,0-10.609,4.753-10.609,10.609c0,7.416,1.125,14.566,3.215,21.303h-10.397c-18.524-4.01-37.461-10.588-55.964-19.489     v-41.768c0-5.867-4.753-10.609-10.609-10.609c-5.867,0-10.609,4.742-10.609,10.609v126.748c0,11.861-9.665,21.526-21.526,21.526     c-11.872,0-21.526-9.665-21.526-21.526V309.46c0-5.867-4.753-10.609-10.609-10.609c-5.071,0-9.294,3.543-10.355,8.286     c-3.14-3.554-6.122-7.161-8.944-10.811c-11.458-14.789-20.051-29.992-25.409-44.803c6.673,1.719,13.569,2.62,20.539,2.62     c44.262,0,80.46-35.233,82.02-79.123c0.032-0.042,0.053-0.085,0.085-0.127c2.886,0.456,5.846,0.69,8.88,0.69     c13.696,0,26.873-4.976,37.122-13.834c17.516,6.047,34.809,14.153,51.497,24.157c16.922,10.153,32.464,21.802,46.214,34.639     c34.544,32.273,55.56,70.403,56.876,102.835L429.248,442.817z M490.782,142.948c0,10.779-8.774,19.553-19.553,19.553     c-10.779,0-19.542-8.774-19.542-19.553l-0.011,0.011V96.82c0-5.856-4.742-10.609-10.609-10.609     c-5.856,0-10.609,4.753-10.609,10.609v160.199c-9.888-16.763-23.054-33.281-39.095-48.781V96.82     c0-27.404,22.301-49.704,49.715-49.704c27.404,0,49.704,22.301,49.704,49.704V142.948z"})]})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M107.259,141.792c-4.986,0-9.018,4.031-9.018,9.018c0,4.976,4.031,9.007,9.018,9.007c4.976,0,9.007-4.032,9.007-9.007    C116.266,145.823,112.235,141.792,107.259,141.792z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M142.619,186.817l-3.299-3.299c-3.734-3.734-9.771-3.734-13.505,0c-3.724,3.724-3.724,9.771,0,13.505l3.31,3.299    c1.857,1.867,4.307,2.801,6.747,2.801s4.891-0.934,6.747-2.801C146.354,196.599,146.354,190.552,142.619,186.817z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M169.599,183.518c-3.724-3.734-9.771-3.734-13.506,0l-3.299,3.31c-3.734,3.724-3.734,9.771,0,13.495    c1.867,1.867,4.307,2.801,6.747,2.801c2.451,0,4.891-0.934,6.758-2.801l3.299-3.299    C173.333,193.289,173.333,187.242,169.599,183.518z"})})}),Object(S.jsx)("g",{id:"SVGCleanerId_1",children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M188.165,141.792c-4.986,0-9.018,4.031-9.018,9.018c0,4.976,4.031,9.007,9.018,9.007c4.976,0,9.007-4.032,9.007-9.007    C197.172,145.823,193.141,141.792,188.165,141.792z"})})}),Object(S.jsx)("g",{id:"SVGCleanerId_2",children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M390.111,287.212c-8.456-15.84-20.614-31.223-36.146-45.726c-12.275-11.469-26.205-21.908-41.397-31.021    c-5.029-3.013-11.543-1.379-14.556,3.639c-3.013,5.029-1.39,11.543,3.639,14.556c13.919,8.349,26.65,17.876,37.832,28.327    c13.622,12.731,24.666,26.64,31.912,40.219c1.91,3.575,5.58,5.612,9.368,5.612c1.687,0,3.395-0.403,4.986-1.252    C390.928,298.808,392.88,292.379,390.111,287.212z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M107.259,141.792c-4.986,0-9.018,4.031-9.018,9.018c0,4.976,4.031,9.007,9.018,9.007c4.976,0,9.007-4.032,9.007-9.007    C116.266,145.823,112.235,141.792,107.259,141.792z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M188.165,141.792c-4.986,0-9.018,4.031-9.018,9.018c0,4.976,4.031,9.007,9.018,9.007c4.976,0,9.007-4.032,9.007-9.007    C197.172,145.823,193.141,141.792,188.165,141.792z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M142.619,186.817l-3.299-3.299c-3.734-3.734-9.771-3.734-13.505,0c-3.724,3.724-3.724,9.771,0,13.505l3.31,3.299    c1.857,1.867,4.307,2.801,6.747,2.801s4.891-0.934,6.747-2.801C146.354,196.599,146.354,190.552,142.619,186.817z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M169.599,183.518c-3.724-3.734-9.771-3.734-13.506,0l-3.299,3.31c-3.734,3.724-3.734,9.771,0,13.495    c1.867,1.867,4.307,2.801,6.747,2.801c2.451,0,4.891-0.934,6.758-2.801l3.299-3.299    C173.333,193.289,173.333,187.242,169.599,183.518z"})})}),Object(S.jsx)("g",{children:Object(S.jsx)("g",{children:Object(S.jsx)("path",{d:"M390.111,287.212c-8.456-15.84-20.614-31.223-36.146-45.726c-12.275-11.469-26.205-21.908-41.397-31.021    c-5.029-3.013-11.543-1.379-14.556,3.639c-3.013,5.029-1.39,11.543,3.639,14.556c13.919,8.349,26.65,17.876,37.832,28.327    c13.622,12.731,24.666,26.64,31.912,40.219c1.91,3.575,5.58,5.612,9.368,5.612c1.687,0,3.395-0.403,4.986-1.252    C390.928,298.808,392.88,292.379,390.111,287.212z"})})}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{}),Object(S.jsx)("g",{})]})},Y=function(){var e=Object(o.g)(),t=Object(n.useContext)(H),c=Object(n.useState)("sebastian"),r=Object(u.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)("123"),l=Object(u.a)(i,2),j=l[0],b=l[1];return Object(S.jsxs)(R.a.section,{id:"login",inital:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[Object(S.jsxs)("form",{onSubmit:function(c){return function(c,n,r){c.preventDefault(),t.login(n,r,(function(){return e.push("/")}))}(c,s,j)},autoComplete:"off",children:[Object(S.jsx)(D,{}),Object(S.jsx)("h2",{children:"Login"}),Object(S.jsx)("input",{type:"text",name:"emailOrUsername",placeholder:"username",className:"field",value:s,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("input",{type:"text",name:"password",placeholder:"password",className:"field",value:j,onChange:function(e){return b(e.target.value)}}),Object(S.jsxs)("div",{className:"buttons flex-row-3-1",children:[Object(S.jsx)("input",{type:"submit",value:"Sign in",className:"btn type-2 primary"}),Object(S.jsx)(L.b,{to:"/register",children:Object(S.jsx)("button",{className:"btn type-2 secondary",children:" Register"})})]})]}),Object(S.jsx)(R.a.div,{className:"svg-container",transition:{duraction:1},initial:{opacity:0},animate:{opacity:1},children:Object(S.jsx)(G,{})})]})},J=function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return console.log("[About] Rendering ..."),Object(S.jsx)(P,{children:function(e){e.username,e.dummy;return Object(S.jsxs)("div",{className:"component",children:[Object(S.jsx)("h1",{children:"About "}),Object(S.jsx)("p",{children:"A simple authentication page"})]})}})}}]),c}(n.Component),q=(n.Component,function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(S.jsxs)("nav",{id:"navigation",children:[Object(S.jsx)(L.b,{to:"/",className:"link",children:"Home"}),Object(S.jsx)(L.b,{to:"/dashboard",className:"link",children:"Dashboard"}),Object(S.jsx)(L.b,{to:"/about",className:"link",children:"About"})]})}}]),c}(n.Component)),K=function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return console.log("[Dashboard] Rendering ..."),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(R.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(S.jsx)(P,{children:function(e){var t=e.username,c=e.dummy;return Object(S.jsxs)("div",{className:"component",children:[Object(S.jsx)("h1",{children:"Dashboard"}),Object(S.jsxs)("p",{children:["You are logged in as: ",JSON.stringify({username:t,dummy:c})]})]})}})})})}}]),c}(n.Component),Q=c(55),X=["component"],Z=function(e){var t=e.component,c=Object(Q.a)(e,X),r=(Object(o.g)(),Object(n.useContext)(H));Object(n.useContext)(_);return console.log(),console.log("[ProtectedRoute]"),console.log("[ProtectedRoute] username:",r.username),console.log("[ProtectedRoute] isAuthenticated:",r.isAuthenticated),console.log(),console.log("Rest"),console.log(c),console.log(),r.isAuthenticated===V.PENDING?Object(S.jsxs)(R.a.div,{inital:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.7},children:[Object(S.jsx)("div",{className:"loader"}),Object(S.jsx)("h1",{children:"Attempting to authenticate session"})]}):r.isAuthenticated===V.UNAUTHENTICATED?Object(S.jsx)(o.a,{to:"/login"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(q,{}),Object(S.jsx)(o.b,Object(z.a)(Object(z.a)({},c),{},{render:function(e){return Object(S.jsx)(t,Object(z.a)({},e))}}))]})},$=function(e){var t=Object(n.useState)(!0),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)([]),o=Object(u.a)(a,2),i=o[0],l=o[1],j=Object(n.useState)({}),b=Object(u.a)(j,2),d=b[0],h=b[1];return Object(n.useEffect)((function(){g.a.get(m+e.path).then((function(e){console.log(typeof e.data,e.data),s(!1),l(e.data)})).catch((function(e){s(!1),h(e)}))}),[]),e.render({isLoading:r,err:d,payload:i})},ee=function(){var e=Object(n.useContext)(H);return Object(S.jsx)(i.a,{children:Object(S.jsx)("section",{id:"home",children:Object(S.jsx)(P,{children:function(t){var c=t.username;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"component",children:Object(S.jsx)("h1",{children:"Home"})}),Object(S.jsxs)("div",{id:"info",className:"component",children:[Object(S.jsxs)("h1",{children:["Username: ",c]}),Object(S.jsx)("h4",{children:"You have a valid token saved in your browser."}),Object(S.jsx)("p",{children:"Passwords are stored in plaintext for demonstration purposes. In production, they're of course encrypted."}),Object(S.jsx)(L.b,{to:"/dashboard",children:Object(S.jsx)("button",{className:"type-2 secondary",children:" Dashboard "})}),Object(S.jsx)(L.b,{to:"/about",children:Object(S.jsx)("button",{className:"type-2 secondary",children:" About "})}),Object(S.jsx)("button",{className:"type-2 secondary",onClick:e.logout,children:" Sign out "})]}),Object(S.jsxs)("div",{id:"registered-users",className:"component",children:[Object(S.jsx)("button",{className:"type-2 secondary",onClick:y,children:" Insert 10 random users "}),Object(S.jsx)("button",{className:"type-2 secondary",onClick:v,children:" Remove all users "}),Object(S.jsx)("p",{children:"Click on a user to remove the user from the database"}),Object(S.jsx)($,{path:"/loginForm/fetchAllDataFromAllUsers",render:function(e){return e.isLoading?Object(S.jsx)("h3",{children:"Data is loading .."}):void 0===e.err?Object(S.jsxs)("h3",{children:["Error: ",JSON.stringify(e)]}):Object(S.jsx)("table",{children:Object(S.jsxs)("tbody",{children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Username"}),Object(S.jsx)("th",{children:"Password"}),Object(S.jsx)("th",{children:"email"})]}),e.payload.map((function(e){return Object(S.jsxs)(R.a.tr,{onClick:function(t){return C(e.username,(function(){return t.target.parentElement.remove()}))},exit:{scale:.2},children:[Object(S.jsx)("td",{children:e.username}),Object(S.jsx)("td",{children:e.unecrypted_password}),Object(S.jsx)("td",{children:e.email})]},e.username)}))]})})}})]})]})}})})})},te=function(){return Object(S.jsxs)("section",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(S.jsx)("button",{className:"type-1 primary",children:"Hello There"}),Object(S.jsx)("button",{className:"type-1 secondary",children:"Hello There"}),Object(S.jsx)("button",{className:"type-2 primary",children:"Hello There"}),Object(S.jsx)("button",{className:"type-2 secondary",children:"Hello There"}),Object(S.jsx)("button",{className:"type-accent",children:"Hello There"})]})},ce=function(){var e=Object(o.h)();return Object(S.jsx)(I,{children:Object(S.jsx)(F,{children:Object(S.jsxs)(i.a,{exitBeforeEnter:!0,initial:!0,children:["  ",Object(S.jsxs)(o.d,{location:e,children:[Object(S.jsx)(Z,{exact:!0,path:"/",component:ee}),Object(S.jsx)(Z,{exact:!0,path:"/about",component:J}),Object(S.jsx)(Z,{exact:!0,path:"/dashboard",component:K}),Object(S.jsx)(o.b,{exact:!0,path:"/blank",component:te}),Object(S.jsx)(o.b,{exact:!0,path:"/register",component:W}),Object(S.jsx)(o.b,{exact:!0,path:"/login",component:Y}),Object(S.jsx)(o.b,{path:"*",component:function(){return"404 Not found"}})]},e.pathname)]})})})};a.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(L.a,{children:Object(S.jsx)(ce,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.5c4f8d1e.chunk.js.map