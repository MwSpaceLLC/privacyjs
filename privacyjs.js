const privacyjs = document.getElementById('privacyjs');

console.log.bind(console, "%c", "background: #3F51B5;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px;", "");

if (privacyjs) {

} else {
    console.log('ciao')
}

const body = document.querySelector('body');
var privacy = document.createElement('div');
var span = document.createElement('span');
privacy.style.position = 'fixed';
privacy.style.width = '100%';
privacy.style.backgroundColor = 'rgb(238, 238, 238)';
privacy.style.margin = 'fixed';
privacy.style.left = 'fixed';
privacy.style.top = 'fixed';
privacy.style.padding = 'fixed';
privacy.style.zIndex = 9999999;
privacy.style.textAlign = 'center';

span.innerHTML = privacyjs.dataset.text;