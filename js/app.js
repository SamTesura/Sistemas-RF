var nelement = document.getElementById('n');
var resultField = document.getElementById('resultField');
var form = document.getElementById('Butterworth');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    function elements(k, n) {
        var elemento = (k % 2 == 0) ? "capacitor" : "inductor";
        var ak = 2 * (Math.sin(((2 * k - 1) * Math.PI) / (2 * n)));
        var result = parseFloat(ak);
        return `El ${elemento} ${k} vale ${result.toFixed(3)}<br>`;
    }
    n = nelement.value;
    resultField.innerHTML = "";
    for (let k = 1; k <= n; k++) {
        resultField.innerHTML += elements(k, n)
    }
});
