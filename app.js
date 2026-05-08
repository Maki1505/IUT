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
    // === NAVIGACIJA ===
    navPocetna: "Početna",
    navStudenti: "Studenti",
    navFakulteti: "Fakulteti",
    navErasmus: "Erasmus+",
    navGalerija: "Galerija",
    btnKonkurs: "Konkurs za upis",
    
    // === INDEX.HTML PREVODI ===
    heroTag: "🎓 Akademska zajednica · Erasmus+ · Fakulteti · Studijski programi",
    heroNaslov: "Internacionalni univerzitet Travnik",
    heroOpis: "Moderan univerzitetski portal sa pregledom fakulteta, studentskih informacija, međunarodne saradnje i aktuelnosti na jednom mjestu.",
    btnPregled: "Pregled fakulteta",
    btnUpis: "Upis studenata",
    stat1Broj: "7+",
    stat1Opis: "Fakulteta i akademskih oblasti",
    stat2Broj: "Erasmus+",
    stat2Opis: "Međunarodna saradnja i mobilnost",
    stat3Broj: "3 ciklusa",
    stat3Opis: "Osnovni, master i doktorski studij",
    stat4Broj: "2025/26",
    stat4Opis: "Aktuelne informacije za studente",
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
    campusNaslov: "Studentski život na IUT Travnik",
    campusOpis: "Studiranje na Internacionalnom Univerzitetu Travnik nije samo obrazovanje, već i iskustvo koje uključuje međunarodnu saradnju, projekte, druženje i razvoj profesionalnih vještina.",
    campusAktivnosti: "Studentske aktivnosti",
    campusPrice: "Studentske priče",
    campusKampus: "Studentski kampus",
    campusSaradnja: "Međunarodna saradnja",
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
    statsNaslov: "IUT Travnik u brojkama",
    statsOpis: "Internacionalni univerzitet Travnik pruža kvalitetno obrazovanje uz savremene studijske programs i međunarodnu saradnju.",
    statCard1Tekst: "Studenata",
    statCard2Tekst: "Fakulteta",
    statCard3Tekst: "Studijskih programa",
    statCard4Tekst: "Partnerskih univerziteta",

    // === STUDENTI.HTML PREVODI ===
    studentiHeroNaslov: "Studenti",
    ciklus1Naslov: "Upis studenata na I ciklus studija",
    ciklus1Opis: "Univerzitet upisuje studente na osnovu Odluke o upisu uz saglasnost nadležnog ministarstva koja sadrži broj redovnih studenata, broj vanrednih studenata, broj stranih državljana i broj studenata za učenje na daljinu ukoliko su traženi zahtjevom i odobreni odlukom.",
    pravoPrijavaNaslov: "Pravo na prijavu",
    pravoPrijavaOpis: "Pravo na prijavu konkursa za upis u prvu godinu studija imaju kandidati koji imaju završenu srednju četverogodišnju školu.",
    dokCiklus1Naslov: "Dokumenti potrebni za upis",
    dok1_1: "Molba za upis na I ciklus studija",
    dok1_2: "Diploma o završenoj srednjoj školi",
    dok1_3: "Svjedočanstva od 1. do 4. razreda srednje škole",
    dok1_4: "Rješenje o nostrifikaciji obrazovne isprave",
    dok1_5: "Uvjerenje o položenim ispitima (za studente koji prelaze)",
    dok1_6: "Ovjeren nastavni plan i program",
    dok1_7: "Izvod iz matične knjige rođenih",
    dok1_8: "Uvjerenje o državljanstvu",
    dok1_9: "Dvije fotografije 6x4",
    ciklus2Naslov: "Upis studenata na II ciklus studija",
    ciklus2Opis: "Pravo na prijavu konkursa za upis na II ciklus studija imaju kandidati koji imaju završen odgovarajući dodiplomski studij sa 180 ili 240 ECTS bodova.",
    dokCiklus2Naslov: "Dokumenti potrebni za upis",
    dok2_1: "Molba za upis na II ciklus studija",
    dok2_2: "Diploma i dodatak diplomi",
    dok2_3: "Rješenje o nostrifikaciji obrazovne isprave",
    dok2_4: "Uvjerenje o položenim ispitima",
    dok2_5: "Biografija (CV)",
    dok2_6: "Izvod iz matične knjige rođenih",
    dok2_7: "Uvjerenje o državljanstvu",
    dok2_8: "Dvije fotografije 6x4",
    ciklus3Naslov: "Upis studenata na III ciklus studija",
    ciklus3Opis: "Pravo na prijavu konkursa za upis na III ciklus studija imaju kandidati koji imaju završen magistarski studij sa najmanje 300 ECTS bodova.",
    dokCiklus3Naslov: "Dokumenti potrebni za upis",
    dok3_1: "Molba za upis na III ciklus studija",
    dok3_2: "Obrasci (0,1,2 i 3)",
    dok3_3: "Biografija (CV)",
    dok3_4: "Diploma i dodatak diplomi",
    dok3_5: "Rješenje o nostrifikaciji",
    dok3_6: "Uvjerenje o položenim ispitima",
    dok3_7: "Izvod iz matične knjige rođenih",
    dok3_8: "Uvjerenje o državljanstvu",
    dok3_9: "Dvije fotografije 6x4",
    dok3_10: "Certifikat o poznavanju engleskog jezika",

    // === FOOTER PREVODI ===
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
    // === NAVIGATION ===
    navPocetna: "Home",
    navStudenti: "Students",
    navFakulteti: "Faculties",
    navErasmus: "Erasmus+",
    navGalerija: "Gallery",
    btnKonkurs: "Enrollment Call",
    
    // === INDEX.HTML TRANSLATIONS ===
    heroTag: "🎓 Academic Community · Erasmus+ · Faculties · Study Programs",
    heroNaslov: "International University of Travnik",
    heroOpis: "A modern university portal providing an overview of faculties, student information, international cooperation, and news all in one place.",
    btnPregled: "Overview of Faculties",
    btnUpis: "Student Enrollment",
    stat1Broj: "7+",
    stat1Opis: "Faculties and academic areas",
    stat2Broj: "Erasmus+",
    stat2Opis: "International cooperation and mobility",
    stat3Broj: "3 cycles",
    stat3Opis: "Bachelor, Master, and Doctoral studies",
    stat4Broj: "2025/26",
    stat4Opis: "Current information for students",
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
    campusNaslov: "Student Life at IUT Travnik",
    campusOpis: "Studying at the International University of Travnik is not just about education, but an experience that includes international cooperation, projects, socializing, and professional skills development.",
    campusAktivnosti: "Student Activities",
    campusPrice: "Student Stories",
    campusKampus: "Student Campus",
    campusSaradnja: "International Cooperation",
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
    statsNaslov: "IUT Travnik in Numbers",
    statsOpis: "The International University of Travnik provides quality education with modern study programs and international cooperation.",
    statCard1Tekst: "Students",
    statCard2Tekst: "Faculties",
    statCard3Tekst: "Study Programs",
    statCard4Tekst: "Partner Universities",

    // === STUDENTI.HTML TRANSLATIONS ===
    studentiHeroNaslov: "Students",
    ciklus1Naslov: "Enrollment in the 1st cycle of studies",
    ciklus1Opis: "The University enrolls students based on the Enrollment Decision with the consent of the competent ministry, which includes the number of full-time students, part-time students, foreign citizens, and distance learning students if requested and approved.",
    pravoPrijavaNaslov: "Right to Apply",
    pravoPrijavaOpis: "Candidates who have completed a four-year high school have the right to apply for enrollment in the first year of studies.",
    dokCiklus1Naslov: "Documents required for enrollment",
    dok1_1: "Application for enrollment in the 1st cycle of studies",
    dok1_2: "High school diploma",
    dok1_3: "Certificates from the 1st to 4th grade of high school",
    dok1_4: "Decision on the nostrification of an educational document",
    dok1_5: "Certificate of passed exams (for transferring students)",
    dok1_6: "Certified curriculum and syllabus",
    dok1_7: "Birth certificate",
    dok1_8: "Certificate of citizenship",
    dok1_9: "Two photographs 6x4",
    ciklus2Naslov: "Enrollment in the 2nd cycle of studies",
    ciklus2Opis: "Candidates who have completed an appropriate undergraduate study with 180 or 240 ECTS credits have the right to apply for enrollment in the 2nd cycle.",
    dokCiklus2Naslov: "Documents required for enrollment",
    dok2_1: "Application for enrollment in the 2nd cycle of studies",
    dok2_2: "Diploma and diploma supplement",
    dok2_3: "Decision on the nostrification of an educational document",
    dok2_4: "Certificate of passed exams",
    dok2_5: "Biography (CV)",
    dok2_6: "Birth certificate",
    dok2_7: "Certificate of citizenship",
    dok2_8: "Two photographs 6x4",
    ciklus3Naslov: "Enrollment in the 3rd cycle of studies",
    ciklus3Opis: "Candidates who have completed a master's degree with at least 300 ECTS credits have the right to apply for enrollment in the 3rd cycle.",
    dokCiklus3Naslov: "Documents required for enrollment",
    dok3_1: "Application for enrollment in the 3rd cycle of studies",
    dok3_2: "Forms (0, 1, 2, and 3)",
    dok3_3: "Biography (CV)",
    dok3_4: "Diploma and diploma supplement",
    dok3_5: "Decision on nostrification",
    dok3_6: "Certificate of passed exams",
    dok3_7: "Birth certificate",
    dok3_8: "Certificate of citizenship",
    dok3_9: "Two photographs 6x4",
    dok3_10: "English language proficiency certificate",

    // === FOOTER TRANSLATIONS ===
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

// Selektujemo dugme
const langToggle = document.getElementById("langToggle");

// Učitavamo jezik iz memorije (ako postoji), inače koristimo bosanski
let trenutniJezik = localStorage.getItem("iut_jezik") || "bs";

// Glavna funkcija za promjenu prevoda
function primijeniJezik(jezik) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const kljuc = element.getAttribute("data-key");
    if (prevodi[jezik] && prevodi[jezik][kljuc]) {
      element.textContent = prevodi[jezik][kljuc];
    }
  });

  // Ažuriramo tekst na dugmetu
  if (langToggle) {
    langToggle.textContent = jezik === "bs" ? "EN" : "BS";
  }
}

// Osluškivač klika na dugme
if (langToggle) {
  langToggle.addEventListener("click", () => {
    trenutniJezik = trenutniJezik === "bs" ? "en" : "bs";
    localStorage.setItem("iut_jezik", trenutniJezik); 
    primijeniJezik(trenutniJezik); 
  });
}

// Primijeni prevode odmah pri učitavanju skripte
primijeniJezik(trenutniJezik);