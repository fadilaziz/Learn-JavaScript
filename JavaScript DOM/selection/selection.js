// DOM Selection 

let merah = "merah";
function tombol() {
    const judul = document.getElementById("judul");
    if (merah) {
        judul.style.color = "red";
    } else {
        judul.style.color = "black";
    }
    merah = !merah;
}

// Di panggil dengan menggunakan TagName 
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "#ccc";
}
