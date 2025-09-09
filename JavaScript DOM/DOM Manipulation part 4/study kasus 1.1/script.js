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


const sMerah = document.querySelector('input[name=range-red]');
const sHijau = document.querySelector('input[name=range-green]');
const sBiru = document.querySelector('input[name=range-blue]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    console.log(r);
    document.body.style.backgroundColor = ('rgb(' + r + ',100,100)');
})

sHijau.addEventListener('input', function() {
    const g = sHijau.value;
    console.log(g);
    document.body.style.backgroundColor = ('rgb(100,' + g + ',100)');
})

sBiru.addEventListener('input', function() {
    const b = sBiru.value;
    console.log(b);
    document.body.style.backgroundColor = ('rgb(100,100,' + b + ')');
})
