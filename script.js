function copyWallet(id) {
    if (!id) return;

    var wallet = document.getElementById(id).innerText;
    var area = document.createElement('input');

    area.setAttribute('value', wallet);
    document.body.appendChild(area);
    
    area.select();
    document.execCommand('copy');
    area.parentNode.removeChild(area);

    $('.notification').removeClass('hide');
    $('.notification').addClass('show');
    $('.notification').addClass('showNotification');
    
    setTimeout (function() {
        $('.notification').removeClass('show');
        $('.notification').addClass('hide');
    }, 3000);
}