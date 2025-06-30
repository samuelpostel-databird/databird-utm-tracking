// ✅ Script UTM complet prêt à héberger sur GitHub

// 1. Configuration globale des UTMs par page
window.PAGE_UTM_CONFIG = {
  '/': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'homepage' },
  '/formation-data-analyst': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_generaliste' },
  '/formation-data-analyst/paris': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_paris' },
  '/formation-data-analyst/a-distance': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_distance' },
  '/formation-data-analyst/champion': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_champion' },
  '/formation-data-analyst/essentials': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_essentials' },
  '/formation-data-scientist': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_scientist_generaliste' },
  '/formation-data-scientist/champion': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_scientist_champion' },
  '/formation-data-engineer': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_engineer_generaliste' },
  '/formation-data-engineer/analytics-engineer-databird-datagen': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'analytics_engineer' },
  '/formation-data-engineer/data-orchestration': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_orchestration' },
  '/formation-gen-ai': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai' },
  '/offre-entreprise': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'offre_entreprise' },
  '/formation/excel': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_excel' },
  '/formation/power-bi': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_powerbi' },
  '/formation/google-sheets': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_google_sheets' },
  '/formation/looker-studio': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_looker_studio' },
  '/formation/python': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_python' },
  '/formation/sql': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_sql' },
  '/formation/tableau-software': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_tableau' },
  '/certification/excel': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'certification_excel' },
  '/certification/power-bi': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'certification_powerbi' },
  '/campus/': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analyst_distance' },
  '/cours-gratuit/': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'cours_gratuit_général' },
  '/cours-gratuit/les-bases-de-sql-a-ta-portee': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'cours_gratuit_sql' },
  '/cours-gratuit/dbt': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'cours_gratuit_dbt' },
  '/cours-gratuit/excel': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'cours_gratuit_excel' },
  '/cours-gratuit/le-jargon-de-la-data': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'cours_gratuit_acculturation_data' },
  '/qui-sommes-nous': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'qui_sommes_nous' },
  '/parrainage': { utm_source: 'website', utm_medium: 'referral', utm_campaign: 'parrainage' },
  '/faq': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'faq' },
  '/offre-promo-ete-2025': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'OP_ete' },
  '/c/google/formation-databird': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/formation-data-analyst-temps-partiel': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/formation-sql-databird': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-excel-certifiante': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/formation-data-analyst-temps-plein': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-paris-v2': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-paris': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/formation-certifiante-power-bi': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-power-bi-certifiante-v2': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-power-bi-certifiante': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/partenariat-malt-x-databird': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-a-distance': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-engineer': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/formation-tableau-software-databird': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-tableau-software': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-sql': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-toulouse': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-lille': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-lyon': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-nantes': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-nice': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-rennes': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-grenoble': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-marseille': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-montpellier': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-strasbourg': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/google/formation-data-analyst-bordeaux': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/meta/data-recrutement-quel-marche-en-2024': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/data-analyst-preparer-son-entretien-dembauche': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/salaire-data-analyst': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/montees-en-competences': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/reconversion': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/data-essentials': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/formation-data-analyst': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/activation/offre-noel-databird-2024': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/activation/offre-data-ia': { utm_source: '', utm_medium: '', utm_campaign: 'OP_Avril_2025_losts' },
  '/activation/offre-data-ia-alumni-excel': { utm_source: '', utm_medium: '', utm_campaign: 'OP_Avril_2025_alumni_excel' },
  '/activation/offre-data-ia-alumni-dae': { utm_source: '', utm_medium: '', utm_campaign: 'OP_Avril_2025_alumni_dae' },
  '/activation/offre-data-ia-alumni-outils-expert': { utm_source: '', utm_medium: '', utm_campaign: 'OP_Avril_2025_alumni_outils_expert' },
  '/activation/offre-data-ia-alumni-alumni-metiers': { utm_source: '', utm_medium: '', utm_campaign: 'OP_Avril_2025_alumni_alumni_metiers' },
  '/c/meta/reconversion-recherche-demploi': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/data-ia-report': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' }
};


