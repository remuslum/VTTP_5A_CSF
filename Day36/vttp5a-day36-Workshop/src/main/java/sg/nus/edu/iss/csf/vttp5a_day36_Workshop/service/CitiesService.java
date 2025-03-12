package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model.City;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.repo.CitiesRepository;

@Service
public class CitiesService {
    @Autowired
    private CitiesRepository citiesRepository;

   public Optional<List<City>> getAllCities() {
    List<City> cc = citiesRepository.getAllCities();
    return !cc.isEmpty() ? Optional.of(cc) : Optional.empty();

   } 
}
