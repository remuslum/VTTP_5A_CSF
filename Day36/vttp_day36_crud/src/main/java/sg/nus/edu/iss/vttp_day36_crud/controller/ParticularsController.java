package sg.nus.edu.iss.vttp_day36_crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import sg.nus.edu.iss.vttp_day36_crud.service.ParticularsService;

@RestController
public class ParticularsController {
    
    @Autowired
    private ParticularsService particularsService;

    @GetMapping("/api/particulars")
    public ResponseEntity<String> getAllParticulars() {
        return new ResponseEntity<>(particularsService.getAllParticulars().toString(), 
        HttpStatusCode.valueOf(200));
    }
}
