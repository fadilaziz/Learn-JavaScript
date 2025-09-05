function tambah() {
    const arr = [];
    console.log(arr);

    const dataNama =  document.getElementById('nama').value;
    arr.push(dataNama);
    document.getElementById('nama').value = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    document.getElementById('itemList').innerText = 'Daftar Nama: ' + arr.join(', ');



}




