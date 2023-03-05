// Composant React

import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Text() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Cliquez ici</button>
      <CSSTransition
        in={show}
        timeout={1000}
        classNames="my-node"
        unmountOnExit
      >
        <div className="bg-blue-500 text-white p-4 rounded-md">
          Contenu animé
        </div>
      </CSSTransition>
    </div>
  );
}

export default Text;
