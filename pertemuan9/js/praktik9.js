// soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").
        innerText = "Luas : " + luas + "cm², keliling : " + keliling + "cm²";
    }else{
        document.getElementById("lingkaranOutput").
        innerText = "masukan jari-jari yang validasi";
    }
}

// soal 2
function hitungDuit(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilDuit").innerText =
        "Nilai : $ " + dollar.toFixed(2);
     } else {
        document.getElementById("hasilDuit").innerText =
        "Masukan Nilai yang valid !!"
     }
}

// soal 3
function hitungPenjumlahan() {
    // Get values from the input fields
    var bilangan1 = document.getElementById('biL1').value;
    var bilangan2 = document.getElementById('biL2').value;
    
    // Convert the values to numbers
    bilangan1 = parseFloat(bilangan1);
    bilangan2 = parseFloat(bilangan2);

    // Check if both values are numbers
    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        // Calculate the sum
        var hasil = bilangan1 + bilangan2;

        // Display the result in the 'hasilJumlah' paragraph
        document.getElementById('hasilJumlah').textContent = 'Hasil Jumlah: ' + hasil;
    } else {
        // Handle invalid input
        document.getElementById('hasilJumlah').textContent = 'Harap masukkan angka yang valid.';
    }
}

