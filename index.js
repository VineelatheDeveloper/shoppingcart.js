
document.addEventListener('DOMContentLoaded', function() {
    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const addButton = document.getElementById('add-button');
    const itemList = document.getElementById('item-list');
    const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
    let srno = 1;
    addButton.addEventListener('click', function() {
        const name = itemNameInput.value;
        const price = parseFloat(itemPriceInput.value);

        if (name.trim() !== '' && price >= 0) {
            const newRow = itemList.insertRow(itemList.rows.length - 1);
            const srnoCell = newRow.insertCell(0)
            const nameCell = newRow.insertCell(1);
            const priceCell = newRow.insertCell(2);

            srnoCell.setAttribute('data-ns-test', 'item-srno')
            nameCell.setAttribute('data-ns-test', 'item-name');
            priceCell.setAttribute('data-ns-test', 'item-price');

            srnoCell.innerHTML = srno;
            nameCell.innerHTML = name;
            priceCell.innerHTML = price;

            updateGrandTotal();
            itemNameInput.value = '';
            itemPriceInput.value = '';
            srno++;
        }
    });

    function updateGrandTotal() {
        let price = document.querySelectorAll('[data-ns-test=item-price]');
         let total = 0;
        for (let i = 0; i < itemList.rows.length-1; i++) {
            
            total += parseInt(itemList.rows[i].cells[2].innerHTML);
        }
        grandTotal.innerHTML = total;
        
    }
});
