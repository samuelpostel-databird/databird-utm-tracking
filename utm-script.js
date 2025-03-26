// =========================================
// SYSTÈME DE LOGS AVANCÉ
// =========================================
function setupLoggingSystem() {
  // Créer le conteneur de logs visibles
  const logContainer = document.createElement('div');
  logContainer.id = 'utm-log-container';
  logContainer.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 350px;
    max-height: 300px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.85);
    color: #00ff00;
    font-family: monospace;
    font-size: 11px;
    padding: 10px;
    border-radius: 5px;
    z-index: 9999999;
    display: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  `;

  const logHeader = document.createElement('div');
// Texte d'aide multiplateforme
  logHeader.textContent = navigator.platform.includes('Mac') 
  ? 'UTM Tracking Logs (⌘+⌥+U pour afficher/masquer)' 
  : 'UTM Tracking Logs (Ctrl+Alt+U pour afficher/masquer)';
  
  const logActions = document.createElement('div');
  logActions.style.cssText = `
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  `;
  
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Effacer';
  clearButton.style.cssText = `
    background: #333;
    color: white;
    border: none;
    padding: 2px 5px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 10px;
  `;
  clearButton.onclick = () => {
    const logContent = document.getElementById('utm-log-content');
    if (logContent) logContent.innerHTML = '';
    localStorage.removeItem('utm_tracking_logs');
  };
  
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copier';
  copyButton.style.cssText = `
    background: #333;
    color: white;
    border: none;
    padding: 2px 5px;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 5px;
    font-size: 10px;
  `;
  copyButton.onclick = () => {
    const logs = JSON.parse(localStorage.getItem('utm_tracking_logs') || '[]');
    const text = logs.map(log => `${new Date(log.timestamp).toLocaleString()} - ${log.message}`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      const copyMsg = document.createElement('div');
      copyMsg.textContent = 'Logs copiés!';
      copyMsg.style.cssText = `
        color: yellow;
        font-size: 10px;
        margin-top: 2px;
        text-align: center;
      `;
      logActions.appendChild(copyMsg);
      setTimeout(() => copyMsg.remove(), 2000);
    });
  };
  
  logActions.appendChild(clearButton);
  logActions.appendChild(copyButton);
  
  const logContent = document.createElement('div');
  logContent.id = 'utm-log-content';
  logContent.style.cssText = `
    max-height: 250px;
    overflow-y: auto;
  `;
  
  logContainer.appendChild(logHeader);
  logContainer.appendChild(logActions);
  logContainer.appendChild(logContent);
  
  // Créer l'indicateur d'état
  const statusIndicator = document.createElement('div');
  statusIndicator.id = 'utm-status-indicator';
  statusIndicator.style.cssText = `
    position: fixed;
    bottom: 5px;
    right: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #999;
    z-index: 9999998;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
  `;
  
  // Cliquer sur l'indicateur affiche aussi les logs
  statusIndicator.onclick = () => {
    logContainer.style.display = logContainer.style.display === 'none' ? 'block' : 'none';
  };
  
  // Ajouter les éléments au DOM
  document.body.appendChild(logContainer);
  document.body.appendChild(statusIndicator);
  
  // Raccourci clavier pour afficher/masquer les logs (compatible Mac et Windows)
document.addEventListener('keydown', (e) => {
  // Pour Mac: Command (metaKey) + Option (altKey) + U
  // Pour Windows/Linux: Ctrl (ctrlKey) + Alt (altKey) + U
  if ((e.metaKey && e.altKey && e.key === 'u') || (e.ctrlKey && e.altKey && e.key === 'u')) {
    logContainer.style.display = logContainer.style.display === 'none' ? 'block' : 'none';
  }
});
  
  // Fonction unifiée pour les logs
  function logMessage(message, level = 'info') {
    // 1. Log dans la console standard
    console.log(`[UTM Tracking] ${message}`);
    
    // 2. Stocker dans localStorage
    const logs = JSON.parse(localStorage.getItem('utm_tracking_logs') || '[]');
    logs.push({
      timestamp: new Date().toISOString(),
      message: message,
      level: level
    });
    
    // Garder seulement les 100 derniers logs
    if (logs.length > 100) logs.shift();
    localStorage.setItem('utm_tracking_logs', JSON.stringify(logs));
    
    // 3. Ajouter au log visuel
    if (document.getElementById('utm-log-content')) {
      const logEntry = document.createElement('div');
      
      // Formater l'heure
      const now = new Date();
      const time = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map(unit => unit.toString().padStart(2, '0'))
        .join(':');
      
      logEntry.innerHTML = `<span style="color:#999;font-size:9px;">${time}</span> ${message}`;
      logEntry.style.borderBottom = '1px dotted #333';
      logEntry.style.paddingBottom = '3px';
      logEntry.style.marginBottom = '3px';
      
      // Coloration selon le niveau
      switch(level) {
        case 'success':
          logEntry.style.color = '#4CAF50';
          break;
        case 'warning':
          logEntry.style.color = '#FFC107';
          break;
        case 'error':
          logEntry.style.color = '#F44336';
          break;
        default:
          logEntry.style.color = '#00ff00';
      }
      
      document.getElementById('utm-log-content').appendChild(logEntry);
      document.getElementById('utm-log-content').scrollTop = document.getElementById('utm-log-content').scrollHeight;
    }
    
    // 4. Mettre à jour l'indicateur visuel (seulement pour changements d'état majeurs)
    if (level !== 'info') {
      updateStatus(level, message);
    }
  }
  
  // Fonction pour mettre à jour l'indicateur d'état
  function updateStatus(status, message) {
    const indicator = document.getElementById('utm-status-indicator');
    if (!indicator) return;
    
    switch(status) {
      case 'success':
        indicator.style.backgroundColor = '#4CAF50';
        break;
      case 'warning':
        indicator.style.backgroundColor = '#FFC107';
        break;
      case 'error':
        indicator.style.backgroundColor = '#F44336';
        break;
      default:
        indicator.style.backgroundColor = '#2196F3';
    }
    
    indicator.title = message;
  }
  
  // Charger les logs existants
  function loadExistingLogs() {
    const logs = JSON.parse(localStorage.getItem('utm_tracking_logs') || '[]');
    const logContent = document.getElementById('utm-log-content');
    
    if (!logContent || logs.length === 0) return;
    
    logContent.innerHTML = '';
    logs.forEach(log => {
      const logEntry = document.createElement('div');
      const logTime = new Date(log.timestamp);
      const time = [logTime.getHours(), logTime.getMinutes(), logTime.getSeconds()]
        .map(unit => unit.toString().padStart(2, '0'))
        .join(':');
      
      logEntry.innerHTML = `<span style="color:#999;font-size:9px;">${time}</span> ${log.message}`;
      logEntry.style.borderBottom = '1px dotted #333';
      logEntry.style.paddingBottom = '3px';
      logEntry.style.marginBottom = '3px';
      
      switch(log.level) {
        case 'success':
          logEntry.style.color = '#4CAF50';
          break;
        case 'warning':
          logEntry.style.color = '#FFC107';
          break;
        case 'error':
          logEntry.style.color = '#F44336';
          break;
        default:
          logEntry.style.color = '#00ff00';
      }
      
      logContent.appendChild(logEntry);
    });
    
    logContent.scrollTop = logContent.scrollHeight;
  }
  
  // Exposer la fonction de logs globalement
  window.utmLog = logMessage;
  
  // Fonction pour afficher les logs dans la console
  window.showUTMLogs = function() {
    const logs = JSON.parse(localStorage.getItem('utm_tracking_logs') || '[]');
    console.table(logs);
    return logs;
  };
  
  // Charger les logs existants
  setTimeout(loadExistingLogs, 500);
  
  logMessage('Système de logs UTM initialisé', 'success');
  
  return logMessage;
}

// Initialiser le système de logs
const log = setupLoggingSystem();

// =========================================
// SCRIPT PRINCIPAL DE TRACKING UTM
// =========================================

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
  log(`Analyse du chemin: ${path}`);
  
  // Cas spécial pour les pages campus
  if (path.startsWith('/campus/') && path !== '/campus/') {
    const cityName = path.split('/').pop();
    log(`Page campus détectée pour: ${cityName}`);
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
    log(`Configuration trouvée pour le chemin actuel: ${path}`, 'success');
    return {...DEFAULT_UTMS, ...PAGE_UTM_CONFIG[path]};
  }
  
  // Valeurs par défaut si aucune correspondance
  log(`Aucune configuration spécifique trouvée pour: ${path}, utilisation des valeurs par défaut`, 'warning');
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
    log(`UTMs trouvés dans l'URL: ${JSON.stringify(utmParams)}`, 'success');
  } else {
    log(`Aucun UTM trouvé dans l'URL`);
  }
  
  return utmParams;
}

