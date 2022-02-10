package com.minzheng.blog.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description hello word!
 * @Author weiyi
 * @Date 2022/2/10
 */
@Api(tags = "测试接口")
@RestController
@RequestMapping("websocket")
public class TestController {

    @GetMapping("test")
    public String test() {
        return "Hello World";
    }
}