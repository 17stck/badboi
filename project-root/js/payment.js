// JavaScript to handle quantity change and update total price
const products = document.querySelectorAll('.product-card-payment');
const totalDisplay = document.getElementById('total');

function updateTotalPrice() {
    let total = 0;

    products.forEach(product => {
        const quantityInput = product.querySelector('.quantity');
        const priceDisplay = product.querySelector('.price');
        const unitPrice = parseInt(priceDisplay.textContent); // ราคาต่อหน่วย

        const quantity = parseInt(quantityInput.value);
        total += quantity * unitPrice; // คำนวณราคาใหม่
    });

    totalDisplay.textContent = total; // แสดงราคาใหม่
}

// ฟังก์ชันสำหรับเพิ่มจำนวนสินค้า
products.forEach(product => {
    const plusButton = product.querySelector('.plus');
    const minusButton = product.querySelector('.minus');
    const quantityInput = product.querySelector('.quantity');

    plusButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1; // เพิ่มจำนวนสินค้า
        updateTotalPrice(); // ปรับราคา
    });

    minusButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1; // ลดจำนวนสินค้า
            updateTotalPrice(); // ปรับราคา
        }
    });

    // กรณีที่มีการกรอกจำนวนสินค้าเอง
    quantityInput.addEventListener('input', updateTotalPrice);
});

// เริ่มต้นอัปเดตราคาเมื่อโหลดหน้า
updateTotalPrice();
