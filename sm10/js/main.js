document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Получаем значения из полей
    var name = document.getElementById("name").value;
    var birthYear = document.getElementById("birthYear").value;

    // Проверка имени на пустоту и минимальное количество символов (минимум 2)
    if (name.trim() === '' || name.length < 2) {
        document.getElementById("name").classList.add("error");
        document.getElementById("errorText").textContent = "Поле 'Имя' должно содержать минимум 2 символа.";
    } else {
        document.getElementById("name").classList.remove("error");
        document.getElementById("errorText").textContent = "";

        // Проверка года рождения на длину (ровно 4 символа) и возраст (не менее 18 лет)
        if (birthYear.length !== 4 || isNaN(birthYear) || (new Date().getFullYear() - birthYear) < 18) {
            document.getElementById("birthYear").classList.add("error");
            document.getElementById("errorText").textContent = "Поле 'Год рождения' должно быть четырёхзначным числом и соответствовать возрасту 18 лет и старше.";
        } else {
            document.getElementById("birthYear").classList.remove("error");
            document.getElementById("errorText").textContent = "";

            // Если нет ошибок, выводим ссылку на сайт клуба
            document.getElementById("clubLink").innerHTML = '<a href="https://club.z-go.ru">Перейти на сайт клуба</a>';
        }
    }
});