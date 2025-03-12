package sg.nus.edu.iss.vttp_day36_crud.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import static sg.nus.edu.iss.vttp_day36_crud.repository.ParticularsRepository.BADGE_ID_COLUMN_NAME;
import static sg.nus.edu.iss.vttp_day36_crud.repository.ParticularsRepository.EMAIL_COLUMN_NAME;
import static sg.nus.edu.iss.vttp_day36_crud.repository.ParticularsRepository.NAME_COLUMN_NAME;

public class Particulars {
    private String badgeId;
    private String name;
    private String email;
    
    public Particulars() {
    }

    public String getBadgeId() {
        return badgeId;
    }

    public void setBadgeId(String badgeId) {
        this.badgeId = badgeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static Particulars toParticulars(ResultSet rs) throws SQLException{
        Particulars p = new Particulars();
        p.setBadgeId(rs.getString(BADGE_ID_COLUMN_NAME));
        p.setName(rs.getString(NAME_COLUMN_NAME));
        p.setEmail(rs.getString(EMAIL_COLUMN_NAME));

        return p;
    }
}
