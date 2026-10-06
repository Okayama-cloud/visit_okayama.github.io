(function(){
  var bar=document.querySelector('.progress');
  var pars=[].slice.call(document.querySelectorAll('[data-par]'));
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var queued=false;
  function update(){
    queued=false;
    var h=document.documentElement;
    var max=h.scrollHeight-innerHeight;
    bar.style.transform='scaleX('+(max>0?Math.min(scrollY/max,1):0)+')';
    if(still)return;
    pars.forEach(function(img){
      var r=img.parentNode.getBoundingClientRect();
      if(r.bottom<0||r.top>innerHeight)return;
      var p=(r.top+r.height/2-innerHeight/2)/innerHeight;
      var lim=r.height*.09;
      var y=Math.max(-lim,Math.min(lim,-p*r.height*.16));
      img.style.transform='translate3d(0,'+y.toFixed(1)+'px,0)';
    });
  }
  function queue(){if(!queued){queued=true;requestAnimationFrame(update);}}
  addEventListener('scroll',queue,{passive:true});
  addEventListener('resize',queue);
  update();
})();

document.querySelectorAll('.place[aria-expanded]').forEach(function(b){
  b.addEventListener('click',function(){
    var s=b.parentNode,o=s.classList.toggle('open');
    b.setAttribute('aria-expanded',o);
  });
});
