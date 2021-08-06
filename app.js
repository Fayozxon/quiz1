let btn = document.getElementById('btn');
let answerBox = document.getElementById('answerBox');

btn.addEventListener('click', function() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let d = (b**2) - (4*a*c);

    if (d < 0) {
        let msg = 'Tenglama yechimga ega emas!';
        answerBox.innerHTML = msg;
    } else if (d == 0) {
        let x = -(b / (2*a));
        answerBox.innerHTML = x;
    } else {
        let x1 = (-b + (d**(1/2)))/(2*a);
        let x2 = (-b - (d**(1/2)))/(2*a);

        answerBox.innerHTML = 'x<sub>1</sub> = '+x1+'<br>x<sub>2</sub> = '+x2;
    }
})
