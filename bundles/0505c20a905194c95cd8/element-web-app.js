(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1453:function(e,o,n){"use strict";n.r(o),n.d(o,"loadApp",(function(){return C}));var t=n(86),i=n.n(t),r=n(89),a=n(112),s=n(87),l=n(270),c=n(253),d=n(302),u=n(91),f=n(97),g=n(25),w=n(150);window.React=i.a;let h=null;function p(e){const o=Object(g.b)(e);return{screen:o.location.substring(1),params:o.params}}function _(e){decodeURIComponent(window.location.hash)!==h&&function(e){if(!window.matrixChat)return;console.log("Routing URL ",e.href);const o=p(e);window.matrixChat.showScreen(o.screen,o.params)}(window.location)}function m(e,o=!1){console.log("newscreen "+e);const n="#/"+e;h=n,o?window.location.replace(n):window.location.assign(n)}function v(e){let o;o="vector:"===window.location.protocol?"https://app.element.io/#/register":window.location.protocol+"//"+window.location.host+window.location.pathname+"#/register";const n=Object.keys(e);for(let t=0;t<n.length;++t){o+=0===t?"?":"&";const i=n[t];o+=i+"="+encodeURIComponent(e[i])}return o}function b(){const e=new URL(window.location.href);e.searchParams.delete("loginToken"),console.log(`Redirecting to ${e.href} to drop loginToken from queryparams`),window.history.replaceState(null,"",e.href)}async function C(e){const o=document.body.dataset.vectorIndexeddbWorkerScript;if(!o)throw Object(s.h)(Object(s.b)("Missing indexeddb worker script!"));u.a.setIndexedDbWorkerScript(o),window.addEventListener("hashchange",_);const n=a.a.get(),t=Object(g.a)(window.location),h=window.location.protocol+"//"+window.location.host+window.location.pathname;console.log("Vector starting at "+h),n.startUpdater();const C=await async function(){let e;try{console.log("Verifying homeserver configuration");const o=f.a.get();let n=o.default_server_config;const t=o.default_server_name,i=o.default_hs_url,r=o.default_is_url,a=[n,t,i].filter(e=>!!e);if(a.length>1)throw Object(s.h)(Object(s.b)("Invalid configuration: can only specify one of default_server_config, default_server_name, or default_hs_url."));if(a.length<1)throw Object(s.h)(Object(s.b)("Invalid configuration: no default server specified."));i&&(console.log("Config uses a default_hs_url - constructing a default_server_config using this information"),console.warn("DEPRECATED CONFIG OPTION: In the future, default_hs_url will not be accepted. Please use default_server_config instead."),n={"m.homeserver":{base_url:i}},r&&(n["m.identity_server"]={base_url:r}));let d=null;n&&(console.log("Config uses a default_server_config - validating object"),d=await c.a.fromDiscoveryConfig(n)),t&&(console.log("Config uses a default_server_name - doing .well-known lookup"),console.warn("DEPRECATED CONFIG OPTION: In the future, default_server_name will not be accepted. Please use default_server_config instead."),d=await c.a.findClientConfig(t)),e=l.b.buildValidatedConfigFromDiscovery(t,d,!0)}catch(o){const{hsUrl:n,isUrl:t,userId:i}=await d.c();if(!n||!i)throw o;console.error(o),console.warn("A session was found - suppressing config error and using the session's homeserver"),console.log("Using pre-existing hsUrl and isUrl: ",{hsUrl:n,isUrl:t}),e=await l.b.validateServerConfigWithStaticUrls(n,t,!0)}return e.isDefault=!0,console.log("Using homeserver config:",e),console.log("Updating SdkConfig with validated discovery information"),f.a.add({validated_server_config:e}),f.a.get()}(),[U]=await d.b(),y=!!U,O=!!t.loginToken,k=!0===C.sso_immediate_redirect;if(!y&&!O&&k){console.log("Bypassing app load to redirect to SSO");const e=Object(w.createClient)({baseUrl:C.validated_server_config.hsUrl,idBaseUrl:C.validated_server_config.isUrl});return void a.a.get().startSingleSignOn(e,"sso","/"+p(window.location).screen)}const D=r.getComponent("structures.MatrixChat");return i.a.createElement(D,{onNewScreen:m,makeRegistrationUrl:v,config:C,realQueryParams:t,startingFragmentQueryParams:e,enableGuest:!C.disable_guests,onTokenLoginCompleted:b,initialScreenAfterLogin:p(window.location),defaultDeviceDisplayName:n.getDefaultDeviceDisplayName()})}}}]);
//# sourceMappingURL=element-web-app.js.map