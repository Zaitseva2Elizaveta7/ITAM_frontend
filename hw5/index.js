const url = 'https://dog.ceo/api/breeds/image/random/9';
let dogsList = [];

document.addEventListener('DOMContentLoaded', function() {
    getData().then(data => fillData(data));
});

async function getData(){
    return await fetch(url)
        .then((res)=>res.json()
        .catch(error=>console.error(error)));
}

function fillData(data){
    if (data.status !== 'success') {
        console.error('API вернуло ошибку');
        return;
    }
    dogsList = [];
    for(let i = 0; i < data.message.length; i++){
        const breedName = extractBreedName(data.message[i]);
        dogsList.push({
            img: data.message[i],
            breed: breedName,
        });
    }
    showData();
}

function extractBreedName(url) {
    try {
        const parts = url.split('/');
        const breedPart = parts[4];
        
        if (breedPart) {
            return breedPart
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }
        return 'Неизвестная порода';
    } catch (error) {
        console.error('Ошибка при извлечении породы:', error);
        return 'Неизвестная порода';
    }
}



function showData(){
    const place = document.querySelector(".dogs-list");
    place.innerHTML = ''; 
    for(let i = 0; i < dogsList.length; i++){
        const newCard = document.createElement("div");
        newCard.className = 'dog-card';
        
        const newImage = document.createElement("img");
        newImage.src = dogsList[i].img;
        newImage.alt = `Собака ${dogsList[i].breed}`;
        
        const newText = document.createElement("p");
        newText.className = 'dog-title';
        newText.innerText = dogsList[i].breed;
        
        const deleteButton = document.createElement("button");
        deleteButton.className = 'button button-delete';
        deleteButton.textContent = 'Удалить';
        deleteButton.dataset.id = i;
        
        newCard.appendChild(newImage);
        newCard.appendChild(newText);
        newCard.appendChild(deleteButton);
        place.appendChild(newCard);
    }
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('button-delete')) {
        const id = parseInt(event.target.dataset.id);
        dogsList.splice(id, 1);
        showData(); 
    }
});

const button = document.querySelector(".btn-getList");
button.addEventListener('click', function() {
    getData().then(data => fillData(data));
});