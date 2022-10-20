import React, { useState } from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsGearWideConnected } from 'react-icons/bs';
import { HiDatabase, HiCubeTransparent } from 'react-icons/hi';
import { MdExpandMore } from 'react-icons/md';

import {
  backend,
  database,
  patterns,
  tools,
  machineLearning,
  instrumentation,
} from '../../data/skills/index';

import './skills.css';

export const Skills = () => {
  const [showMachineLearning, setShowMachineLearning] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showInstrumentation, setShowInstrumentation] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [showMethodPatterns, setShowMethodPatterns] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const handleMachineLearning = () => {
    setShowMachineLearning(!showMachineLearning);
  };

  const handleBackend = () => {
    setShowBackend(!showBackend);
  };

  const handleInstrumentation = () => {
    setShowInstrumentation(!showInstrumentation);
  };

  const handleDatabase = () => {
    setShowDatabase(!showDatabase);
  };

  const handleMethodPatterns = () => {
    setShowMethodPatterns(!showMethodPatterns);
  };

  const handleTools = () => {
    setShowTools(!showTools);
  };

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='container skill__container'>
        
        {/* MACHINE LEARNING & DATA SCIENCE */}
        <div className='skill'>
          <div className='skill__header' onClick={handleMachineLearning}>
            <div className='skill__description'>
              <BsGearWideConnected />
              <h4>Machine Learning & Datascience</h4>
            </div>
            <span className={`skill__arrow ${showMachineLearning ? 'show-items' : ''}`}>
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showMachineLearning ? 'show-items' : ''}`}>
            {machineLearning.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* BACKEND */}
        <div className='skill'>
          <div className='skill__header' onClick={handleBackend}>
            <div className='skill__description'>
              <BsGearWideConnected />
              <h4>Backend Development</h4>
            </div>
            <span className={`skill__arrow ${showBackend ? 'show-items' : ''}`}>
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showBackend ? 'show-items' : ''}`}>
            {backend.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instrumentation */}
        <div className='skill'>
          <div className='skill__header' onClick={handleInstrumentation}>
            <div className='skill__description'>
              <BsGearWideConnected />
              <h4>Monitoring & Analytics</h4>
            </div>
            <span className={`skill__arrow ${showInstrumentation ? 'show-items' : ''}`}>
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showInstrumentation ? 'show-items' : ''}`}>
            {instrumentation.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* DATABASE */}
        <div className='skill'>
          <div className='skill__header' onClick={handleDatabase}>
            <div className='skill__description'>
              <HiDatabase />
              <h4>Database</h4>
            </div>
            <span
              className={`skill__arrow ${showDatabase ? 'show-items' : ''}`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showDatabase ? 'show-items' : ''}`}>
            {database.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* METHODOLOGIES / PATTERNS */}
        <div className='skill'>
          <div className='skill__header' onClick={handleMethodPatterns}>
            <div className='skill__description'>
              <HiCubeTransparent />
              <h4>Dev. Methodologies / Patterns</h4>
            </div>
            <span
              className={`skill__arrow ${showMethodPatterns ? 'show-items' : ''}`}
            >
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showMethodPatterns ? 'show-items' : ''}`}>
            {patterns.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOOLS */}
        <div className='skill'>
          <div className='skill__header' onClick={handleTools}>
            <div className='skill__description'>
              <AiOutlineTool />
              <h4>Tools</h4>
            </div>
            <span className={`skill__arrow ${showTools ? 'show-items' : ''}`}>
              <MdExpandMore />
            </span>
          </div>
          <div className={`skill__items ${showTools ? 'show-items' : ''}`}>
            {tools.map(({ id, technology, level }) => {
              return (
                <div className='skill__item' key={id}>
                  <h3>{technology}</h3>
                  <h5>{level}</h5>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
