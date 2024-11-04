// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);

// GETELEMENTBYID
// console.log(document.getElementById('hedaer-title'))
// var hedaerTitle = (document.getElementById('hedaer-title'))
// console.log(hedaerTitle)
// hedaerTitle.textContent = 'Hello';
// hedaerTitle.innerText = 'Goodbye';
// hedaerTitle.style.borderBottom = 'solid 3px #000';

// GETELEMENTBYCLASSNAME
// var items = document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[1])
// // items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = "#f4f4f4"
// }

// QUERYSELECTOR 
// var header = document.querySelector('hedaer-title');
// console.log(header)
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type= "submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var Lastitem = document.querySelector('.list-group-item:last-child');
// Lastitem.style.color = 'blue';

// var Seconditem = document.querySelector('.list-group-item:nth-child(2)');
// Seconditem.style.color = 'red';

// var Thirditem = document.querySelector('.list-group-item:nth-child(3)');
// Thirditem.style.color = 'coral';


// QUERYSELECTORALL
// var titles = document.querySelectorAll('title');
// console.log(titles)
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }


// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode); 
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement); 
// itemList.parentElement.style.backgroundColor = '#ccc';
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

// childNodes 
// console.log(itemList.childNodes)

// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = '1233';

// LastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = '8888';

// nextSibling
// console.log(itemList.nextSibling)
// nextElementSibling
// console.log(itemList.nextSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div

// var newDiv = document.createElement('div');
// // add className
// newDiv.className= 'helo2';
// // add id
// newDiv.id = 'helo1'
// // add attr
// newDiv.setAttribute('title', 'Hello Div')

// // create text node
// var newDivText = document.createTextNode('hello world');
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").hide();
//   });
// });
