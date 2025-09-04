// Memanggil fungsi tombol Peringatan "Hallo, DOM!"
function tombolPeringatan() {
    alert("Hallo, DOM!");
}

// Memanggil fungsi unutk mengubah "Text Awal"
function ubahText() {
    const ubahText = document.getElementById("text2");
    ubahText.innerHTML = "Teks sudah berubah!";
}

// Fungsi untuk menampilkan teks dari forminput 

function tampilkanTeks() {
    // Mengambil text dari form input
    const inputText = document.getElementById("inputTeks").value;
    const menampilkan = document.getElementById("outputTeks");
    menampilkan.innerHTML = inputText;

}