const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thum');
console.log(container);

container.addEventListener('click', function(e) {
    //Cek apakah thum diklik
    if (e.target.className == 'thum') {
        //Mengganti value dari atribut src
        jumbo.src = e.target.src;
        //Animation / manembahkan atribut fade 
        jumbo.classList.add('fade');
        //setelah 0.5 detik atribut fade akan di hapus
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500); //500 mewakili 0.5 detik
        //menambahakan atribute active
        
        thumbs.forEach(function(thumb) {
            // if (thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thum';
        });
        e.target.classList.add('active'); // menabahkan efek redup
    }
});