import React from "react";
import image from "../../../assets/shirt-confident-retro-man-happiness.jpg";
import "./team.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Special from '../../common/Special/Special';

const Card = () => {
  return (
    <>
      <div className="ml-12 mt-6">
        <Special text='Team' hoverText='Team' />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 justify-items-center">

        <div className="card">
          <div className="profile-pic">
            <img src={image} alt="Ayoub Saghro" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Ayoub Saghro</span>
              <span className="about-me">Responsable IT</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="profile-pic">
            <img src={image} alt="Aymane Farrajallah" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Aymane Farrajallah</span>
              <span className="about-me">Full Stack</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="profile-pic">
            <img src={image} alt="Oussama Alouch" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Oussama Alouche</span>
              <span className="about-me">Full Stack <br /> UI/UX</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="profile-pic">
            <img src={image} alt="Hamza el alami" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Hamza El-Alamy</span>
              <span className="about-me">Full Stack</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="profile-pic">
            <img src={image} alt="Fatim zahra aafak" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Fatima Zahra Aafak</span>
              <span className="about-me">Full Stack <br /> UI/UX</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="profile-pic">
            <img src={image} alt="Oumaima" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">Oumayma El Abdi</span>
              <span className="about-me">Full Stack</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;