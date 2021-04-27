import Particles from "react-particles-js";
import React from "react";

function Particle() {
    return (
        <Particles width="100%" height="100vh"
            params={{
                "particles": {
                    "number": {
                        "value": 15,
                        "density": {
                            "enable": true,
                            "value_area": 450
                        }
                    },
                    "line_linked": {
                        "color": '#007bff',
                        "enable": true,
                        "opacity": 0.4
                    },
                    "move": {
                        "speed": 1,
                        "bounce": true,
                        "out_mode": "bounce",
                    },
                    "opacity": {
                        "anim": {
                            "enable": false,
                        },
                        "value": 0.15
                    },
                    "shape": {
                        "type": [
                            "image",
                        ],
                        "image": [
                            {
                                "src": 'python_logo.svg',
                                "height": 10,
                                "width": 10
                            },
                            {
                                "src": 'react_logo.svg',
                                "height": 10,
                                "width": 10
                            },
                            {
                                "src": 'django_logo.svg',
                                "height": 10,
                                "width": 8
                            },
                            {
                                "src": 'postgresql_logo.svg',
                                "height": 10,
                                "width": 10
                            },
                            {
                                "src": 'javascript_logo.svg',
                                "height": 10,
                                "width": 10
                            }
                        ]
                    },
                    "size": {
                        "value": 20,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 10,
                            "sync": false
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "size": 30,
                            "distance": 100
                        },
                    }
                },
                "retina_detect": false
            }} />
    )
}

export default Particle;
