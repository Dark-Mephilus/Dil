// Dil (JavaScript Part)
// Progran by Dark Mephilus 
// Global and Instance Variables
const scene = document.getElementById('scene');
const envelopeTrigger = document.getElementById('envelopeTrigger');
const tapText = document.getElementById('tapText');
const closeLetterBtn = document.getElementById('closeLetterBtn');
const royalLetter = document.getElementById('royalLetter');
let sequenceState = 0; // 0 = closed, 1 = intermediate, 2 = read-mode
const infoButton = document.getElementById("infoButton");
const infoModal = document.getElementById("infoModal");
// Open Flow Timeline
envelopeTrigger.addEventListener('click', () => {
    if (sequenceState === 0) {
        sequenceState = 1;
        //  Open Flap and Dissolve Seal
        scene.classList.add('open');
        tapText.style.opacity = '0'; 
        // Slide Letter Upward out of back pocket
        setTimeout(() => {
            scene.classList.add('extract');
        }, 600);
        // Bring Letter into Full Focus & Drop Down Envelope Body
        setTimeout(() => {
            scene.classList.add('read');
            envelopeTrigger.style.display = 'none'; // Disable overlay
            sequenceState = 2;
        }, 1500); 
    }
});
// Reverse Close / Seal Flow Timeline
closeLetterBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid event collision
    if (sequenceState === 2) {
        sequenceState = 1; 
        // Auto-Scroll letter contents back to top for elegance
        royalLetter.scrollTo({ top: 0, behavior: 'smooth' });
        // Re-summon Envelope and push Letter back to scale offset
        scene.classList.remove('read');
        // Drop letter coordinates down into back sleeve
        setTimeout(() => {
            scene.classList.remove('extract');
        }, 800);
        // Rotate flap downwards and lock royal seal element
        setTimeout(() => {
            scene.classList.remove('open');
            tapText.style.opacity = '1'; 
            envelopeTrigger.style.display = 'block'; // Re-engage trigger
            sequenceState = 0; 
        }, 1600);
    }
});
// Info Modal Logic
infoButton.addEventListener("click", (e) => {
    e.stopPropagation();
    infoModal.style.display = "block";
    setTimeout(() => {
        infoModal.classList.add('active');
    }, 10);
});
// Close modal when clicking outside of it
window.closeInfoModal = function() {
    infoModal.classList.remove('active');
    setTimeout(() => {
        infoModal.style.display = "none";
    }, 300);
};
// Heart Animation
const heartContainer = document.getElementById('heart-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    // Random span coordinates across full screen layout
    heart.style.left = (Math.random() * 100) + 'vw';
    // Size distribution parameters (15px to 35px)
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = size + 'px';
    // Upward motion vector animation speeds
    const duration = Math.random() * 4 + 6; // 6s to 10s
    heart.style.animationDuration = duration + 's';
    heartContainer.appendChild(heart);
    // Clean memory registry after completion
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
// Seamless production loops
setInterval(createHeart, 600);
// Service Worker Registration for Offline Capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('✅ Royal Service Worker registered successfully:', reg.scope))
            .catch(err => console.error('❌ Service Worker registration failed:', err));
    });
}
// Device security measures to prevent source code access and element inspection
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("😏 No right click! Thought you were smart, huh?");
});
document.addEventListener('keydown', function (e) {
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
    alert("😈 F12? Trying to act clever? Nope!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    alert("😜 Inspect shortcut? Busted!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    alert("😂 Console peek? Dream on!");
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    alert("😅 View source? Not happening, buddy!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    alert("😏 Element inspector? You wish!");
  }
});
// End of Program