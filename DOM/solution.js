// Dom Manipulation Assignment Solution


// Problem - 1
document.querySelector(".crayons-card h2").innerHTML= "Ritesh Gadre";
document.querySelector(".crayons-card p").innerHTML= "I like to play cricket and I want to become JavaScript developer";


// Problem - 2 
let product= [];
let appleProduct= document.querySelectorAll(".as-imagegrid-item");
for(let el of appleProduct){ 
    product.push(el.innerText); 
}
console.log(product);

        


// Problem - 3
let div= document.createElement("div");
div.classList.add("parent");
div.style.backgroundColor= "white";
div.style.color= "black";
div.style.fontSize= "1rem";
div.style.fontWeight= "500";
div.style.margin= "0";
div.style.lineHeight= "1.25rem";
div.style.padding= ".875rem 3.25rem 0.875rem 1.75rem";
let newNode= document.createTextNode("My New FAQ");
div.append(newNode);
let appendList = document.querySelector(".main-content .article");
appendList.appendChild(div);


// Problem - 4
let contact = document.querySelector(".customer-support .one-tel-number");
contact.innerHTML = "+91 7905200354";


// Problem - 5
document.querySelector(".diwali-deals-product-sale-pro .diwali-deals-product-sale-btn").innerHTML = "Check Out";


// Problem - 6
let search = document.querySelector("input");
search.addEventListener("mouseenter", ()=>{
search.style.backgroundColor = "red";   
});


// Problem - 7
document.getElementById('hp-search-input').value = "Javascript";
document.querySelector("#hp-search-form").submit();


// Problem - 8
let language = document.querySelector("#SIvCob");
let links = language.querySelectorAll("a")
for (let i=0; i<links.length; i=i+2) {
    language.removeChild(links[i]);
}




// Problem - 9
let header= document.querySelector(".section_header h1");
header.style.fontFamily= "monospace";
header.style.color= "red";


// Problem - 10
let span = document.querySelector(".btn-cta-big .login-btn-text");
span.addEventListener("mouseover", ()=>{
    span.style.backgroundColor = "red";
});


// Problem - 11
let backgroundImage = document.querySelector(".header .wrapper .logo .icon");
backgroundImage.style.backgroundImage = "url(https://learn.ineuron.ai/_next/image?url=%2Fimages%2Fineuron-logo.png&w=1920&q=75)";



// Problem - 12
document.querySelector(".color-bg-default .js-braintree-encrypt .btn").style.backgroundColor = "blue";


// Problem - 13
document.querySelector(".fl-heading .fl-heading-text").innerText = "JSBOOTCAMP";


// Problem - 14
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize= "80px";


// Problem - 15
let products = document.querySelectorAll(".ps-title");
products[4].style.textAlign = "right";


// Problem - 16
document.querySelector(".section-title_title__VEDfK").innerText= "Start with Scratch";


// Problem - 17
document.querySelector(".btn-container").innerHTML = new Date().toString();


// Problem - 18
document.querySelector("footer section").style.backgroundColor= "orange";


// Problem - 19
let src= document.querySelector(".logo").src;
console.log(src);


// Problem - 20
document.querySelector(".desc").style.color= "orange";