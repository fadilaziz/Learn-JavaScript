const container = document.querySelectorAll("#container");
const hapus = document.getElementsByClassName("hapus");

for (let i = 0; i < container.length; i++)  {
    hapus[i].addEventListener("click", function() {
        container[i].style.display = "none";
    })
}


