function goTop() {
    window.scrollTo(0, 0)
}

/* if element is not in window - append fixed style */
const el = document.getElementById('top-menu-hook-border')
setInterval(() => {
    if (window.scrollY > el.offsetTop) {
        document.getElementsByTagName('header')[0].classList.add('fixed')
    } else {
        document.getElementsByTagName('header')[0].classList.remove('fixed')
    }
}, 100)
