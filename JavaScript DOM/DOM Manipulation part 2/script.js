//Membuat Tag yang akan diiisi 
const pBaru = document.createElement("p");
// Membuat text yang akan di masukan ke tag p
const textpBaru = document.createTextNode("Paragrat Baru 1");

// simpan tulisan ke dalam paragraft
pBaru.appendChild(textpBaru);

// Menyisipkan paragraf baru ke dalam section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



const liBaru = document.createElement("li");
const textliBaru = document.createTextNode("Item li Baru");

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

liBaru.appendChild(textliBaru);
ul.insertBefore(liBaru, li2);



// mengganti / Replace 
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const texth2Baru = document.createTextNode("Judul Baru!!!");

h2Baru.appendChild(texth2Baru);
sectionB.replaceChild(h2Baru, p4);

h2Baru.style.color = "blue";
