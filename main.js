const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// handle click navbar button
const navBtn = $('.navbar-btn')
const navLists = $('.navbar-list')

navBtn.addEventListener('click', ()=>{
    navLists.classList.toggle('active')
    navBtn.querySelector('i').classList.toggle('fa-x')
    navBtn.querySelector('i').classList.toggle('fa-bars')
    console.log('clicked')
})

// theme change
const themeBtn = $('.navbar-theme-btn')

themeBtn.addEventListener('click', () => {
    themeBtn.querySelector('i').classList.toggle('fa-moon')
    themeBtn.querySelector('i').classList.toggle('fa-sun')
    $('body').classList.toggle('light-mode')
})

// render about
const aboutList = [
    {
        heading: 'Education',
        dsc: '2018-2022 : THCS Đào Duy Anh 2023-2026 : THPT Nguyễn Chí Thanh',
        img: './img/about/school.jpg'
    },
    {
        heading: 'Programming',
        dsc: 'Đang học lập trình tại F8edu mảng css/html và javsscript',
        img: './img/about/code.jpg'
    },
    {
        heading: 'Habits',
        dsc: 'Fo4, Valorant, CSGO',
        img: './img/about/draw.jpg'
    },
]

$('.about-desciptions').innerHTML = aboutList.map(aboutItem => {
    return`<div class="about-description">
        <div class="description-img">
            <img src="${aboutItem.img}" alt="">
        </div>
        <div class="description-details">
            <h2>${aboutItem.heading}</h2>
            <p>${aboutItem.dsc}</p>
        </div>
    </div>`
}).join('')



// render skills logo

const skills = [
    {
        img: './img/skills/html.png',
        dsc: 'Html'
    },
    {
        img: './img/skills/css.png',
        dsc: 'Css'
    },
    {
        img: './img/skills/js.png',
        dsc: 'JavaScript'
    },
    {
        img: './img/skills/git.png',
        dsc: 'Git'
    },
    {
        img: './img/skills/figma.png',
        dsc: 'Figma'
    }
]

$('.skill-details-comp').innerHTML = skills.map(skill => {
    return`
    <div class="skill-detail-component">
        <div class="skill-logo">
            <img src="${skill.img}" alt="" srcset="">
        </div>
        <p>${skill.dsc}</p>
</div>
    `
}).join('')

// render portfolio and filter
const filters = ['UI/UX', 'Web App', 'All']

    //render filter btns
$('.portfolio-filter').innerHTML = filters.map(filter => {
    return`
        <div class="portfolio-filter-btn">${filter}</div>
    `
}).join('')

   

const projects = [
    {
        filter: 'ui/ux',
        name: 'First Website',
        dsc: ['Very first website clone','Fully responsive'],
        img:'./img/projects/first.png',
        repo:'https://github.com/huyphamhaha/The-band',
        link:'https://huyphamhaha.github.io/The-band/',
    },
    {
        filter: 'ui/ux',
        name: 'Shoppe clone landing page',
        dsc: ['Shoppee clone UI only','Fully responsive'],
        img:'./img/projects/shopping.png',
        repo:'https://github.com/huyphamhaha/Shoppe-F8-Demo',
        link:'https://huyphamhaha.github.io/Shoppe-F8-Demo/',
    },
    {
        filter: 'ui/ux',
        name: 'Portfolio-1',
        dsc: ['Simple but fun project','Draw with CSS'],
        img:'./img/projects/moon.png',
        repo:'https://github.com/huyphamhaha/Portfolio-Huy',
        link:'https://huyphamhaha.github.io/InfoAboutHuy/',
    },
    {
        filter: 'web app',
        name: 'DEGREY landingpage clone',
        dsc: ['Made with CSS and love'],
        img:'./img/projects/degrey.png',
        repo:'https://github.com/huyphamhaha/DEGREY__CLONE',
        link:'https://huyphamhaha.github.io/DEGREY__CLONE/',
    },
    {
        filter: 'web app',
        name: 'Music Player',
        dsc: ['Minimal design','Working basic functions'],
        img:'./img/projects/music.png',
        repo:'https://github.com/huyphamhaha/Music-Player',
        link:'https://huyphamhaha.github.io/Music-Player/',
    }
]

 // click
 const projectContainer = $('.portfolio-projects')
 const filterBtns = $$('.portfolio-filter-btn')
 filterBtns[0].classList.add('active')
 

 let filtered = projects.filter(element => element.filter == 'ui/ux')
 renderProject()
 let projectImgs = $$('.project-img')
 if(filterBtns) {
     filterBtns.forEach(btn => {
         btn.addEventListener('click', ()=> {
             if($('.portfolio-filter-btn.active')){
                 $('.portfolio-filter-btn.active').classList.remove('active')
             }
             btn.classList.add('active')
             console.log(btn.innerText.toLowerCase())
 
             // check filter and render
 
             filtered = projects.filter(project => project.filter == btn.innerText.toLowerCase())
 
             // if click all render all
 
             if( btn.innerText.toLowerCase()=='all' ) filtered = projects
             renderProject()
             projectImgs = $$('.project-img')
             console.log(projectImgs)
             if(projectImgs) {
                projectImgs.forEach(img => {
                   img.addEventListener('touchstart', ()=> {
                       console.log('touch')
                       img.querySelector('.project-overlay').style.transform = 'translateY(0px)'
                       setTimeout(()=>{
                           img.querySelector('.project-overlay').style.transform = 'translateY(100%)'
                       },1500)
                   })
                })
               }
         })
     })
 }
 
 // filtered = projects.filter(project => project.filter == $('.portfolio-filter-btn.active').innerText.toLowerCase())
 function renderProject(){
     projectContainer.innerHTML = filtered.map(element => {
         return`
         <div class="portfolio-project">
             <div class="project-img" style="background-image:url(${element.img}) ;">
                <div class="project-overlay">
                    <a target="_blank" href="${element.repo}"><i class="fa-solid fa-link"></i></a>
                    <a target="_blank" href="${element.link}"><i class="fa-solid fa-eye"></i></a>
                </div>
             </div>
             <div class="project-info">
                 <h2>${element.name}</h2>
                 <p>${element.dsc[0]}</p>
                 <p>${element.dsc[1]}</p>
             </div>
         </div>
         `
     }).join('')
     
 }
 
//hover for touch devices

 if(projectImgs) {
 projectImgs.forEach(img => {
    img.addEventListener('touchstart', ()=> {
        img.querySelector('.project-overlay').style.transform = 'translateY(0px)'
        setTimeout(()=>{
            img.querySelector('.project-overlay').style.transform = 'translateY(100%)'
        },2500)
    })
 })
}

//social button
const socialBtn = $('.expand-btn')
const socialSection = $('.social-section')

socialBtn.addEventListener('click', ()=>{
    socialBtn.style.display = 'none'
    socialSection.style.transform = 'translateX(0px)'
})

document.addEventListener('click', (e)=>{
    
    if(e.target.closest('.social-section') || e.target.closest('.expand-btn') ) {
        
    }
    else {
        socialBtn.style.display = 'flex'
        socialSection.style.transform = 'translateX(-120px)'
    }
})