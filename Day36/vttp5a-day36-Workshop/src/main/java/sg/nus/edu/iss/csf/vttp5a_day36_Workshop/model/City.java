package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class City {
    private String code;
    private String cityName;

    public City() {
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getCityName() {
        return cityName;
    }
    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public static City populate(ResultSet rs) throws SQLException{
        City city = new City();
        city.setCode(rs.getString("code"));
        city.setCityName(rs.getString("city_name"));
        return city;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder().add("code", getCode()).add("city_name",getCityName()).build();
    }

    
}
