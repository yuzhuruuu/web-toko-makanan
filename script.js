 // Daftar harga barang
 const prices = {
    "fried-chicken": 8000,
    "spageti": 25000,
    "french-fries": 10000,
    "burger-queen": 15000,
    "kwetiau": 13000,
    "mie-hompipa": 10000,
    "rice-bowl": 12000,
    "jasmin-tea": 5000,
    "capucino": 7000,
    "green_tea": 10000,
    "taro": 10000,
    "vanilla":10000,
    "matcha":10000,
    "lemonade":7000,
    "coklat":7000,
};

// Fungsi untuk menghitung total harga
function calculateTotal() {
    let total = 0;
    const receiptItems = [];
    for (const item in prices) {
        const quantity = parseInt(document.getElementById(item).value);
        if (quantity > 0) {
            const itemTotal = prices[item] * quantity;
            total += itemTotal;
            receiptItems.push({ name: item, price: prices[item], quantity, total: itemTotal });
        }
    }

    // Tampilkan total harga
    document.getElementById('total-price').textContent = `Total Harga: Rp ${total.toLocaleString()}`;

    // Tampilkan struk
    showReceipt(receiptItems, total);
}

// Fungsi untuk menampilkan struk
function showReceipt(items, total) {
    const receiptTable = document.getElementById('receipt-items');
    receiptTable.innerHTML = ''; // Clear sebelumnya

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rp ${item.price.toLocaleString()}</td>
            <td>${item.quantity}</td>
            <td>Rp ${item.total.toLocaleString()}</td>
        `;
        receiptTable.appendChild(row);
    });

    // Tampilkan total harga di struk
    document.getElementById('receipt-total-price').textContent = `Total Harga: Rp ${total.toLocaleString()}`;
}

// Event listener untuk tombol pemesanan
document.getElementById('order-button').addEventListener('click', function () {
    // Hitung total dan tampilkan struk
    calculateTotal();
    document.getElementById('receipt').style.display = 'block';
});

// Event listener untuk input jumlah barang
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});

// Fungsi untuk menangani perubahan metode pembayaran
document.querySelectorAll('input[name="transfer-method"]').forEach(input => {
    input.addEventListener('change', function () {
        const selectedMethod = document.querySelector('input[name="transfer-method"]:checked').value;
        
        // Jika metode yang dipilih adalah QRIS
        if (selectedMethod === 'qris') {
            document.getElementById('qris-code').style.display = 'block';
        } else {
            document.getElementById('qris-code').style.display = 'none';
        }
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.getElementById('order-button');
    const totalPriceElement = document.getElementById('total-price');
    const receiptSection = document.getElementById('receipt');
    const receiptItems = document.getElementById('receipt-items');
    const receiptTotalPrice = document.getElementById('receipt-total-price');

    const menuItems = [
        { name: "Fried Chicken", price: 8000, id: "fried-chicken" },
        { name: "Spageti", price: 25000, id: "spageti" },
        { name: "French Fries", price: 10000, id: "french-fries" },
        { name: "Burger Queen", price: 15000, id: "burger-queen" },
        { name: "Kwetiau", price: 13000, id: "kwetiau" },
        { name: "Mie Hompipa", price: 10000, id: "mie-hompipa" },
        { name: "Rice Bowl", price: 12000, id: "rice-bowl" },
        { name: "Jasmin Tea", price: 5000, id: "jasmin-tea" },
        { name: "Capucino", price: 7000, id: "capucino" },
        { name: "Green Tea", price: 10000, id: "green-tea" },
        { name: "Taro", price: 10000, id: "taro" },
        { name: "Vanilla", price: 10000, id: "vanilla" },
        { name: "Matcha", price: 10000, id: "matcha" },
        { name: "Lemonade", price: 7000, id: "lemonade" },
        { name: "Coklat", price: 7000, id: "coklat" }
    ];

    // Fungsi untuk menghitung total harga
    function calculateTotal() {
        let total = 0;
        let receiptHTML = '';
        
        menuItems.forEach(item => {
            const quantity = document.getElementById(item.id).value;
            if (quantity > 0) {
                const itemTotal = item.price * quantity;
                total += itemTotal;

                receiptHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>Rp ${item.price}</td>
                        <td>${quantity}</td>
                        <td>Rp ${itemTotal}</td>
                    </tr>
                `;
            }
        });

        // Update total price on the page
        totalPriceElement.textContent = `Total Harga: Rp ${total}`;

        // Update receipt details
        receiptItems.innerHTML = receiptHTML;
        receiptTotalPrice.textContent = `Total Harga: Rp ${total}`;
    }

    // Event listener untuk tombol "Pesan Sekarang"
    orderButton.addEventListener('click', function() {
        calculateTotal();
        receiptSection.style.display = 'block'; // Menampilkan struk pembelian
    });
});
