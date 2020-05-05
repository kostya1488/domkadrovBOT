var btn = document.getElementById('btn');
btn.addEventListener('click', () => {

    var formData = new FormData();

    formData.append("rf", "http://domkadrov.ua/");
    formData.append("enter_email", "escort_rabota69@ukr.net");
    formData.append("password", "x2KebRhvbs3");
    formData.append("password2", "Пароль");
    formData.append("remember_me", "yes");
    formData.append("submit", "Войти");

    var request = new XMLHttpRequest();
    request.open("POST", "http://domkadrov.ua/login");
    request.send(formData);
    console.log(request.response)
    console.log(request.responseText)

})