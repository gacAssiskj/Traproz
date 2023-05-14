$("#openLB").on("mousedown","",showLightBox);

function showLightBox() {
     $("#pageOverLay-shadow").css("visibility", "visible");
     $("#pageOverLay").css("visibility", "visible");

 }

 $("#pageOverLayCloseBtn").on("mousedown","",pageOverLayClose);

 function pageOverLayClose() {
     $("#pageOverLay-shadow").css("visibility", "hidden");
     $("#pageOverLay").css("visibility", "hidden");
 }
 var disqus_shortname = 'slickcarousel';

 (function () {
     var dsq = document.createElement('script');
     dsq.type = 'text/javascript';
     dsq.async = true;
     dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
 })();