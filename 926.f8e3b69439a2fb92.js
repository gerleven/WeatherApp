"use strict";(self.webpackChunkWeather=self.webpackChunkWeather||[]).push([[926],{5926:(P,i,r)=>{r.r(i),r.d(i,{WeatherModule:()=>y});var l=r(6895),p=r(9651),t=r(8256);let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alerts-page"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"alerts-page works!"),t.qZA())}}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cities-page"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"cities-page works!"),t.qZA())}}),e})();var s=(()=>{return(e=s||(s={})).success="success",e.info="info",e.warning="warn",e.error="error",s;var e})(),m=r(8505),g=r(529);let f=(()=>{class e{constructor(n){this.httpClient=n,this.apiKey="b70c09c7012c40b88c45aa7daf0ee288"}GetCoordinatesByName(n,a){return this.httpClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=${n}&limit=${a}&appid=${this.apiKey}`).pipe((0,m.b)(b=>{},b=>{}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=r(5565),C=r(5593),v=r(1080);const S=[{path:"",redirectTo:"search",pathMatch:"full"},{path:"search",component:(()=>{class e{constructor(n,a){this.weatherService=n,this.notificationService=a,this.response={}}ngOnInit(){}test(){this.weatherService.GetCoordinatesByName("Santa Fe,AR",1).subscribe(n=>{this.response=n},n=>{})}test2(){}test3(){this.notificationService.ShowNotification({severity:s.success,message:"Success test from search page",details:"details..."})}test4(){this.notificationService.ShowNotification({severity:s.error,message:"Error test from search page",details:"details..."})}showSuccess(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f),t.Y36(d.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-page"]],decls:6,vars:0,consts:[["label","Call Api",3,"onClickAction"],["label","Check response",3,"onClickAction"],["type","button","pButton","","pRipple","","label","Test Success toast",1,"p-button-success",3,"click"],["type","button","pButton","","pRipple","","label","Test Error toast",1,"p-button-danger",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"search-page works!"),t.qZA(),t.TgZ(2,"app-custom-button",0),t.NdJ("onClickAction",function(){return a.test()}),t.qZA(),t.TgZ(3,"app-custom-button",1),t.NdJ("onClickAction",function(){return a.test2()}),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return a.test3()}),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return a.test4()}),t.qZA())},dependencies:[C.Hq,v.x]}),e})()},{path:"cities",component:h},{path:"alerts",component:u}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(S),p.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,A]}),e})()}}]);