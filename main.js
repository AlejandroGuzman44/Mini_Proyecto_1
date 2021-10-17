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




function writeSkill(skill_array) 
{

    const skill_list = document.querySelector('#skill_list');
    
    for(let i = 0 ; i < skill_array.length ; i++)
    {

        let item = document.createElement('div');
        item.classList.add('item');


        let item_text = document.createElement('div');
        item_text.classList.add('item-text');


        let skill_name = document.createElement('span');
        skill_name.innerText = skill_array[i].skill;


        let skill_progress = document.createElement('span');
        skill_progress.innerText = `${skill_array[i].progress}%`;
        skill_progress.style = `margin-left: ${skill_array[i].progress-2}%`;


        let progress = document.createElement('div');
        progress.classList.add('progress');


        let progress_bar = document.createElement('div');
        progress_bar.classList.add('progress-bar');
        progress_bar.style = `width: ${skill_array[i].progress}%`;


        item_text.appendChild(skill_name);
        item_text.appendChild(skill_progress);

        item.appendChild(item_text);

        progress.appendChild(progress_bar);

        item.appendChild(progress);


        skill_list.appendChild(item);


    }


}


fetch('skills.json')
    .then(response => response.json())
    .then(info => writeSkill(info))




const form = document.querySelector('#my_form');
const tf_name = document.querySelector('#name');
const tf_email = document.querySelector('#email');
const tf_mensaje = document.querySelector('#mensaje');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
    
    
    
    
form.addEventListener('submit' , onSubmit);
    
    
function onSubmit(e) 
{
    
    e.preventDefault();
    
    if( tf_email.value.split('@').length === 2 ){
    
        let li = document.createElement('li');
        li.classList.add('show');
        let text = document.createTextNode(`Nombre : ${tf_name.value} - Email : ${tf_email.value} - Mensaje : ${tf_mensaje.value}`);
        li.appendChild(text);
        users.appendChild(li);
        setTimeout(() => li.remove() , 5000)
    
        msg.classList.add('bienvenido');
    
        msg.innerText = "Datos procesados correctamente";
    
        setTimeout(() => {msg.classList.remove('bienvenido'); msg.innerText = ''; } , 2000);
           
        console.log('Nombre :' , tf_name.value , 'Correo :' , tf_email.value , 'Mensaje :' , tf_mensaje.value);
    
    }else{
    
        msg.classList.add('error');
    
        msg.innerText = "Correo invalido";
    
        setTimeout(() => {msg.classList.remove('error'); msg.innerText = ''; } , 2000);
    
            
    
    }
    
        
    
    tf_name.value = '';
    tf_email.value = '';
    tf_mensaje.value = '';
        
}