const btnToggle = document.querySelector('.btn-toggle'); 
const body = document.body;

btnToggle.addEventListener('click', () => {
    
    body.classList.toggle('dark');
    body.classList.toggle('light');

    if (body.classList.contains('dark')) {
        btnToggle.innerHTML = "Go Light";  
    } else {
        btnToggle.innerHTML = "Go Dark";  
    }
});