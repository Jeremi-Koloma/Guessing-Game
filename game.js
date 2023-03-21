
let numSecret = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let bestScore = 0;

document.querySelector('.numero').textContent = '?';

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.verifier').addEventListener('click', function () {

    const numDev = Number(document.querySelector('.numDevine').value);

    if (!numDev) {
        displayMessage("⛔ Pas de numéro !");
    }
    else {
        if (numDev === numSecret) {
            document.querySelector('.numero').textContent = numSecret;
            document.querySelector('body').style.backgroundColor = '#009b72';
            document.querySelector('body').style.color = 'black';
            document.querySelector('header h1').textContent = 'Félicitations 🎉🎉🎉 !';
            document.querySelector('header h1').style.color = 'black';
            document.querySelector('.score').style.color = 'black';
            document.querySelector('.heightScore').style.color = 'black';
            displayMessage('🎉 Bravo, vous avez gagné !');
            document.querySelector('.message').style.color = 'red';
            document.querySelector('.numero').style.width = '160px';
            document.querySelector('.wrapper').style.backgroundColor = '#ddd900';

            if (score > bestScore) {
                bestScore = score;
                document.querySelector('.heightScore').textContent = bestScore;
            }
        }
        else if (numDev !== numSecret) {
            if (score > 1) {
                score--;
                document.querySelector('header h1').textContent = 'Non ! Ressayer encore 🤩🤩🤩';
                displayMessage(numDev > numSecret ? '📈 Num très Grand !' : '📉 Num très Faible !');
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥 Vous avez perdu !')
                document.querySelector('header h1').textContent = 'Jeu perdu 😞😞😞 !';
                document.querySelector('.score').textContent = 0;
                document.querySelector('.wrapper').style.backgroundColor = '#053d2e';
            }
        }

    }
}, false);


document.querySelector('.ressay').addEventListener('click', function () {
    displayMessage('Commencer...!');
    score = 20;
    document.querySelector('.score').textContent = score;
    numSecret = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.wrapper').style.backgroundColor = '#055d46';
    document.querySelector('header h1').textContent = 'Devinez le numéro caché 🤔';
    document.querySelector('header h1').style.color = '#fff';
    document.querySelector('.score').style.color = '#ddd900';
    document.querySelector('.heightScore').style.color = '#ddd900';
    document.querySelector('.numero').textContent = '?';
    document.querySelector('.numDevine').value = 'ici';
    document.querySelector('body').style.color = '#fff';
    document.querySelector('.message').style.color = '#ddd900';
}, false);