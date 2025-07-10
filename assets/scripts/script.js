const urlHamster = 'https://api.pexels.com/v1/search?query=hamsters';
const urlTigers = 'https://api.pexels.com/v1/search?query=tigers';
const api = 'EWSPQiHinqL5vC1sForGvbNwTZklElsUkqVUtxokDCasRmMVndz1Do3q';

const firstpic = function () {
  fetch(urlHamster, {
    headers: {
      Authorization: api,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Response.ok non ha restituito true');
      }
    })
    .then((newImg) => {
      console.log(newImg);
      const loadNewImg = document.getElementById('loadImage');
      const img = document.querySelectorAll('.card-img-top');
      loadNewImg.addEventListener('click', () => {
        for (let i = 0; i < img.length; i++) {
          img[i].src = newImg.photos[i].src.medium;
        }
      });
      const hide = document.querySelectorAll('.btn-group .btn:nth-of-type(2)');
      hide.forEach((btn, i) => {
        btn.innerHTML = 'Hide';
        btn.addEventListener('click', function () {
          btn.closest('.col-md-4').classList.add('d-none');
        });
      });
    })
    .catch((err) => {
      console.log('ERRORE', err);
    });
};

const secondpic = function () {
  fetch(urlTigers, {
    headers: {
      Authorization: api,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Response.ok non ha restituito true');
      }
    })
    .then((newImg) => {
      console.log(newImg);
      const loadNewImg = document.getElementById('loadSecondaryImage');
      const img = document.querySelectorAll('.card-img-top');
      loadNewImg.addEventListener('click', () => {
        for (let i = 0; i < img.length; i++) {
          img[i].src = newImg.photos[i].src.medium;
        }
      });
    })
    .catch((err) => {
      console.log('ERRORE', err);
    });
};

firstpic();
secondpic();
