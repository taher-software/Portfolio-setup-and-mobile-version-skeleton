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
    techns.classList.add('skills');
    techns.id = 'skills_0';
  });
  btnLoad.innerHTML = 'See Project';
  btnLoad.href = '#';
  projectSection.appendChild(general);
  projectSection.id = key;

  return projectSection;
}

window.addEventListener('load', () => {
  Object.keys(projects).forEach((key) => {
    myWork.appendChild(createMobileProjectCard(key));
  });

  const popUpBtn = document.querySelectorAll('.external_link');
  popUpBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnSource = document.createElement('a');
      const btnLive = document.createElement('a');
      const externalButton = document.createElement('div');
      const parentId = btn.parentElement.parentElement.parentElement.id;
      const sectionTarget = document.getElementById(parentId);
      const wrapper = document.createElement('div');
      const home = document.querySelector('.home-page');
      const cancelBtn = document.createElement('img');
      const imgWrapper = document.createElement('div');
      const header = document.createElement('div');
      const title = sectionTarget.querySelector('h3');
      const infos = sectionTarget.querySelectorAll('p')[0];
      const img = sectionTarget.querySelector('img');
      const description = sectionTarget.querySelector('.project_description');
      const skills = sectionTarget.querySelector('.skills');
      const bottom = document.createElement('div');
      const mobilePart = document.createElement('div');

      cancelBtn.src = './statics/images/Icon.svg';
      imgWrapper.appendChild(cancelBtn);
      imgWrapper.classList.add('pop-header-div');
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

      description.innerHTML = projects[parentId].description;

      mobilePart.appendChild(description);
      mobilePart.appendChild(bottom);
      mobilePart.classList.add('mobile-part-class');
      mobilePart.querySelector('p').classList.add('pop-header-description');
      infos.style.marginLeft = '32px';
      img.classList.add('pop-header-img');
      img.style.marginLeft = '32px';

      wrapper.appendChild(header);
      wrapper.appendChild(infos);
      wrapper.appendChild(img);
      wrapper.appendChild(mobilePart);

      wrapper.style.zIndex = '999';
      wrapper.style.position = 'fixed';
      wrapper.style.top = '0';

      wrapper.classList.add('pop-window');
      home.style.backgroundColor = 'rgba(193, 199, 208, 1)';
      home.appendChild(wrapper);

      const cancel = document.querySelector('.pop-header-div');
      cancel.addEventListener('click', () => {
        document.querySelector('.pop-window').style.display = 'none';
        home.style.backgroundColor = '#fff';
      });
    });
  });
});