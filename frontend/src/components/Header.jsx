import React from 'react';
import './Header.css';

// Importar iconos desde src/icons
import reactIcon from '../icons/react.png';
import nestIcon from '../icons/nest.png';
import postgreIcon from '../icons/postgre.png';
import dockerIcon from '../icons/docker.png';
import northflankIcon from '../icons/northflank.svg';
import prismaIcon from '../icons/prisma.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1>Desarrollo de Software 2025</h1>
          <p>UTN FRRe - Grupo 1</p>
        </div>
        
        <div className="header-right">
          <div className="tech-icon" title="React">
            <img src={reactIcon} alt="React" />
          </div>
          
          <div className="tech-icon" title="NestJS">
            <img src={nestIcon} alt="NestJS" />
          </div>
          
          <div className="tech-icon" title="PostgreSQL">
            <img src={postgreIcon} alt="PostgreSQL" />
          </div>
          
          <div className="tech-icon" title="Docker">
            <img src={dockerIcon} alt="Docker" />
          </div>
          
          <div className="tech-icon" title="Northflank">
            <img src={northflankIcon} alt="Northflank" />
          </div>
          
          <div className="tech-icon" title="Prisma">
            <img src={prismaIcon} alt="Prisma" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
