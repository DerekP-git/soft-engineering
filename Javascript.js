// === Lightbox functionality ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const downloadBtn = document.getElementById('download-btn');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.photo img').forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.dataset.src;
    downloadBtn.href = this.dataset.src;
    downloadBtn.setAttribute('download', this.alt || 'download');
  });
});

lightboxImg.onclick = function () {
  this.classList.toggle('zoomed');
};

closeBtn.onclick = function() {
  lightbox.style.display = 'none';
};

lightbox.onclick = function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
};

// === Pagination functionality ===
const imagesPerPage = 40;
const imageContainer = document.getElementById("imageContainer");
const allPhotos = imageContainer.querySelectorAll(".photo");
const totalPages = Math.ceil(allPhotos.length / imagesPerPage);
const paginationControls = document.getElementById("paginationControls");

let currentPage = 1;

function showPage(page) {
  currentPage = page;
  const start = (page - 1) * imagesPerPage;
  const end = start + imagesPerPage;

  allPhotos.forEach((photo, index) => {
    photo.style.display = (index >= start && index < end) ? "inline-block" : "none";
  });

  renderPagination();
}

function renderPagination() {
  paginationControls.innerHTML = "";

  // Prev Button
  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Prev";
    prevBtn.onclick = () => showPage(currentPage - 1);
    paginationControls.appendChild(prevBtn);
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => showPage(i);
    if (i === currentPage) btn.disabled = true;
    paginationControls.appendChild(btn);
  }

  // Next Button
  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.onclick = () => showPage(currentPage + 1);
    paginationControls.appendChild(nextBtn);
  }
}

showPage(1); // Start with first page

