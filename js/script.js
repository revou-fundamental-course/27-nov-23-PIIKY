//LUAS SEGITIGA
function luasSegitiga() {
    var alas= document.getElementById('alas').value;
    var tinggi= document.getElementById('tinggi').value;
    if(alas == 0 || tinggi == 0) {
        window.alert('Nilai tidak valid!');
        return;
    }
    var hasilLuas= 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerHTML= `Hasil luas segitiga adalah ${hasilLuas}cm`
}

function resetForm() {
    document.getElementById('input-form').reset();
    document.getElementById('hasilLuas').innerHTML= 'Nilai Luas:';
  
}



//KELILING SEGITIGA

function kelilingSegitiga() {
    var sisi1= document.getElementById('sisi1').value;
    var sisi2= document.getElementById('sisi2').value;
    var sisi3= document.getElementById('sisi3').value;
    if(sisi1 == 0 || sisi2 == 0 || sisi3 == 0) {
        window.alert('Nilai tidak valid!');
        return;
    }
    var hasilKeliling= parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
    document.getElementById('hasilKeliling').innerHTML= `Hasil Keliling segitiga adalah ${hasilKeliling}cm`
}

function resetForm2() {
    document.getElementById('input-form2').reset();
    document.getElementById('hasilKeliling').innerHTML= 'Nilai Keliling:';
  
}