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



var counter = 0;

const manual_nav = document.querySelectorAll('.manual-btn');

manual_nav.forEach( (btn)=>{
  
  btn.addEventListener( 'click', ()=>{

    counter = parseInt( btn.htmlFor.split('radio')[1] )-1;
    document.querySelector('.first' ).style.marginLeft = `${-1*counter*20}%`;
    document.getElementById('radio' + (counter+1) ).checked = true;

  } );

} )

setInterval(function(){
  
  document.querySelector('.first' ).style.marginLeft = `${-1*counter*20}%`;
  document.getElementById('radio' + (counter+1) ).checked = true;
  counter = (counter+1)%4 ;

}, 5000);