// 2. Script UTM amélioré avec diagnostic
(function(){
  // Paramètres UTM à suivre
  const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  
  // Valeurs UTM par défaut
  const defaultUtms = {
    utm_source: "website",
    utm_medium: "unknown_page",
    utm_campaign: "general",
    utm_content: "cta_formulaire",
    utm_term: ""
  };

  // Récupérer la configuration et le chemin actuel
  const config = window.PAGE_UTM_CONFIG || {};
  const currentPath = window.location.pathname;
  
  // LOGS DE DIAGNOSTIC - DÉBUT
  console.log("=== DIAGNOSTIC UTM ===");
  console.log("Chemin actuel:", currentPath);
  console.log("Configuration disponible pour ce chemin?", config[currentPath] ? "OUI" : "NON");
  
  // Test avec/sans slash final
  const pathWithoutSlash = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
  const pathWithSlash = currentPath.endsWith('/') ? currentPath : currentPath + '/';
  
  console.log("Test chemin sans slash final:", pathWithoutSlash);
  console.log("Configuration pour ce chemin?", config[pathWithoutSlash] ? "OUI" : "NON");
  console.log("Test chemin avec slash final:", pathWithSlash);
  console.log("Configuration pour ce chemin?", config[pathWithSlash] ? "OUI" : "NON");
  // LOGS DE DIAGNOSTIC - FIN
  
  // Fonction améliorée pour trouver la configuration de la page courante
  const getPageConfig = (path) => {
    // Essayer avec le chemin exact
    if (config[path]) {
      console.log("[UTM] Configuration trouvée pour:", path);
      return config[path];
    }
    
    // Essayer avec/sans slash final
    const altPath = path.endsWith('/') ? path.slice(0, -1) : path + '/';
    if (config[altPath]) {
      console.log("[UTM] Configuration trouvée pour chemin alternatif:", altPath);
      return config[altPath];
    }
    
    // Essayer de trouver une correspondance partielle
    const partialMatches = Object.keys(config).filter(configPath => 
      configPath.length > 1 && path.includes(configPath));
    
    if (partialMatches.length > 0) {
      // Prendre la correspondance la plus longue
      const bestMatch = partialMatches.sort((a, b) => b.length - a.length)[0];
      console.log("[UTM] Correspondance partielle trouvée:", bestMatch);
      return config[bestMatch];
    }
    
    console.log("[UTM] Aucune configuration trouvée, utilisant les valeurs par défaut");
    return {};
  };
  
  // Déterminer les UTMs de la page
  let pageUtms;
  if (currentPath.startsWith("/campus/") && currentPath !== "/campus/") {
    // Cas spécial pour les pages campus
    pageUtms = {
      ...defaultUtms,
      utm_source: "website",
      utm_medium: "organic_search",
      utm_campaign: `data_analyst_distance_${currentPath.split("/").pop()}`,
      utm_content: "cta_formulaire"
    };
  } else {
    // Utiliser la fonction améliorée
    pageUtms = {
      ...defaultUtms,
      ...getPageConfig(currentPath)
    };
  }
  
  // Récupérer les UTMs de l'URL
  const getUrlUtms = () => {
    const result = {};
    utmParams.forEach(param => {
      const value = new URLSearchParams(location.search).get(param);
      if (value) {
        result[param] = value;
      }
    });
    return result;
  };
  
  // Fonction pour récupérer les UTMs finaux
  const getUtms = () => {
    const storedUtms = JSON.parse(sessionStorage.getItem("initialUtms") || "null");
    const urlUtms = getUrlUtms();
    const baseUtms = pageUtms;
    
    // Si des UTMs sont présents dans l'URL, les stocker et les utiliser
    if (Object.keys(urlUtms).length > 0) {
      const combinedUtms = { ...baseUtms, ...urlUtms };
      sessionStorage.setItem("initialUtms", JSON.stringify(combinedUtms));
      return combinedUtms;
    }
    
    // Sinon, utiliser les UTMs stockés ou les UTMs de base
    return storedUtms || baseUtms;
  };
  
  // Fonction pour injecter les UTMs dans un formulaire
  const injectUtmsIntoForm = (form) => {
    if (!form) return;
    
    const utms = getUtms();
    console.log("[UTM] Injection dans formulaire:", utms);
    
    // Créer ou mettre à jour les champs UTM cachés
    for (const [key, value] of Object.entries(utms)) {
      let input = form.querySelector(`input[name="${key}"]`);
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        form.appendChild(input);
      }
      input.value = value;
    }
  };
  
  // Fonction pour trouver un formulaire dans un conteneur
  const findForm = (container) => {
    if (!container) return null;
    
    // Rechercher un formulaire directement dans le conteneur
    const directForm = container.querySelector("form");
    if (directForm) return directForm;
    
    // Rechercher dans les iframes
    for (const iframe of container.querySelectorAll("iframe")) {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        const iframeForm = iframeDoc?.querySelector("form");
        if (iframeForm) return iframeForm;
      } catch {}
    }
    
    // Rechercher un formulaire HubSpot
    return container.querySelector(".hs-form");
  };
  
  // Fonction spécifique pour HubSpot Meetings
  const processMeetingsIframe = () => {
    const iframe = document.querySelector(".meetings-iframe-container iframe");
    if (!iframe) return false;
    
    const utms = getUtms();
    const iframeSrc = new URL(iframe.src);
    
    // Ajouter les UTMs à l'URL de l'iframe
    for (const [key, value] of Object.entries(utms)) {
      iframeSrc.searchParams.set(key, value);
    }
    
    iframe.src = iframeSrc.toString();
    console.log("[UTM] Iframe meetings modifié:", iframe.src);
    return true;
  };
  
  // Fonction principale pour traiter les formulaires
  const processFormContainers = () => {
    // Vérifier d'abord l'iframe de meetings
    if (processMeetingsIframe()) return;
    
    // Rechercher un conteneur HubSpot
    const hubspotContainer = document.querySelector('[data-hubspot-form-container="true"]');
    const form = findForm(hubspotContainer);
    
    if (form) {
      injectUtmsIntoForm(form);
      
      // Ajouter un écouteur d'événement de soumission (une seule fois)
      if (!form._utmListenerAdded) {
        form.addEventListener("submit", () => injectUtmsIntoForm(form));
        form._utmListenerAdded = true;
      }
    }
  };
  
  // Fonction pour initialiser le traitement
  const initialize = () => {
    // Traitement initial
    processFormContainers();
    
    // Traiter à nouveau après des délais pour les formulaires chargés dynamiquement
    [1000, 2000, 3000, 5000].forEach(delay => 
      setTimeout(processFormContainers, delay)
    );
    
    // Observer les changements du DOM pour détecter les nouveaux formulaires
    const observer = new MutationObserver(() => processFormContainers());
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Arrêter l'observation après 30 secondes pour économiser des ressources
    setTimeout(() => observer.disconnect(), 30000);
  };
  
  // Lancer l'initialisation selon l'état du document
  if (document.readyState !== "loading") {
    initialize();
  } else {
    document.addEventListener("DOMContentLoaded", initialize);
  }
})();
