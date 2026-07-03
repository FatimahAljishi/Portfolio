import { useEffect, useState } from "react";
import "./CatGame.css";
import catIcon from "../assets/cat.png";
import vegetableIcon from "../assets/broccoli.png";
import fishIcon from "../assets/fish.png";
import heartIcon from "../assets/heart.png";

const GAME_WIDTH = 360;
const GAME_HEIGHT = 300;
const CAT_WIDTH = 50;
const ITEM_SIZE = 28;

export default function CatGame() {
  const [catX, setCatX] = useState(150);
  const [items, setItems] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (gameOver) return;

      if (e.key === "ArrowLeft") {
        setCatX((x) => Math.max(0, x - 20));
      }

      if (e.key === "ArrowRight") {
        setCatX((x) => Math.min(GAME_WIDTH - CAT_WIDTH, x + 20));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const spawnInterval = setInterval(() => {
      const isFish = Math.random() > 0.3;

      setItems((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * (GAME_WIDTH - ITEM_SIZE),
          y: 0,
          type: isFish ? "fish" : "vegetable",
        },
      ]);
    }, 900);

    return () => clearInterval(spawnInterval);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setItems((prevItems) => {
        let newScore = score;
        let newLives = lives;

        const updatedItems = prevItems
          .map((item) => ({
            ...item,
            y: item.y + 8,
          }))
          .filter((item) => {
            const hitCat =
              item.y + ITEM_SIZE >= GAME_HEIGHT - 45 &&
              item.x < catX + CAT_WIDTH &&
              item.x + ITEM_SIZE > catX;

            if (hitCat) {
              if (item.type === "fish") {
                newScore += 1;
              } else {
                newLives -= 1;
              }
              return false;
            }

            return item.y < GAME_HEIGHT;
          });

        setScore(newScore);
        setLives(newLives);

        if (newLives <= 0) {
          setGameOver(true);
        }

        return updatedItems;
      });
    }, 80);

    return () => clearInterval(gameLoop);
  }, [catX, score, lives, gameOver]);

  function restartGame() {
    setCatX(150);
    setItems([]);
    setScore(0);
    setLives(3);
    setGameOver(false);
  }

  return (
    <div className="cat-game">
      <div className="cat-game-header">
        <span>Fish: {score}</span>
        <span>
          Lives:{" "}
          {Array(lives).fill(<img className="heart-icon" src={heartIcon} />)}
        </span>
      </div>

      <div className="game-area">
        {items.map((item) => (
          <div
            key={item.id}
            className="falling-item"
            style={{
              left: item.x,
              top: item.y,
            }}
          >
            {item.type === "fish" ? (
              <img className="fish-icon" src={fishIcon} />
            ) : (
              <img className="vegetable-icon" src={vegetableIcon} />
            )}
          </div>
        ))}

        <div
          className="cat-player"
          style={{
            left: catX,
          }}
        >
          <img className="cat-icon" src={catIcon} />
        </div>

        {gameOver && (
          <div className="game-over">
            <h2>Game Over</h2>
            <p>You collected {score} fish!</p>
            <button onClick={restartGame}>Play Again</button>
          </div>
        )}
      </div>

      <p className="game-instructions">
        Use ← and → arrows. Eat fish. Avoid vegetables.
      </p>
    </div>
  );
}
