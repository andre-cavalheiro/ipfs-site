import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

/*
  Missing:
    - Twitter
    - Gitlab
*/
export const HomeSocial = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://www.linkedin.com/in/andre-cavalheiro/'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
      <a
        href='https://github.com/andre-cavalheiro'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
  );
};
