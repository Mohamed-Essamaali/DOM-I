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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// navigation links
    let links =  document.querySelectorAll("a");

    links[0].textContent=siteContent["nav"]["nav-item-1"];
    links[1].textContent=siteContent["nav"]["nav-item-2"];
    links[2].textContent=siteContent["nav"]["nav-item-3"];
    links[3].textContent=siteContent["nav"]["nav-item-4"];
    links[4].textContent=siteContent["nav"]["nav-item-5"];
    links[5].textContent=siteContent["nav"]["nav-item-6"];
    
    // header text
    let ctaHeader = document.querySelector('.cta .cta-text h1');
    ctaHeader.textContent = siteContent["cta"]["h1"];

  // header button
    let ctaBtn = document.querySelector('.cta .cta-text button');
    ctaBtn.textContent = siteContent["cta"]["button"];

  // header img
  let contentCta = document.getElementById('cta-img')
  contentCta.setAttribute('src', siteContent["cta"]["img-src"]);

  //  top content h4
  let topH4 = document.querySelectorAll(' .main-content .top-content h4');
  topH4[0].textContent = siteContent['main-content']['features-h4'];
  topH4[1].textContent = siteContent['main-content']['about-h4'];
 //  bottom content h4
  let bottomH4 = document.querySelectorAll(' .main-content .bottom-content h4');
  bottomH4[0].textContent = siteContent['main-content']['services-h4'];
  bottomH4[1].textContent = siteContent['main-content']['product-h4'];
  bottomH4[2].textContent = siteContent['main-content']['vision-h4'];

  // middle image

  let middleImage = document.getElementById('middle-img');
  middleImage.setAttribute('src',siteContent['main-content']['middle-img-src']) 
  // content paragraphs

   //  top content p
   let topP = document.querySelectorAll(' .main-content .top-content p');
   topP[0].textContent = siteContent['main-content']['features-content'];
   topP[1].textContent = siteContent['main-content']['about-content'];
  //  bottom content h4
   let bottomP = document.querySelectorAll(' .main-content .bottom-content p');
   bottomP[0].textContent = siteContent['main-content']['services-content'];
   bottomP[1].textContent = siteContent['main-content']['product-content'];
   bottomP[2].textContent = siteContent['main-content']['vision-content'];
  
  

  // contact 
  let contactH4 = document.querySelector('.contact h4');
  contactH4.textContent = siteContent['contact']['contact-h4'];
  // PARAGRAPHS
  let contacts = document.querySelectorAll(' .contact p');
  contacts[0].textContent = siteContent['contact']['address'];
  contacts[1].textContent = siteContent['contact']['phone'];
  contacts[2].textContent = siteContent['contact']['email'];

  //footer
  let footerCopy = document.querySelector('footer p');
  footerCopy.textContent = siteContent['footer']['copyright'] ;
  

     
