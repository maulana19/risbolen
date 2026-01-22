const btnFilterProduct = document.querySelectorAll(".sort-text ul li");
const dataItem = document.querySelectorAll(".product-item-all");
const images = document.querySelectorAll(".gallery-image");
const bestItem = document.querySelectorAll(".best-item");
const btnSeeAll = document.getElementById("btnSeeAll");
const btnFilterGallery = document.getElementById("btn-show-gallery");

let activeCategory = "Semua Produk";
let showAllProduct = false;
let showAllImages = false;
const LIMITProduct = 8;
const LIMITImages = 3;

function renderItems() {
    let visibleCount = 0;
    dataItem.forEach(item => {
        const category = item.getAttribute("data-category");

        const matchCategory =
            activeCategory === "Semua Produk" ||
            category === activeCategory;

        if (matchCategory) {
            if (showAllProduct || visibleCount < LIMITProduct) {
                item.style.display = "block";
                item.className =
                    "product-item-all col-6 col-sm-6 col-md-3 d-flex justify-content-center";
                visibleCount++;
            } else {
                item.style.display = "none";
                item.className = ""
            }
        } else {
            item.style.display = "none";
            item.className = ""
        }
    });

    // Tampilkan / sembunyikan tombol See All
    btnSeeAll.style.display =
        (!showAllProduct && visibleCount >= LIMITProduct) ? "inline-block" : "none";
}
function renderImages() {
    let visibleCount = 0;
    images.forEach(item => {
        if (showAllImages || visibleCount < LIMITImages) {
            item.style.display = "block";
            visibleCount++;
        } else {
            item.style.display = "none";
        }
    });

    // Tampilkan / sembunyikan tombol See All
    btnFilterGallery.style.display =
        (!showAllImages && visibleCount >= LIMITImages) ? "inline-block" : "none";
}


// FILTER
btnFilterProduct.forEach(btn => {
    btn.onclick = () => {
        btnFilterProduct.forEach(b =>
            b.className = "list-group-item item-nonaktif"
        );

        btn.className = "list-group-item item-active";

        activeCategory = btn.textContent.trim();
        showAllProduct = false; // reset ke 8 item
        renderItems();
    };
});

// SEE ALL
btnSeeAll.onclick = () => {
    showAllProduct = true;
    renderItems();
};
btnFilterGallery.onclick = () => {
    showAllImages = true;
    renderImages();
};

dataItem.forEach((data) => {
    data.onclick = () => {
        const card = data.querySelector("div")
        const cardContent = card.querySelector(".item-content")
        const cardtitle = cardContent.querySelector(".item-title")
        const cardtitle2 = cardContent.querySelector(".item-title-2")
        const cardline = cardContent.querySelector(".separate-line")
        const cardline2 = cardContent.querySelector(".separate-line-2")
        const boxHarga = cardContent.querySelector('.harga-box')
        const boxDesc = cardContent.querySelector('.desc-box')

        if(card.classList.contains("item-box-2")){
            card.className = "item-box position-relative text-center pt-5"
            cardtitle2.className = "item-title fw-bold mb-2"
            cardline2.className = "separate-line mx-auto mb-2"
            boxDesc.style.display = "block"
            boxHarga.style.display = "none"

        }else{
            card.className = "item-box-2 position-relative text-center pt-5"
            cardtitle.className = "item-title-2 fw-bold mb-2"
            cardline.className = "separate-line-2 mx-auto mb-2"
            boxDesc.style.display = "none"
            boxHarga.style.display = "block"
        }
    }
})

bestItem.forEach((data) => {
    data.onclick = () => {
        const card = data.querySelector("div")
        const cardContent = card.querySelector(".item-content")
        const cardtitle = cardContent.querySelector(".item-title")
        const cardtitle2 = cardContent.querySelector(".item-title-2")
        const cardline = cardContent.querySelector(".separate-line")
        const cardline2 = cardContent.querySelector(".separate-line-2")
        const boxHarga = cardContent.querySelector('.harga-box')
        const boxDesc = cardContent.querySelector('.desc-box')

        if(card.classList.contains("item-box-2")){
            card.className = "item-box position-relative text-center pt-5"
            cardtitle2.className = "item-title fw-bold mb-2"
            cardline2.className = "separate-line mx-auto"
            boxDesc.style.display = "block"
            boxHarga.style.display = "none"

        }else{
            card.className = "item-box-2 position-relative text-center pt-5"
            cardtitle.className = "item-title-2 fw-bold mb-2"
            cardline.className = "separate-line-2 mx-auto"
            boxDesc.style.display = "none"
            boxHarga.style.display = "block"
        }
    }
})

// INITIAL LOAD
renderItems();
renderImages();
