
$(function(){'use strict';var rail=$('#WikiaRail'),LAZY_LOADING_SAMPLING_RATIO=10;if(rail.find('.loading').exists()){var params={'articleTitle':window.wgTitle,'namespace':window.wgNamespaceNumber,'cb':window.wgStyleVersion};if(typeof wgSassLoadedScss!='undefined'){params.excludeScss=wgSassLoadedScss;}
$.nirvana.sendRequest({controller:'RailController',method:(window.wgUserName)?'lazy':'lazyForAnons',data:params,type:'get',format:'json',callback:function(data){require(['wikia.loader'],function(loader){loader({type:loader.CSS,resources:data.css});});$('#WikiaRail').find('.loading').remove().end().append(data.railLazyContent+data.js);if(LAZY_LOADING_SAMPLING_RATIO>=Math.floor((Math.random()*100+1))){var lazyLoadingTime=(new Date())-(window.wgNow||0);Wikia.Tracker.track({action:Wikia.Tracker.ACTIONS.IMPRESSION,category:'right-rail',label:'lazy-loaded',trackingMethod:'ga',value:lazyLoadingTime});}
if(window.ChatEntryPoint&&typeof window.wgWikiaChatUsers!=='undefined'){window.ChatEntryPoint.init();}
if(typeof $.fn.timeago!=='undefined'){rail.find('.timeago').timeago();}
if(window.Wikia&&window.Wikia.initRailTracking){Wikia.initRailTracking();}
if(window.AIC2){window.AIC2.init();}
if(window.wgEnableLightboxExt){LightboxLoader.init();LightboxLoader.loadFromURL();}}});}});