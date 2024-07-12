let linkdin = document.getElementById("linkedin");
let github = document.getElementById("github");

linkdin.addEventListener('click',function(event){
    event.preventDefault();   
    window.open('https://www.linkedin.com/in/meghna-sarkar-bb32bb200/', '_blank');
})


github.addEventListener('click',function(event){
    event.preventDefault();   
    window.open('https://github.com/anh-gem', '_blank');
})

let about = document.getElementById("aboutClick");

about.addEventListener('click',function(){
    var section = document.getElementById('about');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
})

let skills = document.getElementById("skillsClick");

skills.addEventListener('click',function(){
    var section = document.getElementById('skills');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
})

let pfolio = document.getElementById("pfolioClick");

pfolio.addEventListener('click',function(){
    var section = document.getElementById('pfolio');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
})