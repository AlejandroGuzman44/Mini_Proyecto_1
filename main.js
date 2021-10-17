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



var counter = 1;

setInterval(function()
{
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4)
  {
    counter = 1;
  }
}, 3000);




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