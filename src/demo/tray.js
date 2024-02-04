import { html, render } from 'lit-html';
import { Icon } from '../app';
import { cx } from 'cva';

const moveFocusTo = (selector) => document.querySelector(selector).focus();

const toggleTray = () => {
    const body = document.querySelector('body');
    const tray = document.querySelector('[data-tray]');
    const overlay = document.querySelector('[data-tray-overlay]');

    if (tray.dataset.trayOpen === 'false') {
        overlay.dataset.trayOverlayOpen = 'true';
        tray.dataset.trayOpen = 'true';
        body.style['overflow'] = 'hidden';
        body.style['height'] = '100vh';
        render(TrayContent(), document.querySelector('[data-tray]'));
        moveFocusTo('#hide-tray');
    } else {
        overlay.dataset.trayOverlayOpen = 'false';
        tray.dataset.trayOpen = 'false';
        body.style['overflow'] = 'auto';
        body.style['height'] = 'auto';
        moveFocusTo('#show-tray');
    }
};

const tray = html`
    <button id="show-tray" @click=${{ handleEvent: toggleTray }}>
        Want more ?
    </button>
`;

function TrayContent() {
    return html` <div
        class="${cx('column', 'gap-sm', 'padding-xy', 'sm', 'flex-grow')}"
    >
        <menu>
            <button
                data-button
                autofocus
                @click=${{ handleEvent: toggleTray }}
                type="reset"
                id="hide-tray"
            >
                Cancel
            </button>
        </menu>
        <div>
            <p>
                Feel free to give feedback
                <a href="https://twitter.com/polmoneys">@polmoneys</a>.
            </p>

            <p>If it sparks some interest I do have more to share ...</p>

            <p>
                Find code in
                <a href="https://github.com/polmoneys" data-margin-left="auto">
                    repo
                </a>
                ${Icon({ d: 'github', label: 'github', size: 36 })}
            </p>
        </div>
    </div>`;
}

(function (window, document) {
    window.tray = function () {
        render(tray, document.querySelector('aside'));
    };
})(window, document);
