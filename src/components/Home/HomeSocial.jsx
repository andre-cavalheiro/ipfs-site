import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { RiGitlabFill } from 'react-icons/ri';
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
        href='https://twitter.com/TheJointleman'
        target='_blank'
        rel='noreferrer'
      >
        <BsTwitter />
      </a>
      <a
        href='https://github.com/andre-cavalheiro'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
      <a
        href='https://gitlab.com/andre-cavalheiro'
        target='_blank'
        rel='noreferrer'
      >
        <RiGitlabFill />
      </a>
      <a
        href='https://www.linkedin.com/in/andre-cavalheiro/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
  );
};
