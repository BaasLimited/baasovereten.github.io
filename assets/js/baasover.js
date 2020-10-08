const e = document.getElementById('my-email');
e.onclick = function(ev) {
    const e = document.getElementById('my-email');
    const obf = e.getAttribute('href');
    e.setAttribute('href', obf.replaceAll(/\.idj.{3}eidk\./gi,''));
}