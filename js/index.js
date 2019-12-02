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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation

// Create a variable to set up a reference within the DOM 
const navItems = document.querySelectorAll('a');

// Assign the values found within the object to the new variable
navItems[0].textContent = siteContent["nav"]["nav-item-1"];

//Repeat however many times for how many values are within the object
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"]; 
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

navItems.forEach(function(coloredItems) {
coloredItems.style.color = 'green';
})

//Prepend/Append Child 

const nav = document.querySelector("nav");
const addNewTag = document.createElement("a");
addNewTag.textContent = "First";
nav.prepend(addNewTag);

const addNewTag2 = document.createElement("a");
addNewTag2.textContent = "Last";
nav.appendChild(addNewTag2);

addNewTag.style.color = "green";
addNewTag2.style.color = "green";

//Header (CTA, Button, Image)
const ctaText = document.getElementsByTagName("h1");
ctaText[0].textContent = siteContent["cta"]["h1"];

const button = document.getElementsByTagName("button");
button[0].textContent = siteContent["cta"]["button"];

const topImage = document.getElementById("cta-img");
topImage.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content (w/ Contact H4 Element)

const h4Elements = document.querySelectorAll('h4');
h4Elements[0].textContent = siteContent["main-content"]["features-h4"];
h4Elements[1].textContent = siteContent["main-content"]["about-h4"];
h4Elements[2].textContent = siteContent["main-content"]["services-h4"];
h4Elements[3].textContent = siteContent["main-content"]["product-h4"];
h4Elements[4].textContent = siteContent["main-content"]["vision-h4"];
h4Elements[5].textContent = siteContent["contact"]["contact-h4"];

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const paragraphText = document.querySelectorAll('p');
paragraphText[0].textContent = siteContent["main-content"]["features-content"];
paragraphText[1].textContent = siteContent["main-content"]["about-content"];
paragraphText[2].textContent = siteContent["main-content"]["services-content"];
paragraphText[3].textContent = siteContent["main-content"]["product-content"];
paragraphText[4].textContent = siteContent["main-content"]["vision-content"];

//Bottom Section (Contact)
const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//Footer
const footerText = document.getElementsByTagName("footer");
footerText[0].textContent = siteContent["footer"]["copyright"];
