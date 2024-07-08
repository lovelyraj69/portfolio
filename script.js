// About page changing the domain name
let arr = ['FullStack Developer', 'WebDeveloper', 'GrapicDesigner', 'FrontEnd Developer', 'BackEnd Developer'];
let domainElm = document.getElementById('domain');
let index = 0;

setInterval(() => {
    domainElm.textContent = arr[index];
    index = (index + 1) % arr.length;
}, 2000);

// For navbar active 

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});


// Using scroll button to scroll the page

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollBtn");
    let isAtTop = true;

    scrollButton.addEventListener("click", function() {
        if (isAtTop) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            scrollButton.textContent = "Scroll Up";
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            scrollButton.textContent = "Scroll Down";
        }
        isAtTop = !isAtTop;
    });
});



// For page view

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElment = document.querySelectorAll('.hidden');
hiddenElment.forEach((el) => observer.observe(el));


// Contact Message send to mail 

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     alert('Your message has been sent successfully!');
// });

// function sendMail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "lveniyaraj777@gmail.com",
//         Password : "D$qze6AViD8!9Sa",
//         To : 'lveniyaraj777@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "Mail from Portfolio",
//         Body : `Hi`
//     }).then(
//       message => alert(message)
//     );
// }