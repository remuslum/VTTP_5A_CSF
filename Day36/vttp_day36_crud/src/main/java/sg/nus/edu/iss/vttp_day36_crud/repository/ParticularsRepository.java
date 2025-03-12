package sg.nus.edu.iss.vttp_day36_crud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import sg.nus.edu.iss.vttp_day36_crud.model.Particulars;

@Repository
public class ParticularsRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final String SELECT_ALL_ROWS = 
    """
    SELECT badge_id,name,email FROM particulars;        
    """;

    public static final String BADGE_ID_COLUMN_NAME ="badge_id";
    public static final String NAME_COLUMN_NAME ="name";
    public static final String EMAIL_COLUMN_NAME ="email";

    public Optional<List<Particulars>> selectAllRecords(){
        List<Particulars> particulars = jdbcTemplate.query(SELECT_ALL_ROWS, (rs, rowNum) -> {
            return Particulars.toParticulars(rs);
        });

        return particulars.isEmpty() ? Optional.empty() : Optional.of(particulars);
    }

    
}
