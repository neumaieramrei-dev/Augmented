// ---------------- NAVIGATION ----------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});


// ---------------- HERO PARALLAX ----------------

const heroImage = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const offset = window.scrollY;

    heroImage.style.transform = `translateY(${offset * 0.18}px)`;

});


// ---------------- SMOOTH HERO MOUSE MOVEMENT ----------------

const heroText = document.querySelector(".hero-text");

document.addEventListener("mousemove",(e)=>{

    const x = (e.clientX/window.innerWidth-.5)*12;
    const y = (e.clientY/window.innerHeight-.5)*12;

    heroText.style.transform =
        `translate(calc(-50% + ${x}px), ${y}px)`;

});

// ---------------- GALLERY ----------------

const gallery = document.getElementById("masonryGallery");

if (gallery) {

    const imageCount = 27;

    for (let i = 1; i <= imageCount; i++) {

        const img = document.createElement("img");

        img.src = `VSCO/vsco${i}.jpg`;
        img.alt = `VSCO ${i}`;
        img.loading = "lazy";

        gallery.appendChild(img);

    }

    // Lightbox erstellen
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");

    gallery.querySelectorAll("img").forEach(image => {

        image.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImage.src = image.src;

        });

    });

    lightbox.addEventListener("click", (e) => {

        if (
            e.target === lightbox ||
            e.target.classList.contains("lightbox-close")
        ) {

            lightbox.classList.remove("active");

        }

    });

}
// ---------- Analog Gallery ----------

const analogGallery = document.getElementById("analogGallery");

if (analogGallery) {

    const analogItems = [

        "Images/atacama.png",
        "Images/dari.png",
        "Images/texture.png",
        "Images/daricloseup.png",

        "Images/work1.jpg",
        "Images/work2.jpg",
        "Images/work3.jpg",
        "Images/work4.jpg",
        "Images/work5.jpg",

        "Videos/sagmeister.mp4"

    ];

    analogItems.forEach(file => {

        if (file.endsWith(".mp4") || file.endsWith(".mov")) {

            const video = document.createElement("video");

            video.src = file;
            video.controls = true;
            video.muted = true;

            analogGallery.appendChild(video);

        } else {

            const img = document.createElement("img");

            img.src = file;
            img.loading = "lazy";

            analogGallery.appendChild(img);

        }

    });

}
// ---------- Digital Gallery ----------

const digitalGallery = document.getElementById("digitalGallery");

if (digitalGallery) {

    const digitalVideos = [

        "Videos/unterwasser.mov",
        "Videos/bubbles.mov"

    ];

    digitalVideos.forEach(file => {

        const video = document.createElement("video");

        video.src = file;
        video.controls = true;
        video.muted = true;

        digitalGallery.appendChild(video);

    });

}
// ---------- Featured Films ----------

const filmGrid = document.getElementById("filmGrid");

if (filmGrid) {

    const films = [
        "Videos/IMG_8850.mov",
        "Videos/IMG_0752.mov",
        "Videos/Finale Version-Liebe ist.mp4",
        "Videos/blume.mov"
    ];

    films.forEach(file => {

        const card = document.createElement("div");
        card.className = "film-card";

        const video = document.createElement("video");
        video.src = file;
        video.controls = true;
        video.muted = true;
        

        card.appendChild(video);
        filmGrid.appendChild(card);

    });

}
const fishViewer = document.querySelector("model-viewer");
const fishSound = document.getElementById("fishSound");

fishViewer.addEventListener("pointerup", () => {
    console.log("Pointer erkannt!");

    fishSound.pause();
    fishSound.currentTime = 0;

    fishSound.play().catch(err => {
        console.error("Sound konnte nicht abgespielt werden:", err);
    });
});