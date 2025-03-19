const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const { ifError } = require("assert");
const rl = readline.createInterface({ input, output });

const products = [];

// tampilkan menu
function showMenu() {
  console.log("\n==== CRUD produk ====");
  console.log("1. Tambah produk");
  console.log("2. Lihat semua produk");
  console.log("3. Update produk");
  console.log("4. Hapus produk");
  console.log("5. Keluar");

  rl.question("Pilih menu: ", (choice) => {
    switch (choice) {
      case "1":
        addProduct();
        break;
      case "2":
        showProduct();
        break;
      case "3":
        updateProduct();
        break;
      case "4":
        deleteProduct();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Pilihan tidak ada di menu!!!");
        return;
    }
  });
}

// tambah produk
function addProduct() {
  rl.question("Tambah produk: ", (name) => {
    const Id = Number(products.length + 1);
    products.push({ id: Id, name });
    console.log(`${name} berhasil ditambahkan!`);
    showMenu();
  });
}

// lihat semua produk
function showProduct() {
  if (products.length === 0) {
    console.log("Belum ada produk!");
  } else {
    console.log("===============");
    console.log(" Daftar produk");
    console.log("===============");
    products.forEach((item) => {
      console.log(`${item.id}. ${item.name}`);
    });
  }
  showMenu();
}

// update produk
function updateProduct() {
  rl.question("Masukkan id yang ingin id update: ", (id) => {
    const Id = Number(id);
    const index = products.findIndex((item) => item.id === Id);

    if (index !== -1) {
      rl.question("Masukkan produk baru: ", (newName) => {
        products[index].name = newName;
        console.log("Produk berhasil diupdate!");
        showMenu();
      });
    } else {
      console.log("ID tidak ditemukan");
      showMenu();
    }
  });
}

// hapus produk
function deleteProduct() {
  rl.question("Masukkan ID produk yang ingin dihapus:", (id) => {
    const Id = Number(id);
    const index = products.findIndex((item) => item.id === Id);

    if (index !== -1) {
      const name = products[index].name;
      products.splice(index, 1);
      console.log(`${name} berhasil dihapus`);
      showMenu();
    } else {
      console.log("Id tidak ditemukan");
      showMenu();
    }
  });
}

showMenu();
