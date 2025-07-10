const URL = 'https://api.pexels.com/v1/search?query=';
const api = 'EWSPQiHinqL5vC1sForGvbNwTZklElsUkqVUtxokDCasRmMVndz1Do3q';

const changeImage = function (animals) {
  fetch(URL + animals, {
    headers: {
      Authorization: api,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Errore nel caricamento delle immagini');
      }
    })

    .then((newImg) => {
      const img = document.querySelectorAll('.card-img-top');
      for (let i = 0; i < img.length; i++) {
        img[i].setAttribute('src', newImg.photos[i].src.small);
      }
      const hide = document.querySelectorAll('.btn-group .btn:nth-of-type(2)');
      hide.forEach((btn) => {
        btn.innerHTML = 'Hide';
        btn.addEventListener('click', function () {
          btn.closest('.col-md-4').classList.add('d-none');
        });
      });
      const newP = document.querySelectorAll('.card small');
      newP.forEach((newId, i) => {
        newId.innerHTML = `${newImg.photos[i].id}`;
      });
    })

    .catch((err) => {
      console.log('Errore', err);
    });
};

const imgBtn = function () {
  const firstBtn = document.getElementById('loadImage');
  firstBtn.addEventListener('click', () => {
    changeImage('hamsters');
  });
  const secondBtn = document.getElementById('loadSecondaryImage');
  secondBtn.addEventListener('click', () => {
    changeImage('tigers');
  });
};

imgBtn();
