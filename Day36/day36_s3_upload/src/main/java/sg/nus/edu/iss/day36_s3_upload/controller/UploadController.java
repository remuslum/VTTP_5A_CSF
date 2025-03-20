package sg.nus.edu.iss.day36_s3_upload.controller;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import sg.nus.edu.iss.day36_s3_upload.service.FileUploadService;


@RestController
@RequestMapping("/api")
public class UploadController {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private FileUploadService fileUploadService;

    private final String INSERT_IMAGE =
    """
        INSERT INTO images (image) VALUES (?);        
    """;

    @PostMapping(path="/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> postMethodName(@RequestPart MultipartFile file) throws IOException{
        InputStream is = file.getInputStream();
        jdbcTemplate.update(INSERT_IMAGE, is);
        JsonObject message = Json.createObjectBuilder().add("message","Successfully uploaded").build();
        return ResponseEntity.ok(message.toString());
    }

    @PostMapping(path="/uploads3", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadToS3(@RequestPart MultipartFile file) throws IOException{
        String endPoint = fileUploadService.upload(file);
        JsonObject message = Json.createObjectBuilder().add("message",endPoint).build();
        return ResponseEntity.ok(message.toString());
    }
    
}
