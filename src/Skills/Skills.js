import React, { useState, useEffect } from 'react';
import './Skills.css'

const listSkills = [
  {
    title: 'Programming',
    level: '10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
  },
  {
    title: 'Communication',
    level: '10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
  },
  {
    title: 'Design',
    level: '10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
  },
  {
    title: 'Leadership',
    level: '10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
  },
  {
    title: 'Organization Skills',
    level: '10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
  },
  {
    title: 'Time Management',
    level: '10',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
  },

];

const Porto = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    level: '',
    description: ''
  });

  useEffect(() => {
    if (window.localStorage.getItem('onboarded') !== '1') {
      setShowModal(true);
      setModalContent({
        title: 'Hello World!',
        level: 'Welcome to My Personal Website',
        description: 'Here you can see my latest project and portfolio'
      });
      window.localStorage.setItem('onboarded', '1');
    } else {
      console.log('not show modal');
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = (index) => {
    setShowModal(true);
    setModalContent({
      title: listSkills[index].title,
      image: listSkills[index].image,
      level: listSkills[index].level,
      description: listSkills[index].description
    });
  };


 
return (
  <div className="hero">
    <div id="content">
      <section id="skills">
        {listSkills.map((skill, index) => (
          <div className="card" key={index} onClick={() => handleClick(index)}>
            <div>
              <h3>{skill.title}</h3>
              <span>{skill.description}</span>
            </div>
          </div>
        ))}
      </section>
      </div>
        <div id="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div id="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div id="modal-content">
        <div id="close" title="close" onClick={handleClose}>x</div>
        <h1 id="title">{modalContent.title}</h1>
        <br/>
        <h3>Level</h3>
        <p id="level">{modalContent.level}</p>
        <br />
        <h3>Description</h3>
        <p id="description">{modalContent.description}</p>
      </div>
    </div>
    </div>
  </div>
);
};
export default Porto;

  