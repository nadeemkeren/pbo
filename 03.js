class Mahasiswa {
  constructor(nama, nim, jurusan) {

this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
 }

belajar() {
  console.log(`${this.nama} sedang belajar.`);
 }
}

let msh1 =new Mahasiswa("ahmad", 1234, `informatika`)
msh1.belajar()

let msh2 = new Mahasiswa(`cala`, 5646456, `psikologi`)
msh2.belajar()

let msh3 = new Mahasiswa(`wawan`, 1436, `kekerenan`)
msh3.belajar()
