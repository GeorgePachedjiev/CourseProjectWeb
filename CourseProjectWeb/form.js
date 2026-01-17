document.getElementById("testDriveForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Вземаме стойностите от формата
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let model = document.getElementById("model").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("formMessage");

    // Регулярно изразяване за парола
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Регулярно изразяване за email (основна проверка)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Проверка дали всички полета са попълнени
    if (!firstName || !lastName || !email || !password || !model || !date) {
        message.textContent = "Моля, попълнете всички полета.";
        message.style.color = "red";
        return;
    }

    // Проверка на email
    if (!emailRegex.test(email)) {
        message.textContent = "Моля, въведете валиден имейл адрес.";
        message.style.color = "red";
        return;
    }

    // Проверка на паролата
    if (!passwordRegex.test(password)) {
        message.textContent = "Паролата трябва да съдържа главна, малка буква, цифра и символ.";
        message.style.color = "red";
        return;
    }

    // Ако всичко е валидно
    message.textContent = "Заявката за тест драйв е изпратена успешно!";
    message.style.color = "green";

    // Изчистване на формата
    this.reset();
});
