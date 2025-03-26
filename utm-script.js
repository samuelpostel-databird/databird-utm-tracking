// Logs d'initialisation
console.log("[UTM Tracking] Script chargé à", new Date().toISOString());

// Configuration des UTMs par défaut
const DEFAULT_UTMS = {
  utm_source: 'website',
  utm_medium: 'unknown_page',
  utm_campaign: 'general',
  utm_content: 'cta_formulaire',
  utm_term: ''
};

// Configuration complète des UTMs par page
const PAGE_UTM_CONFIG = {
  '/': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'homepage'
  },
  '/formation-data-analyst': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_analytics_generaliste'
  },
  '/formation-data-analyst/paris': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_analytics_paris'
  },
  '/formation-data-analyst/a-distance': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_analytics_distance'
  },
  '/formation-data-analyst/champion': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_analytics_champion'
  },
  '/formation-data-analyst/essentials': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_analytics_essentials'
  },
  '/formation-data-scientist': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_scientist_generaliste'
  },
  '/formation-data-scientist/champion': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_scientist_champion'
  },
  '/formation-data-engineer': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_engineer_generaliste'
  },
  '/formation-data-engineer/analytics-engineer-databird-datagen': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'analytics_engineer'
  },
  '/formation-gen-ai': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'gen_ai'
  },
  '/offre-entreprise': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'offre_entreprise'
  },
  '/formation/excel': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_excel'
  },
  '/formation/power-bi': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_powerbi'
  },
  '/formation/google-sheets': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_google_sheets'
  },
  '/formation/looker-studio': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_looker_studio'
  },
  '/formation/python': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_python'
  },
  '/formation/sql': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_sql'
  },
  '/formation/tableau-software': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'outils_tableau'
  },
  '/certification/excel': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'certification_excel'
  },
  '/certification/power-bi': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'certification_powerbi'
  },
  '/campus/': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'data_analyst_distance'
  },
  '/cours-gratuit/': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'cours_gratuit_général'
  },
  '/cours-gratuit/les-bases-de-sql-a-ta-portee': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'cours_gratuit_sql'
  },
  '/cours-gratuit/dbt': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'cours_gratuit_dbt'
  },
  '/cours-gratuit/excel': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'cours_gratuit_excel'
  },
  '/cours-gratuit/le-jargon-de-la-data': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'cours_gratuit_acculturation_data'
  },
  '/qui-sommes-nous': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'qui_sommes_nous'
  },
  '/parrainage': {
    utm_source: 'website',
    utm_medium: 'referral',
    utm_campaign: 'parrainage'
  },
  '/faq': {
    utm_source: 'website',
    utm_medium: 'organic_search',
    utm_campaign: 'faq'
  },
  '/c/google/formation-databird': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/formation-data-analyst-temps-partiel': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/formation-sql-databird': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-excel-certifiante': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/formation-data-analyst-temps-plein': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-paris-v2': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-paris': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/formation-certifiante-power-bi': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-power-bi-certifiante-v2': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-power-bi-certifiante': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/partenariat-malt-x-databird': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-a-distance': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-engineer': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/formation-tableau-software-databird': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-tableau-software': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-sql': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-toulouse': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-lille': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-lyon': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-nantes': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-nice': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-rennes': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-grenoble': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-marseille': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-montpellier': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-strasbourg': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/google/formation-data-analyst-bordeaux': {
    utm_source: 'google',
    utm_medium: 'paid_search',
    utm_campaign: ''
  },
  '/c/meta/data-recrutement-quel-marche-en-2024': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/data-analyst-preparer-son-entretien-dembauche': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/salaire-data-analyst': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/montees-en-competences': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/reconversion': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/data-essentials': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/formation-data-analyst': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/activation/offre-noel-databird-2024': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/reconversion-recherche-demploi': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  },
  '/c/meta/data-ia-report': {
    utm_source: 'facebook',
    utm_medium: 'paid_social',
    utm_campaign: ''
  }
};

