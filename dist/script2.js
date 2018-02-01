const vars={
    photo: document.querySelectorAll(".blog-photo"),
    title: document.querySelectorAll(".blog-title"),
    text: document.querySelectorAll(".blog-text")
}

/*var link="http://localhost/p25b/news.json";
$.getJSON(link, function(data) {
    console.log(data);
    console.log(data[0].title);
    var nuotrauka = `<img src='${data[0].url}'></img>`;
    var pavadinimas = `<h2>${data[0].title}</h2>`;
    var tekstas = `<p>${data[0].text}</p>`;
    vars.photo.insertAdjacentHTML("beforeend", nuotrauka);
    vars.title.insertAdjacentHTML("beforeend", pavadinimas);
    vars.text.insertAdjacentHTML("beforeend", tekstas);
});
*/
var link="http://localhost/p25b/news.json";
$.getJSON(link, function(data) {
    for(x=0; x<vars.photo.length; x++){
        var nuotrauka = `<img src='${data[x].url}'></img>`;
        var pavadinimas = `<h2>${data[x].title}</h2>`;
        var tekstas = `<p>${data[x].text}</p>`;
        vars.photo[x].insertAdjacentHTML("beforeend", nuotrauka);
        vars.title[x].insertAdjacentHTML("beforeend", pavadinimas);
        vars.text[x].insertAdjacentHTML("beforeend", tekstas);
    }
});
