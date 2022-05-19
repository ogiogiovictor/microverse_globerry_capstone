const menuItem = document.querySelector('.navbar-nav');

const closeMobileItems = document.querySelectorAll('.closeMenu');
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};

const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};

document.querySelector('.navbar-toggler-icon').addEventListener('click', displayMobileMenu);

closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));

/** ****************** LOAD FEATURED SPEAKDER*********************** */
const faturedSpeakders = [
  {
    id: 1,
    picture: './images/speaker1.jpg',
    name: 'Nancy Usimen',
    sub_title: 'Corset and Brading Expert',
    exerpt: 'Nancy is a season corset design with vast experience in corset designs. He has been making corset for over 7years and has great designs sold all over the country and beyond. He is one of the best corset makers in Nigeria... ',
  },

  {
    id: 2,
    picture: './images/speaker_02.png',
    name: 'Joshua Instanbul',
    sub_title: 'Drawing and Cutting Expert',
    exerpt: 'The Cutter, cuts any kind on design and can sketch anything on pholic papers.He is our best design and cutting experts and has designed for various design firms. Joshua can draw and cut any kind of design on clothes. He is the best... ',
  },

  {
    id: 3,
    picture: './images/speaker3.jpg',
    name: 'Bimbo Odukoya',
    sub_title: 'Tailor and Fashion Designer',
    exerpt: 'Tailor with style and designer with class, Bimbo is one of the finest tailors and designer we have. With great design concepts and skills to push you forward in having a great deal of fashion sense... ',
  },

  {
    id: 4,
    picture: './images/speaker6.jpg',
    name: 'Fatokosi Johnson',
    sub_title: 'Ankara and Native Wear',
    exerpt: 'He is called Fatoks, because he sews you to shape. The Shaper as he is fondly called, can sew and design fitted clothes and ready to wear designs. He has worked with big brands and designers and have a lot of experience in designing...',
  },

  {
    id: 5,
    picture: './images/speaker8.jpg',
    name: 'Fortune Odesanya',
    sub_title: 'Wedding Dresses and Bridals',
    exerpt: 'When it comes to making wedding dresses, no better person can teach you how to be no1 than fortune, He makes wedding dress for a living and keeps the bar up. He is the bridal maker and can fit your design with your event...',
  },

  {
    id: 6,
    picture: './images/speaker5.jpg',
    name: 'Daniel Ufeli',
    sub_title: 'Bridals & Jumpsuit',
    exerpt: 'Jumpsuit and bridals are known in the community of Ufona because of the Ufelis, A brand new in jumpsuit, bridals and mens wears. He is an expert in jumpsuit and bridal and can make you look more beautiful in person than in pictures. Jumpsuit to Fit...',
  },

];

function buildElement(id, picture, name, title, exerpt) {
  document.querySelector('.grid-container').innerHTML += `<div class="grid-item">
    <div class="grid-flex">
        <img src="${picture}" />
        <div class="flex-grid-content">
            <h2>${name}</h2>
            <h5>${title}</h5>
            <p class="exerpt">${exerpt} </p>
        </div>
    </div>
</div>`;
}

faturedSpeakders.forEach((el) => {
  buildElement(el.id, el.picture, el.name, el.sub_title, el.exerpt);
});