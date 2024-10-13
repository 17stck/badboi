document.querySelectorAll('.quantity-input').forEach(function (quantityContainer) {
    const minusButton = quantityContainer.querySelector('.minus');
    const plusButton = quantityContainer.querySelector('.plus');
    const qtyInput = quantityContainer.querySelector('.qty');

    minusButton.addEventListener('click', function () {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', function () {
        let currentValue = parseInt(qtyInput.value);
        qtyInput.value = currentValue + 1;
    });
});



// search
document.getElementById('search-button').addEventListener('click', function (e) {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

    const searchTerm = document.getElementById('search-input').value.toLowerCase(); // เอาข้อความจากช่อง search
    const productCards = document.querySelectorAll('.product-card'); // เลือกทุก product card

    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase(); // เอาชื่อสินค้า

        if (title.includes(searchTerm)) {
            // เลื่อนหน้าไปยังสินค้าที่ค้นพบ
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // เน้นข้อความที่ค้นหา
            const highlightedTitle = title.replace(new RegExp(searchTerm, 'gi'), (match) => {
                return `<span class="highlight">${match}</span>`;
            });
            card.querySelector('.product-title').innerHTML = highlightedTitle;
        }
    });
});

// จำนวนสินค้าในตะกร้า
let totalCartCount = 0;

document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', function () {
        // หา product-card ที่ปุ่มนี้อยู่ในนั้น
        const productCard = this.closest('.product-card');

        // อ่านค่าจาก quantity-input ของสินค้านั้น
        const quantityInput = productCard.querySelector('.qty');
        const quantity = parseInt(quantityInput.value, 10);

        // ถ้าค่าที่กรอกเป็นตัวเลข
        if (!isNaN(quantity) && quantity > 0) {
            totalCartCount += quantity; // เพิ่มจำนวนสินค้าที่เลือกไปยังตะกร้า

            // อัปเดตตัวเลขที่ basket-icon
            document.getElementById('cart-count').textContent = totalCartCount;
        }
    });
});

