import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Font awsome icon
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ setLibraryStatus, libraryStatus }) {
  //event handler
  const clickHandler = () => {
    setLibraryStatus(!libraryStatus)
  }

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={clickHandler}>
        Music <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
