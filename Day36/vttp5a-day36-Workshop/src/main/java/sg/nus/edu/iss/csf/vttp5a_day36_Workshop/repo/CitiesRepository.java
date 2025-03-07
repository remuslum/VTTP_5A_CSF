package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model.City;

@Repository
public class CitiesRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String SELECT_ALL_CITIES = 
    """
        SELECT code, city_name FROM cities        
    """;

    public List<City> getAllCities() {
        return jdbcTemplate.query(SELECT_ALL_CITIES, (rs, rowNum) -> {
            return City.populate(rs);
        });
    }
}
