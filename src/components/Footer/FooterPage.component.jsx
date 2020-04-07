import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import './FooterPage.styles.css';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="credit footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} 🌈 Design by <a rel='' target="_blank" href="https://github.com/lgope">Lakshman</a> 🔗 API By <a target="_blank" href="https://github.com/mathdroid/covid-19-api">Mathdroid</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;