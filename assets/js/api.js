

// criar um chama para a api no seguinte endereço "https://raw.githubusercontent.com/bhclira/js-developer-portfolio/refs/heads/projeto-base/data/profile.json
// criar uma função que irá fazer a requisição para a api e retornar o json"

async function fetchProfileData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/bhclira/js-developer-portfolio/refs/heads/projeto-base/data/profile.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}




