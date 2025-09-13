//Type Data
let numberdata = -1.4;
let stringData = "sadfahduaewdew";
let arrayData = [1,2,3, ' ini string'];
let booleanData = true; //false
let objectdata = {
    name : "udin",
    age : 20,
    address : "indonesia"
}

console.log(1 + "1");


//Function 
function nameFunc (a,b) {
    console.log(a + b);
}

nameFunc(1,2);

//fungsi Tambah
function iniTambah (a,b) {
    console.log(a + b);
}

nameFunc(1,2);

//fungsi Kurang
function iniKurang (a,b) {
    console.log(a + b);
}

nameFunc(1,2);

//Method
const objKu =  {
    name : 'fadil',
    kelas : 18,
    iniMethod : function() {
        console.log('Hello World');
    },
}

//Ini memanggil function dan akan di jalankan
objKu.iniMethod;


//
function iniButuhParams(namamu = 'ini default') {
    namamu = 'ini Default aja'
}

iniButuhParams()

