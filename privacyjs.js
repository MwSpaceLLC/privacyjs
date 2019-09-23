/** @init Class */
const privacyjs = {};
privacyjs.v = '1.2';
privacyjs.e = document.getElementById('privacyjs');
privacyjs.l = console.log('%cPrivacyJs ' + privacyjs.v, 'background: #222; color: #bada55');

/**
 * @PrivacyJs
 * @author Aleksandr Ivanovitch
 */
class PrivacyJs {
    init() {
        const body = document.querySelector('body');
        var privacy = document.createElement('div');
        privacy.classList = 'div-privacyjs';

        var span = document.createElement('span');
        span.classList = 'div-span-privacyjs';

        var accept = document.createElement('a');
        accept.classList = 'div-accept-privacyjs';

        var info = document.createElement('a');
        info.classList = 'div-info-privacyjs';

        privacy.style.position = 'fixed';
        privacy.style.width = '100%';
        privacy.style.backgroundColor = privacyjs.e.backgroundColor ? privacyjs.e.backgroundColor : 'rgb(238, 238, 238)';
        privacy.style.margin = 0;
        privacy.style.left = 0;

        privacyjs.e.dataset.bottom ?
            privacy.style.bottom = privacyjs.e.dataset.bottom
            : null;

        privacyjs.e.dataset.top ?
            privacy.style.top = privacyjs.e.dataset.top
            : null;

        privacy.style.padding = '8px';
        privacy.style.zIndex = 9999999;

        privacyjs.e.dataset.textAlign ?
            privacy.style.textAlign = privacyjs.e.dataset.textAlign
            : privacy.style.textAlign = 'center';

        span.style.color = privacyjs.e.color ? privacyjs.e.color : 'rgb(34,34,34)';
        span.innerHTML = privacyjs.e.dataset.message;

        privacy.append(span);

        if (privacyjs.e.dataset.info) {
            info.innerText = privacyjs.e.dataset.info;
            info.style.margin = '4px';
            info.href = privacyjs.e.dataset.link;
            info.target = '_blank';
            span.append(info);
        }

        if (privacyjs.e.dataset.accept) {
            accept.innerText = privacyjs.e.dataset.accept;
            accept.style.margin = '4px';
            accept.href = '#!';
            span.append(accept);
            accept.onclick = () => {
                localStorage.setItem('privacyjs', 1);
                privacy.remove();
            };

            if (!localStorage.getItem('privacyjs')) {
                body.append(privacy);
            }
        } else {
            body.append(privacy);
        }
    }

    serialize() {
        const forms = document.querySelectorAll('form');
        var label = document.createElement('label');
        label.style.margin = '10px';

        var p = document.createElement('span');
        p.style.margin = '4px';
        p.style.fontSize = '14px';
        p.classList = 'p-privacyjs';

        p.innerText = privacyjs.e.dataset.checkbox;

        var checkbox = document.createElement('input');
        checkbox.classList = 'checkbox-privacyjs';
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';
        checkbox.name = 'checkbox';
        checkbox.required = true;
        label.append(checkbox);
        label.append(p);

        forms.forEach(item => {
            item.append(label);
        })
    }
}

if (!privacyjs.e) {
    console.log('element-id #privacyjs not found')
} else if (!privacyjs.e.dataset) {
    console.log('element\'s -dataset #privacyjs not found');
} else if (!privacyjs.e.dataset.message) {
    console.log('element\'s message-dataset #privacyjs not found');
} else {
    /**
     * Contstructor work
     * @type {PrivacyJs}
     */
    privacyjs.i = new PrivacyJs();
    privacyjs.i.init();

    if (privacyjs.e.dataset.serialize) {
        privacyjs.i.serialize();
    }
}
