var url1 = 'https://cdn130.picsart.com/298196669081201.jpg?c256x256';
var url2 = 'https://cdn158.picsart.com/224543536007202.jpg?c256x256';
var url3 = 'https://pbs.twimg.com/profile_images/421951774203731970/rzhs1Qtc.jpeg';

var image1 = document.createElement('img');
image1.src = url1;
document.body.appendChild(image1);

image1.addEventListener('load', () => {
   console.log('Картинка загружена');
});

var image2 = document.createElement('img');
image2.src = url2;
document.body.appendChild(image2);

var image3 = document.createElement('img');
image3.src = url3;
document.body.appendChild(image3);

