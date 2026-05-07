// ==========================================
// OTVARANJE I ZATVARANJE MENIJA (HAMBURGER)
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuToggle.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
  });
}

// ==========================================
// AUTOMATSKO ZATVARANJE MENIJA NA KLIK LINKA
// ==========================================

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (mainNav) {
      mainNav.classList.remove("open");
    }
    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});

// ==========================================
// OZNAČAVANJE AKTIVNE STRANICE
// ==========================================

const currentPage = window.location.pathname.split("/").pop() || "index.html"; 

document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPage = link.getAttribute("href");
  link.classList.remove("active");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

// ==========================================
// LOGIKA ZA VIŠEJEZIČNOST I RJEČNIK
// ==========================================

const prevodi = {
  bs: {
    // Navigacija
    navPocetna: "Početna",
    navStudenti: "Studenti",
    navFakulteti: "Fakulteti",
    navErasmus: "Erasmus+",
    navGalerija: "Galerija",
    btnKonkurs: "Konkurs za upis",
    
    // Hero sekcija
    heroTag: "🎓 Akademska zajednica · Erasmus+ · Fakulteti · Studijski programi",
    heroNaslov: "Internacionalni univerzitet Travnik",
    heroOpis: "Moderan univerzitetski portal sa pregledom fakulteta, studentskih informacija, međunarodne saradnje i aktuelnosti na jednom mjestu.",
    btnPregled: "Pregled fakulteta",
    btnUpis: "Upis studenata",
    
    // Hero Statistika
    stat1Broj: "7+",
    stat1Opis: "Fakulteta i akademskih oblasti",
    stat2Broj: "Erasmus+",
    stat2Opis: "Međunarodna saradnja i mobilnost",
    stat3Broj: "3 ciklusa",
    stat3Opis: "Osnovni, master i doktorski studij",
    stat4Broj: "2025/26",
    stat4Opis: "Aktuelne informacije za studente",
    
    // Hero Panel sa strane
    panelNaslov: "Studiraj uz moderan pristup",
    panelOpis: "Akademsko okruženje, stvarne informacije i pregledna struktura.",
    panelLabel: "Otvoren upis",
    miniFakulteti: "Fakulteti",
    miniFakultetiOpis: "Jasan pregled studijskih programa i ciklusa.",
    miniStudenti: "Studenti",
    miniStudentiOpis: "Upis, školarina, dokumentacija i podrška.",
    miniErasmus: "Erasmus+",
    miniErasmusOpis: "Mobilnost, partnerstva i međunarodne prilike.",
    miniAktuelno: "Aktuelno",
    miniAktuelnoOpis: "Vijesti, događaji i važna obavještenja.",
    
    // Studentski zivot (Campus)
    campusNaslov: "Studentski život na IUT Travnik",
    campusOpis: "Studiranje na Internacionalnom Univerzitetu Travnik nije samo obrazovanje, već i iskustvo koje uključuje međunarodnu saradnju, projekte, druženje i razvoj profesionalnih vještina.",
    campusAktivnosti: "Studentske aktivnosti",
    campusPrice: "Studentske priče",
    campusKampus: "Studentski kampus",
    campusSaradnja: "Međunarodna saradnja",

    // Biblioteka
    bibNaslov: "Biblioteka",
    bibOnama: "O nama",
    bibOpis1: "Univerzitetska biblioteka, osnovana 2010. godine, služi kao središte podrške akademskoj zajednici kroz sistematsko prikupljanje, obradu, čuvanje i distribuciju bibliotečke građe i informacija. Naša biblioteka je ključni resurs za unapređenje nastavnog i naučno-istraživačkog procesa na sedam fakulteta: Ekonomskom, Saobraćajnom, Politehničkom, Ekološkom, Medijima i Komunikacijama, Pravnom i Fakultetu informacionih tehnologija. Korisnici knjižnog fonda obuhvaćaju različite skupine, uključujući nastavno osoblje, znanstvene i stručne saradnike, uposlenike, kao i studente dodiplomskog i postdiplomskog studija. Svi korisnici trebaju poštovati odredbe Pravilnika o radu biblioteke.",
    bibMisija: "Naša misija",
    bibOpis2: "Cilj Univerzitetske biblioteke je da obezbijedi pristup relevantnim resursima potrebnim za kvalitetno obrazovanje i istraživanje. Ulažemo napore da naši korisnici imaju pristup najnovijim informacijama i znanjima, što doprinosi njihovom profesionalnom razvoju i akademskom uspjehu.",
    bibStruktura: "Struktura i resursi",
    bibOpis3: "Biblioteka se sastoji od različitih odjeljenja, koja su prilagođena potrebama naših fakulteta:",
    bibEkonomski: "Ekonomski fakultet:",
    bibEkoOpis: " Resursi iz ekonomije, menadžmenta i poslovanja.",
    bibSaobracajni: "Saobraćajni fakultet:",
    bibSaobOpis: " Materijali vezani za transportne sisteme i logistiku.",
    bibPolitehnicki: "Politehički fakultet:",
    bibPoliOpis: " Knjige i časopisi iz oblasti inženjerstva i tehnologije.",
    bibEkoloski: "Ekološki fakultet:",
    bibEkolOpis: " Izvori informacija o zaštiti životne sredine i održivom razvoju.",
    bibMediji: "Mediji i komunikacije:",
    bibMedijiOpis: " Resursi za proučavanje medijskih teorija i praksi.",
    bibPravni: "Pravni fakultet:",
    bibPravniOpis: " Pristup zakonodavstvu, pravnoj teoriji i praksi.",
    bibFit: "FIT:",
    bibFitOpis: " Savremeni materijali iz oblasti IT-a i računarskih nauka.",

    // Statistika
    statsNaslov: "IUT Travnik u brojkama",
    statsOpis: "Internacionalni univerzitet Travnik pruža kvalitetno obrazovanje uz savremene studijske programs i međunarodnu saradnju.",
    statCard1Tekst: "Studenata",
    statCard2Tekst: "Fakulteta",
    statCard3Tekst: "Studijskih programa",
    statCard4Tekst: "Partnerskih univerziteta",

    // Footer
    footerMiniPocetna: "Početna",
    footerMiniStudenti: "Studenti",
    footerMiniErasmus: "Erasmus+",
    footerStudSluzba: "Studentska služba: +387 (30) 509 682",
    footerUniverzitet: "Internacionalni univerzitet Travnik",
    footerUniverzitetOpis: "Univerzitetski portal sa pregledom fakulteta, studentskih informacija, Erasmus+ programa i aktuelnosti.",
    footerPrijava: "Prijava za studij",
    footerPortalNaslov: "Portal",
    footerLinkPocetna: "Početna",
    footerLinkStudenti: "Studenti",
    footerLinkFakulteti: "Fakulteti",
    footerMedjunarodnoNaslov: "Međunarodno",
    footerLinkErasmus: "Erasmus+",
    footerLinkGalerija: "Galerija",
    footerVodic: "Vodič za studente",
    footerKontaktNaslov: "Kontakt",
    footerAdresaLink: "Aleja Konzula – Meljanac bb",
    footerGrad: "Travnik, BiH",
    footerKontaktNaslov2: "Kontakt informacije",
    footerAdresaNaslov: "Adresa",
    footerAdresaTxt: "Aleja Konzula – Meljanac bb, Travnik",
    footerTelefonNaslov: "Telefon",
    footerEmailNaslov: "Email",
    footerInfoNaslov: "Info centar",
    footerInfoOpis: "Informacije za buduće i postojeće studente",
    footerCopyright: "© 2026 Internacionalni Univerzitet Travnik"
  },
  
  en: {
    // Navigation
    navPocetna: "Home",
    navStudenti: "Students",
    navFakulteti: "Faculties",
    navErasmus: "Erasmus+",
    navGalerija: "Gallery",
    btnKonkurs: "Enrollment Call",
    
    // Hero section
    heroTag: "🎓 Academic Community · Erasmus+ · Faculties · Study Programs",
    heroNaslov: "International University of Travnik",
    heroOpis: "A modern university portal providing an overview of faculties, student information, international cooperation, and news all in one place.",
    btnPregled: "Overview of Faculties",
    btnUpis: "Student Enrollment",
    
    // Hero Stats
    stat1Broj: "7+",
    stat1Opis: "Faculties and academic areas",
    stat2Broj: "Erasmus+",
    stat2Opis: "International cooperation and mobility",
    stat3Broj: "3 cycles",
    stat3Opis: "Bachelor, Master, and Doctoral studies",
    stat4Broj: "2025/26",
    stat4Opis: "Current information for students",
    
    // Hero Panel
    panelNaslov: "Study with a Modern Approach",
    panelOpis: "Academic environment, real information, and a clear structure.",
    panelLabel: "Enrollment Open",
    miniFakulteti: "Faculties",
    miniFakultetiOpis: "Clear overview of study programs and cycles.",
    miniStudenti: "Students",
    miniStudentiOpis: "Enrollment, tuition fees, documentation, and support.",
    miniErasmus: "Erasmus+",
    miniErasmusOpis: "Mobility, partnerships, and international opportunities.",
    miniAktuelno: "News",
    miniAktuelnoOpis: "News, events, and important announcements.",
    
    // Campus life
    campusNaslov: "Student Life at IUT Travnik",
    campusOpis: "Studying at the International University of Travnik is not just about education, but an experience that includes international cooperation, projects, socializing, and professional skills development.",
    campusAktivnosti: "Student Activities",
    campusPrice: "Student Stories",
    campusKampus: "Student Campus",
    campusSaradnja: "International Cooperation",

    // Library
    bibNaslov: "Library",
    bibOnama: "About Us",
    bibOpis1: "The University Library, founded in 2010, serves as a center of support for the academic community through systematic collection, processing, preservation, and distribution of library materials and information. Our library is a key resource for enhancing the teaching and research process across seven faculties: Economics, Traffic, Polytechnic, Ecology, Media and Communications, Law, and Information Technologies. Users of the book fund include various groups, such as teaching staff, scientific and professional associates, employees, as well as undergraduate and postgraduate students. All users must comply with the Library Rules of Procedure.",
    bibMisija: "Our Mission",
    bibOpis2: "The goal of the University Library is to provide access to relevant resources needed for quality education and research. We strive to ensure our users have access to the latest information and knowledge, contributing to their professional development and academic success.",
    bibStruktura: "Structure and Resources",
    bibOpis3: "The library consists of various departments adapted to the needs of our faculties:",
    bibEkonomski: "Faculty of Economics:",
    bibEkoOpis: " Resources in economics, management, and business.",
    bibSaobracajni: "Faculty of Traffic Engineering:",
    bibSaobOpis: " Materials related to transport systems and logistics.",
    bibPolitehnicki: "Polytechnic Faculty:",
    bibPoliOpis: " Books and journals in the fields of engineering and technology.",
    bibEkoloski: "Faculty of Ecology:",
    bibEkolOpis: " Information sources on environmental protection and sustainable development.",
    bibMediji: "Media and Communications:",
    bibMedijiOpis: " Resources for studying media theories and practices.",
    bibPravni: "Faculty of Law:",
    bibPravniOpis: " Access to legislation, legal theory, and practice.",
    bibFit: "FIT:",
    bibFitOpis: " Modern materials from the fields of IT and computer science.",

    // Statistics Section
    statsNaslov: "IUT Travnik in Numbers",
    statsOpis: "The International University of Travnik provides quality education with modern study programs and international cooperation.",
    statCard1Tekst: "Students",
    statCard2Tekst: "Faculties",
    statCard3Tekst: "Study Programs",
    statCard4Tekst: "Partner Universities",

    // Footer
    footerMiniPocetna: "Home",
    footerMiniStudenti: "Students",
    footerMiniErasmus: "Erasmus+",
    footerStudSluzba: "Student Services: +387 (30) 509 682",
    footerUniverzitet: "International University of Travnik",
    footerUniverzitetOpis: "University portal with an overview of faculties, student information, Erasmus+ programs, and news.",
    footerPrijava: "Apply for Studies",
    footerPortalNaslov: "Portal",
    footerLinkPocetna: "Home",
    footerLinkStudenti: "Students",
    footerLinkFakulteti: "Faculties",
    footerMedjunarodnoNaslov: "International",
    footerLinkErasmus: "Erasmus+",
    footerLinkGalerija: "Gallery",
    footerVodic: "Student Guide",
    footerKontaktNaslov: "Contact",
    footerAdresaLink: "Aleja Konzula – Meljanac bb",
    footerGrad: "Travnik, BiH",
    footerKontaktNaslov2: "Contact Information",
    footerAdresaNaslov: "Address",
    footerAdresaTxt: "Aleja Konzula – Meljanac bb, Travnik",
    footerTelefonNaslov: "Phone",
    footerEmailNaslov: "Email",
    footerInfoNaslov: "Info Center",
    footerInfoOpis: "Information for future and current students",
    footerCopyright: "© 2026 International University of Travnik"
  }
};

const langToggle = document.getElementById("langToggle");
let trenutniJezik = localStorage.getItem("iut_jezik") || "bs";

function primijeniJezik(jezik) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const kljuc = element.getAttribute("data-key");
    if (prevodi[jezik] && prevodi[jezik][kljuc]) {
      element.textContent = prevodi[jezik][kljuc];
    }
  });

  if (langToggle) {
    langToggle.textContent = jezik === "bs" ? "EN" : "BS";
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    trenutniJezik = trenutniJezik === "bs" ? "en" : "bs";
    localStorage.setItem("iut_jezik", trenutniJezik); 
    primijeniJezik(trenutniJezik); 
  });
}

primijeniJezik(trenutniJezik);