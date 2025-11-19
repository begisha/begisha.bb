const images = [
  "https://cdn.fastly.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png", 
  "https://cdn.fastly.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png", 
  "https://cdn.fastly.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png", 
  "https://cdn.fastly.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png", 
  "https://cdn.fastly.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png", 
  "https://cdn.fastly.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png", 
];

async function loadCards() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
        }

        const data = await response.json();

        const cardsContainer = document.getElementById("cards");

        const firstSix = data.slice(0, 6);

        firstSix.forEach((post, index) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${images[index]}" alt="image">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            cardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
}

loadCards();
