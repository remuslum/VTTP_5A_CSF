package sg.nus.edu.iss.csf.vttp5a_day36_Workshop.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class S3AppConfig {
    
    @Value("${do.storage.key}")
    private String accessKey;

    @Value("${do.storage.secret}")
    private String accessSecret;

    @Value("${do.storage.bucket}")
    private String accessBucket;

    @Value("${do.storage.endpoint}")
    private String accessEndpoint;

    @Value("${do.storage.region}")
    private String accessRegion;

    @Bean
    public AmazonS3 createS3Client(){
        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, accessSecret);
        EndpointConfiguration endPoint = new EndpointConfiguration(accessEndpoint, accessRegion);

        return AmazonS3ClientBuilder.standard().withEndpointConfiguration(endPoint)
        .withCredentials(new AWSStaticCredentialsProvider(awsCreds)).build();
    }
}
