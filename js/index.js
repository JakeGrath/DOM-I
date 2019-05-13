const siteContent = {
  "nav": {
    "nav-item-0": "Our Team",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Testimonials",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
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

// Nav Bar//
let navBarContainer = document.querySelector('header > nav');

let preTag = document.createElement('a');
preTag.setAttribute('href',"#");
preTag.innerHTML = siteContent.nav["nav-item-0"];

let postTag = document.createElement('a');
postTag.setAttribute('href',"#");
postTag.innerHTML = siteContent.nav["nav-item-7"];

navBarContainer.prepend(preTag)
navBarContainer.append(postTag)

let navBar = document.querySelectorAll("header > nav > a");
navBar[0].textContent = siteContent.nav["nav-item-0"];
navBar[1].textContent = siteContent.nav["nav-item-1"];
navBar[2].textContent = siteContent.nav["nav-item-2"];
navBar[3].textContent = siteContent.nav["nav-item-3"];
navBar[4].textContent = siteContent.nav["nav-item-4"];
navBar[5].textContent = siteContent.nav["nav-item-5"];
navBar[6].textContent = siteContent.nav["nav-item-6"];
navBar[7].textContent = siteContent.nav["nav-item-7"];
navBar.forEach(element => {
  element.style.color = 'green'
})

//cta//
let ctaHeader = document.querySelector('.cta-text > h1');
ctaHeader.innerHTML = siteContent.cta["h1"];


let ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent.cta["button"];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Top content//
let topContentHeaders = document.querySelectorAll('.top-content > .text-content > h4');
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"]
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"]

let topContentParagraphs = document.querySelectorAll('.top-content > .text-content > p');
topContentParagraphs[0].textContent = siteContent["main-content"]["features-content"]
topContentParagraphs[1].textContent = siteContent["main-content"]["about-content"]

//Middle image//
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Bottom content//
let bottomContentHeaders = document.querySelectorAll('.bottom-content > .text-content > h4');
bottomContentHeaders[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentHeaders[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"]


let bottomContentParagraphs = document.querySelectorAll('.bottom-content > .text-content > p');
bottomContentParagraphs[0].textContent = siteContent["main-content"]["services-content"]
bottomContentParagraphs[1].textContent = siteContent["main-content"]["product-content"]
bottomContentParagraphs[2].textContent = siteContent["main-content"]["vision-content"]

//Contact//
let contactInfo = document.querySelector('.contact').childNodes;
contactInfo[1].textContent = siteContent.contact["contact-h4"]
contactInfo[2].textContent = siteContent.contact["address"]
contactInfo[3].textContent = siteContent.contact["phone"]
contactInfo[4].textContent = siteContent.contact["email"]

//footer//
let footerContent = document.querySelector('footer > p');
footerContent.textContent = siteContent.footer.copyright;

let textContent = document.querySelectorAll('.main-content h4');
textContent.forEach(obj => {
  obj.style.textAlign = 'center'
  obj.style.fontSize = '1.2rem'
});

let allTheTexts = document.querySelectorAll('*');

let colorizerButton = document.createElement('button');
colorizerButton.textContent = 'Randomize Colors!';
colorizerButton.style.height = '50px'

let ctaSection = document.querySelector('.cta > .cta-text');
ctaSection.append(colorizerButton);

colorizerButton.onclick = function(){
allTheTexts.forEach(obj => {
  let red = Math.floor(Math.random() * Math.floor(256));
  let green = Math.floor(Math.random() * Math.floor(256));
  let blue = Math.floor(Math.random() * Math.floor(256));
  obj.style.color = `rgb(${red},${green},${blue})`
})
}