// Fonction pour obtenir les UTMs correspondant au chemin actuel
function getPathUtms(path) {
  console.log("[UTM Tracking] Analyse du chemin:", path);
  
  // Cas spécial pour les pages campus
  if (path.startsWith('/campus/') && path !== '/campus/') {
    const cityName = path.split('/').pop();
    console.log("[UTM Tracking] Page campus détectée pour:", cityName);
    return {
      ...DEFAULT_UTMS,
      utm_source: 'website',
      utm_medium: 'organic_search',
      utm_campaign: `data_analyst_distance_${cityName}`,
      utm_content: 'cta_formulaire' 
    };
  }
  
  // Vérification directe dans la configuration
  if (PAGE_UTM_CONFIG[path]) {
    console.log("[UTM Tracking] Configuration trouvée pour le chemin actuel");
    return {...DEFAULT_UTMS, ...PAGE_UTM_CONFIG[path]};
  }
  
  // Valeurs par défaut si aucune correspondance
  console.log("[UTM Tracking] Aucune configuration spécifique trouvée, utilisation des valeurs par défaut");
  return {...DEFAULT_UTMS};
}

// Fonction pour obtenir les UTMs de l'URL
function getUrlUtms() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
    if (urlParams.has(param)) utmParams[param] = urlParams.get(param);
  });
  
  if (Object.keys(utmParams).length > 0) {
    console.log("[UTM Tracking] UTMs trouvés dans l'URL:", utmParams);
  } else {
    console.log("[UTM Tracking] Aucun UTM trouvé dans l'URL");
  }
  
  return utmParams;
}

// Fonction pour obtenir les UTMs finaux
function getFinalUtms() {
  console.log("[UTM Tracking] Calcul des UTMs finaux...");
  
  const storedUtms = JSON.parse(sessionStorage.getItem('initialUtms') || 'null');
  const urlUtms = getUrlUtms();
  const pathUtms = getPathUtms(window.location.pathname);
  
  // Priorité: 1. UTMs stockés 2. UTMs d'URL 3. UTMs du chemin
  if (storedUtms) {
    console.log("[UTM Tracking] Utilisation des UTMs stockés en session:", storedUtms);
    return storedUtms;
  } else if (Object.keys(urlUtms).length > 0) {
    const finalUtms = {...pathUtms, ...urlUtms};
    sessionStorage.setItem('initialUtms', JSON.stringify(finalUtms));
    console.log("[UTM Tracking] UTMs de l'URL enregistrés en session:", finalUtms);
    return finalUtms;
  } else {
    console.log("[UTM Tracking] Utilisation des UTMs basés sur le chemin:", pathUtms);
    return pathUtms;
  }
}

// Fonction pour ajouter les UTMs au formulaire
function addUtmsToForm(form) {
  if (!form) {
    console.log("[UTM Tracking] Aucun formulaire trouvé pour ajouter les UTMs");
    return;
  }
  
  console.log("[UTM Tracking] Ajout des UTMs au formulaire:", form);
  const utmParams = getFinalUtms();
  
  for (const [key, value] of Object.entries(utmParams)) {
    let input = form.querySelector(`input[name="${key}"]`);
    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      form.appendChild(input);
      console.log(`[UTM Tracking] Champ ${key} créé avec la valeur: ${value}`);
    } else {
      console.log(`[UTM Tracking] Champ ${key} existant mis à jour avec la valeur: ${value}`);
    }
    input.value = value;
  }
}

// Fonction pour trouver le formulaire
function findForm(container) {
  if (!container) {
    console.log("[UTM Tracking] Aucun conteneur de formulaire trouvé");
    return null;
  }
  
  // Recherche dans le conteneur direct
  const directForm = container.querySelector('form');
  if (directForm) {
    console.log("[UTM Tracking] Formulaire direct trouvé");
    return directForm;
  }
  
  // Recherche dans les iframes
  const iframes = container.querySelectorAll('iframe');
  console.log(`[UTM Tracking] Recherche dans ${iframes.length} iframes`);
  
  for (let iframe of iframes) {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        const iframeForm = iframeDoc.querySelector('form');
        if (iframeForm) {
          console.log("[UTM Tracking] Formulaire trouvé dans iframe");
          return iframeForm;
        }
      }
    } catch (e) {
      console.log("[UTM Tracking] Erreur d'accès à l'iframe (même origine):", e.message);
    }
  }
  
  // Fallback sur les éléments qui ressemblent à des formulaires
  const hsForm = container.querySelector('.hs-form');
  if (hsForm) {
    console.log("[UTM Tracking] Formulaire HubSpot (.hs-form) trouvé");
    return hsForm;
  }
  
  console.log("[UTM Tracking] Aucun formulaire trouvé après recherche approfondie");
  return null;
}

