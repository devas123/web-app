package frontend.repository;

import frontend.model.security.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

@Component
public interface UserRepository extends MongoRepository<User, Long> {
    User findByUsername(String username);
}
