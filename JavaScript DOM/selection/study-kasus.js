// Ganti Warna 
let gelap = "false";

// Fungsi unutk mengubah warna background dan teks
function gantiTema() {
    const judul = document.getElementById("judul");
    const background = document.getElementById("background");
    const teks = document.getElementById("teks");

        if (gelap) {
            // Mode Gelap
            judul.style.color = "white";
            background.style.backgroundColor = "black";
            teks.style.color = "white";
        } else {
            // Mode Terang
            judul.style.color = "black";
            background.style.backgroundColor = "white";
            teks.style.color = "black";
        }

        gelap = !gelap;

    }
