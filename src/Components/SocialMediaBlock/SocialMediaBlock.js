import React from 'react';
import SocialMedialLink from "./SocialMedialLink/SocialMedialLink";

const SocialMediaBlock = () => {

    const socialClickHandler = (social) => {
        console.log('Social', social)
    }

    const socialMediaLinks = [
        'form__social_vk', 'form__social_mailru', 'form__social_fb', 'form__social_google', 'form__social_ok',
        'form__social_yandex'
    ]

    return (
        <div className="form__socials">
            {socialMediaLinks.map((socialMedia, index) => (
                <SocialMedialLink
                    specialClass={socialMedia}
                    onClick={socialClickHandler}
                    key={index}
                />
            ))}
        </div>
    );
}

export default React.memo(SocialMediaBlock);