import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from "../pages/homepage/Homepage";
import WorksPage from "../pages/workspage/WorksPage";
import {Particles} from 'react-particles-js';
import './App.scss';

const params = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
};

function App() {
    return (

            <div className="App">
                <Particles
                    style={{display: 'block', position: 'fixed', zIndex: '-1', width:'100%', height: '100%'}}
                    params={params}
                />
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/works">
                        <WorksPage/>
                    </Route>
                </Switch>
            </div>
    );
}

export default App;