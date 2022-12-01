package com.ve.blog.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @Description create for blog-springboot-plus .
 * 项目信息
 * @Author weiyi
 * @Date 2022/7/8
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "project")
public class ProjectProperties {

    public String host;

    public String port;

    public String path;

    public String ip;

    public String name;

    public String packageName;

    public String version;

    public String desc;

    public String license;

    public String licenseUrl;

    public String termsOfServiceUrl;
}
