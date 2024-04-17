// async function get_img(){
//     let img = await fetch(`https://source.unsplash.com/random/300x200?sig=${Math.random()}`);
//     const responce = await img.json();
//     console.log(responce);
// }

// async function get_img() {
//     try {
//         let img = await fetch('https://api.api-ninjas.com/v1/randomimage?category={}');
//         if (!img.ok) {
//             throw new Error(`Failed to fetch image: ${img.status} ${img.statusText}`);
//         }
//         const response = await img.json();
//         console.log(response);
//     } catch (error) {
//         console.error('Error fetching image:', error);
//     }
// }



// get_img();

// async function responce(img){
//     document.getElementById("img").src = img;
// }


//it is right code:
// async function get_img() {
//     try {
//         const response = await fetch("https://dog.ceo/api/breeds/image/random");
//         if (!response.ok) {
//             throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
        
//         return data.message; // Use data.message instead of data.urls
//     } catch (error) {
//         console.error('Error fetching image:', error);
//         return null;
//     }
// }

// // Example usage:
// async function displayRandomImage() {
//     const imageUrl = await get_img();
//     if (imageUrl) {
//         const imgElement = document.createElement('img');
//         imgElement.src = imageUrl;
        // imgElement.style.width = '45vw';
        // imgElement.style.height = '90%';
        // imgElement.style.paddingTop = 10;
        // imgElement.style.margin = "auto"
//         document.querySelector('.image_block').appendChild(imgElement); // Use #image_block for ID selection
//     } else {
//         console.error('Failed to fetch image.');
//     }
// }

// displayRandomImage();

// It is the better code for fetchig dog image api
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', get_img);
});

async function get_img() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const imageUrl = data.message;
        const imgElement = document.getElementById('img');
        imgElement.src = imageUrl;
        imgElement.style.width = '25vw';
        imgElement.style.height = '100%';
        imgElement.style.padding = 10;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

// for cat 
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.cat_btn');
    btn.addEventListener('click', get_cat_img);
});
async function get_cat_img() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const imageUrl = data[0].url;
        const imgElement = document.getElementById('cat_img');
        imgElement.src = imageUrl;
        imgElement.style.width = '25vw';
        imgElement.style.height = '100%';
        imgElement.style.padding = 10;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

// for random fish 
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.fish_btn');
    btn.addEventListener('click', get_fish_img);
});
async function get_fish_img() {
    try {
        const response = await fetch("https://fishfacts.herokuapp.com/fish/random");
        if (!response.ok) {
            throw new Error(`Failed to fetch fish data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const imageUrl = data.image;
        const imgElement = document.getElementById('fish_img');
        imgElement.src = imageUrl;
        imgElement.style.width = '25vw';
        imgElement.style.height = '100%';
        imgElement.style.padding = '10px';
    } catch (error) {
        console.error('Error fetching fish data:', error);
    }
}
