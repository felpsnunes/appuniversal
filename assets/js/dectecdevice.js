function redirectToAppStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=org.universal.new&hl=pt_BR&gl=US";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/us/app/portal-universal/id1596924204";
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("hero-area");

    button.addEventListener("click", function () {
        redirectToAppStore();
    });
});