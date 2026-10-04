const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('mobile-navigation');
if(toggle&&menu){
  const close=()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Открыть меню');toggle.querySelector('span').textContent='☰'};
  toggle.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');toggle.querySelector('span').textContent=open?'×':'☰'});
  menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',close));
}
