/* di ketahui usia ayah dan anak saat ini
 buatlah sebuah fungsi untuk menghitung  berapa tahun yang lalu kah usia ayah 2x usia anaknya
*/

function duaKaliUsia(ayah, anak) {
    // your code here
    var usia = 0;
    while(anak*2 !== ayah) {
        ayah--;
        anak--;
        usia++;
    }
    return usia;
  }


console.log(duaKaliUsia(55,30)) //5
console.log(duaKaliUsia(27,17)) //7
console.log(duaKaliUsia(90,50)) //10
console.log(duaKaliUsia(65,40)) //15
console.log(duaKaliUsia(108,76)) //44
