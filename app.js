
// OTVARANJE I ZATVARANJE MENIJA (HAMBURGER)



const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Sigurnosna provjera: kod se izvršava samo ako oba elementa zaista postoje na stranici
if (menuToggle && mainNav) {
  // Dodajemo 'osluškivač' za klik na hamburger dugme
  menuToggle.addEventListener("click", () => {
    // ako meni nema klasu "open", ona je doda. Ako je ima, ona je obriše.
    mainNav.classList.toggle("open");
    
    //  Ako meni sada ima klasu "open", promijeni tekst dugmeta u iksik (✕). 
    // Ako nema, vrati na hamburger ikonicu (☰).
    menuToggle.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
  });
}


//  AUTOMATSKO ZATVARANJE MENIJA NA KLIK LINKA


// Selektujemo sve linkove unutar navigacije i prolazimo kroz njih jedan po jedan (forEach)
document.querySelectorAll(".nav-link").forEach((link) => {
  // Svakom linku dodajemo osluškivač klika
  link.addEventListener("click", () => {
    // Kada korisnik klikne na neki link, želimo da sklonimo meni sa ekrana (uklanjamo "open" klasu)
    if (mainNav) {
      mainNav.classList.remove("open");
    }

    // Također, vraćamo ikonicu na dugmetu nazad u hamburger (☰)
    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});


//  OZNAČAVANJE AKTIVNE STRANICE (Korisničko iskustvo - UX)


const currentPage = window.location.pathname.split("/").pop() || "index.html"; // pocetna strana

// Ponovo prolazimo kroz sve linkove u navigaciji
document.querySelectorAll(".nav-link").forEach((link) => {
  // Čitamo kuda taj specifični link vodi
  const linkPage = link.getAttribute("href");
  
  // Prvo obrišemo klasu "active" sa svih linkova
  link.classList.remove("active");

  // Ako se href linka poklapa sa trenutnom stranicom na kojoj smo
  if (linkPage === currentPage) {
    // Tom linku dodajemo klasu "active" (kako bismo ga u CSS-u npr. ofarbali u drugu boju i pokazali korisniku gdje se nalazi)
    link.classList.add("active");
  }
});