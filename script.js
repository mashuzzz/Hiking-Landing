document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Выводим данные в консоль (для тестирования)
    console.log('Form submitted:', { name, email, message });
    
    // Показываем уведомление
    alert('Спасибо за ваше сообщение, ' + name + '! Мы свяжемся с вами скоро.');
    
    // Очищаем форму
    this.reset();
});

// Плавная прокрутка для навигации
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение
        const targetId = this.getAttribute('href'); // Получаем ID секции
        const targetElement = document.querySelector(targetId); // Находим элемент
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
        }
    });
});