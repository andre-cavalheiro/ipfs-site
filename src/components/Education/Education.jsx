import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';

import { IST_LOGO, DS_ACADEMY_LOGO, TSINGHUA_LOGO, LXMLS_LOGO } from '../../data/education/index';

import './education.css';

export const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>

      <div className='education__container container'>
        <div className='education__sections'>
          <div className='education__content education__active'>
            
            {/* EDUCATION 1 */}
            <div className='education__data'>
              <div className='education__data--odd'>
                <span>
                <img
                    src={LXMLS_LOGO}
                    alt='Lisbon Machine Learning School Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  Lisbon Machine Learning School
                </h3>
                <a
                  href='https://vilniustech.lt/index.php?lang=2'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Lisbon Machine Learning School, Lisbon, Portugal
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 08/2020 - 08/2020
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
            </div>

            {/* EDUCATION 2 */}
            <div className='education__data'>
              <div></div>

              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>

              <div>
                <span>
                <img
                    src={TSINGHUA_LOGO}
                    alt='Tsinghua University Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  M.Sc. in Computer Science and Engineering (exchange programme)
                </h3>
                <p>Expertise in Artificial Intelligence</p>
                <a
                  href='https://www.cs.tsinghua.edu.cn/csen/'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Tsinghua University, Beijing, China
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 02/2019- 06/2019
                </div>
              </div>
            </div>

            {/* EDUCATION 3 */}
            <div className='education__data'>
              <div className='education__data--odd'>
                <span>
                <img
                    src={IST_LOGO}
                    alt='IST Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  M.Sc. in Computer Science and Engineering
                </h3>
                <p>Expertise in Artificial Intelligence</p>
                <a
                  href='https://tecnico.ulisboa.pt/en/education/courses/masters-programmes/computer-science-and-engineering/'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Instituto Superior Técnico, Lisbon, Portugal
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 09/2018 - 09/2021
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>
            </div>


            {/* EDUCATION 4 */}
            <div className='education__data'>
              <div></div>

              <div>
                <span className='education__rounder'></span>
                <span className='education__line'></span>
              </div>

              <div>
                <span>
                  <img
                    src={DS_ACADEMY_LOGO}
                    alt='Lisbon Datascience Academy Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  Data Science Starters Academy
                </h3>
                <a
                  href='https://www.lisbondatascience.org/'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Lisbon Datascience Academy, Lisbon Portugal
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 03/2018- 08/2018
                </div>
              </div>
            </div>

            {/* EDUCATION 5 */}
            <div className='education__data'>
              <div className='education__data--odd'>
                <span>
                  <img
                    src={IST_LOGO}
                    alt='IST Logo'
                    className='education__logo education__logo--saturate'
                  />
                </span>
                <h3 className='education__title'>
                  B.Sc. in Eletrotecnical and Computer Engineering
                </h3>
                <a
                  href='https://tecnico.ulisboa.pt/en/education/courses/undergraduate-programmes/electrical-and-computer-engineering/'
                  target='_blank'
                  rel='noreferrer'
                  className='education__subtitle'
                >
                  Instituto Superior Técnico, Lisbon, Portugal
                  <FiLink className='experience__hyperlink' />
                </a>
                <div className='education__calendar'>
                  <BsCalendar3 className='education__calendar-icon'/> 09/2015 - 06/2018
                </div>
              </div>

              <div>
                <span className='education__rounder'></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
