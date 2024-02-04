// import flexWrap from 'bundle-text:./docs/flex-wrap.html';

/**
 *
 * Open new browser tab with options.
 * Apple.com does it for opening a chat.
 * More: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#toolbar_and_ui_parts_features
 */

(function (window, document) {
    window.docs = function (destination) {
        const titles = {
            'flex-wrap': 'Docs flex-wrap',
            'margin-auto': 'Docs margin auto',
            ratio: 'Docs ratio',
            slots: 'Docs slots',
        };
        const offset = {
            'flex-wrap': 100,
            'margin-auto': 300,
            ratio: 300,
            slots: 500,
        };
        const x = {
            'flex-wrap': 300,
            'margin-auto': 600,
            ratio: 800,
            slots: 740,
        };

        // const host = window.location.href;
        const opt = {
            url: new URL(`${location}${destination}.html`, import.meta.url),
            title: titles[destination],
            width: x[destination],
            height: 400,
            left: 100,
            top: offset[destination],
        };
        const options = `left=${opt.left},screenX=${opt.left},top=${opt.top},screenY=${opt.top},width=${opt.width},innerWidth=${opt.width},innerHeight=${opt.height},height=${opt.height},menubar=no,location=no,resizable=no,scrollbars=no,status=no`;
        // const html = {
        //     'flex-wrap': flexWrap,
        // 'margin-auto': marginAuto,
        // }[destination];

        window.open(opt.url, opt.title, options);
    };
})(window, document);
