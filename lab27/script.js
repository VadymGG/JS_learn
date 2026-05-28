const table = document.getElementById('tech-table');
table.addEventListener('click', (event) => {

    const cell = event.target.closest('td');

    if (!cell) return;
    document.querySelectorAll('#tech-table td').forEach(td => td.classList.remove('active'));


    cell.classList.add('active');
    console.log(`Клікнуто по: ${cell.textContent}`);
});