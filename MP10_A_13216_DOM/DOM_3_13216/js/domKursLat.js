
function init() {
    document.getElementById("hasil").innerHTML = "0";
}

function hitungKurs(id) {
    var rupiah = parseFloat(document.getElementById(id).value);
    var kurs = 16000;
    var dollar = rupiah / kurs;

    document.getElementById("hasil").innerHTML = dollar.toFixed(2);

    var riwayat = document.getElementById("riwayat");

    var list = document.createElement("li");

    var catatan = document.createTextNode(
        "Rp" + rupiah + " = US$" + dollar.toFixed(2)
    );

    list.appendChild(catatan);
    riwayat.appendChild(list);
}
