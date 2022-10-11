import * as THREE from "three"
import Experience from "./Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



export default class Raycaster extends EventEmitter {
    constructor() {
        super();
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.cube = this.resources.experience.scene;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.device = this.sizes.device;  
        // this.player = this.experience.audioplayer
        
        
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.currentIntersect = null;

        this.onPointerMove();
        this.onPointerClick();
        // this.onPointerHover();

    } 

    onPointerMove() {
    
        window.addEventListener("mousemove", (event) =>{
        
            this.mouse.x = event.clientX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1  
            
            });        
        }

        onPointerClick(){
            
            window.addEventListener('click', () =>
            {
    
                this.timeline = new GSAP.timeline();
    
                
    
                if(this.currentIntersect)
                {
                    if(this.currentIntersect.object.name === "Button_b_1")
                    {
                         
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                            
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_1.play();
                                
                            }
                        })
                        
                        
                    }

                    if(this.currentIntersect.object.name === "Button_b_2")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,
                            onComplete: () =>  {

                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_2.play();
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_3")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_3.play();
                                
                            }
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_4")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_4.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_5")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_5.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_6")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_6.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_7")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_7.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_8")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_8.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_9")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_9.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_10")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_10.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_11")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_11.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_12")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_12.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_13")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_13.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_14")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_14.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_15")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_15.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_b_16")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_16.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_1")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_17.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_2")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_18.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_3")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_19.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_4")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_20.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_5")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_21.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_6")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_22.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_7")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_23.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_8")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_24.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_9")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_25.play();
                                
                            }   
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_10")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_26.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_11")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_27.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_12")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_28.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_13")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_29.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_14")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,  
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_30.play();
                                
                            } 
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_15")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1,
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_31.play();
                                
                            }   
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_w_16")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_32.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_1")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_33.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_2")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_34.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_3")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_35.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_4")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_36.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_5")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_37.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_6")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_38.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_7")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_39.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_8")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_40.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_9")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_41.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_10")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_42.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_11")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_43.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_12")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_44.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_13")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_45.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_14")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_46.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_15")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_47.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_r_16")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_48.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_1")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_49.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_2")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_50.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_3")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_51.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_4")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_52.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_5")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_53.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_6")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_54.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_7")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_55.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_8")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_56.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_9")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_57.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_10")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_58.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_11")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_59.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_12")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_60.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_13")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_61.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_14")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_62.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_15")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_63.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_g_16")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_64.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_1")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_65.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_2")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_66.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_3")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_67.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_4")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_68.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_5")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_69.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_6")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_70.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_7")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_71.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_8")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_72.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_9")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_73.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_10")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_74.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_11")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_75.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_12")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_76.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_13")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_77.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_14")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_78.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_15")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_79.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_y_16")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_80.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_1")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_81.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_2")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_82.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_3")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_83.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_4")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_84.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_5")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_85.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_6")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_86.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_7")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_87.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_8")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_88.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_9")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_89.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_10")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_90.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_11")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_91.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_12")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_92.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_13")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_93.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_14")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_94.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_15")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_95.play();
                                
                            }  
                        
                        })
                    }
                    if(this.currentIntersect.object.name === "Button_o_16")
                    {
                        this.button = this.currentIntersect.object
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            ease: "Sine.easeOut",
                            duration: 0.1,  
                        })
                        
                        this.timeline.to(this.button.position, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "Sine.easeIn",
                            duration: 0.1, 
                            onComplete: () =>  {
                                    
                                this.experience.audioplayer.stopAudio();
                                this.resources.items.audio_96.play();
                                
                            }  
                        
                        })
                    }
                    
                }
                

                
               
            })
        }        

    // onPointerHover(){
            
    //     window.addEventListener('mouseover', () => {
                
    //              if(this.currentIntersect)
    //              {
    //                 console.log(this.currentIntersect)
    //                 // if(this.currentIntersect.object.name === "Button_1")
    //                 // {
    //                 //     console.log("AAAAA")
    //                 // }
                    
    //              }
    //          })
    //      }        
    

    update(){
        this.raycaster.setFromCamera(this.mouse,this.camera.perpectiveCamera)
       
        this.objectsToTest = [ this.cube ];
        this.intersects = this.raycaster.intersectObjects(this.objectsToTest)
    
        if(this.intersects.length)
        {
            if(!this.currentIntersect)
            {
                // console.log(this.cube.children[4].children)
                
                // if(this.currentIntersect.object.name === "Button_1")
                //     {
                        
                        
                //     }
            }
    
            this.currentIntersect = this.intersects[0]
        }
        else
        {
            if(this.currentIntersect)
            {
                // console.log('mouse leave')
            }
            
            this.currentIntersect = null
        }
    }
} 