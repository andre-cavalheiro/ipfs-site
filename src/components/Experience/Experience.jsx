import React, { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

import {
  INESC_LOGO,
  DATAMON_LOGO,
  ETM_LOGO,
  RELY_LOGO,
  GITCOIN_LOGO,
  INDEXED_LOGO,
  IST_LOGO,
} from "../../data/experience/index";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience__container container">
        <div className="experience__sections">
          <div className="experience__content" id="work">
            {/* QUALIFICACAO 1 */}
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <span>
                  <img
                    src={RELY_LOGO}
                    alt="Rely.io Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">Data Scientist | Product Engineer</h3>
                <p>Engineering Founder</p>
                <a
                  href="https://www.rely.io"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  Rely.io
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 02/2021
                  - Present
                </div>
              </div>
            </div>

            {/* QUALIFICACAO 2 */}
            <div className="experience__data">
              <div className="experience__data--odd">
                <span>
                  <img
                    src={INDEXED_LOGO}
                    alt="Indexed Finance Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">Freelancer | Backend Developer</h3>
                <a
                  href="https://indexed.finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  Indexed Finance
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 05/2020 - 05/2021
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            {/* QUALIFICACAO 3 */}
            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <span>
                  <img
                    src={INESC_LOGO}
                    alt="INESC-ID Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">Researcher</h3>
                <a
                  href="https://www.inesc-id.pt/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  INESC-id Research Center
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 05/2020 - 06/2021
                </div>
              </div>
            </div>

            {/* QUALIFICACAO 4 */}
            <div className="experience__data">
              <div className="experience__data--odd">
                <span>
                  <img
                    src={IST_LOGO}
                    alt="IST Logo"
                    className="experience__logo experience__logo--saturate"
                  />
                </span>
                <h3 className="experience__title">Fullstack Developer</h3>
                <a
                  href="https://si.tecnico.ulisboa.pt/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="experience__subtitle"
                >
                  Informatic Services of Instituto Superior Tecnico
                  <FiLink className="experience__hyperlink" />
                </a>
                <div className="experience__calendar">
                  <BsCalendar3 className="experience__calendar-icon" /> 09/2017 - 01/2019
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
