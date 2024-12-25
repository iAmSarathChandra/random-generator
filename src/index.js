const express = require('express');
const path = require('path');

// Data for random selections
const data = {
    colors: ["Red", "Blue", "Green", "Purple", "Orange", "Yellow", "Pink"],
    foods: ["Pizza", "Sushi", "Burger", "Pasta", "Tacos", "Ice Cream"],
    countries: ["Japan", "Italy", "France", "Brazil", "Canada", "Australia"],
    movies: ["Inception", "The Matrix", "Interstellar", "Avatar", "The Dark Knight"],
    animals: ["Tiger", "Elephant", "Penguin", "Dolphin", "Lion", "Panda"]
};

function createApp(options = {}) {
    const app = express();
    const port = options.port || 8080;
    
    // Set view engine and static files
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.use(express.static(path.join(__dirname, 'public')));

    // Routes
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/get_random/:choice', (req, res) => {
        const choice = parseInt(req.params.choice);
        let result;

        switch(choice) {
            case 1:
                result = data.colors[Math.floor(Math.random() * data.colors.length)];
                break;
            case 2:
                result = data.foods[Math.floor(Math.random() * data.foods.length)];
                break;
            case 3:
                result = data.countries[Math.floor(Math.random() * data.countries.length)];
                break;
            case 4:
                result = data.movies[Math.floor(Math.random() * data.movies.length)];
                break;
            case 5:
                result = data.animals[Math.floor(Math.random() * data.animals.length)];
                break;
            default:
                return res.json({ error: "Invalid choice" });
        }

        const message = `Hurray! You got ${result}. Explore more at <a href="https://speakingcharacter.ai/" target="_blank">https://speakingcharacter.ai/</a>`;
        res.json({ result, message });
    });

    return {
        app,
        start: () => {
            app.listen(port, () => {
                console.log(`Speaking Character AI server running at http://localhost:${port}`);
            });
        }
    };
}

module.exports = createApp;

// Allow direct execution
if (require.main === module) {
    const { start } = createApp();
    start();
} 