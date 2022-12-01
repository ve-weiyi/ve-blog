package com.ve.blog.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @Description create for blog-springboot-plus .
 * @Author weiyi
 * @Date 2022/7/8
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

    public String tokenHeader;

    public String tokenHead;

    public String secret;

    public Long expiration;
}
