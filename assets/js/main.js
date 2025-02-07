function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src= profileData.photo;
    photo.alt= profileData.name;

    const profileName = document.getElementById('profile.name');
    profileName.textContent = profileData.name;

    const profileJob = document.getElementById('profile.job');
    profileJob.textContent = profileData.job;

    const profileLocation = document.getElementById('profile.location');
    profileLocation.textContent = profileData.location;

    const profilePhone = document.getElementById('profile.phone');
    profilePhone.textContent = profileData.phone;
    profilePhone.href = 'tel:${profileData.phone}';

    const profileEmail = document.getElementById('profile.email');
    profileEmail.textContent = profileData.email;
    profileEmail.href = 'mailto:${profileData.email}';
}

function updateSoftSkills(profileData) {
    const skillList = document.getElementById('profile.skills.softSkills');
    profileData.skills.softSkills.forEach(skill => {
        const skillElement = document.createElement('li');
        skillElement.textContent = skill;
        skillList.appendChild(skillElement);
    })
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)

})();

