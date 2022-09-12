import React from 'react';

import './Greetings.scss';

function Greetings(props) {
  const FIRST_NAME = props.firstName;

  return(

    <>
      <section className="greetings-section" >
        <h2 className='welcome'>
          Bonjour
          <em>
            {" " + FIRST_NAME}
          </em>
        </h2>
        <p>
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
    </>
  )
}

export default Greetings
