let burger = document.querySelector(".hamburger");
let nav = document.querySelector(".header__nav");
let headerLink = document.querySelector(".navigation");

function toggleScrollLock(isLocked) {
    if (isLocked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    toggleScrollLock(nav.classList.contains("active"));
});

headerLink.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
    toggleScrollLock(false);
});

//Scroll Button
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollToTop');

    function screenWidth() {
        if(window.innerWidth <= 768){
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    }
    window.addEventListener('resize', screenWidth);
    screenWidth();

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

const toys = [
    {
        "name": "Bug Magnet",
        "id": "magnet",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Able to find bugs in code like they were placed there on purpose.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Console.log Guru",
        "id": "console",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Uses console.log like a crystal ball to find any issue.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Shortcut Cheater",
        "id": "shortcut",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Knows every keyboard shortcut like they were born with them.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+400",
            "dream": "+200"
        }
    },

    {
        "name": "Merge Master",
        "id": "merge",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
        "category": "For Work",
        "superpowers": {
            "live": "+200",
            "create": "+500",
            "love": "+200",
            "dream": "+300"
        }
    },

    {
        "name": "Async Tamer",
        "id": "async",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Handles asynchronous code and promises like well-trained pets.",
        "category": "For Work",
        "superpowers": {
            "live": "+100",
            "create": "+400",
            "love": "+200",
            "dream": "+300"
        }
    },

    {
        "name": "CSS Tamer",
        "id": "css",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Can make Flexbox and Grid work together like they were always best friends.",
        "category": "For Work",
        "superpowers": {
            "live": "+200",
            "create": "+500",
            "love": "+200",
            "dream": "+300"
        }
    },

    {
        "name": "Time Hacker",
        "id": "hacker",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Writes code at the last moment but always meets the deadline.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+200"
        }
    },

    {
        "name": "Layout Master",
        "id": "layout",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+300",
            "love": "+200",
            "dream": "+200"
        }
    },

    {
        "name": "Documentation Whisperer",
        "id": "documentation",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Understands cryptic documentation as if they wrote it themselves.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+100"
        }
    },

    {
        "name": "Feedback Master",
        "id": "feedback",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Accepts client revisions with the Zen calm of Buddha.",
        "category": "For Work",
        "superpowers": {
            "live": "+300",
            "create": "+500",
            "love": "+300",
            "dream": "+400"
        }
    },

    {
        "name": "Code Minimalist",
        "id": "minimalist",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Writes code so concise that one line does more than a whole file.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+200"
        }
    },

    {
        "name": "Pixel-Perfect Magician",
        "id": "pixel",
        "class": "tag-blue",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-work.png",
        "description": "Aligns elements to the last pixel, even when the design looks abstract.",
        "category": "For Work",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+400",
            "dream": "+400"
        }
    },

    {
        "name": "Posture Levitation",
        "id": "posture",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+500",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Step Master",
        "id": "step",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Gets 10,000 steps a day even while sitting at the computer.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Snack Resister",
        "id": "snack",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Ignoring desktop snacks like a strict dietician.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+100",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Hydration Bot",
        "id": "hydration",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
        "category": "For Health",
        "superpowers": {
            "live": "+500",
            "create": "+300",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Sleep Overlord",
        "id": "sleep",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Sleeps 6 hours but feels like they had 10.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+500",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Break Guru",
        "id": "break",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
        "category": "For Health",
        "superpowers": {
            "live": "+300",
            "create": "+300",
            "love": "+300",
            "dream": "+400"
        }
    },

    {
        "name": "Eye Protector",
        "id": "eye",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
        "category": "For Health",
        "superpowers": {
            "live": "+100",
            "create": "+300",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Stress Dodger",
        "id": "stress",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Masters meditation right at the keyboard.",
        "category": "For Health",
        "superpowers": {
            "live": "+100",
            "create": "+400",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Yoga Coder",
        "id": "yoga",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Easily switches from coding to yoga and back.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+400",
            "love": "+400",
            "dream": "+400"
        }
    },

    {
        "name": "Healthy Snacker",
        "id": "healthy",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Always picks fruit, even when chocolate is within arm’s reach.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+200",
            "dream": "+400"
        }
    },

    {
        "name": "Chair Exerciser",
        "id": "chair",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Manages to work out without leaving the chair.",
        "category": "For Health",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Caffeine Filter",
        "id": "caffeine",
        "class": "tag-green",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-health.png",
        "description": "Drinks coffee at night and still falls asleep with no problem.",
        "category": "For Health",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+500",
            "dream": "+200"
        }
    },

    {
        "name": "Joy Charger",
        "id": "joy",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Error Laugher",
        "id": "error",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Laughs at code errors like they’re jokes instead of getting angry.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Bug Acceptance Guru",
        "id": "bug",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Spontaneous Coding Philosopher",
        "id": "spontaneous",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Philosophically accepts any client suggestion after a long refactor.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+400"
        }
    },

    {
        "name": "Deadline Sage",
        "id": "deadline",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Remains zen even when the deadline is close and the project manager is stressed.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+300",
            "dream": "+500"
        }
    },

    {
        "name": "Inspiration Maestro",
        "id": "inspiration",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+400",
            "dream": "+100"
        }
    },

    {
        "name": "Peace Keeper",
        "id": "pease",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Maintains inner calm even in moments of intense crisis.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Empathy Guru",
        "id": "empathy",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Feels the team’s mood and can lift everyone’s spirits.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+500",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Laughter Generator",
        "id": "laughter",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+200",
            "dream": "+500"
        }
    },

    {
        "name": "Pause Master",
        "id": "pause",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Knows when to just step back from the keyboard and breathe.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+100",
            "dream": "+100"
        }
    },

    {
        "name": "Coder Healer",
        "id": "coder",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },

    {
        "name": "Music Code Curator",
        "id": "music",
        "class": "tag-pink",
        "img": "/digrayden-JSFE2024Q4/christmas-shop/image/gift-for-harmony.png",
        "description": "Creates work playlists so good, even deadlines follow the rhythm.",
        "category": "For Harmony",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+300",
            "dream": "+200"
        }
    }
]

