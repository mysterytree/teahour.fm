(function(){var e,t;(function(){var e,t,n,r,i,s,o;i=function(){},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],e=window.console||(window.console={});for(t=s=0,o=r.length;0<=o?s<=o:s>=o;t=0<=o?++s:--s)n=r[t],e[n]||(e[n]=i);return!0})(),window.location_pathname=function(){return location.pathname.replace(/index.\w+$/,"")},e=function(){var e;if(Modernizr.audio&&Modernizr.audio.mp3==="")return e=$("audio"),e.replaceWith('<embed src="'+e.find("source").attr("src")+'" autostart=false width=\'80%\' height=30 enablejavascript="true" >')},t=function(){var e;return e={data_track_addressbar:!0,services_compact:"sinaweibo,twitter,facebook,linkedin,email"},$(".icons-share").each(function(t,n){return addthis.button(n,e,{url:window.location.protocol+"//"+window.location.host+$(n).data("url"),title:"[Teahour.fm] "+$(n).data("title")})})},$(function(){return $("<h6/>").html("<a href='#' class='toggle-notes'>More Resources »</a>").insertBefore(".notes"),$(".toggle-notes").click(function(e){var t;return e.preventDefault(),e.stopPropagation(),t=$(this).parent().siblings(".notes"),t.css("display")==="none"?(t.show(),$(this).siblings("p").remove()):(t.hide(),$(this).parent().prepend("<p>...</p>"))}),e(),t(),$("article").find("a").each(function(e,t){return $(t).attr("target","_blank")}),$("li#episodes > ul").niceScroll().hide()})}).call(this);