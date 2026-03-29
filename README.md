Wordle Clone (React)

A simplified Wordle-style game built using React.
Guess the hidden 5-letter word within 6 attempts!

Features
5x6 grid gameplay (5-letter words, 6 attempts)
Physical keyboard + on-screen keyboard support
Color feedback:
🟩 Green → correct letter, correct position
🟨 Yellow → correct letter, wrong position
🟥 Red → letter not in word
New Game reset functionality
Tile flip animation (one-by-one reveal)
Handles duplicate letters correctly
Keyboard color updates based on guesses

🛠️ Tech Stack
React (Hooks: useState, useEffect, useCallback)
JavaScript (ES6+)
CSS (Grid + Animations)

How to Play
Type a 5-letter word using your keyboard
Press Enter to submit
Colors will indicate:
🟩 Correct letter & position
🟨 Correct letter, wrong position
🟥 Not in word
You have 6 attempts to guess the word
Click New Game to restart

Key Concepts Implemented:
React state management
Controlled input via keyboard events
Dynamic grid rendering using loops
Animation timing using setTimeout
Handling duplicate letters correctly
Conditional rendering for game states

Challenges Solved:
Fixing duplicate letter coloring logic
Preventing state overwrite during animation
Ensuring animation triggers only for submitted rows
Resetting full game state correctly
Synchronizing UI with React state updates

Acknowledgements

Inspired by the original Wordle game.
