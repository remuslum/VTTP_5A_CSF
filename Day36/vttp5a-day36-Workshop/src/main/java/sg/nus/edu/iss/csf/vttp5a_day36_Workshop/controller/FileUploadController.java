package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model.Post;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.service.FileUploadService;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.service.S3Service;


@RestController
public class FileUploadController {

    private static final String BASE64_PREFIX = "data:image/png;base64,";
    
    @Autowired
    private FileUploadService fileUploadService;

    @Autowired
    private S3Service s3Service;

    @PostMapping(path="/api/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> postMethodName(@RequestParam("file") MultipartFile file, 
    @RequestParam("comments") String comments) {
        String postId = "";
        try {
            postId = fileUploadService.uploadFile(file, comments);
            System.out.println("Post Id: " + postId);
            if(postId != null && !postId.isEmpty()){
                String s3EndpointUrl = s3Service.upload(file, comments, postId);
                System.out.println(s3EndpointUrl);
            }
        } catch (SQLException | IOException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        JsonObject payload = Json.createObjectBuilder().add("postId",postId).build();
        return ResponseEntity.ok(payload.toString());
    }

    @GetMapping(path="/api/get-image/{postId}")
    public ResponseEntity<String> getImage(@PathVariable String postId) throws SQLException{
        Optional<Post> pOptional = fileUploadService.getPostById(postId);
        Post p = pOptional.get();
        String encodedString = Base64.getEncoder().encodeToString(p.getImage());

        JsonObject payload = Json.createObjectBuilder().add("image",BASE64_PREFIX + encodedString).build();

        return ResponseEntity.ok(payload.toString());
    }
    
}
