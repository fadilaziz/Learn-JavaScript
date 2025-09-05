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

const kotakMerah = document.querySelector('input[name="range-red"]');
const indikatorAngkaMerah = document.getElementsByClassName('indikator-red')[0].getElementsByTagName('p')[0];
const kotakHijau = document.querySelector('input[name="range-green"]');
const indikatorAngkaHijau = document.getElementsByClassName('indikator-green')[0].getElementsByTagName('p')[0];
const kotakBiru = document.querySelector('input[name="range-blue"]');
const indikatorAngkaBiru = document.getElementsByClassName('indikator-blue')[0].getElementsByTagName('p')[0];
kotakMerah.addEventListener('input', function() {
    indikatorAngkaMerah.innerText = kotakMerah.value;
} )
kotakHijau.addEventListener('input', function() {
    indikatorAngkaHijau.innerText = kotakHijau.value;
} )
kotakBiru.addEventListener('input', function() {
    indikatorAngkaBiru.innerText = kotakBiru.value;
} )

// const tombolWarna = document.getElementById('tombolWarna');

tombolWarna.addEventListener('change', function() {
    const body = document.body;
    body.style.backgroundColor = 'rgb(' + kotakMerah.value + ',' + kotakHijau.value + ',' + kotakBiru.value + ')';
} )
