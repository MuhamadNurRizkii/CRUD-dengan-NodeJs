// const readline = require("readline");
import chalk from "chalk";
import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const products = [];

// tampilkan menu
function showMenu() {
  console.log(chalk.green("\n==== CRUD produk ===="));
  console.log(chalk.green("1. Tambah produk"));
  console.log(chalk.green("2. Lihat semua produk"));
  console.log(chalk.green("3. Update produk"));
  console.log(chalk.green("4. Hapus produk"));
  console.log(chalk.green("5. Keluar"));
  rl.question(chalk.cyan("Pilih menu: "), (choice) => {
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
        console.log(chalk.red.italic("Pilihan tidak ada di menu!!!"));
        return;
    }
  });
}

// tambah produk
function addProduct() {
  rl.question(chalk.cyan("Tambah produk: "), (name) => {
    const Id = Number(products.length + 1);
    products.push({ id: Id, name });
    console.log(chalk.magenta.bold(`${name} berhasil ditambahkan!`));
    showMenu();
  });
}

// lihat semua produk
function showProduct() {
  if (products.length === 0) {
    console.log(chalk.red("Belum ada produk!"));
  } else {
    console.log(chalk.blue("==============="));
    console.log(chalk.blue(" Daftar produk"));
    console.log(chalk.blue("==============="));
    products.forEach((item) => {
      console.log(chalk.blue(`${item.id}. ${item.name}`));
    });
  }
  showMenu();
}

// update produk
function updateProduct() {
  rl.question(chalk.cyan("Masukkan id yang ingin id update: "), (id) => {
    const Id = Number(id);
    const index = products.findIndex((item) => item.id === Id);

    if (index !== -1) {
      rl.question(chalk.cyan("Masukkan produk baru: "), (newName) => {
        products[index].name = newName;
        console.log(chalk.magenta.bold("Produk berhasil diupdate!"));
        showMenu();
      });
    } else {
      console.log(chalk.red.italic("ID tidak ditemukan"));
      showMenu();
    }
  });
}

// hapus produk
function deleteProduct() {
  rl.question(chalk.cyan("Masukkan ID produk yang ingin dihapus:"), (id) => {
    const Id = Number(id);
    const index = products.findIndex((item) => item.id === Id);

    if (index !== -1) {
      const name = products[index].name;
      products.splice(index, 1);
      console.log(chalk.magenta.bold(`${name} berhasil dihapus`));
      showMenu();
    } else {
      console.log(chalk.red.italic("Id tidak ditemukan"));
      showMenu();
    }
  });
}

showMenu();
