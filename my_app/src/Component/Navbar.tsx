// import PropTypes from 'prop-types'

// function Navbar(props){
  function Navbar(){
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Blog1</a></li>
            <li><a className="dropdown-item" href="#">Blog2</a></li>
            {/* <li><hr className="dropdown-divider" /></li> */}
            <li><a className="dropdown-item" href="#">Blog3</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"  aria-current="page">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Submit</button>
      </form>
    </div>
  </div>
</nav>
     </>
    );
    }

    // Navbar.prototype={
    // title : PropTypes.string}

    // Navbar.defaultProps = {
    //   title : 'Set title here'
    // };
    export default Navbar;

   