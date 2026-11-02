// Cookie consent + Google tag (Google Analytics 4 and Google Ads).
//
// Google's script is only loaded after the visitor clicks "Accept" (consent mode
// "basic"), so nothing is sent to Google before then. The choice is remembered in
// localStorage; the footer's "Cookie settings" button reopens the banner.
// Lives in a file (not an inline <script>) because the CSP blocks inline scripts.
(function () {
  var STORAGE_KEY = 'cookie-consent'; // 'granted' | 'denied'
  var TAG_IDS = ['G-RRDXJKRBTZ', 'AW-17899488361'];

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  function consentState(value) {
    return {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    };
  }

  gtag('consent', 'default', consentState('denied'));

  var tagLoaded = false;
  function loadGoogleTag() {
    if (tagLoaded) return;
    tagLoaded = true;
    gtag('js', new Date());
    TAG_IDS.forEach(function (id) {
      gtag('config', id);
    });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + TAG_IDS[0];
    document.head.appendChild(script);
  }

  // Google sets its cookies on the registrable domain (e.g. .example.co.uk), so try
  // each parent domain; the browser ignores the ones that can't hold cookies.
  function clearGoogleCookies() {
    var labels = location.hostname.split('.');
    document.cookie.split(';').forEach(function (cookie) {
      var name = cookie.split('=')[0].trim();
      if (!/^(_ga|_gid|_gat|_gcl_)/.test(name)) return;
      var expire = name + '=; Max-Age=0; path=/';
      document.cookie = expire;
      for (var i = 0; i < labels.length - 1; i++) {
        document.cookie = expire + '; domain=' + labels.slice(i).join('.');
      }
    });
  }

  function readChoice() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // storage blocked: ask again on each page
    }
  }

  function saveChoice(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch (e) {}
  }

  // Google's documented opt-out flag. Needed when consent is withdrawn on a page where
  // the tag is already running: consent "denied" alone still lets GA send cookieless pings.
  function setTagsDisabled(disabled) {
    TAG_IDS.forEach(function (id) {
      window['ga-disable-' + id] = disabled;
    });
  }

  function applyChoice(choice) {
    if (choice === 'granted') {
      setTagsDisabled(false);
      gtag('consent', 'update', consentState('granted'));
      loadGoogleTag();
    } else {
      setTagsDisabled(true);
      gtag('consent', 'update', consentState('denied'));
      clearGoogleCookies();
    }
  }

  var stored = readChoice();
  if (stored === 'granted') applyChoice(stored);

  var banner = document.getElementById('cookie-banner');
  var settingsButton = document.getElementById('cookie-settings');
  if (!banner) return;

  // Focus moves into the banner only when the visitor opened it themselves.
  var returnFocusTo = null;

  function showBanner(fromSettings) {
    banner.hidden = false;
    if (fromSettings) {
      returnFocusTo = settingsButton;
      banner.querySelector('button').focus();
    }
  }

  function hideBanner() {
    banner.hidden = true;
    if (returnFocusTo) returnFocusTo.focus();
    returnFocusTo = null;
  }

  banner.querySelectorAll('[data-consent]').forEach(function (button) {
    button.addEventListener('click', function () {
      var choice = button.getAttribute('data-consent');
      saveChoice(choice);
      applyChoice(choice);
      hideBanner();
    });
  });

  if (settingsButton) {
    settingsButton.hidden = false;
    settingsButton.addEventListener('click', function () {
      showBanner(true);
    });
  }

  if (stored !== 'granted' && stored !== 'denied') showBanner(false);
})();
