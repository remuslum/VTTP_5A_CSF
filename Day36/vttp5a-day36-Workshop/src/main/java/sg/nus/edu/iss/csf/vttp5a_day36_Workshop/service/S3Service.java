package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.service;

import org.springframework.stereotype.Service;

@Service
public class S3Service {
    
    // @Autowired
    // private AmazonS3 amazonS3;

    // @Value("${do.storage.bucket}")
    // private String accessBucket;

    // @Value("${do.storage.endpoint}")
    // private String accessEndpoint;

    // public String upload(MultipartFile file, String comments, String postId) throws IOException{
    //     Map<String, String> metadata = Map.of(
    //         "comments",comments,
    //         "postId",postId,
    //         "uploadDateTime",String.valueOf(System.currentTimeMillis())
    //     );

    //     ObjectMetadata objectMetadata = new ObjectMetadata();
    //     objectMetadata.setContentType(file.getContentType());
    //     objectMetadata.setContentLength(file.getSize());
    //     objectMetadata.setUserMetadata(metadata);
    //     String originalFileName = file.getOriginalFilename();
    //     String finalFileName = "";

    //     if(originalFileName.equals("blob")){
    //         finalFileName = postId + ".png";
    //     }

    //     PutObjectRequest putObjectRequest = new PutObjectRequest(
    //         accessBucket, finalFileName, file.getInputStream(), objectMetadata);

    //     putObjectRequest.withCannedAcl(CannedAccessControlList.PublicRead);
    //     amazonS3.putObject(putObjectRequest);

    //     return "https://%s.%s/%s".formatted(accessBucket, accessEndpoint, finalFileName);
    // }
}
