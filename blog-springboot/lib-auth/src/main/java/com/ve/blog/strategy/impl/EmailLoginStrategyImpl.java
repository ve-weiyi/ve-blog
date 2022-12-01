package com.ve.blog.strategy.impl;

import com.alibaba.fastjson.JSON;
import com.ve.blog.dto.*;
import com.ve.blog.vo.LoginVO;
import org.springframework.stereotype.Service;

/**
 * 本地登录策略实现
 *
 * @author yezhiqiu
 * @date 2021/07/28
 */
@Service("emailLoginStrategyImpl")
public class EmailLoginStrategyImpl extends AbstractSocialLoginStrategyImpl {


    @Override
    public UserInfoDTO login(String data) {
        // 返回用户信息
        return null;
    }

    @Override
    public SocialTokenDTO getSocialToken(String data) {
        LoginVO loginVO = JSON.parseObject(data, LoginVO.class);

        // 返回token信息
        return null;
    }

    @Override
    public SocialUserInfoDTO getSocialUserInfo(SocialTokenDTO socialTokenDTO) {
        return null;
    }

}
