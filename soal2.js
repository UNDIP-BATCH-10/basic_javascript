/*
Pada tugas ini kamu diminta untuk merubah sebuah kalimat dan menampilkan setiap inisial dari kata tersebut. Kemudian sambungkan dengan memberikan titik diantara inisialnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini
*/

let first = 'Raul Lemos';
let second = 'Raffi Ahmad';
let third = 'Andrea Pirlo';

let jawabanFirstWord  = first[0] + `.` +first[5]
let jawabanSecondWord = first[0] + `.` +first[6]
let jawabanThirdWord  = first[0] + `.` +first[7]

console.log('First Word: ' + jawabanFirstWord); //First Word: R.L
console.log('Second Word: ' + jawabanSecondWord); //Second Word: R.A
console.log('Third Word: ' + jawabanThirdWord); //Third Word: N.B

// function asd (kalimat) {
//     let singkatannya=''
//     for(let i=0;i<kalimat.length;i++){
       
//         if(kalimat[i]==kalimat[i].toUpperCase() && kalimat[i] != ' '){
            
//             singkatannya+=kalimat[i]+'.'
//         }
//     }
//     return singkatannya.slice(0, -1)
// }

// console.log(asd(first))