package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.repo;

import java.io.IOException;
import java.sql.ResultSet;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import sg.nus.edu.iss.csf.vttp5a_day36_Workshop.model.Post;

@Repository
public class FileUploadRepository {
    
    public static final String INSERT_INTO_POST = 
    """
        INSERT INTO posts (post_id, comments, picture) VALUES (?,?,?);        
    """;

    public static final String SELECT_RECORD =
    """
        SELECT post_id, comments, picture FROM posts WHERE post_id = ?
    """;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String upload(MultipartFile file, String comments){
        String postId = UUID.randomUUID().toString().replace("-", "")
        .substring(0,8);
        try {
            byte[] filesByte = file.getBytes();
            jdbcTemplate.update(INSERT_INTO_POST, ps -> {
                ps.setString(1,postId);
                ps.setString(2,comments);
                ps.setBytes(3,filesByte);
            });
        } catch (IOException ie) {
            throw new RuntimeException("Error while uploading file");
        }
        return postId;
    }

    public Optional<Post> getPostById(String postId){
        return jdbcTemplate.query(SELECT_RECORD, (ResultSet rs) -> {
            if(rs.next()){
                return Optional.of(Post.populate(rs));
            } else {
                return Optional.empty();
            }
        }, postId);
        
    }

    
}
