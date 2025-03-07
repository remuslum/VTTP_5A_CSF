package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class S3AppConfig {
    
    // @Value("${do.storage.key}")
    // private String accessKey;

    // @Value("${do.storage.secret}")
    // private String accessSecret;

    // @Value("${do.storage.bucket}")
    // private String accessBucket;

    // @Value("${do.storage.endpoint}")
    // private String accessEndpoint;

    // @Value("${do.storage.region}")
    // private String accessRegion;

    // @Bean
    // public AmazonS3 createS3Client(){
    //     BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, accessSecret);
    //     EndpointConfiguration endPoint = new EndpointConfiguration(accessEndpoint, accessRegion);

    //     return AmazonS3ClientBuilder.standard().withEndpointConfiguration(endPoint)
    //     .withCredentials(new AWSStaticCredentialsProvider(awsCreds)).build();
    // }
}
