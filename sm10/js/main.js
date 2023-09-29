document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Очищаем предыдущие ошибки
    document.getElementById("name").classList.remove("error");
    document.getElementById("errorText").textContent = '';
    document.getElementById("birthYear").classList.remove("error");
    document.getElementById("birthYearErrorText").textContent = '';

    // Получаем значения из полей
    var name = document.getElementById("name").value;
    var birthYear = document.getElementById("birthYear").value;

    // Флаги для ошибок
    var nameError = false;
    var birthYearError = false;

    // Проверка имени на пустоту и минимальное количество символов (минимум 2)
    if (name.trim() === '') {
        document.getElementById("name").classList.add("error");
        document.getElementById("errorText").textContent = "Поле 'Имя' не может быть пустым.";
        nameError = true;
    } else if (name.length < 2) {
        document.getElementById("name").classList.add("error");
        document.getElementById("errorText").textContent = "Поле 'Имя' должно содержать минимум 2 символа.";
        nameError = true;
    }

    // Проверка года рождения на длину (ровно 4 символа) и возраст (не менее 18 лет)
    if (birthYear.trim() === '') {
        document.getElementById("birthYear").classList.add("error");
        document.getElementById("birthYearErrorText").textContent = "Поле 'Год рождения' не может быть пустым.";
        birthYearError = true;
    } else if (birthYear.length !== 4 || isNaN(birthYear) || (new Date().getFullYear() - birthYear) < 18) {
        document.getElementById("birthYear").classList.add("error");
        document.getElementById("birthYearErrorText").textContent = "Поле 'Год рождения' должно быть четырёхзначным числом и соответствовать возрасту 18 лет и старше.";
        birthYearError = true;
    }

    // Если нет ошибок, выводим ссылку на сайт клуба
    if (!nameError && !birthYearError) {
        document.getElementById("clubLink").innerHTML = '<a href="https://club.z-go.ru">Перейти на сайт клуба</a>';
    } else {
        document.getElementById("clubLink").innerHTML = '';  // Скрываем ссылку при наличии ошибок
    }
});