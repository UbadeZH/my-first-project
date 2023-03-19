// MIXITUP FILTERK

let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item '
    },
    animation: {
        duration: 300
    }
});

// ACTIVE WORK


const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}


linkWork.forEach((a) => a.addEventListener('click', activeWork));


// TESTIMONIALS SWIPER


var testiSwiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });




// CONTACTFORM

// const contactForm = document.getElementById('contact-form'),
//  contactName = document.getElementById('contact-name'), 
//  contactEmail = document.getElementById('contact-email'), 
//  Message = document.getElementById('message'), contactMessage = document.getElementById('contact-message');

//  const sendEmail =(e) =>{
//   e.preventDefault();

  // check if the field has a value

// if (contactName.value === '' || contactEmail.value === '' || Message.value === '' ) {
//   // add and remove color

//   contactMessage.classList.remove('color-light');
//   contactMessage.classList.add('color-dark');


//   //show message

//   contactMessage.textContent = 'Write all the input fields';
// } else {
//   // serviceID - templateID - #form - publickey

//   emailjs.sendForm('','','','')
// }

//  };

//  contactForm.addEventListener('submit', sendEmail);




function sendEmail(){
    Email.send({
        SecureToken: "a700891e-a327-4c71-b7be-fc2c47b42129",

        To : 'abadaalshami123@gmail.com',
        From : document.getElementById("contact-email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("contact-name").value
            + "<br> Email : " + document.getElementById("contact-email").value
            + "<br> Message : " + document.getElementById("message").value
    }).then(
    message => alert("Message Sent Succesfully")
    );
  }