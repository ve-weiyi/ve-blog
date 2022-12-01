package com.ve.blog.util;

import com.ve.blog.dto.UserDetailsDTO;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;


/**
 * 用户工具类
 *
 * @author yezhiqiu
 * @date 2021/08/10
 */
public class UserUtils {

    /**
     * 获取当前登录用户
     * 单独起线程，报null
     * 问题来源是前端请求未携带cookie
     * https://www.codenong.com/cs109777601/
     * @return 用户登录信息
     */
    public static UserDetailsDTO getLoginUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication==null) {
            LogUtil.println("auth info is null");
            return null;
        }
        LogUtil.println("auth :"+authentication.getPrincipal());
        return (UserDetailsDTO) authentication.getPrincipal();
    }

}
