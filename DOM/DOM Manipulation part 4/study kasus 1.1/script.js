const ubahWarna = document.getElementById('ubahWarna');

ubahWarna.addEventListener('click', function() {
    document.body.classList.toggle('biru-muda');
})


const tombolAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tombolAcakWarna.appendChild(teksTombol);
tombolAcakWarna.setAttribute('type', 'button');
ubahWarna.after(tombolAcakWarna);

tombolAcakWarna.addEventListener('click', function() {
    const random = Math.random() * 10 + 1;
    console.log(random);
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = ('rgb(' + r + ',' + g + ',' + b + ')');
})

