(function(){
  var list=(window.COLUMNS||[]).slice().sort(function(a,b){return a.date<b.date?1:-1;});
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function safe(u){return /^\s*javascript:/i.test(u)?'':u;}
  function dt(d){return String(d).replace(/-/g,'.');}
  function body(t){
    return String(t).trim().split(/\n\s*\n/).map(function(b){
      b=b.trim();var m;
      if((m=b.match(/^## (.+)$/)))return '<h2>'+esc(m[1])+'</h2>';
      if((m=b.match(/^!\[(.*?)\]\((.+?)\)$/)))return '<figure><img src="'+esc(safe(m[2]))+'" alt="'+esc(m[1])+'" loading="lazy" decoding="async">'+(m[1]?'<figcaption>'+esc(m[1])+'</figcaption>':'')+'</figure>';
      if(b.indexOf('> ')===0)return '<blockquote>'+esc(b.replace(/^> ?/gm,'')).replace(/\n/g,'<br>')+'</blockquote>';
      return '<p>'+esc(b).replace(/\n/g,'<br>')+'</p>';
    }).join('\n');
  }
  var page=document.body.getAttribute('data-page');
  if(page==='list'){
    var el=document.getElementById('list');
    el.innerHTML=list.length?list.map(function(a){
      return '<a class="place" href="article.html?id='+encodeURIComponent(a.id)+'"><span class="placeName">'+esc(a.title)+'</span><span class="placeDesc">'+esc((a.tag?a.tag+' · ':'')+dt(a.date))+'</span></a>';
    }).join(''):'<p class="empty">Nothing yet.</p>';
  }
  if(page==='article'){
    var id=new URLSearchParams(location.search).get('id');
    var i=list.findIndex(function(a){return a.id===id;});
    var root=document.getElementById('article');
    if(i<0){root.innerHTML='<header class="artHead"><h1>Not found.</h1></header><p class="prose"><a class="ig" href="column.html">Back to Column</a></p>';return;}
    var a=list[i],newer=list[i-1],older=list[i+1];
    document.title=a.title+' — Visit Okayama';
    document.documentElement.lang=a.lang||'en';
    var d=document.querySelector('meta[name="description"]');
    var first=String(a.body).trim().split(/\n\s*\n/)[0].replace(/\s+/g,' ');
    if(d)d.setAttribute('content',first.slice(0,140));
    root.innerHTML='<header class="artHead"><p class="meta"><a class="ig" href="column.html">Column</a>'+(a.tag?' / '+esc(a.tag):'')+' / '+esc(dt(a.date))+'</p><h1>'+esc(a.title)+'</h1></header>'
      +(a.cover?'<div class="frame"><img src="'+esc(safe(a.cover))+'" alt="" decoding="async"></div>':'')
      +'<div class="prose">'+body(a.body)+'</div>'
      +'<nav class="artNav" aria-label="Other columns"><div>'+(newer?'<a href="article.html?id='+encodeURIComponent(newer.id)+'"><small>Newer</small><b>'+esc(newer.title)+'</b></a>':'')+'</div><div class="next">'+(older?'<a href="article.html?id='+encodeURIComponent(older.id)+'"><small>Older</small><b>'+esc(older.title)+'</b></a>':'')+'</div></nav>';
  }
})();
