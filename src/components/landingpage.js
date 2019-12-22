import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require("./headshot.png")}
                        alt="headshot"
                        className="headshot-image"/>
                    </Cell>
                    <div className="banner-text">
                        <h1>Patrick Liu</h1>
                        <h2>Programmer, Gamer, Lifter</h2>
                        <hr/>
                        <p>Java | Python | Node.js | HTML/CSS | SQL | Javascript</p>
                        <div className="social-links">
                            <a href="http://linkedin.com/in/patrickliu2000" rel="noopener noreferrer"target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            
                            <a href="http://github.com/patrickliu2000" rel="noopener noreferrer"target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                            <a href="http://instragram.com/patricksliu" rel="noopener noreferrer"target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;