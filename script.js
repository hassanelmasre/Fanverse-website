// Function to generate a placeholder image URL
const generatePlaceholder = (text, color = 'black', width = 600, height = 600) => {
    const bgColor = color === 'white' ? 'FFFFFF' : '000000';
    const textColor = color === 'white' ? '000000' : 'FFFFFF';
    return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=MISSING+IMAGE%3A+${encodeURIComponent(text.trim())}`;
}

// --- Slideshow Configuration ---
const SLIDESHOW_IMAGES = [
    'IMGES/ad_2.webp',
];

// --- Product Data ---
const products = [
    {
        name: 'هودي space 1', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/2.webp',
        whiteImageUrl: 'IMGES/WHITE/2.webp',
    },
    {
        name: 'هودي space 2', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/23.webp',
        whiteImageUrl: 'IMGES/WHITE/23.webp',
    },
    {
        name: 'هودي RABBIT', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/1.webp',
        whiteImageUrl: 'IMGES/WHITE/1.webp',
    },
    {
        name: 'هودي GOOD VIBES', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/36.webp',
        whiteImageUrl: 'IMGES/WHITE/36.webp',
    },
    {
        name: 'هودي cyborg samurai', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/3.webp',
        whiteImageUrl: 'IMGES/WHITE/3.webp',
    },
    {
        name: 'هودي RAVEN', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/8.webp',
        whiteImageUrl: 'IMGES/WHITE/8.webp',
    },
    {
        name: 'هودي YOU', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/5.webp',
        whiteImageUrl: 'IMGES/WHITE/5.webp',
    },
    {
        name: 'هودي OUT OF BOX', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/6.webp',
        whiteImageUrl: 'IMGES/WHITE/6.webp',
    },
    {
        name: 'هودي Black Clover', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/7.webp',
        whiteImageUrl: 'IMGES/WHITE/7.webp',
    },
    {
        name: 'هودي samurai', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/9.webp',
        whiteImageUrl: 'IMGES/WHITE/9.webp',
    },
    {
        name: 'هودي ANGEL', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/10.webp',
        whiteImageUrl: 'IMGES/WHITE/10.webp',
    },
    {
        name: 'هودي Yuji Itadori', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/4.webp',
        whiteImageUrl: 'IMGES/WHITE/4.webp',
    },
    {
        name: 'هودي breaking bad', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/11.webp',
        whiteImageUrl: 'IMGES/WHITE/11.webp',
    },
    {
        name: 'هودي ZORO', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/12.webp',
        whiteImageUrl: 'IMGES/WHITE/12.webp',
    },
    {
        name: 'هودي Pharaon', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/31.webp',
        whiteImageUrl: 'IMGES/WHITE/24.webp',
    },
    {
        name: 'هودي LOFY', category: 'هودي', price: '650 L.E', isTwoColor: true,
        blackImageUrl: 'IMGES/BLACK/16.webp',
        whiteImageUrl: 'IMGES/WHITE/16.webp',
    },
    { name: 'هودي تصميم رقم 17', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/17.webp', whiteImageUrl: 'IMGES/WHITE/17.webp' },
    { name: 'هودي تصميم رقم 18', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/18.webp', whiteImageUrl: 'IMGES/WHITE/18.webp' },
    { name: 'هودي تصميم رقم 19', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/19.webp', whiteImageUrl: 'IMGES/WHITE/19.webp' },
    { name: 'هودي تصميم رقم 20', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/20.webp', whiteImageUrl: 'IMGES/WHITE/20.webp' },
    { name: 'هودي تصميم رقم 21', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/21.webp', whiteImageUrl: 'IMGES/WHITE/21.webp' },
    { name: 'هودي تصميم رقم 22', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/22.webp', whiteImageUrl: 'IMGES/WHITE/22.webp' },
    { name: 'هودي تصميم رقم 23', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/23.webp', whiteImageUrl: 'IMGES/WHITE/23.webp' },
    { name: 'هودي تصميم رقم 24', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/24.webp', whiteImageUrl: 'IMGES/WHITE/24.webp' },
    { name: 'هودي تصميم رقم 25', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/25.webp', whiteImageUrl: 'IMGES/WHITE/25.webp' },
    { name: 'هودي تصميم رقم 26', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/26.webp', whiteImageUrl: 'IMGES/WHITE/26.webp' },
    { name: 'هودي تصميم رقم 27', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/27.webp', whiteImageUrl: 'IMGES/WHITE/27.webp' },
    { name: 'هودي تصميم رقم 28', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/28.webp', whiteImageUrl: 'IMGES/WHITE/28.webp' },
    { name: 'هودي تصميم رقم 29', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/29.webp', whiteImageUrl: 'IMGES/WHITE/29.webp' },
    { name: 'هودي تصميم رقم 30', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/30.webp', whiteImageUrl: 'IMGES/WHITE/30.webp' },
    { name: 'هودي تصميم رقم 31', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/31.webp', whiteImageUrl: 'IMGES/WHITE/31.webp' },
    { name: 'هودي تصميم رقم 32', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/32.webp', whiteImageUrl: 'IMGES/WHITE/32.webp' },
    { name: 'هودي تصميم رقم 33', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/33.webp', whiteImageUrl: 'IMGES/WHITE/33.webp' },
    { name: 'هودي تصميم رقم 34', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/34.webp', whiteImageUrl: 'IMGES/WHITE/34.webp' },
    { name: 'هودي تصميم رقم 35', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/35.webp', whiteImageUrl: 'IMGES/WHITE/35.webp' },
    { name: 'هودي تصميم رقم 36', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/36.webp', whiteImageUrl: 'IMGES/WHITE/36.webp' },
    { name: 'هودي تصميم رقم 37', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/37.webp', whiteImageUrl: 'IMGES/WHITE/37.webp' },
    { name: 'هودي تصميم رقم 38', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/38.webp', whiteImageUrl: 'IMGES/WHITE/38.webp' },
    { name: 'هودي تصميم رقم 39', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/39.webp', whiteImageUrl: 'IMGES/WHITE/39.webp' },
    { name: 'هودي تصميم رقم 40', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/40.webp', whiteImageUrl: 'IMGES/WHITE/40.webp' },
    { name: 'هودي تصميم رقم 41', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/41.webp', whiteImageUrl: 'IMGES/WHITE/41.webp' },
    { name: 'هودي تصميم رقم 42', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/42.webp', whiteImageUrl: 'IMGES/WHITE/42.webp' },
    { name: 'هودي تصميم رقم 43', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/43.webp', whiteImageUrl: 'IMGES/WHITE/43.webp' },
    { name: 'هودي تصميم رقم 44', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/44.webp', whiteImageUrl: 'IMGES/WHITE/44.webp' },
    { name: 'هودي تصميم رقم 45', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/45.webp', whiteImageUrl: 'IMGES/WHITE/45.webp' },
    { name: 'هودي تصميم رقم 46', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/46.webp', whiteImageUrl: 'IMGES/WHITE/46.webp' },
    { name: 'هودي تصميم رقم 47', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/47.webp', whiteImageUrl: 'IMGES/WHITE/47.webp' },
    { name: 'هودي تصميم رقم 48', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/48.webp', whiteImageUrl: 'IMGES/WHITE/48.webp' },
    { name: 'هودي تصميم رقم 50', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/50.webp', whiteImageUrl: 'IMGES/WHITE/50.webp' },
    { name: 'هودي تصميم رقم 60', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/51.webp', whiteImageUrl: 'IMGES/WHITE/51.webp' },
    { name: 'هودي تصميم رقم 61', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/52.webp', whiteImageUrl: 'IMGES/WHITE/52.webp' },
    { name: 'هودي تصميم رقم 62', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/53.webp', whiteImageUrl: 'IMGES/WHITE/53.webp' },
    { name: 'هودي تصميم رقم 63', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/54.webp', whiteImageUrl: 'IMGES/WHITE/54.webp' },
    { name: 'هودي تصميم رقم 64', category: 'هودي', price: '650 L.E', isTwoColor: true, blackImageUrl: 'IMGES/BLACK/55.webp', whiteImageUrl: 'IMGES/WHITE/55.webp' },
    {
        name: 'هودي (GIRL) تصميم 1', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/1.webp',
        whiteImageUrl: 'IMGES/GIRLS/h(2).webp'
    },
    {
        name: 'هودي (GIRL) تصميم 2', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/2.webp',
        whiteImageUrl: 'IMGES/GIRLS/3.webp'
    },
    {
        name: 'هودي (GIRL) تصميم 3', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/4.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },
    {
        name: 'هودي (GIRL) تصميم 4', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/5.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },
    {
        name: 'هودي (GIRL) تصميم 5', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/6.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },
    {
        name: 'هودي (GIRL) تصميم 6', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/7.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },
    {
        name: 'هودي (GIRL) تصميم 7', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/8.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },
{
        name: 'هودي (GIRL) تصميم 8', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/9.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },
{
        name: 'هودي (GIRL) تصميم 9', category: 'هودي', price: '650 L.E', isTwoColor: true, gender: 'GIRLS',
        blackImageUrl: 'IMGES/GIRLS/10.webp',
        whiteImageUrl: 'IMGES/GIRLS/.webp'
    },


    { name: 'مج JOKER', category: 'مج', imageUrl: 'IMGES/M (1).webp', price: '130 L.E' },
    { name: 'مج JOHN WICK', category: 'مج', imageUrl: 'IMGES/M (2).webp', price: '130 L.E' },
    { name: 'مج FALASTIN', category: 'مج', imageUrl: 'IMGES/M (8).webp', price: '130 L.E' },
    { name: 'مج ZORO', category: 'مج', imageUrl: 'IMGES/M (6).webp', price: '130 L.E' },
    { name: 'مج DUCK', category: 'مج', imageUrl: 'IMGES/M (7).webp', price: '130 L.E' },
    { name: 'مج ANGEL', category: 'مج', imageUrl: 'IMGES/M (9).webp', price: '130 L.E' },
    { name: 'مج HARYY POTTER', category: 'مج', imageUrl: 'IMGES/M (4).webp', price: '130 L.E' },
    { name: 'مج KRATOS', category: 'مج', imageUrl: 'IMGES/M (10).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 11', category: 'مج', imageUrl: 'IMGES/M (11).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 12', category: 'مج', imageUrl: 'IMGES/M (12).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 13', category: 'مج', imageUrl: 'IMGES/M (13).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 14', category: 'مج', imageUrl: 'IMGES/M (14).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 15', category: 'مج', imageUrl: 'IMGES/M (15).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 16', category: 'مج', imageUrl: 'IMGES/M (16).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 17', category: 'مج', imageUrl: 'IMGES/M (17).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 18', category: 'مج', imageUrl: 'IMGES/M (18).webp', price: '130 L.E' },
    { name: 'مج تصميم رقم 19', category: 'مج', imageUrl: 'IMGES/M (19).webp', price: '130 L.E' },
    { name: 'Soon', category: 'جاكيت', price: '750 L.E' },
    { name: 'Soon', category: 'توتي باجز', price: '250 L.E' },
];

const productGrid = document.getElementById('product-grid');
const categoryFiltersContainer = document.getElementById('category-filters');
const genderFiltersContainer = document.getElementById('gender-filters');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');
const modalMetadata = document.getElementById('modalMetadata');

let activeFilter = 'هودي';
let activeGenderFilter = 'الكل';
let currentlyDisplayedCards = [];
let currentSlideIndex = 0;
let slideshowInterval;

const categoryDescriptions = {
    'هودي': 'هودي قطن 100% بطباعة DTF عالية الجودة يعبر عن هويتك.',
    'مج': 'مج طباعة سبليمشن يعبر عن شغفك.',
    'توتي باجز': 'قريباً...',
    'جاكيت': 'قريباً...',
};

function renderSlideshow() {
    const container = document.getElementById('slides-container');
    const dotsContainer = document.getElementById('slideshow-dots');
    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    SLIDESHOW_IMAGES.forEach((url, index) => {
        const slide = document.createElement('div');
        slide.className = `slide absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === 0 ? 'active' : ''}`;
        
        // تعديل: تحميل الصورة الأولى بأولوية عالية
        if (index === 0) {
            slide.innerHTML = `<img src="${url}" alt="Slide ${index + 1}" class="w-full h-full object-fill" fetchpriority="high">`;
        } else {
            slide.innerHTML = `<img src="${url}" alt="Slide ${index + 1}" class="w-full h-full object-fill" loading="lazy">`;
        }

        container.appendChild(slide);

        const imgElement = slide.querySelector('img');
        imgElement.onerror = function() {
            const errorText = `MISSING AD IMAGE: ${url.replace('IMGES/', '')}`;
            imgElement.className = 'w-full h-full object-cover';
            imgElement.src = generatePlaceholder(errorText, 'black', 1200, 400);
        };

        const dot = document.createElement('span');
        dot.className = `w-3 h-3 bg-white opacity-50 rounded-full transition-opacity cursor-pointer ${index === 0 ? 'opacity-100' : ''}`;
        dot.onclick = () => showSlide(index);
        dotsContainer.appendChild(dot);
    });

    showSlide(0, false);
    setupSlideshowInteractions(container);
    startAutoplay();
}

function showSlide(index, transition = true) {
    const slides = document.querySelectorAll('#slides-container .slide');
    const dots = document.querySelectorAll('#slideshow-dots span');

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        if (!transition) {
            slide.style.transition = 'none';
        }
    });

    dots.forEach(dot => dot.classList.remove('opacity-100'));

    slides[index].classList.add('active');
    void slides[index].offsetWidth;
    slides[index].style.transition = transition ? 'opacity 1s ease-in-out' : 'none';
    slides[index].style.opacity = '1';

    dots[index].classList.add('opacity-100');
    currentSlideIndex = index;
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function startAutoplay() {
    clearInterval(slideshowInterval);
    const interval = parseInt(document.getElementById('hero-slideshow').dataset.autoplayInterval) || 4000;
    slideshowInterval = setInterval(nextSlide, interval);
}

function setupSlideshowInteractions(container) {
    let startX = 0;

    container.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        clearInterval(slideshowInterval);
    });

    container.addEventListener('mouseup', (e) => {
        const diffX = e.clientX - startX;
        if (diffX > 50) {
            prevSlide();
        } else if (diffX < -50) {
            nextSlide();
        }
        startAutoplay();
    });

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        clearInterval(slideshowInterval);
    });

    container.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
        startAutoplay();
    });
}

async function isProductImageAvailable(product) {
    if (!product) return false;
    if (product.isTwoColor) {
        const isBlackAvailable = await checkImageExists(product.blackImageUrl);
        if (isBlackAvailable) return true;
        const isWhiteAvailable = await checkImageExists(product.whiteImageUrl);
        return isWhiteAvailable;
    } else if (product.imageUrl) {
        return await checkImageExists(product.imageUrl);
    }
    return false;
}

function checkImageExists(url) {
    return new Promise(resolve => {
        if (!url || url.endsWith('/.webp')) {
            resolve(false);
            return;
        }
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

function initializeHoodieCard(card) {
    const blackUrl = card.dataset.blackUrl;
    const whiteUrl = card.dataset.whiteUrl;
    const imgElement = card.querySelector('.product-image');
    const overlay = card.querySelector('.unavailable-overlay');
    const dotBlack = card.querySelector('.dot-black');
    const dotWhite = card.querySelector('.dot-white');
    const whiteAvailabilityMessage = card.querySelector('.white-availability-message');

    const setActiveColor = (color) => {
        dotBlack.classList.remove('active');
        dotWhite.classList.remove('active');
        if (color === 'black') dotBlack.classList.add('active');
        if (color === 'white') dotWhite.classList.add('active');
        card.dataset.currentColor = color;
    };

    const showUnavailable = () => {
        imgElement.style.display = 'none';
        overlay.classList.remove('hidden');
        dotBlack.classList.remove('active');
        dotWhite.classList.remove('active');
        if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'none';
    };

    const setInitialImage = async () => {
        const isBlackAvailable = await checkImageExists(blackUrl);
        const isWhiteAvailable = await checkImageExists(whiteUrl);

        if (isBlackAvailable) {
            imgElement.src = blackUrl;
            setActiveColor('black');
            if (isWhiteAvailable) {
                if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'block';
            } else {
                if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'none';
            }
        } else if (isWhiteAvailable) {
            imgElement.src = whiteUrl;
            setActiveColor('white');
            if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'none';
        } else {
            showUnavailable();
        }
    };
    
    setInitialImage();
    setupColorToggleInteractions(card);
}

function updateModalContent(filteredIndex) {
    const indices = JSON.parse(modalMetadata.dataset.filteredIndices || '[]');
    if (filteredIndex < 0 || filteredIndex >= indices.length) return;

    const originalIndex = indices[filteredIndex];
    const product = products[originalIndex];

    modalMetadata.dataset.isTwoColor = product.isTwoColor || false;
    modalMetadata.dataset.cardIndex = filteredIndex;

    const showNav = indices.length > 1;
    prevImage.style.display = showNav ? 'flex' : 'none';
    nextImage.style.display = showNav ? 'flex' : 'none';

    if (product.isTwoColor) {
        const tryLoadImage = (url, color, finalFallback = false) => {
            modalImage.classList.remove('opacity-50', 'bg-gray-200');
            modalImage.src = '';

            const tempImg = new Image();
            tempImg.src = url;

            tempImg.onload = () => {
                modalImage.src = url;
                modalMetadata.dataset.currentColor = color;
            };

            tempImg.onerror = () => {
                if (finalFallback) {
                    const placeholderText = product.name + ` - غير متاح`;
                    modalImage.src = generatePlaceholder(placeholderText, color);
                    modalImage.classList.add('opacity-50', 'bg-gray-200');
                    modalMetadata.dataset.currentColor = color;
                } else {
                    tryLoadImage(product.whiteImageUrl, 'white', true);
                }
            };
            modalImage.src = tempImg.src;
        };
        tryLoadImage(product.blackImageUrl, 'black', false);

    } else {
        const initialSrc = product.imageUrl;
        modalMetadata.dataset.currentColor = 'N/A';

        const tempImg = new Image();
        tempImg.src = initialSrc;

        tempImg.onload = () => {
            modalImage.src = initialSrc;
            modalImage.classList.remove('opacity-50', 'bg-gray-200');
        };

        tempImg.onerror = () => {
            const placeholderText = product.name + ' - غير متاح';
            modalImage.src = generatePlaceholder(placeholderText, 'black');
            modalImage.classList.add('opacity-50', 'bg-gray-200');
        };
        modalImage.src = initialSrc;
    }
}

async function navigateModal(direction) {
    let currentFilteredIndex = parseInt(modalMetadata.dataset.cardIndex);
    const indices = JSON.parse(modalMetadata.dataset.filteredIndices || '[]');
    const totalFilteredProducts = indices.length;

    if (isNaN(currentFilteredIndex) || totalFilteredProducts <= 1) {
        return;
    }

    let newFilteredIndex = currentFilteredIndex;

    do {
        if (direction === 'next-card') {
            newFilteredIndex = (newFilteredIndex + 1) % totalFilteredProducts;
        } else if (direction === 'prev-card') {
            newFilteredIndex = (newFilteredIndex - 1 + totalFilteredProducts) % totalFilteredProducts;
        }

        if (newFilteredIndex === currentFilteredIndex) {
            return;
        }

        const originalIndex = indices[newFilteredIndex];
        const product = products[originalIndex];

        if (await isProductImageAvailable(product)) {
            updateModalContent(newFilteredIndex);
            return;
        }

    } while (newFilteredIndex !== currentFilteredIndex);
}

prevImage.addEventListener('click', (e) => { e.stopPropagation(); navigateModal('prev-card'); });
nextImage.addEventListener('click', (e) => { e.stopPropagation(); navigateModal('next-card'); });

document.addEventListener('keydown', (e) => {
    if (imageModal.classList.contains('flex')) {
        if (e.key === 'ArrowLeft') {
            navigateModal('next-card');
        } else if (e.key === 'ArrowRight') {
            navigateModal('prev-card');
        } else if (e.key === 'Escape') {
            hideModal();
        }
    }
});

function toggleHoodieColor(card, color) {
    const imgElement = card.querySelector('.product-image');
    const overlay = card.querySelector('.unavailable-overlay');
    const blackUrl = card.dataset.blackUrl;
    const whiteUrl = card.dataset.whiteUrl;
    const dotBlack = card.querySelector('.dot-black');
    const dotWhite = card.querySelector('.dot-white');
    const whiteAvailabilityMessage = card.querySelector('.white-availability-message');
    
    let newSrc = (color === 'black') ? blackUrl : whiteUrl;
    
    checkImageExists(newSrc).then(isAvailable => {
        if (isAvailable) {
            imgElement.src = newSrc;
            imgElement.style.display = 'block';
            overlay.classList.add('hidden');
            dotBlack.classList.remove('active');
            dotWhite.classList.remove('active');
            
            if (color === 'black') {
                dotBlack.classList.add('active');
                card.dataset.currentColor = 'black';
                checkImageExists(whiteUrl).then(isWhiteAvailable => {
                    if (isWhiteAvailable) {
                        if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'block';
                    } else {
                        if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'none';
                    }
                });
            } else {
                dotWhite.classList.add('active');
                card.dataset.currentColor = 'white';
                if (whiteAvailabilityMessage) whiteAvailabilityMessage.style.display = 'none';
            }
        } else {
            // If the requested image is not available, do not switch
            // The active dot will remain on the previously selected color
        }
    });
}

function setupColorToggleInteractions(card) {
    const imageContainer = card.querySelector('.image-swipe-area');
    const dotBlack = card.querySelector('.dot-black');
    const dotWhite = card.querySelector('.dot-white');
    const blackUrl = card.dataset.blackUrl;
    const whiteUrl = card.dataset.whiteUrl;

    let startX = 0;
    
    // For mouse interaction
    imageContainer.addEventListener('mousedown', (e) => {
        startX = e.clientX;
    });

    imageContainer.addEventListener('mouseup', async (e) => {
        const diffX = e.clientX - startX;
        if (Math.abs(diffX) > 40) {
            const currentColor = card.dataset.currentColor;
            const newColor = currentColor === 'black' ? 'white' : 'black';
            
            const newUrl = (newColor === 'black') ? blackUrl : whiteUrl;
            const isAvailable = await checkImageExists(newUrl);

            if (isAvailable) {
                 toggleHoodieColor(card, newColor);
            }
        }
    });
    
    // For touch interaction
    imageContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    imageContainer.addEventListener('touchend', async (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        const swipeThreshold = 40;
        
        if (Math.abs(diffX) > swipeThreshold) {
            const currentColor = card.dataset.currentColor;
            const newColor = currentColor === 'black' ? 'white' : 'black';
            
            const newUrl = (newColor === 'black') ? blackUrl : whiteUrl;
            const isAvailable = await checkImageExists(newUrl);

            if (isAvailable) {
                toggleHoodieColor(card, newColor);
            }
        }
    });

    if (dotBlack) dotBlack.onclick = (e) => { e.stopPropagation(); toggleHoodieColor(card, 'black'); };
    if (dotWhite) {
        dotWhite.onclick = (e) => {
            e.stopPropagation();
            toggleHoodieColor(card, 'white');
        };
    }

    imageContainer.addEventListener('click', (e) => {
        const imgElement = card.querySelector('.product-image');
        const overlay = card.querySelector('.unavailable-overlay');

        const filteredIndex = currentlyDisplayedCards.indexOf(card);

        if (imgElement.style.display === 'none' && overlay && !overlay.classList.contains('hidden')) {
            console.log("Image not available for magnification.");
        } else {
            updateModalContent(filteredIndex);

            imageModal.classList.remove('hidden');
            imageModal.classList.add('flex');
        }
    });
}

function renderGenderFilters() {
    const genders = ['الكل', 'BOYS', 'GIRLS'];
    genderFiltersContainer.innerHTML = '';

    if (activeFilter === 'هودي') {
        genderFiltersContainer.style.display = 'flex';

        genders.forEach(gender => {
            const button = document.createElement('button');
            const buttonText = (gender === 'BOYS' || gender === 'GIRLS') ? gender : 'الكل';
            button.textContent = buttonText;

            button.dataset.filterValue = gender;

            const isActive = (gender === activeGenderFilter);

            button.className = `px-4 py-2 rounded-lg font-bold text-lg transition-colors duration-300 border-2 border-red-600 ${
                isActive
                    ? 'active-filter'
                    : 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-gray-600'
            }`;

            button.addEventListener('click', () => {
                activeGenderFilter = gender;
                renderProducts(activeFilter);
                updateActiveGenderButton();
            });
            genderFiltersContainer.appendChild(button);
        });
    } else {
        genderFiltersContainer.style.display = 'none';
        activeGenderFilter = 'الكل';
    }
}

function updateActiveGenderButton() {
    const buttons = genderFiltersContainer.querySelectorAll('button');
    buttons.forEach(button => {
        if(button.dataset.filterValue === activeGenderFilter) {
            button.classList.add('active-filter');
            button.classList.remove('bg-white', 'dark:bg-gray-700', 'text-red-600', 'dark:text-red-500', 'hover:bg-red-100', 'dark:hover:bg-gray-600');
        } else {
            button.classList.remove('active-filter');
            button.className = 'px-4 py-2 rounded-lg font-bold text-lg transition-colors duration-300 border-2 border-red-600 bg-white dark:bg-gray-700 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-gray-600';
        }
    });
}

function renderProducts(filter) {
    productGrid.innerHTML = '';
    const allProductElements = [];
    const filteredIndices = [];

    renderGenderFilters();

    products.forEach((product, index) => {
        if (product.category !== filter) return;

        if (product.category === 'هودي' && activeGenderFilter !== 'الكل') {

            const isGirlProduct = product.gender === 'GIRLS';
            const isBoyProduct = product.gender === undefined;

            if (activeGenderFilter === 'BOYS') {
                if (isGirlProduct) return;
            } else if (activeGenderFilter === 'GIRLS') {
                if (isBoyProduct) return;
                if (!isGirlProduct) return;
            }
        }

        filteredIndices.push(index);

        const description = categoryDescriptions[product.category] || '';
        let cardHTML;

        // الرابط الخاص بالواتساب مع رسالة مخصصة
        const whatsappLink = `https://wa.me/201031081308?text=مرحباً، أود الاستفسار عن منتج ${encodeURIComponent(product.name)} - السعر: ${encodeURIComponent(product.price)}`;

        if (product.category === 'جاكيت' || product.category === 'توتي باجز') {
            cardHTML = `
            <div class="product-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full" data-index="${index}" data-original-index="${index}">
                <div class="w-full h-64 bg-gray-600 dark:bg-gray-700 flex items-center justify-center">
                    <h3 class="text-3xl font-extrabold text-white tracking-widest">${product.name.toUpperCase()}</h3>
                </div>
                <div class="p-5 text-center flex-grow flex flex-col">
                    <div class="flex-grow">
                        <h3 class="text-xl font-bold mb-2 truncate">${product.name.toUpperCase()}</h3>
                        <p class="text-sm text-red-600 dark:text-red-500 mb-2 font-semibold">${product.category}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed min-h-[60px]">${description}</p>
                    </div>
                    <div class="text-2xl font-bold text-gray-400 dark:text-gray-500 mt-4">${product.price}</div>
                    <a href="${whatsappLink}" class="whatsapp-card-btn" target="_blank">
                        <span>اطلب الآن</span>
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>`;
        } else if (product.category === 'هودي') {
            const initialImageUrl = product.blackImageUrl;
            
            const isWhiteAvailable = product.whiteImageUrl && !product.whiteImageUrl.endsWith('/.webp');

            cardHTML = `
            <div class="product-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                data-black-url="${product.blackImageUrl}"
                data-white-url="${product.whiteImageUrl}"
                data-current-color="black"
                data-index="${index}"
                data-original-index="${index}">

                <div class="image-swipe-area w-full h-64 bg-gray-200 dark:bg-gray-700 cursor-pointer select-none relative">
                    <img src="${initialImageUrl}" alt="${product.name}" class="product-image w-full h-full object-cover transition-opacity duration-300" loading="lazy">

                    <div class="unavailable-overlay hidden absolute inset-0 w-full h-64 flex items-center justify-center bg-black z-10 transition-opacity duration-300">
                        <span class="text-white text-2xl font-bold p-4 rounded-lg bg-red-600 shadow-lg">غير متاح</span>
                    </div>
                </div>

                <div class="flex justify-center flex-col items-center gap-1 py-2">
                    <div class="flex gap-3">
                        <span class="color-dot dot-black active bg-black" title="اللون الأسود"></span>
                        <span class="color-dot dot-white bg-white" title="اللون الأبيض"></span>
                    </div>
                    <p class="white-availability-message text-xs text-gray-600 dark:text-gray-400 mt-1" style="display: ${isWhiteAvailable ? 'block' : 'none'};">
                        متاح اللون الأبيض، اضغط للعرض
                    </p>
                </div>

                <div class="p-5 text-center flex-grow flex flex-col">
                    <div class="flex-grow">
                        <h3 class="text-xl font-bold mb-2 truncate">${product.name}</h3>
                        <p class="text-sm text-red-600 dark:text-red-500 mb-2 font-semibold">${product.category}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed min-h-[60px]">${description}</p>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</div>
                        <a href="${whatsappLink}" class="whatsapp-card-btn" target="_blank" onclick="event.stopPropagation();">
                            <span>اطلب الآن</span>
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>`;
        } else {
            const imageUrl = product.imageUrl || generatePlaceholder(product.name, 'black');
            cardHTML = `
            <div class="product-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col" data-image-url="${imageUrl}" data-index="${index}" data-original-index="${index}">
                <div class="w-full h-64 bg-gray-200 dark:bg-gray-700 pointer-events-none">
                    <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-64 object-cover" loading="lazy" onerror="this.src='${generatePlaceholder(product.name, 'black')}'">
                </div>
                <div class="p-5 text-center flex-grow flex-col">
                    <div class="flex-grow">
                        <h3 class="text-xl font-bold mb-2 truncate">${product.name}</h3>
                        <p class="text-sm text-red-600 dark:text-red-500 mb-2 font-semibold">${product.category}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed min-h-[60px]">${description}</p>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</div>
                        <a href="${whatsappLink}" class="whatsapp-card-btn" target="_blank" onclick="event.stopPropagation();">
                            <span>اطلب الآن</span>
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>`;
        }

        allProductElements.push(cardHTML);
    });

    productGrid.innerHTML = allProductElements.join('');

    modalMetadata.dataset.filteredIndices = JSON.stringify(filteredIndices);
    currentlyDisplayedCards = Array.from(productGrid.querySelectorAll('.product-card'));

    currentlyDisplayedCards.forEach((card, filteredIndex) => {
        const originalIndex = parseInt(card.dataset.index);
        const product = products[originalIndex];

        if (product && product.isTwoColor) {
            initializeHoodieCard(card);
        } else {
            card.addEventListener('click', () => {
                updateModalContent(filteredIndex);

                imageModal.classList.remove('hidden');
                imageModal.classList.add('flex');
            });
        }
    });
}