// Fonction pour traiter le planificateur de réunions HubSpot
function processMeetingsWidget() {
  const widget = document.querySelector('.meetings-iframe-container iframe');
  if (!widget) {
    console.log("[UTM Tracking] Aucun widget de réunions trouvé");
    return false;
  }
  
  console.log("[UTM Tracking] Widget de réunions HubSpot trouvé");
  const utms = getFinalUtms();
  const url = new URL(widget.src);
  
  for (const [key, value] of Object.entries(utms)) {
    url.searchParams.set(key, value);
  }
  
  console.log("[UTM Tracking] URL du widget mise à jour:", url.toString());
  widget.src = url.toString();
  return true;
}

// Fonction principale pour gérer les formulaires
function processForm() {
  console.log("[UTM Tracking] Recherche et traitement des formulaires...");
  
  // Vérifier d'abord si nous avons un widget de réunions
  if (processMeetingsWidget()) {
    console.log("[UTM Tracking] Widget de réunions traité avec succès");
    return;
  }
  
  // Sinon chercher le formulaire HubSpot
  const container = document.querySelector('[data-hubspot-form-container="true"]');
  if (container) {
    console.log("[UTM Tracking] Conteneur HubSpot trouvé");
  } else {
    console.log("[UTM Tracking] Aucun conteneur HubSpot trouvé");
  }
  
  const form = findForm(container);
  
  if (form) {
    console.log("[UTM Tracking] Formulaire trouvé, ajout des UTMs");
    addUtmsToForm(form);
    
    // S'assurer que les UTMs sont toujours présents lors de la soumission
    if (!form._utmListenerAdded) {
      form.addEventListener('submit', () => {
        console.log("[UTM Tracking] Soumission de formulaire détectée, réapplication des UTMs");
        addUtmsToForm(form);
      });
      form._utmListenerAdded = true;
      console.log("[UTM Tracking] Écouteur d'événement de soumission ajouté au formulaire");
    }
  } else {
    console.log("[UTM Tracking] Aucun formulaire trouvé pour le moment");
  }
}

// Fonction d'initialisation avec une approche progressive
function init() {
  console.log("[UTM Tracking] Initialisation du système de suivi UTM");
  
  // Première tentative immédiate
  processForm();
  
  // Tentatives additionnelles à différents intervalles
  [1000, 2000, 3000, 5000].forEach(delay => {
    setTimeout(() => {
      console.log(`[UTM Tracking] Nouvelle tentative après ${delay}ms`);
      processForm();
    }, delay);
  });
  
  // Observer les modifications du DOM
  console.log("[UTM Tracking] Configuration de l'observateur de mutations DOM");
  const observer = new MutationObserver((mutations) => {
    console.log(`[UTM Tracking] ${mutations.length} mutations DOM détectées, vérification des formulaires`);
    processForm();
  });
  
  // Observer le body pour les changements dynamiques
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  // Arrêter l'observation après 30 secondes pour économiser des ressources
  setTimeout(() => {
    console.log("[UTM Tracking] Arrêt de l'observateur de mutations après 30s");
    observer.disconnect();
  }, 30000);
}

// Démarrer quand le DOM est prêt
if (document.readyState !== 'loading') {
  console.log("[UTM Tracking] DOM déjà prêt, initialisation immédiate");
  init();
} else {
  console.log("[UTM Tracking] En attente du chargement du DOM complet");
  document.addEventListener('DOMContentLoaded', () => {
    console.log("[UTM Tracking] Événement DOMContentLoaded déclenché, initialisation");
    init();
  });
}

// Log final
console.log("[UTM Tracking] Script de suivi UTM complètement chargé");
