$(document).ready(function(){
     let cardsSpace = document.getElementById('projects-space');

     for(i=0;i<PROJECTS.length;i++){
     	let project= PROJECTS[i];

     	let title = document.createElement('a');
     	let titleSpan = document.createElement('span');
     	titleSpan.setAttribute('class', 'card-header link-grey')
     	titleSpan.textContent=project.title;
     	title.appendChild(titleSpan);
     	if(project.hostLink){
     		title.setAttribute('href', project.hostLink)
     		title.setAttribute('target', '_blank')

     	}



     	let imgDiv = document.createElement('div');
     	imgDiv.setAttribute('class', 'card-image');
     	let imgA = document.createElement('a');
     	let img = document.createElement('img');
     	img.setAttribute('class', 'valign')
     	img.setAttribute('src', project.imgLink)
     	if(project.hostLink){
     		imgA.setAttribute('href', project.hostLink)
     		imgA.setAttribute('target', '_blank')
     	}


     	imgA.appendChild(img);
     	imgDiv.appendChild(imgA)



     	let cardContent = document.createElement('div');
     	cardContent.className="card-content";
     	let p = document.createElement('p');
     	p.textContent = project.desciption;
     	cardContent.appendChild(p);
     	let a0 = document.createElement('a');
     	if(project.hostLink){
     		a0.setAttribute('class', 'waves-effect waves-light btn  grey darken-3')
     		a0.setAttribute('href', project.hostLink)
     		a0.setAttribute('target', '_blank')
     	}
     	else{
     		a0.setAttribute('class', 'disabled waves-effect waves-light btn  grey darken-3')
     	}
     	a0.textContent ='Check it out';
     	cardContent.appendChild(a0)
     	let a1 = document.createElement('a');
     	if(project.githubLink){
     		a1.setAttribute('class', 'waves-effect waves-light btn  grey darken-3')
     		a1.setAttribute('href', project.githubLink)
     		a1.setAttribute('target', '_blank')
     	}
     	else{
     		a1.setAttribute('class', 'disabled waves-effect waves-light btn  grey darken-3')
     	}
     	a1.textContent= 'GitHub';
     	cardContent.appendChild(a1);



     	let cardDiv = document.createElement('div');
     	cardDiv.setAttribute('class', 'card animated slideInUp')
     	cardDiv.appendChild(title);
     	cardDiv.appendChild(imgDiv);
     	cardDiv.appendChild(cardContent)

     	let gridDiv = document.createElement('div');
     	gridDiv.setAttribute('class', 'col m12 l6')
     	gridDiv.appendChild(cardDiv);

     	cardsSpace.appendChild(gridDiv)
     }
   });
