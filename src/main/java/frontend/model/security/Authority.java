package frontend.model.security;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;
import java.math.BigInteger;
import java.util.List;


public class Authority {

    @Id
    private BigInteger id;

    @NotNull
    private AuthorityName name;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public AuthorityName getName() {
        return name;
    }

    public void setName(AuthorityName name) {
        this.name = name;
    }

}