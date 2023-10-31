package game.service;

import game.data.GameResultRepository;
import game.models.GameResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameResultService {

    private final GameResultRepository gameResultRepository;

    @Autowired
    public GameResultService(GameResultRepository gameResultRepository) {
        this.gameResultRepository = gameResultRepository;
    }

    public List<GameResult> findAll() {
        return gameResultRepository.findAll();
    }

}