function renderCategoryFilters() {
    const categories = [...new Set(products.map(p => p.category))].filter(cat => cat !== 'الكل');

    categoryFiltersContainer.innerHTML = '';
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = `px-3 py-2 rounded-md font-semibold transition-colors duration-300 text-sm md:text-base border-2 border-transparent ${
            activeFilter === category
                ? 'active-filter'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`;

        button.addEventListener('click', () => {
            const previousFilter = activeFilter;
            activeFilter = category;

            if (previousFilter !== 'هودي' && activeFilter === 'هودي') {
                activeGenderFilter = 'الكل';
            } else if (activeFilter !== 'هودي') {
                activeGenderFilter = 'الكل';
            }

            renderProducts(activeFilter);
            updateActiveButton();
        });
        categoryFiltersContainer.appendChild(button);
    });
}

function updateActiveButton() {
    const buttons = categoryFiltersContainer.querySelectorAll('button');
    buttons.forEach(button => {
        if(button.textContent === activeFilter) {
            button.classList.add('active-filter');
            button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-200', 'hover:bg-gray-300', 'dark:hover:bg-gray-600');
        } else {
            button.classList.remove('active-filter');
            button.className = 'px-3 py-2 rounded-md font-semibold transition-colors duration-300 text-sm md:text-base border-2 border-transparent bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600';
        }
    });
}

const hideModal = () => {
    imageModal.classList.add('hidden');
    imageModal.classList.remove('flex');
};

closeModal.addEventListener('click', hideModal);
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal || e.target.id === 'imageModalContent') {
        hideModal();
    }
});

window.onload = () => {
    const initialCategories = [...new Set(products.map(p => p.category))].filter(cat => cat !== 'الكل' && cat !== 'جاكيت' && cat !== 'توتي باجز');
    activeFilter = initialCategories[0] || 'هودي';

    renderSlideshow();
    renderCategoryFilters();
    renderProducts(activeFilter);
};

let modalStartX = 0;
const modalContent = document.getElementById('imageModalContent');

modalContent.addEventListener('touchstart', (e) => {
    // If the touch starts on the image, don't set a starting position for swiping
    if (e.target === modalImage) {
        return;
    }
    modalStartX = e.touches[0].clientX;
});

modalContent.addEventListener('touchend', (e) => {
    // If the touch ends on the image, don't trigger navigation
    if (e.target === modalImage) {
        return;
    }
    
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - modalStartX;
    const swipeThreshold = 50;

    if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
            navigateModal('prev-card');
        } else {
            navigateModal('next-card');
        }
    }
});