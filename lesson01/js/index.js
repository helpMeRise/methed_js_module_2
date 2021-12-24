'use strict';

const items = document.querySelectorAll('.item');
const ads = document.querySelector('.ads');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
const propsItemsThree = document.querySelectorAll('.props__item_three');
const propsItemsFour = document.querySelectorAll('.props__item_four');
const propsItemsFive = document.querySelectorAll('.props__item_five');

ads.remove();
items[2].after(items[0]);
itemTwo.childNodes[1].childNodes[5].appendChild(propsItemsTwo[8]);
itemTwo.childNodes[1].childNodes[5].appendChild(propsItemsTwo[9]);
itemTwo.after(itemThree);
propsItemsFour[2].after(propsItemsFour[5]);
itemThree.childNodes[1].childNodes[5].after(propsItemsThree[0].parentNode);
itemFive.childNodes[1].childNodes[5].after(propsItemsFive[0].parentNode);
itemTwo.childNodes[1].childNodes[4]
    .before(itemFive.childNodes[1].childNodes[3]);
itemSix.childNodes[1].childNodes[4]
    .before(itemTwo.childNodes[1].childNodes[3]);
itemFive.childNodes[1].childNodes[4]
    .before(itemSix.childNodes[1].childNodes[3]);
itemThree.childNodes[1].childNodes[3].textContent = 'This и прототипы объектов';
