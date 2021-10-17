document.querySelector('#nav_home').addEventListener('click' , () =>{

    document.querySelector('.nav_active').classList.remove('nav_active');
    document.querySelector('#nav_home').classList.add('nav_active');
})

document.querySelector('#nav_aboutme').addEventListener('click' , () =>{

    document.querySelector('.nav_active').classList.remove('nav_active');
    document.querySelector('#nav_aboutme').classList.add('nav_active');
})

document.querySelector('#nav_skills').addEventListener('click' , () =>{

    document.querySelector('.nav_active').classList.remove('nav_active');
    document.querySelector('#nav_skills').classList.add('nav_active');
})

document.querySelector('#nav_experience').addEventListener('click' , () =>{

    document.querySelector('.nav_active').classList.remove('nav_active');
    document.querySelector('#nav_experience').classList.add('nav_active');
})

document.querySelector('#nav_contact').addEventListener('click' , () =>{

    document.querySelector('.nav_active').classList.remove('nav_active');
    document.querySelector('#nav_contact').classList.add('nav_active');
})