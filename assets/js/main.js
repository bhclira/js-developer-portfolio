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

    const profileEmail = document.getElementById('profile.email');
    profileEmail.textContent = profileData.email;
}


(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)

})();

