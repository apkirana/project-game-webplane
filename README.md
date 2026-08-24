# Simple Plane Game

## Overview

A browser game in plain HTML, CSS and JavaScript: steer a plane with the arrow keys and collect stars
for points.

Written as **teaching material for an introductory web-programming class**. A game is a useful first
project because it forces students to meet the event loop, keyboard event handling, collision detection
and DOM state management in one small, immediately visible program — with no framework, no build step
and no dependencies to install.


## Demo

![The plane moving around the play area collecting stars](https://raw.githubusercontent.com/apkirana/project-game-webplane/main/demo%20game.gif)


## How to play

- Use the arrow keys to move the plane:
  - **Arrow Up**: Move up
  - **Arrow Down**: Move down
  - **Arrow Left**: Move left
  - **Arrow Right**: Move right
- Collect the stars to increase your score
- Click **Restart** to reset the game

## Running it

No build step and no dependencies — clone and open `index.html` in a browser:

```bash
git clone https://github.com/apkirana/project-game-webplane.git
cd project-game-webplane
open index.html          # Linux: xdg-open index.html
```

## Concepts it demonstrates

| Concept | Where |
| --- | --- |
| Keyboard event handling | `keydown` listeners mapping arrow keys to movement in `game.js` |
| Game loop and state | Position and score held in JavaScript state, redrawn each frame |
| Collision detection | Bounding-box overlap between plane and star |
| DOM manipulation | Score display and restart handling without any framework |

## Project Structure

- `index.html`: The main HTML file that structures the webpage.
- `styles.css`: The CSS file for styling the game elements.
- `game.js`: The JavaScript file containing the game logic.
- `images/`: Directory containing images used in the game (`plane.png` and `star.png`).

## Technologies Used

- **HTML**: For structuring the game interface.
- **CSS**: For styling the game elements.
- **JavaScript**: For implementing the game logic.

## Installation

To run the game locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/simple-plane-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd simple-plane-game
    ```
3. Open the `index.html` file in your web browser to start the game.

## Usage

- Use the arrow keys to navigate the plane and collect stars.
- The score will increase with each star collected.
- Use the "Restart" button to reset the game.

## Contributing

Contributions to improve the game are welcome. Please fork the repository and submit a pull request with your changes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Author

**Annisa Puspa Kirana** — PhD researcher, Faculty of Geo-Information Science and Earth Observation (ITC),
University of Twente. Research on agentic AI and LLM-driven workflows for Earth observation.

[Google Scholar](https://scholar.google.com/citations?user=BQl6KOsAAAAJ&hl=en) ·
[ORCID](https://orcid.org/0000-0002-4622-1445) ·
[LinkedIn](https://www.linkedin.com/in/annisapuspakirana) ·
[GitHub](https://github.com/apkirana)
