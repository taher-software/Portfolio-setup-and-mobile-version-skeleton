const projects = {
  p1: {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'statics/images/Snapshoot_Portfolio.png',
    technolgies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2015],
  },
  p2: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'statics/images/Snapshoot_Portfolio1.png',
    technolgies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['FACEBOOK', 'Full Stack Dev', 2015],
  },
  p3: {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'statics/images/Snapshoot_Portfolio2.png',
    technolgies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2015],
  },
  p4: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'statics/images/Snapshoot_Portfolio3.png',
    technolgies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['FACEBOOK', 'Full Stack Dev', 2015],
  },
};

const myWork = document.querySelector('#my_work');

function createMobileProjectCard(key) {
  const projectSection = document.createElement('section');
  const img = document.createElement('img');
  const general = document.createElement('div');
  const infGeneral = document.createElement('div');
  const title = document.createElement('h3');
  const inf = document.createElement('p');
  const description = document.createElement('p');
  const techns = document.createElement('ul');
  const btnLoad = document.createElement('a');
  const footer = document.createElement('footer');
  const externalLink = document.createElement('div');
  externalLink.appendChild(btnLoad);
  externalLink.classList.add('external_link');
  footer.appendChild(techns);
  footer.appendChild(externalLink);
  general.appendChild(title);
  general.appendChild(infGeneral);
  general.appendChild(description);
  general.appendChild(footer);
  general.classList.add('general');
  infGeneral.appendChild(inf);
  infGeneral.id = 'general_inf';
  projectSection.appendChild(img);
  img.src = projects[key].img;
  img.alt = 'Image project';
  img.classList.add('project_image');
  projectSection.appendChild(general);
  title.innerHTML = projects[key].name;
  inf.innerHTML = `${projects[key].generalInf[0]}  &bullet;  ${projects[key].generalInf[1]}  &bullet;  ${projects[key].generalInf[2]}`;
  inf.classList.add('title');
  description.innerHTML = projects[key].description.substring(0, Math.max(130,
    Math.floor(0.4 * projects[key].description.length)));
  description.classList.add('project_description');

  projects[key].technolgies.forEach((element) => {
    techns.innerHTML = `${techns.innerHTML}<li>${element} </li>`;
  });
  techns.classList.add('skills');
  techns.id = 'skills_0';
  btnLoad.innerHTML = 'See Project';
  btnLoad.href = '#';
  projectSection.appendChild(general);
  projectSection.id = key;

  return projectSection;
}

Object.keys(projects).forEach((key) => {
  myWork.appendChild(createMobileProjectCard(key));
});

const popUpBtn = document.querySelectorAll('.external_link');
const btnSource = document.createElement('a');
const btnLive = document.createElement('a');
const externalButton = document.createElement('div');
const wrapper = document.createElement('div');
const home = document.querySelector('.home-page');
const cancelBtn = document.createElement('img');
const imgWrapper = document.createElement('div');
const header = document.createElement('div');
const title = document.createElement('h3');
const infos = document.createElement('p');
const image = document.createElement('img');
const description = document.createElement('p');
const skills = document.createElement('ul');

imgWrapper.classList.add('pop-header-div');
cancelBtn.src = './statics/images/Icon.svg';
imgWrapper.appendChild(cancelBtn);

description.classList.add('project_description');

infos.classList.add('inf');

const bottom = document.createElement('div');
const mobilePart = document.createElement('div');

title.classList.add('pop-header-h3');
header.appendChild(title);
title.style.marginLeft = '32px';
header.appendChild(imgWrapper);
header.classList.add('pop-header');
btnSource.innerHTML = '<img src="statics/images/gitbutton.png" alt="Live version"> ';
btnLive.innerHTML = '<img src="statics/images/Enabled.png" alt="Live version"> ';
externalButton.appendChild(btnLive);
externalButton.appendChild(btnSource);

bottom.appendChild(skills);
bottom.appendChild(externalButton);

mobilePart.appendChild(description);
mobilePart.appendChild(bottom);
mobilePart.classList.add('mobile-part-class');
mobilePart.querySelector('p').classList.add('pop-header-description');
infos.style.marginLeft = '32px';
image.classList.add('project_image');
image.classList.add('pop-header-img');

wrapper.appendChild(header);
wrapper.appendChild(infos);
wrapper.appendChild(image);
wrapper.appendChild(mobilePart);

wrapper.style.zIndex = '999';
wrapper.style.position = 'absolute';
wrapper.style.top = '0';

wrapper.classList.add('pop-window');
wrapper.style.visibility = 'hidden';
home.appendChild(wrapper);

popUpBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentId = btn.parentElement.parentElement.parentElement.id;
    console.log(parentId);
    title.innerHTML = projects[parentId].name;
    infos.innerHTML = `${projects[parentId].generalInf[0]}  &bullet;  ${projects[parentId].generalInf[1]}  &bullet;  ${projects[parentId].generalInf[2]}`;
    image.src = projects[parentId].img;
    description.innerHTML = projects[parentId].description.substring(0,
      Math.min(250, projects[parentId].description.length));
    skills.innerHTML = '';
    projects[parentId].technolgies.forEach((element) => {
      skills.innerHTML = `${skills.innerHTML}<li>${element} </li>`;
    });

    skills.classList.add('skills');
    skills.classList.add('techns');

    home.style.backgroundColor = 'rgba(193, 199, 208, 1)';
    wrapper.style.visibility = 'visible';

    wrapper.style.position = 'fixed';
  });
});
const cancel = document.querySelector('.pop-header-div');

cancel.addEventListener('click', () => {
  document.querySelector('.pop-window').style.visibility = 'hidden';
  home.style.backgroundColor = '#fff';
  wrapper.style.position = 'hidden';
});
/* form control */
function isLowerCase(input) {
  const str = input.value.trim();
  return str === str.toLowerCase();
}
function showMessage(form, invalidMsg) {
  const target = form.querySelector('span');
  target.innerText = invalidMsg;
}
function validateEmail(form, input, invalidMsg) {
  if (isLowerCase(input)) {
    return true;
  }
  showMessage(form, invalidMsg);
  return false;
}
const form = document.querySelector('form');
const msg = 'The form was not sent, the email text should be in lower case.';
form.addEventListener('submit', (event) => {
  const mail = form.elements.email;
  const emailValid = validateEmail(form, mail, msg);

  if (!emailValid) {
    event.preventDefault();
  }
});
/* save form data */
const userName = form.elements.name;
const userEmail = form.elements.email;
const userMessage = form.elements.message;
function populateStorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}
function setForm() {
  const storedInput = JSON.parse(localStorage.getItem('userInput'));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;

  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.message.value = currentMessage;
}
if (!localStorage.getItem('userInput')) {
  populateStorage();
} else {
  setForm();
}
userName.onchange = populateStorage;
userEmail.onchange = populateStorage;
userMessage.onchange = populateStorage;