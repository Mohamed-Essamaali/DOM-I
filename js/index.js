const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// navigation links
const links = document.querySelectorAll('a');
links[0].textContent = siteContent.nav['nav-item-1']
links[1].textContent = siteContent.nav['nav-item-2']
links[2].textContent = siteContent.nav['nav-item-3']
links[3].textContent = siteContent.nav['nav-item-4']
links[4].textContent = siteContent.nav['nav-item-5']
links[5].textContent = siteContent.nav['nav-item-6']



//logo img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//header text
const headerCta = document.querySelector('.cta .cta-text h1');
headerCta.textContent = siteContent.cta.h1;

//header button
const buttonCta = document.querySelector('.cta .cta-text button');
buttonCta.textContent = siteContent.cta.button;

//header image
const headerImg = document.querySelector('#cta-img');
headerImg.src= siteContent.cta["img-src"];

//top content
const topContentH4 = document.querySelectorAll('.main-content .top-content .text-content h4')
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

const topContentText = document.querySelectorAll('.main-content .top-content .text-content p')
topContentText[0].textContent = siteContent["main-content"]["features-content"]
topContentText[1].textContent = siteContent["main-content"]["about-content"]

//middle image

const middleImg = document.querySelector('#middle-img');

middleImg.src=siteContent['main-content']['middle-img-src'];

//bottom section

const bottomContentH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentH4[2].textContent = siteContent['main-content']['vesion-h4']

const bottomContent = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomContent[0].textContent = siteContent['main-content']['services-content']
bottomContent[1].textContent = siteContent['main-content']['product-content']
bottomContent[2].textContent = siteContent['main-content']['vesion-content']

//contact section
const contactH4 = document.querySelectorAll('.contact h4');
contactH4.textContent = siteContent.contact['contact-h4']

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;


//my 2nd pull request for differnt branch
//https://github.com/Mohamed-Essamaali/DOM-I/pull/2  

//style links to be green
links.forEach(item =>{
  item.style.color='green'
})

// adding two more items in the navigation links
const navs = document.querySelector('nav')

const home = document.createElement('a');
home.textContent = 'Home'
home.href = '#'
home.style.color='#0e1482'
home.style.fontWeight='650'
navs.prepend(home)

const ourMission = document.createElement('a');
ourMission.textContent = 'Our Mission'
ourMission.href = '#'
ourMission.style.color='#0e1482'
ourMission.style.fontWeight='650'
navs.prepend(ourMission)

//stretch


const header = document.querySelector('.cta')

buttonCta.addEventListener('click', e=>{header.textContent='Button Clicked';
header.style.fontSize='5rem';
header.style.margin='0 10%';
header.style.padding = '2% 10%'
header.style.backgroundColor='green'});











