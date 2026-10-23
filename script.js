document.getElementById('themeToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});
document.getElementById('menuBtn').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('active');
});
function openModal(text){ document.getElementById('modalText').innerText=text; document.getElementById('modal').style.display='flex'; }
function closeModal(){ document.getElementById('modal').style.display='none'; }
