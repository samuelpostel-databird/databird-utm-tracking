// ✅ Script UTM v2 — contourne le problème d'iframe cross-origin de HubSpot Forms v2
// Principe : au lieu d'injecter des <input> dans le formulaire (impossible, il est dans un
// iframe hébergé sur hsforms.net, un autre domaine → cross-origin, inaccessible en JS),
// on réécrit l'URL visible de la page (sans recharger) pour y ajouter les utm_* attendus.
// HubSpot lit nativement ces paramètres depuis l'URL de la page hôte et les transmet
// à son propre formulaire, même à travers l'iframe.

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
  '/formation-ia/agent-ia': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'agent_ia' },
  '/formation-ia/ia-champion': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'ia_champion' },
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
  '/c/formation-ia/agent-ia': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
  '/c/formation-ia/ia-champion': { utm_source: 'google', utm_medium: 'paid_search', utm_campaign: '' },
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
  '/activation/formations-ia': { utm_source: '', utm_medium: '', utm_campaign: 'offre_IA_sept2025' },
  '/c/meta/reconversion-recherche-demploi': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/c/meta/data-ia-report': { utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: '' },
  '/formations-ia-metier/marketing': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_marketing' },
  '/formations-ia-metier/finance': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_finance' },
  '/formations-ia-metier/rh': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_rh' },
  '/formations-ia-metier/sales': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_sales' },
  '/formation-gen-ai-generaliste': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_generaliste_metiers' },
  '/formations-ia-metier/ia-agent-builder-no-code': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'ia-agent-builder-no-code' },
  '/formations-ia-metier/ia-product-builder-no-code': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'ia-product-builder-no-code' },
  '/nos-formations/ia-product-builder-no-code': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'ia-product-builder-no-code' },
  '/nos-formations/ia-agent-builder-no-code': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'ia-agent-builder-no-code' },
  '/nos-formations/ia-generative-marketing': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_marketing' },
  '/nos-formations/ia-generative-finance': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_finance' },
  '/nos-formations/ia-generative-rh': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_rh' },
  '/nos-formations/ia-generative-ventes': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'gen_ai_sales' },
  '/nos-formations/data-analytics-essentials': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_essentials' },
  '/nos-formations/data-analytics-champion': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_analytics_champion' },
  '/nos-formations/analytics-engineer': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'analytics_engineer' },
  '/nos-formations/data-science-ia': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'data_scientist_champion' },
  '/nos-formations/power-bi': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_powerbi' },
  '/nos-formations/excel': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_excel' },
  '/nos-formations/python': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_python' },
  '/nos-formations/sql': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_sql' },
  '/nos-formations/tableau-software': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_tableau' },
  '/nos-formations/looker-studio': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_looker_studio' },
  '/nos-formations/google-sheets': { utm_source: 'website', utm_medium: 'organic_search', utm_campaign: 'outils_google_sheets' }
};

// 2. Script UTM v2 (réécriture d'URL, compatible avec les formulaires HubSpot en iframe)
(function () {
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

  const defaults = {
    utm_source: "website",
    utm_medium: "unknown_page",
    utm_campaign: "general",
    utm_content: "cta_formulaire",
    utm_term: ""
  };

  const config = window.PAGE_UTM_CONFIG || {};
  const path = window.location.pathname;

  const pageUtms = (path.startsWith("/campus/") && path !== "/campus/")
    ? { ...defaults, utm_source: "website", utm_medium: "organic_search", utm_campaign: `data_analyst_distance_${path.split("/").pop()}`, utm_content: "cta_formulaire" }
    : { ...defaults, ...(config[path] || {}) };

  function readUrlUtms() {
    const found = {};
    utmKeys.forEach((k) => {
      const v = new URLSearchParams(window.location.search).get(k);
      if (v) found[k] = v;
    });
    return found;
  }

  function resolveUtms() {
    const urlUtms = readUrlUtms();
    return { ...pageUtms, ...urlUtms };
  }

  function applyUtmsToUrl() {
    const utms = resolveUtms();
    const url = new URL(window.location.href);
    let changed = false;
    for (const [key, value] of Object.entries(utms)) {
      if (value && url.searchParams.get(key) !== value) {
        url.searchParams.set(key, value);
        changed = true;
      }
    }
    if (changed && window.history && window.history.replaceState) {
      window.history.replaceState(null, "", url.toString());
      console.log("[UTM] URL mise à jour avec les paramètres :", utms);
    }
  }

  function handleMeetingsIframe() {
    const iframe = document.querySelector(".meetings-iframe-container iframe");
    if (!iframe) return false;
    const utms = resolveUtms();
    const url = new URL(iframe.src);
    for (const [key, value] of Object.entries(utms)) {
      url.searchParams.set(key, value);
    }
    iframe.src = url.toString();
    console.log("[UTM] Iframe meetings modifié :", iframe.src);
    return true;
  }

  function init() {
    applyUtmsToUrl();
    handleMeetingsIframe();
    [1000, 2000, 3000, 5000, 10000].forEach((t) => setTimeout(handleMeetingsIframe, t));
    const observer = new MutationObserver(() => handleMeetingsIframe());
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 10 * 60 * 1000);
  }

  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
