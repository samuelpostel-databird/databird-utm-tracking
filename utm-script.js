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
  '/activation/offre-data-ia': {
    utm_source: '',
    utm_medium: '',
    utm_campaign: 'OP_Avril_2025_losts'
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
  // Cas spécial pour les pages campus
  if (path.startsWith('/campus/') && path !== '/campus/') {
    const cityName = path.split('/').pop();
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
    return {...DEFAULT_UTMS, ...PAGE_UTM_CONFIG[path]};
  }
  
  // Valeurs par défaut si aucune correspondance
  return {...DEFAULT_UTMS};
}

// Fonction pour obtenir les UTMs de l'URL
function getUrlUtms() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
    if (urlParams.has(param)) utmParams[param] = urlParams.get(param);
  });
  return utmParams;
}

// Fonction pour obtenir les UTMs finaux
function getFinalUtms() {
  const storedUtms = JSON.parse(sessionStorage.getItem('initialUtms') || 'null');
  const urlUtms = getUrlUtms();
  const pathUtms = getPathUtms(window.location.pathname);
  
  // Priorité: 1. UTMs stockés 2. UTMs d'URL 3. UTMs du chemin
  if (storedUtms) {
    return storedUtms;
  } else if (Object.keys(urlUtms).length > 0) {
    const finalUtms = {...pathUtms, ...urlUtms};
    sessionStorage.setItem('initialUtms', JSON.stringify(finalUtms));
    return finalUtms;
  } else {
    return pathUtms;
  }
}

// Fonction pour ajouter les UTMs au formulaire
function addUtmsToForm(form) {
  if (!form) return;
  
  const utmParams = getFinalUtms();
  
  for (const [key, value] of Object.entries(utmParams)) {
    let input = form.querySelector(`input[name="${key}"]`);
    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      form.appendChild(input);
    }
    input.value = value;
  }
}

// Fonction pour trouver le formulaire
function findForm(container) {
  if (!container) return null;
  
  // Recherche dans le conteneur direct
  const directForm = container.querySelector('form');
  if (directForm) return directForm;
  
  // Recherche dans les iframes
  const iframes = container.querySelectorAll('iframe');
  for (let iframe of iframes) {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        const iframeForm = iframeDoc.querySelector('form');
        if (iframeForm) return iframeForm;
      }
    } catch (e) {
      // Erreur de même origine, on continue
    }
  }
  
  // Fallback sur les éléments qui ressemblent à des formulaires
  return container.querySelector('.hs-form');
}

// Fonction pour traiter le planificateur de réunions HubSpot
function processMeetingsWidget() {
  const widget = document.querySelector('.meetings-iframe-container iframe');
  if (!widget) return false;
  
  const utms = getFinalUtms();
  const url = new URL(widget.src);
  
  for (const [key, value] of Object.entries(utms)) {
    url.searchParams.set(key, value);
  }
  
  widget.src = url.toString();
  return true;
}

// Fonction principale pour gérer les formulaires
function processForm() {
  // Vérifier d'abord si nous avons un widget de réunions
  if (processMeetingsWidget()) return;
  
  // Sinon chercher le formulaire HubSpot
  const container = document.querySelector('[data-hubspot-form-container="true"]');
  const form = findForm(container);
  
  if (form) {
    addUtmsToForm(form);
    
    // S'assurer que les UTMs sont toujours présents lors de la soumission
    if (!form._utmListenerAdded) {
      form.addEventListener('submit', () => addUtmsToForm(form));
      form._utmListenerAdded = true;
    }
  }
}

// Fonction d'initialisation avec une approche progressive
function init() {
  // Première tentative immédiate
  processForm();
  
  // Tentatives additionnelles à différents intervalles
  [1000, 2000, 3000, 5000].forEach(delay => {
    setTimeout(processForm, delay);
  });
  
  // Observer les modifications du DOM
  const observer = new MutationObserver(() => processForm());
  
  // Observer le body pour les changements dynamiques
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  // Arrêter l'observation après 30 secondes pour économiser des ressources
  setTimeout(() => observer.disconnect(), 30000);
}

// Démarrer quand le DOM est prêt
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
