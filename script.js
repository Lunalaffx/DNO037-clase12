//El scroll
var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});
//La API
fetch("https://sheet.best/api/sheets/b91e68d3-afbb-4363-b19f-6bad15d0d0de")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    var portfolio = data;
    portfolio.forEach(function (trabajo) {
        if (trabajo.tipo.includes("saludo")) {
        especialidad = ' data-especialidad="grafica" ';
        } else {
        especialidad = ' data-especialidad="otra" ';
        }
        document.getElementById("portfolio").innerHTML +=
            '<div class="col-sm-6 col-lg-4 col-xxl-3"'+
            especialidad
            +'><div class="card shadow-sm"><img src="' +
            trabajo.image +
            '" class="card-img-top" alt="' +
            trabajo.title +
            '"><div class="card-body"><h5 class="card-title">' +
            trabajo.title +
            '</h5><p class="card-text">' +
            trabajo.text +
            "</p></div></div></div>";
        });
    })
.catch((err) => {
    document.querySelector('section').innerHTML = '<h1>Algo salió mal. Por favor, vuelve a inicio. <a href="index.html"></a></h4>';
                        document.body.style.backgroundPosition = 'bottom right';
                        document.body.style.backgroundImage = 'url("https://picsum.photos/id/237/200")';
                        document.body.style.backgroundRepeat = 'no-repeat';
                        document.body.style.backgroundSize = 'auto 90%';
});
