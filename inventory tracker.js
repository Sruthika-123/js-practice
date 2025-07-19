
let products = [
  { id: 1, name: "Pen", price: 10, stock: 50 },
  { id: 2, name: "Notebook", price: 50, stock: 20 },
  { id: 3, name: "Eraser", price: 5, stock: 0 },
  { id: 4, name: "Pencil", price: 7, stock: 30 },
  { id: 5, name: "Bag", price: 500, stock: 10 }
];


function showProducts() {
  console.log("All Products:");
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    console.log(p.name + " (ID: " + p.id + ") - Price: ₹" + p.price + ", Stock: " + p.stock);
  }
}


function sellProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      if (products[i].stock > 0) {
        products[i].stock -= 1;
        console.log("Sold 1 " + products[i].name + ". Remaining: " + products[i].stock);
      } else {
        console.log(products[i].name + " is Out of Stock.");
      }
      return;
    }
  }
  console.log("Product not found.");
}


function restockProduct(id, quantity) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].stock += quantity;
      console.log(products[i].name + " restocked. New stock: " + products[i].stock);
      return;
    }
  }
  console.log("Product not found.");
}

function searchProduct(keyword) {
  let found = false;
  console.log("Search Results:");
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      console.log(products[i].name + " - ₹" + products[i].price);
      found = true;
    }
  }
  if (!found) {
    console.log("No matching products found.");
  }
}

function mostExpensive() {
  let maxPrice = 0;
  let item = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxPrice) {
      maxPrice = products[i].price;
      item = products[i];
    }
  }
  console.log("Most Expensive Product: " + item.name + " - ₹" + item.price);
}


//showProducts();
//sellProduct(3); 
//sellProduct(2);
//restockProduct(3, 10);
//searchProduct("pen");
//mostExpensive(); 
