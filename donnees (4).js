// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║  POINT INFO CONDUCTEUR 2.0 — DONNÉES HEBDOMADAIRES                           ║
// ║  Dépôt : COMINES | KEOLIS NORD                                               ║
// ║                                                                              ║
// ║  📋 INSTRUCTIONS :                                                           ║
// ║  1. Ouvrez ce fichier avec Notepad ou VS Code                                ║
// ║  2. Modifiez les valeurs entre guillemets "..."                              ║
// ║  3. Enregistrez (Ctrl+S)                                                     ║
// ║  4. C'est tout ! L'application se met à jour automatiquement                 ║
// ║                                                                              ║
// ║  ⚠️  NE PAS MODIFIER la structure (accolades, crochets, virgules)            ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

const DONNEES_PIC = {

    // ═══════════════════════════════════════════════════════════════════════════
    // 📅 PARAMÈTRES GÉNÉRAUX — Modifier chaque semaine
    // ═══════════════════════════════════════════════════════════════════════════
    
    parametres: {
        semaine: "14",                    // Numéro de la semaine
        date_debut: "2026-03-30",         // Date début semaine (AAAA-MM-JJ)
        date_fin: "2026-04-05",           // Date fin semaine
        depot: "Comines",                 // Nom du dépôt
        effectif_total: "146",            // Nombre total de conducteurs
        
        // 📋 PROCHAIN POINT CR — Affiché en grand sur l'accueil
        prochain_point_cr: {
            date: "2026-04-02",           // Date du prochain Point CR (AAAA-MM-JJ)
            heure: "10:00",               // Heure du Point CR
            lieu: "Salle de prise de service"  // Lieu du Point CR
        },
        
        // 🔗 LIEN MKS — Pour les conducteurs en maladie
        lien_mks: "https://my.keolis.com"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // 🎯 DÉFI 100 JOURS SANS ACCIDENT DE TRAVAIL (AT)
    // ═══════════════════════════════════════════════════════════════════════════
    
    defi_100_jours: {
        actif: true,                      // true = affiché, false = masqué
        jours_actuels: 54,                // Nombre de jours sans AT
        date_debut: "2026-02-08"          // Date de début du défi
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // 📊 INDICATEURS KPI — Mettre à jour chaque semaine
    // ═══════════════════════════════════════════════════════════════════════════
    // tendance : "up" (hausse ↑), "down" (baisse ↓), "stable" (=)
    
    kpi: [
        {
            categorie: "securite",
            nom: "Acc. Responsables",
            valeur: 0,
            valeur_semaine_precedente: 0,
            objectif: 0,
            tendance: "stable",
            icone: "fa-car-crash"
        },
        {
            categorie: "securite",
            nom: "Acc. Non Resp.",
            valeur: 0,
            valeur_semaine_precedente: 0,
            objectif: 0,
            tendance: "stable",
            icone: "fa-shield-alt"
        },
        {
            categorie: "securite",
            nom: "Jours sans AT",
            valeur: 54,
            valeur_semaine_precedente: 47,
            objectif: 100,
            tendance: "up",
            icone: "fa-trophy"
        },
        {
            categorie: "qualite",
            nom: "Retards PS",
            valeur: 3,
            valeur_semaine_precedente: 4,
            objectif: 3,
            tendance: "down",
            icone: "fa-clock"
        },
        {
            categorie: "qualite",
            nom: "CNE Exploitation",
            valeur: 1,
            valeur_semaine_precedente: 2,
            objectif: 0,
            tendance: "down",
            icone: "fa-bus"
        },
        {
            categorie: "qualite",
            nom: "Réclamations",
            valeur: 4,
            valeur_semaine_precedente: 5,
            objectif: 3,
            tendance: "down",
            icone: "fa-comment-dots"
        },
        {
            categorie: "qualite",
            nom: "Erreurs SAE",
            valeur: 2,
            valeur_semaine_precedente: 3,
            objectif: 0,
            tendance: "down",
            icone: "fa-tablet-alt"
        },
        {
            categorie: "humain",
            nom: "Effectif présent",
            valeur: 128,
            valeur_semaine_precedente: 124,
            objectif: 146,
            tendance: "up",
            icone: "fa-users"
        },
        {
            categorie: "humain",
            nom: "Absences",
            valeur: 18,
            valeur_semaine_precedente: 22,
            objectif: 15,
            tendance: "down",
            icone: "fa-user-times"
        }
    ],

    // ═══════════════════════════════════════════════════════════════════════════
    // ⚠️ ALERTES & CONSIGNES — Ajouter/Supprimer selon besoin
    // ═══════════════════════════════════════════════════════════════════════════
    // priorite : "critique" (rouge), "urgent" (orange), "normal" (bleu)
    // actif : true = affiché, false = masqué
    
    alertes: [
        {
            priorite: "critique",
            titre: "VH non démarrés — NE PAS PRENDRE",
            description: "Ne pas prendre les véhicules qui ne démarrent pas immédiatement. Signaler à l'exploitation.",
            actif: true
        },
        {
            priorite: "urgent",
            titre: "Rue de Wervicq Bousbecque — INTERDITE",
            description: "Circulation interdite jusqu'à nouvel ordre. Utiliser l'itinéraire alternatif via Rue de Lille.",
            actif: true
        },
        {
            priorite: "normal",
            titre: "Point de régulation L90 modifié",
            description: "Privilégier l'arrêt « Maison Militaire » au lieu de « Agripain ».",
            actif: true
        },
        {
            priorite: "normal",
            titre: "Moteur tournant à l'arrêt = INTERDIT",
            description: "Rappel : couper le moteur lors des arrêts prolongés (éco-conduite + réglementation).",
            actif: true
        }
    ],

    // ═══════════════════════════════════════════════════════════════════════════
    // 🦺 SAFETY MOMENTS — Points sécurité de la semaine
    // ═══════════════════════════════════════════════════════════════════════════
    
    safety_moments: [
        {
            titre: "Port du gilet jaune obligatoire le week-end",
            description: "Rappel : le gilet haute visibilité est obligatoire lors des opérations sur le parc le samedi et dimanche.",
            date: "2026-03-28",
            reactions: 28,
            commentaires: 4,
            actif: true
        },
        {
            titre: "Port du masque si symptômes",
            description: "Si vous ne vous sentez pas bien, portez un masque pour éviter de transmettre vos microbes aux collègues.",
            date: "2026-03-27",
            reactions: 22,
            commentaires: 2,
            actif: true
        },
        {
            titre: "Déclaration systématique des accrochages",
            description: "Tous les accrochages, même mineurs, doivent être déclarés immédiatement. Pas de tolérance sur ce point.",
            date: "2026-03-26",
            reactions: 35,
            commentaires: 6,
            actif: true
        },
        {
            titre: "Nettoyage VH + SAE + Pare-brise",
            description: "Vérifier la propreté du véhicule et du système SAE avant chaque départ. Signaler tout problème.",
            date: "2026-03-25",
            reactions: 19,
            commentaires: 3,
            actif: true
        }
    ],

    // ═══════════════════════════════════════════════════════════════════════════
    // 🎬 VIDÉOS HSE — Liens YouTube à partager
    // ═══════════════════════════════════════════════════════════════════════════
    // nouveau : true = badge "Nouveau" affiché
    // 
    // 🔗 SITE CAP (conduites addictives) : cap.aft-dev.com — vidéos gratuites AFT/CARSAT
    
    videos: [
        {
            titre: "Sécurité KEOLIS — Vidéo 1",
            url: "https://youtu.be/PW28SQtJkNI",
            source: "KEOLIS",
            duree: "Vidéo",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Sécurité KEOLIS — Vidéo 2",
            url: "https://youtu.be/kRx6yBL7XfE",
            source: "KEOLIS",
            duree: "Vidéo",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Sécurité KEOLIS — Vidéo 3",
            url: "https://youtu.be/K31Ch_OSFMI",
            source: "KEOLIS",
            duree: "Vidéo",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Sécurité KEOLIS — Vidéo 4",
            url: "https://youtu.be/b9FphCNDifI",
            source: "KEOLIS",
            duree: "Vidéo",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Sécurité KEOLIS — Vidéo 5",
            url: "https://youtu.be/knG44pjWcKo",
            source: "KEOLIS",
            duree: "Vidéo",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Métier de conducteur KEOLIS — Portrait",
            url: "https://www.youtube.com/watch?v=D058oDmeF5c",
            source: "KEOLIS Groupe",
            duree: "3:00",
            categorie: "Intégration",
            nouveau: false,
            actif: true
        },
        {
            titre: "Prévention conduites addictives — Transport",
            url: "https://cap.aft-dev.com",
            source: "AFT / CARSAT",
            duree: "Parcours",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Fatigue au volant — Les risques",
            url: "https://www.securite-routiere.gouv.fr/dangers-de-la-route/la-fatigue-et-la-conduite",
            source: "Sécurité Routière",
            duree: "Article",
            categorie: "Sécurité",
            nouveau: true,
            actif: true
        },
        {
            titre: "Angles morts bus/cars — Signalisation",
            url: "https://www.securite-routiere.gouv.fr/actualites/les-vehicules-lourds-doivent-desormais-etre-equipes-dune-signalisation-materialisant",
            source: "Sécurité Routière",
            duree: "Article",
            categorie: "Sécurité",
            nouveau: false,
            actif: true
        },
        {
            titre: "TMS et postures sédentaires — Prévention",
            url: "https://www.inrs.fr/risques/tms-troubles-musculosquelettiques/ce-qu-il-faut-retenir.html",
            source: "INRS",
            duree: "Article",
            categorie: "Sécurité",
            nouveau: false,
            actif: true
        },
        {
            titre: "Risques routiers professionnels",
            url: "https://www.inrs.fr/risques/routiers/ce-qu-il-faut-retenir.html",
            source: "INRS",
            duree: "Article",
            categorie: "Sécurité",
            nouveau: false,
            actif: true
        }
    ],

    // ═══════════════════════════════════════════════════════════════════════════
    // 👥 ÉQUIPE EXPLOITATION
    // ═══════════════════════════════════════════════════════════════════════════
    
    equipe: [
        { nom: "PUJOL", prenom: "Khiter", role: "Chef de Centre", email: "khiter.pujol@keolis.com", badge: "chef", couleur: "#E87C1E", actif: true },
        { nom: "EL MOUSSAOUI", prenom: "Samad", role: "Exploitant", email: "samad.el-moussaoui@keolis.com", badge: "exploitant", couleur: "#1976D2", actif: true },
        { nom: "ELIS", prenom: "Théo", role: "Exploitant", email: "theo.elis@keolis.com", badge: "exploitant", couleur: "#1976D2", actif: true },
        { nom: "GACI", prenom: "Hamid", role: "Exploitant", email: "hamid.gaci@keolis.com", badge: "exploitant", couleur: "#1976D2", actif: true },
        { nom: "FOURNIER", prenom: "Alexandre", role: "Exploitant", email: "alexandre.fournier@keolis.com", badge: "exploitant", couleur: "#1976D2", actif: true },
        { nom: "THEVENIN", prenom: "Simon", role: "Exploitant", email: "simon.thevenin@keolis.com", badge: "exploitant", couleur: "#1976D2", actif: true },
        { nom: "ABDESSELEM", prenom: "Zina", role: "Stagiaire", email: "zina.abdesselem@keolis.com", badge: "stagiaire", couleur: "#7B1FA2", actif: true }
    ],

    // ═══════════════════════════════════════════════════════════════════════════
    // 📊 SONDAGES — Questions en cours
    // ═══════════════════════════════════════════════════════════════════════════
    // statut : "actif", "termine"
    
    sondages: [
        {
            question: "Êtes-vous satisfait de la nouvelle salle de pause ?",
            options: [
                { texte: "Très satisfait", votes: 32 },
                { texte: "Satisfait", votes: 26 },
                { texte: "Peu satisfait", votes: 8 },
                { texte: "Pas satisfait", votes: 2 }
            ],
            date_fin: "2026-04-05",
            statut: "actif"
        },
        {
            question: "Quel horaire préférez-vous pour la formation sécurité ?",
            options: [
                { texte: "Matin (8h-10h)", votes: 15 },
                { texte: "Midi (12h-14h)", votes: 28 },
                { texte: "Après-midi (14h-16h)", votes: 9 }
            ],
            date_fin: "2026-04-10",
            statut: "actif"
        }
    ],

    // ═══════════════════════════════════════════════════════════════════════════
    // 💡 SUGGESTIONS — Boîte à idées
    // ═══════════════════════════════════════════════════════════════════════════
    // statut : "nouveau", "en_cours", "traite"
    
    suggestions: [
        {
            auteur: "Jean D.",
            date: "2026-03-23",
            texte: "Serait-il possible d'avoir un distributeur de boissons chaudes dans la salle de pause ?",
            statut: "traite",
            reponse: "Un nouveau distributeur sera installé la semaine prochaine.",
            date_reponse: "2026-03-25"
        },
        {
            auteur: "Marie L.",
            date: "2026-03-21",
            texte: "Les horaires d'affichage du planning pourraient être plus tôt dans la semaine.",
            statut: "en_cours",
            reponse: "Nous étudions la possibilité d'avancer la publication des plannings.",
            date_reponse: "2026-03-24"
        },
        {
            auteur: "Pierre B.",
            date: "2026-03-28",
            texte: "Les toilettes du terminus L90 Maison Militaire nécessitent une rénovation.",
            statut: "nouveau",
            reponse: "",
            date_reponse: ""
        }
    ]

};

// ═══════════════════════════════════════════════════════════════════════════════
// ⛔ NE PAS MODIFIER CI-DESSOUS — Code technique
// ═══════════════════════════════════════════════════════════════════════════════
if (typeof window !== 'undefined') {
    window.DONNEES_PIC = DONNEES_PIC;
}