//Tags
const tags = document.querySelectorAll('.tag');
const cardContainer = document.getElementById('card__container');

function filterCards(tag) {
    const cards = cardContainer.querySelectorAll('.card');
    cards.forEach(card => {
        if (tag === 'all' || card.getAttribute('data-tag') === tag) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function activeTag(selectedTag) {
    tags.forEach(tag => {
        if (tag === selectedTag) {
            tag.classList.add('tag_selected');
        } else {
            tag.classList.remove('tag_selected');
        }
    })
}

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filter = tag.getAttribute('data-filter');
        filterCards(filter);
        activeTag(tag);
        console.log(tag);
    })
})

//Cards
function getRandomCards(toys, count) {
    const shuffle = toys.sort(() => 0.5 - Math.random());
    return shuffle.slice(0, count);
}

function renderCards() {
    const cardContainer = document.getElementById('card__container');
    cardContainer.innerHTML = '';
    const randomCards = getRandomCards(toys, 36);
    randomCards.forEach(toy => {
        const toysCard = document.createElement('div');
        toysCard.classList.add('card');
        toysCard.setAttribute('id', `card-${toy.id}`);
        toysCard.setAttribute('data-tag', `${toy.class}`);
        toysCard.innerHTML = `
        <img src="${toy.img}" alt="${toy.name}" class="card__img">
        <div class="card__content">
            <h4 class="${toy.class}">${toy.category}</h4>
            <h3 class="card__title">${toy.name}</h3>
            
        </div>
    `;
        toysCard.addEventListener('click', () => openModal(toy));
        cardContainer.appendChild(toysCard);
    })
}

//Modal
function scrollLock(isLocked) {
    if (isLocked) {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
}

function openModal(toy) {
    const modal = document.getElementById("myModal");
    modal.innerHTML = '';

    const modalCard = document.createElement('div');
    modalCard.classList.add('modal-card');
    modalCard.id = `card-${toy.id}`;

    modalCard.innerHTML = `
<button class="close">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</button>
<div class="modal-card__img" style="background-image: url(${toy.img})"></div>
<div class="modal-card__content">
    <h4 class="${toy.class}">${toy.category}</h4>
    <h3 class="modal-card__title">${toy.name}</h3>
    <p class="modal-card__description">${toy.description}</p>
    <h4 class="modal-card__power-title">Adds superpowers to:</h4>
    <div class="modal-card__modal-list">
    ${superpowerSection('Live', toy.superpowers.live)}
    ${superpowerSection('Create', toy.superpowers.create)}
    ${superpowerSection('Love', toy.superpowers.love)}
    ${superpowerSection('Dream', toy.superpowers.dream)}
    </div>
</div>
`;

    modal.appendChild(modalCard);
    modal.style.display = "flex";

    scrollLock(true);

    document.querySelector('.close').onclick = () => {
        modal.style.display = "none";
        scrollLock(false);
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            scrollLock(false);
        }
    };
}

function superpowerSection(name, value) {
    const cleanPlus = value.startsWith('+') ? value.slice(1) : value;
    const digit = parseInt(cleanPlus[0]);
    const img = Array.from({ length: 5 }, (_, index) =>
        `<img src="/digrayden-JSFE2024Q4/christmas-shop/image/icons/snowflake.svg" alt="Christmas shop" style="opacity: ${index < digit ? '1' : '0.1'};">`
    ).join('');

    return `
<p>${name}</p>
<p class="modal-card__modal-list__text">${value}</p>
<div class="image-container">${img}</div>
`;
}

window.addEventListener('load', renderCards);
window.addEventListener('load', filterCards('all'));