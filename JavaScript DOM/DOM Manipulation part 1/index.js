function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == 'fadil' && password == '123') {
        alert('Login Berhasil');
    } else {
        alert('Login Gagal');
    }
}

