package sg.nus.edu.iss.vttp_day36_crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import sg.nus.edu.iss.vttp_day36_crud.service.ParticularsService;

@RestController
public class ParticularsController {
    
    @Autowired
    private ParticularsService particularsService;

    @GetMapping(path="/api/particulars",produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getAllParticulars() {
        JsonArray array = particularsService.getAllParticulars();
        if(array.isEmpty()){
            JsonObject object = Json.createObjectBuilder().add("Message","Error, unable to retrieve details").build();
            return new ResponseEntity<>(object.toString(), HttpStatusCode.valueOf(500));
        }
        return new ResponseEntity<>(array.toString(), 
        HttpStatusCode.valueOf(200));
    }
}
