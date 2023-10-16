function generateInvoice() {
    const products = document.querySelectorAll('.product:checked');
    const invoiceReceipt = document.getElementById('invoiceReceipt');

    if (products.length === 0) {
        alert('Please select at least one product.');
        return;
    }

    let total = 0;
    let invoiceHTML = `
        <div class="card-body mx-4">
            <div class="container">
                <p class="my-5 mx-5" style="font-size: 30px;">Thank for your purchase</p>
                <div class="row">
                    <ul class="list-unstyled">
                        <li class="text-black">John Doe</li>
                        <li class="text-muted mt-1"><span class="text-black">Invoice</span> #12345</li>
                        <li class="text-black mt-1">${new Date().toDateString()}</li>
                    </ul>
                    <hr>
                </div>
    `;

    products.forEach(product => {
        const productDescription = product.value;
        const productPrice = parseFloat(productDescription.split(' - $')[1]);

        if (!isNaN(productPrice)) {
            total += productPrice;
            const productName = productDescription.split(' - $')[0];

            invoiceHTML += `
                <div class="row">
                    <div class="col-xl-10">
                        <p>${productName}</p>
                    </div>
                    <div class="col-xl-2">
                        <p class="float-end">$${productPrice.toFixed(2)}</p>
                    </div>
                    <hr>
                </div>
            `;
        }
    });

    invoiceHTML += `
            <div class="row text-black">
                <div class="col-xl-12">
                    <p class="float-end fw-bold">Total: $${total.toFixed(2)}</p>
                </div>
                <hr style="border: 2px solid black;">
            </div>
            <div class="text-center" style="margin-top: 90px;">
                <a><u class="text-info">View in browser</u></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    </div>
    `;

    invoiceReceipt.innerHTML = invoiceHTML;
    invoiceReceipt.style.display = 'block';
}
