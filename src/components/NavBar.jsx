function NavBar(props) {
 

  return (
    <div>
      <button onClick={props.precedent}>Précédent</button>
      <button onClick={props.suivant}>Suivant</button>
    </div>
  );
}

export default NavBar;
