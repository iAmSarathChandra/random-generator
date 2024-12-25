from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# Data lists for random selections
colors = ["Red", "Blue", "Green", "Purple", "Orange", "Yellow", "Pink"]
foods = ["Pizza", "Sushi", "Burger", "Pasta", "Tacos", "Ice Cream"]
countries = ["Japan", "Italy", "France", "Brazil", "Canada", "Australia"]
movies = ["Inception", "The Matrix", "Interstellar", "Avatar", "The Dark Knight"]
animals = ["Tiger", "Elephant", "Penguin", "Dolphin", "Lion", "Panda"]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_random/<int:choice>')
def get_random(choice):
    if choice == 1:
        result = random.choice(colors)
    elif choice == 2:
        result = random.choice(foods)
    elif choice == 3:
        result = random.choice(countries)
    elif choice == 4:
        result = random.choice(movies)
    elif choice == 5:
        result = random.choice(animals)
    else:
        return jsonify({"error": "Invalid choice"})
    
    message = f'Hurray! You got {result}.   Explore more at <a href="  https://speakingcharacter.ai/" target="_blank">https://speakingcharacter.ai/</a>'
    return jsonify({"result": result, "message": message})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080) 