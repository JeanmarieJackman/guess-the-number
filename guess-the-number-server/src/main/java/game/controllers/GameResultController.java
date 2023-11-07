package game.controllers;

import game.data.GameResultRepository;
import game.models.GameResult;
import game.service.GameResultService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game")
public class GameResultController {

    private final GameResultService gameResultService;
    private final GameResultRepository gameResultRepository;

    public GameResultController(GameResultService gameResultService, GameResultRepository gameResultRepository) {
        this.gameResultService = gameResultService;
        this.gameResultRepository = gameResultRepository;
    }

    @GetMapping
    public List<GameResult> getAllGames() {
        return  gameResultService.findAll();
    }
    @PostMapping
    public void saveGameResult(@RequestBody GameResult gameResult) {
        gameResultService.saveGameResult(gameResult);
    }
}
