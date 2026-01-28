const products = [
    { id: "US-01", name: "ID Holder", price: "5" },
    { id: "US-02", name: "ID Holder Premium", price: "5" },
    { id: "US-03", name: "AC Printed", price: "6" },
    { id: "US-09", name: "Holder", price: "4" },
    { id: "US-MRH", name: "Metal Red Holder", price: "30" },
    { id: "US-KC", name: "Key Chain", price: "19" },
    { id: "US-PVC", name: "Normal PVC Card", price: "30" },
    { id: "US-MPC", name: "Modern PVC Card", price: "200" }
];

const grid = document.getElementById("catalog-grid");

products.forEach((product) => {
    grid.innerHTML += `
        <div class="card">
            <div class="card-img">PRODUCT IMAGE</div>
            <div class="card-info">
                <div class="card-id">${product.id}</div>
                <div class="card-title">${product.name}</div>
                <div class="card-price">₹${product.price}</div>
            </div>
        </div>
    `;
});