// Fonction pour obtenir les UTMs finaux
function getFinalUtms() {
  log(`Calcul des UTMs finaux...`);
  
  const storedUtms = JSON.parse(sessionStorage.getItem('initialUtms') || 'null');
  const urlUtms = getUrlUtms();
  const pathUtms = getPathUtms(window.location.pathname);
  
  // Priorité: 1. UTMs stockés 2. UTMs d'URL 3. UTMs du chemin
  if (storedUtms) {
    log(`Utilisation des UTMs stockés en session: ${JSON.stringify(storedUtms)}`, 'success');
    return storedUtms;
  } else if (Object.keys(urlUtms).length > 0) {
    const finalUtms = {...pathUtms, ...urlUtms};
    sessionStorage.setItem('initialUtms', JSON.stringify(finalUtms));
    log(`UTMs de l'URL enregistrés en session: ${JSON.stringify(finalUtms)}`, 'success');
    return finalUtms;
  } else {
    log(`Utilisation des UTMs basés sur le chemin: ${JSON.stringify(pathUtms)}`);
    return pathUtms;
  }
}

// Fonction pour ajouter les UTMs au formulaire
function addUtmsToForm(form) {
  if (!form) {
    log(`Aucun formulaire trouvé pour ajouter les UTMs`, 'warning');
    return;
  }
  
  log(`Ajout des UTMs au formulaire: ${form.id || 'sans ID'}`);
  const utmParams = getFinalUtms();
  
  for (const [key, value] of Object.entries(utmParams)) {
    let input = form.querySelector(`input[name="${key}"]`);
    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      form.appendChild(input);
      log(`Champ ${key} créé avec la valeur: ${value}`);
    } else {
      log(`Champ ${key} existant mis à jour avec la valeur: ${value}`);
    }
    input.value = value;
  }
  
  log(`UTMs ajoutés au formulaire avec succès`, 'success');
}

