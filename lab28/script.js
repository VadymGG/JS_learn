const counterDisplay = document.getElementById('views-count');
const resetBtn = document.getElementById('reset-btn');
let views = localStorage.getItem('page_views') || 0;

views = Number(views) + 1;
localStorage.setItem('page_views', views);
counterDisplay.textContent = views;

resetBtn.addEventListener('click', () => {
    localStorage.removeItem('page_views');
    counterDisplay.textContent = 0;
});