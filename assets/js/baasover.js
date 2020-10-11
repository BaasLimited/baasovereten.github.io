/**
 * Deobfuscate email on click
 */
const e = document.getElementById('my-email');
if (e) {
    e.onclick = function (ev) {
        const e = document.getElementById('my-email');
        const obf = e.getAttribute('href');
        e.setAttribute('href', obf.replaceAll(/\.idj.{3}eidk\./gi, ''));
    }
}

/**
 * Open links in .my-content paragraphs in a new window
 */
const mcs = document.getElementsByClassName('my-content');
for (let i = 0; i < mcs.length; i++) {
    let pp = mcs[i].getElementsByTagName('p');
    for (let j = 0; j < pp.length; j++) {
        let aa = pp[j].getElementsByTagName('a');
        for (let k = 0; k < aa.length; k++) {
            let a = aa[k];
            a.onclick = function (ev) {
                window.open(this.href);
                return false;
            };
        }
    }
}
