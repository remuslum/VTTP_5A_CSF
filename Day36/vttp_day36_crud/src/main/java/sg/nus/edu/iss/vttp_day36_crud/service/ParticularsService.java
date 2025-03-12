package sg.nus.edu.iss.vttp_day36_crud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import sg.nus.edu.iss.vttp_day36_crud.model.Particulars;
import sg.nus.edu.iss.vttp_day36_crud.repository.ParticularsRepository;

@Service
public class ParticularsService {
    
    @Autowired
    private ParticularsRepository particularsRepository;

    private final String BADGE_ID="badge_id";
    private final String NAME="name";
    private final String EMAIL="email";

    public JsonArray getAllParticulars() {
        Optional<List<Particulars>> particulars = particularsRepository.selectAllRecords();
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();

        if(particulars.isPresent()){
            List<Particulars> particularsList = particulars.get();
            particularsList.forEach(p -> {
                arrayBuilder.add(Json.createObjectBuilder().add(BADGE_ID,p.getBadgeId())
                .add(NAME,p.getName()).add(EMAIL,p.getEmail()).build());
            });
        }
        
        return arrayBuilder.build();
    }
}
