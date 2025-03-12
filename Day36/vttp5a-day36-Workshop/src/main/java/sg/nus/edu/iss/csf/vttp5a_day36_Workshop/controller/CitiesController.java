package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model.City;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.service.CitiesService;

@RestController
public class CitiesController {
    
    @Autowired
    private CitiesService citiesService;

    @GetMapping(path="/api/cities", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getCities() {
        Optional<List<City>> cc = citiesService.getAllCities();
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        cc.ifPresent((cities) -> {
            cities.forEach((c) -> {
                arrayBuilder.add(c.toJson());
            });
        });
        JsonArray array = arrayBuilder.build();
        return !array.isEmpty() ? ResponseEntity.ok(array.toString()) : ResponseEntity.badRequest().body(array.toString());
    }
}
