const colorBg = ["red", "green", "blue"];

const changBtnColor = document.getElementById('btn_click');
const btnHex = document.getElementById('btn_hex');

const hexCode = '#F1f5f8';
var i = 0;

changBtnColor.addEventListener("click", (e) => {
    e.preventDefault();

    const arrln = colorBg.length;

    if (i == colorBg.length) {
        i = 0;
        changeColor(i);
    }
    else {
        changeColor(i);
    }


});

function changeColor(color) {
    if (i < colorBg[color].length) {
        document.body.style.backgroundColor = colorBg[color];
        document.getElementById('clr_code').textContent = colorBg[color];
    }

    i++;

}

btnHex.addEventListener('click', () => {
    window.location.reload();
    document.body.style.backgroundColor = hexCode;
    document.getElementById('clr_code').textContent = hexCode;
});