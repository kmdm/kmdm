import React from "react";

export default function Footer()
{
    return (
        <footer className="footer text-center">
            <div className="container">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3"
                           href="https://www.facebook.com/kennymillington">
                            <i className="icon-social-facebook"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3"
                           href="https://www.linkedin.com/in/kennymillington/">
                            <i className="icon-social-linkedin"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="https://github.com/kmdm">
                            <i className="icon-social-github"></i>
                        </a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; 2020 Kenny Millington</p>
            </div>
        </footer>
    );
}
