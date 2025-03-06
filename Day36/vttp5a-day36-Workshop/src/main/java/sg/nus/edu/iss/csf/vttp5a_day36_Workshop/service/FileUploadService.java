package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model.Post;
import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.repo.FileUploadRepository;

@Service
public class FileUploadService {
    @Autowired
    private FileUploadRepository fileUploadRepository;

    public String uploadFile(MultipartFile file, String comments) throws SQLException, IOException{
        return fileUploadRepository.upload(file, comments);
    }

    public Optional<Post> getPostById(String postId) throws SQLException{
        return fileUploadRepository.getPostById(postId);
    }
}