// Fonction pour trouver le formulaire
function findForm(container) {
  if (!container) {
    log(`Aucun conteneur de formulaire trouvé`, 'warning');
    return null;
  }
  
  // Recherche dans le conteneur direct
  const directForm = container.querySelector('form');
  if (directForm) {
    log(`Formulaire direct trouvé`, 'success');
    return directForm;
  }
  
  // Recherche dans les iframes
  const iframes = container.querySelectorAll('iframe');
  log(`Recherche dans ${iframes.length} iframes`);
  
  for (let iframe of iframes) {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        const iframeForm = iframeDoc.querySelector('form');
        if (iframeForm) {
          log(`Formulaire trouvé dans iframe`, 'success');
          return iframeForm;
        }
      }
    } catch (e) {
      log(`Erreur d'accès à l'iframe (même origine): ${e.message}`, 'error');
    }
  }
  
  // Fallback sur les éléments qui ressemblent à des formulaires
  const hsForm = container.querySelector('.hs-form');
  if (hsForm) {
    log(`Formulaire HubSpot (.hs-form) trouvé`, 'success');
    return hsForm;
  }
  
  log(`Aucun formulaire trouvé après recherche approfondie`, 'warning');
  return null;
}

// Fonction pour traiter le planificateur de réunions HubSpot
function processMeetingsWidget() {
  const widget = document.querySelector('.meetings-iframe-container iframe');
  if (!widget) {
    log(`Aucun widget de réunions trouvé`);
    return false;
  }
  
  log(`Widget de réunions HubSpot trouvé`);
  const utms = getFinalUtms();
  const url = new URL(widget.src);
  
  for (const [key, value] of Object.entries(utms)) {
    url.searchParams.set(key, value);
  }
  
  log(`URL du widget mise à jour: ${url.toString()}`, 'success');
  widget.src = url.toString();
  return true;
}

// Fonction principale pour gérer les formulaires
function processForm() {
  log(`Recherche et traitement des formulaires...`);
  
  // Vérifier d'abord si nous avons un widget de réunions
  if (processMeetingsWidget()) {
    log(`Widget de réunions traité avec succès`, 'success');
    return;
  }
  
  // Sinon chercher le formulaire HubSpot
  const container = document.querySelector('[data-hubspot-form-container="true"]');
  if (container) {
    log(`Conteneur HubSpot trouvé`);
  } else {
    log(`Aucun conteneur HubSpot trouvé`, 'warning');
  }
  
  const form = findForm(container);
  
  if (form) {
    log(`Formulaire trouvé, ajout des UTMs`);
    addUtmsToForm(form);
    
    // S'assurer que les UTMs sont toujours présents lors de la soumission
    if (!form._utmListenerAdded) {
      form.addEventListener('submit', () => {
        log(`Soumission de formulaire détectée, réapplication des UTMs`);
        addUtmsToForm(form);
      });
      form._utmListenerAdded = true;
      log(`Écouteur d'événement de soumission aj
