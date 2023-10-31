package game.controllers;

import game.data.GameResultRepository;
import game.models.GameResult;
import game.service.GameResultService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
