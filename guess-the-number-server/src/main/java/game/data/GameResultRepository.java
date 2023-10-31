package game.data;

import game.models.GameResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameResultRepository extends JpaRepository<GameResult, Long> {
    // Add custom query methods if needed
    List<GameResult> findAll();
}
