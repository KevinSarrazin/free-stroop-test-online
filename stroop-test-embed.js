/*!
 * Upchin embed — shows the Upchin Stroop test on your page.
 * https://github.com/KevinSarrazin/free-stroop-test-online
 *
 * Usage:
 *   <div data-upchin-embed="stroop-test" data-lang="en">
 *     <p>Stroop test by <a href="https://upchin.app/tools/stroop-test">Upchin</a></p>
 *   </div>
 *   <script src="https://kevinsarrazin.github.io/free-stroop-test-online/stroop-test-embed.js" async></script>
 *
 * The script ADDS the frame at the top of the box and never removes what is inside:
 * the credit link stays as plain HTML, and stays there if the script is blocked.
 * It adjusts the frame height to its content, so no inner scrollbar appears.
 * No global variable, no dependency, no tracking: the only request is the frame.
 */
(function () {
    'use strict';

    var ORIGINE = 'https://upchin.app';
    var HAUTEUR = '1450';
    var cadres = [];

    // `data-upchin-origin` exists for local testing only.
    function origineDe(boite) {
        var o = boite.getAttribute('data-upchin-origin');
        return o && /^https?:\/\/[^/]+$/.test(o) ? o : ORIGINE;
    }

    function monte(boite) {
        if (boite.getAttribute('data-upchin-ready')) { return; }
        var outil = boite.getAttribute('data-upchin-embed') || '';
        if (!/^[a-z0-9-]+$/.test(outil)) { return; }
        var langue = boite.getAttribute('data-lang') || '';
        var origine = origineDe(boite);

        var cadre = document.createElement('iframe');
        cadre.src = origine + '/embed/' + outil + (langue ? '?lang=' + encodeURIComponent(langue) : '');
        cadre.title = (boite.textContent || '').trim() || 'Upchin';
        cadre.width = '100%';
        cadre.height = HAUTEUR;
        cadre.style.border = '0';
        cadre.style.display = 'block';
        cadre.style.maxWidth = '100%';
        cadre.setAttribute('loading', 'lazy');
        cadre.setAttribute('allow', 'clipboard-write');

        boite.insertBefore(cadre, boite.firstChild);
        boite.setAttribute('data-upchin-ready', '1');
        cadres.push({ cadre: cadre, origine: origine });
    }

    function monteTout() {
        var boites = document.querySelectorAll('[data-upchin-embed]');
        for (var i = 0; i < boites.length; i++) { monte(boites[i]); }
    }

    // The frame reports its height (upchin.app, embed-frame.js).
    window.addEventListener('message', function (e) {
        if (!e.data || e.data.upchinEmbed !== 'height') { return; }
        var hauteur = Number(e.data.height);
        if (!(hauteur > 100 && hauteur < 5000)) { return; }
        for (var i = 0; i < cadres.length; i++) {
            var c = cadres[i];
            if (c.cadre.contentWindow === e.source && e.origin === c.origine) {
                c.cadre.style.height = hauteur + 'px';
            }
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', monteTout);
    } else {
        monteTout();
    }
})();
