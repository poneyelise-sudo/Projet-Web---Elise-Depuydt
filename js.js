function montrerBoutonsPro() {
    document.getElementById("professionnel").style.display = "block";
    document.getElementById("personnel").style.display = "none";
}

function montrerBoutonsPerso() {
    document.getElementById("personnel").style.display = "block";
    document.getElementById("professionnel").style.display = "none";
}

function cacherTout() {
    const sections = [
        "coloniesCLV",
        "coloniesCIE",
        "coloniesCCGPF",
        "coloniesP4S",
        "USA",
        "manuelles",
        "equitation"
    ];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if(el){
            el.style.display = "none";
        }
    });
}

function montrerSection(id){
    cacherTout();
    document.getElementById(id).style.display = "table";
}

document.addEventListener("DOMContentLoaded", () => {

    cacherTout(); // tout cacher au chargement

    const descriptions = {
        "couture.jpeg": "De la couture ; ici il s'agit d'un sac pour ranger mes guêtres.",
        "animaux.jpg": "Une année entourée d'animaux ; chiens, chevaux, vaches, chêvres...",
        "broderie.jpeg": "De la broderie ; réalisation d'un tote bag au point de croix.",
        "cadre.jpg": "Des cadres ; ici il s'agit d'un cadeau pour mon papa.",
        "ccgpf.jpeg": "Voici l'équipe d'animation à fond !",
        "depart.jpeg": "Jour du grand départ pour une année aux Etats-Unis.",
        "ecole.jpg": "Devant mon lycée aux Etats-Unis 'Crescent public school.'",
        "jeune.jpg": "Cavalière depuis toujours.",
        "P4S.jpg": "Kira et son poney, mes débuts dans l'animation",
        "plage.jpeg": "La plage à cheval, un rêve devenu possible grâce aux études en Bretagne.",
        "roumanie.jpeg": "Visite d'une grotte Roumaine.",
        "thales.jpeg": "Rallye photo dans la ville de Sainte-Eulalie-d’Olt."
    };

    const zone = document.getElementById("description-text");

    document.addEventListener("click",(e)=>{
        if(e.target.tagName === "IMG"){
            const nom = e.target.src.split("/").pop();
            zone.textContent = descriptions[nom] || "Aucune description disponible.";
        }
    });

});