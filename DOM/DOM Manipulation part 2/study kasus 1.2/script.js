// fungsi untuk menambahkan teks ke dalam  teks ul
function tambahkanTeks() {
    // Menacri element ul
    const ul = document.getElementById("itemList")
    // membuat element baru yang akan di masukan ke dalam ul
    const liBaru = document.createElement('li');
    // Mengambil teks input dan akan di yuampikan di dalam tag li
    const inputTeks = document.getElementById("inputText").value;

    // Pengkondisian apabila formnya kosng
    if (inputTeks == "") {
        alert("Input tidak boleh kosong!");
    } else { 
        //dan bila form tidak kosong | akan menjalankan ststemen ke-2 
        liBaru.textContent = inputTeks;
        alert("Teks berhasil ditambahkan!");
        ul.appendChild(liBaru);
    }
    // reset form input
    document.getElementById("inputText").value = "";

}