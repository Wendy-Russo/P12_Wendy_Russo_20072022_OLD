import React from 'react';
import './Greetings.scss';

/**
 * Creates a welcome message for the user  (see maquette)
 * @param {object} props - "props.firstName" must be the name of the user
 * @returns {object} returns the created JSX object 
 */
function Greetings(props) {
  let firstName = props.firstName;

  if(firstName !== -1){

    return(
      <>
        <section className="greetings-section" >
          <h2 className='welcome'>
            Bonjour
            <em>
              {" " + firstName}
            </em>
          </h2>
          <p>
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>
      </>
    )
  }
}

export default Greetings
