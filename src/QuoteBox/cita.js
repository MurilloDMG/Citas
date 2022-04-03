const Cita = ({ title, background}) => {
    return (
      <div className={`${background} card`}>
        <h3>{title}</h3>
       
      </div>
    );
  };
  
  export default Cita;