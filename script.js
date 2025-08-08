// função de pegar o ano -----------------------------------------------------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// cabeçalho fluido e fixo ao descer a página --------------------------------------------------------------------------------------
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// movimento suave para links de âncoras -------------------------------------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// animação de fade-in para cards ------------------------------------------------------------------------------------------------
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.grid-item').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});


// Animação de scroll com ScrollReveal.js -------------------------------------------------------------------------------------------
window.sr = ScrollReveal({ reset: false });
sr.reveal('.h1-principal', {
    delay: 300,
    duration: 1800,
    distance: '60px'
    
});
sr.reveal('.hero-subtitle', {
    delay: 900,
    duration: 3000,
    distance: '40px'
});
sr.reveal('.cta-button', {
    delay: 1000,
    duration: 3000,
    distance: '50px'
});
sr.reveal('.about-text', {
    duration: 2500,
    distance: '30px'
});
sr.reveal('.about-image', {
    duration: 2500,
    distance: '30px'
});


// circulo roxo ------------------------------------------------------------------------------------------------
const cursor = document.getElementById('cursor-circle');
const inverter = document.getElementById('cursor-inverter');
const images = document.querySelectorAll('.grid-item');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;

  const inverterWidth = inverter.offsetWidth;
  const inverterHeight = inverter.offsetHeight;
  cursor.style.transform = `translate(${mouseX - cursorWidth / 2}px, ${mouseY - cursorHeight / 2}px)`;
  inverter.style.transform = `translate(${mouseX - inverterWidth / 2}px, ${mouseY - inverterHeight / 2}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// expandir ciruclo com imagens ------------------------------------------------------------
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    cursor.classList.add('expanded');
    cursor.style.width = '100px';
    cursor.style.height = '100px';
    cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    // cursor.style.transition = 'width 0.5s, height 0.5s, background-color 0.2s, border 0.2s, transform 0.08s';
    cursor.style.cursor = 'none';
    // cursor.style.border = '2px solid cyan';
    inverter.style.opacity = '1';
  });

  img.addEventListener('mouseleave', () => {
    cursor.classList.remove('expanded');
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.backgroundColor = '#5a35ff';
    cursor.style.border = 'none';
    inverter.style.opacity = '0';
  });
});

// expansão menor do criculo ----------------------------------------------------------------
const interactiveElements = [
  ...document.querySelectorAll('header nav a'),
  ...document.querySelectorAll('.cta-button'),
  ...document.querySelectorAll('footer .footer-social a'),
  ...document.querySelectorAll('footer .contact-info a'),
  ...document.querySelectorAll('.close-modal'),
];
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('small');
    cursor.classList.remove('expanded');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('small');
  });
});

// Toggle menu mobile -------------------------------------------------------------------
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const ve = false;

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
  
// fechar menu ao clicar fora dele -----------------------------------------------------
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove('show');
  }
});


// Galeria de imagens relacionadas ------------------------------------------------------
const galleryData = {
  "Death Stranding": [
    "images/6 death stranding/deathstrandingposter.png",
    "images/6 death stranding/deathstrandingposter2.png",
    "images/6 death stranding/deathstrandingposter3.png",
    "images/6 death stranding/deathstrandingposter4.png",
    "images/6 death stranding/deathstrandingposter5.png",
    "images/6 death stranding/deathstrandingposter6.png",
    "images/6 death stranding/deathstrandingposter8.png",
  ],
  "Abbey Road": [
    "images/2 abbey road/abbey road edittt doidodouiod.png",
    "images/2 abbey road/abbey road full laranja.png",
    "images/2 abbey road/abbey road full roxo.png",
    "images/2 abbey road/abbey road laranja.png",
    "images/2 abbey road/abbey road roxo.png",
    "images/2 abbey road/abbeyroadlsd1.png",
    "images/2 abbey road/abbeyroadlsd2.png",
    "images/2 abbey road/abbeyroadlsd4.png",
    "images/2 abbey road/abbeyroadlsd4commarcadaagua.png",
    "images/2 abbey road/abbeyroadoido01.png",
    "images/2 abbey road/abbeyroadooiderao2.png",
  ],
  "Tranquility Base Hotel and Casino": [
    "images/7.9  tranquility base hotel and casino/TRANQUILITY BASE0101.png",
    "images/7.9  tranquility base hotel and casino/tranquilitybasehotelecasino.png",
    "images/7.9  tranquility base hotel and casino/tranquilityspacehotelecasino.png",
    "images/7.9  tranquility base hotel and casino/tranquilityspacehotelecasinoperfeicone.png",
  ],
  "Wish you Were Here": [
    "images/8 wish you were here/vinilmockupwishyouerehere.png",
    "images/8 wish you were here/wishyouwehere.negativado.png",
    "images/8 wish you were here/wishyouwerehere.estilizado.negativado.png",
    "images/8 wish you were here/wishyouwerehere.estilizado.png",
    "images/8 wish you were here/wishyouwerehereposter (1).png",
    "images/8 wish you were here/wishyouwerehereposter (02).png",
    "images/8 wish you were here/wishyouwerehereposter (04).png",
    "images/8 wish you were here/wishyouwerehereposter(01).png",
    "images/8 wish you were here/wishyouwerehereposter(05).png",
    "images/8 wish you were here/wishyouwerehereposter.png",
    "images/8 wish you were here/wishyouwereherposter2.png",
  ],
  "Blade Runner": [
    "images/blade runner/blade runner macro.jpg",
    "images/blade runner/bladerunnerposter2.png",
  ],
  "Um jogo de você": [
    "images/5 um jogo de voce/um jogo de voce 3.png",
    "images/5 um jogo de voce/um jogo de vc.png",
    "images/5 um jogo de voce/fundo branco um jogo de voce.png",
    "images/5 um jogo de voce/um jogo de voce.png",
  ],
  "Animals": [
    "images/3 Animals/animalscontracapapng.png",
    "images/3 Animals/animalsposter.definitivo2 - Copia.png",
    "images/3 Animals/animalsposter.definitivo3.png",
  ],
  "Dark Side Of The Moon": [
    "images/11 darksideofthemoon/dsotm-3.png",
    "images/11 darksideofthemoon/dsotm-4.png",
    "images/11 darksideofthemoon/dsotm-vanila.png",
  ],
  "BlackStar": [
    "images/4 Blackstar/BLACKSTARcontracapa.png",
    "images/4 Blackstar/blackstarfullart.png",
    "images/4 Blackstar/BLACKSTARFUNDO.png",
    "images/4 Blackstar/BLACKSTARgranulada.png",
    "images/4 Blackstar/BLACKSTARtreestarsRAIOX.png",
    "images/4 Blackstar/BLACKSTARwithconstelationsraix.png",
    "images/4 Blackstar/testeblackstar.png",
    "images/4 Blackstar/Vinyl_Record_Mockup_BLACKSTAR.png",
    "images/4 Blackstar/Vinyl_Record_Mockup_blackstar02.png",
  ],
  // nao tem imagem ---------------------------------------
  "The Wall": [
    "images/essa nao abriar pag/THEWALL.POSTER.png"
  ],
  "Expensive Shit": [
    "images/1 Expansive shit/FELAKUTIBANNER discurso.png",
    "images/1 Expansive shit/FELAKUTIBANNER FELA.png",
    "images/1 Expansive shit/FELAKUTIBANNER fundo.png",
    "images/1 Expansive shit/FELAKUTIBANNER SHIT.png",
  ],
  "All Things Must Pass": [
    "images/7 All things must pass/allthingsmustpas.definitiv2.png",
    "images/7 All things must pass/allthingsmustpass.def4.png",
    "images/7 All things must pass/allthingsmustpass.def5.png",
    "images/7 All things must pass/allthingsmustpass.definitivo.png",
    "images/7 All things must pass/allthingsmustpassall.1.png",
    "images/7 All things must pass/allthingsmustpassALL2.png",
    "images/7 All things must pass/allthingsmustpassALL3.png",
    "images/7 All things must pass/georgeharrison.png",
    "images/7 All things must pass/georgeharrison1.png",
    "images/7 All things must pass/georgeharrisonallthingsmustpas.def3.png",
  ],
  "Station to Station": [
    "images/14 STATIOTOSTATION/station-to-station-contracapa.png",
    "images/14 STATIOTOSTATION/station-to-stationcoverFUNDOPRETO.png",
    "images/14 STATIOTOSTATION/station-to-stationcover-negativo.png",
    "images/14 STATIOTOSTATION/statiotostation-artecompleta.png",
  ],
  "Surrealismo": [
    "images/surrealismo trabalho final/caiojp.jpg",
    "images/surrealismo trabalho final/macjp.jpg",
    "images/surrealismo trabalho final/nathyjp.jpg",
    "images/surrealismo trabalho final/rafajp.jpg",
    "images/surrealismo trabalho final/Yarajp.jpg",
  ],
  "Sex Pistols": [
    "images/10 ESSA NAO ABRIRA NOVA PAG/sexpsitolsbanner.jpg"
  ]
};

textData = {
  "Death Stranding": [ 
    "Death Stranding",
    "Fragmentos suspensos no tempo. A presença pesa, a ausência também. Caminhar é inventar caminhos num mundo desfeito.", 
  ],
  "Abbey Road": [
    "Abbey Road - The Beatles",
    "Quatro passos cruzam o mesmo chão, mas seguem em direções diferentes. O instante entre um pé e o outro é onde tudo se transforma."
  ],
  "Tranquility Base Hotel and Casino": [
    "Tranquility Base Hotel & Casino – Arctic Monkeys",
    "Nada é real — só reflexos metálicos, anúncios quebrados e um piano flutuando no vácuo. Check-in para lugar nenhum."
  ],
  "Wish you Were Here": [
    "Wish You Were Here – Pink Floyd",
    "Dois corpos distantes acenam um para o outro sem saber se estão vivos. O calor de um aperto de mãos invisível."
  ],
  "Blade Runner": [
    "Blade Runner",
    "Luzes trêmulas sob chuva ácida. Memórias artificiais, olhos molhados. O que é humano já não importa.",
  ],
  "Um jogo de você": [
    "Um jogo de você",
    "Um corpo, tempo moldado, dissolve o ego em poeira de estrelas, e a essência se liberta na vastidão do cosmos."
  ],
  "Animals": [
    "Animals",
    "Pink Floyd A cidade late, ruge, grita. Os prédios observam. No céu, um porco flutua — dócil e ameaçador."
  ],
  "Dark Side Of The Moon": [
    "The Dark Side of the Moon – Pink Floyd",
    "Tudo o que não se diz vibra aqui. Um feixe atravessa a escuridão e revela cores que não têm nome."
  ],
  "BlackStar": [
    "Blackstar – David Bowie",
    "Uma estrela oca, brilhando na escuridão que engole tudo. Silêncio e espaço em tensão, como um presságio manso."
  ],
  "The Wall": [
    "The Wall – Pink Floyd",
    "Um muro que não separa, mas ecoa. Cada bloco carrega vozes presas, gritos mudos. O peso da construção é o próprio cansaço"
  ],
  "Expensive Shit": [
    "Expensive Shit – Fela Kuti",
    "Ritmo e caos no mesmo pulso. Um grito seco que dança, uma ironia vestida de ouro sujo."
  ],
  "All Things Must Pass": [
    "All Things Must Pass – George Harrison",
    "A terra absorve tudo: a dor, a fé, o tempo. O sol volta, mesmo que devagar. Nada fica. Tudo floresce."
  ],
  "Station to Station": [
    "Station to Station – David Bowie",
    "Entre um ponto e outro, não há destino. Só deslocamento. A identidade escapa pelos trilhos."
  ],
  "Surrealismo": [
    "Surrealismo",
    "tes test teste",
    "Medos e desejos se embaralham no reflexo. A pele é máscara e espelho. Algo observa — de longe, de dentro."
  ],
  "Sex Pistols": [
    "Never Mind the Bollocks – Sex Pistols",
    "Nada é sutil. Tudo explode, sem cerimônia. A sujeira vira cor. A raiva vira riso."
  ]
}

const modal = document.getElementById("gallery-modal");
const texto = document.getElementById("gallery-title"); // ====
const subtitle = document.getElementById("gallery-description"); // ====
const closeBtn = document.querySelector(".close-modal");
const galleryGrid = document.getElementById("gallery-grid");
const singleView = document.getElementById("single-view");
const singleImage = document.getElementById("single-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentGallery = [];
let currentText = [];
let currentIndex = 0;

// Abrir modal em grid
document.querySelectorAll(".grid-item").forEach(item => {
  item.addEventListener("click", () => {
    const title = item.querySelector("h3").innerText;
    if (galleryData[title]) {
      currentGallery = galleryData[title];
      galleryGrid.innerHTML = "";
      currentGallery.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.addEventListener("click", () => openSingleView(index));
        galleryGrid.appendChild(img);
      });

      // Adiciona título e subtítulo da galeria
      if (textData[title]) {
        document.getElementById("gallery-title").textContent = textData[title][0];
        document.getElementById("gallery-description").textContent = textData[title][1];
      } else {
        document.getElementById("gallery-title").textContent = title;
        document.getElementById("gallery-description").textContent = "";
      }

      modal.style.display = "block";
      singleView.style.display = "none";
    }
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => modal.style.display = "none");

// Fechar clicando fora do single-view
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Abrir visualização única
function openSingleView(index) {
  currentIndex = index;
  singleImage.src = currentGallery[currentIndex];
  singleView.style.display = "flex";
}

// Navegar na visualização única
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  singleImage.src = currentGallery[currentIndex];
});
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentGallery.length;
  singleImage.src = currentGallery[currentIndex];
});

// Voltar para a grade ao clicar fora da imagem
singleView.addEventListener("click", (e) => {
  if (e.target === singleView) singleView.style.display = "none";
});

