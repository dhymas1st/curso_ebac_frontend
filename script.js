document.addEventListener("DOMContentLoaded", async function() {
    const GITHUB_USERNAME = "dhymas1st";
    const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro ao buscar os dados do GitHub");
        
        const data = await response.json();
        
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").textContent = data.name || "Sem nome";
        document.getElementById("username").textContent = `@${data.login}`;
        document.getElementById("repos").textContent = data.public_repos;
        document.getElementById("followers").textContent = data.followers;
        document.getElementById("following").textContent = data.following;
        document.getElementById("github-link").href = data.html_url;
    } catch (error) {
        console.error("Erro ao carregar os dados do GitHub", error);
    }
});
