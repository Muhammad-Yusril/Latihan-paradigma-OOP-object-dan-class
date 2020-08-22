//Muhammad Yusril RPL XI 3
//Latihan Class dan Object menggunakan JavaScript 

//Membuat Class
class Handphone{

    //menetaptkan nilai awal pada property dengan method Constructor
    // 'this' merujuk pada instance dari class Handphone
    constructor(brand, type){
        this.brand = brand;
        this.type = type;
        this.activeState = false; 
    }

    //Method untuk menyalakan Handphone
    turnOn() {
        console.log("Handphone dinyalakan");
        this.activeState = true;
    }

    //Method untuk mematikan Handphone
    turnOff(){
        console.log("Handphone dimatikan");
        this.activeState = false;
    }

    //Method untuk memberikan info objek
    infoHandphone(){s
        //Menggunakan Template Literals untuk menampilkan nilai Property
        console.log(`Merk Handphone: ${this.brand}`);
        console.log(`Tipe Handphone: ${this.type}`);
        console.log(`Sedang aktif: ${this.activeState}`);
    }

}

//Membuat instance dari class

const HandphoneJohn = new Handphone("Vivo", "RealMe");

//Menampilkan Object secara keseluruhan
console.log(HandphoneJohn);

//Menampilkan satu property object
console.log(HandphoneJohn.brand);

//Menjalankan Method dari class
HandphoneJohn.infoHandphone();

//Membuat instance object lainnya
const HandphoneJane = new Handphone("Vivo", "RealMe");

//Menyalakan Handphone jane
HandphoneJane.turnOn();

HandphoneJane.infoHandphone();

HandphoneJane.turnOff();
console.log(HandphoneJane.activeState);