var url1 = 'https://cdn130.picsart.com/298196669081201.jpg?c256x256';
var url2 = 'https://cdn158.picsart.com/224543536007202.jpg?c256x256';
var url3 = 'https://pbs.twimg.com/profile_images/421951774203731970/rzhs1Qtc.jpeg';


function loadImages(url) {
  return new Promise(function (resolve) {
    var image = document.createElement('img');
    image.src = url;
    document.body.appendChild(image);

    image.addEventListener('load', () => {
      resolve();
    });
  });
}

loadImages(url1)
    .then(function () {
      console.log('Картинка 1 загружена');
      return loadImages(url2);

    })
    .then(function () {
      console.log('Картинка 2 загружена');
      return loadImages(url3);
    })
    .then(function () {
      console.log('Картинка 3 загружена');
    });












