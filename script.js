// About page changing the domain name
let arr = ['FullStack Developer', 'WebDeveloper', 'GrapicDesigner', 'FrontEnd Developer', 'BackEnd Developer'];
let domainElm = document.getElementById('domain');
let index = 0;

setInterval(() => {
    domainElm.textContent = arr[index];
    index = (index + 1) % arr.length;
}, 2000);

// Scrolling the page
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

//Auto scrolling the page
document.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;

    let sections = document.querySelectorAll('');

    sections.forEach((section, index) => {
        if (scrollPos >= section.offsetTop - windowHeight / 2 && scrollPos < section.offsetTop + windowHeight / 2) {
            if (index < sections.length - 1) {
                window.scrollTo({
                    top: sections[index + 1].offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

//Using scroll button to scroll the page
document.getElementById("scrollBtn").addEventListener('click',() => {
    window.scrollTo(0,document.body.scrollHeight)
})


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