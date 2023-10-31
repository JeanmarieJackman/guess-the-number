package game.models;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "game_results")
public class GameResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "attempts")
    private int attempts;

    @Column(name = "win")
    private boolean win;

    @Column(name = "game_date")
    private Date gameDate;

    // Constructors, getters, and setters

    public GameResult() {
    }

    public GameResult(int id, String playerName, int attempts, boolean win, Date gameDate) {
        this.id = id;
        this.playerName = playerName;
        this.attempts = attempts;
        this.win = win;
        this.gameDate = gameDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public int getAttempts() {
        return attempts;
    }

    public void setAttempts(int attempts) {
        this.attempts = attempts;
    }

    public boolean isWin() {
        return win;
    }

    public void setWin(boolean win) {
        this.win = win;
    }

    public Date getGameDate() {
        return gameDate;
    }

    public void setGameDate(Date gameDate) {
        this.gameDate = gameDate;
    }
}
