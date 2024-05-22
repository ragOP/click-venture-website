function initializeAnimation(obj) {
		  var svgDoc = obj.contentDocument;
		  if (svgDoc && svgDoc.defaultView && svgDoc.defaultView.frameElement) {
			return runAnimation(svgDoc);
		  } else {
			obj.addEventListener("load", function() {
			  var svgDoc = obj.contentDocument;
			  return runAnimation(svgDoc);
			});
		  }
		}

		export function runAnimation(svgDoc) {

			
		
			
		 function onSvgLoad() {
			 	
			
			

		var machineSpeedo = svgDoc.querySelector("#machine-speedo");
		var hands = svgDoc.querySelector("#hands");


		var beltGears = svgDoc.querySelectorAll("#belt-gears g, #machine-gear g");

		function getRandomRotation() {
		  return gsap.utils.random(-360, 360);
		}

		beltGears.forEach(function(gear) {
		  gsap.set(gear, { transformOrigin: "center" });
		  gsap.to(gear, {
			duration: 2,
			rotation: "+=360",
			repeat: -1,
			ease: "none"
		  });
		});




	   gsap.timeline({ repeat: -1 })
	  .to(machineSpeedo, {
		duration: 0,
		y: -10,
		rotation: 0,
		transformOrigin: "45.51159px 84.65px"
	  })
	  .to(machineSpeedo, {
		duration: 1,
		rotation: "-=50",
		repeat: -1,
		yoyo: true,
		ease: "none"
	  });

	 const megaPhone = svgDoc.querySelector("#mega-phone");

		gsap.to(megaPhone, {
		  duration: 1,
		  rotation: gsap.utils.random(-30, 30),
		  yoyo: true,
		  repeat: -1,
			 transformOrigin: "center",
		  ease: "none",
		  y: "+=20",
		  repeatRefresh: true,
		  yoyoEase: true
		});

		const speakerSounds = svgDoc.querySelector("#speaker-sounds, #rocket-burst");

		gsap.to(speakerSounds, {
		  duration: 0.2,
		  opacity: 0,
		  repeat: -1,
		  yoyo: true
		});


	const speakerSoundsBox = svgDoc.querySelector("#speaker-sounds-box");

	gsap.fromTo(
	  speakerSoundsBox,
	  {
		fill: "#1C7EE1"
	  },
	  {
		duration: 2,
		fill: "#2af598",
		ease: "none",
		  repeat: -1
	  }
	);


		var revenue = svgDoc.querySelectorAll("#revenue g");

		function getRevRandomRotation() {
		  return gsap.utils.random(-360, 360);
		}

		revenue.forEach(function(rev) {
		  gsap.set(rev, {
			opacity: 0,
			y: "+=" + gsap.utils.random(100, 600) + "%",
		  });

		  var tl = gsap.timeline({});

		  tl.to(rev, {
			opacity: 1,
			opacity: 1,
			duration: 1,
			ease: "power2.inOut"
		  });

		  tl.to(rev, {
			y: "-=" + gsap.utils.random(300, 400) + "%",
			duration: 2,
			  transformOrigin : "center",
			  rotation: 360,  
			ease: "linear"
		  });

		  tl.to(rev, {
			opacity: 0,
			duration: 1,
			ease: "power2.inOut"
		  });

		  tl.eventCallback("onComplete", function() {
			gsap.set(rev, {
			  y: "+=" + gsap.utils.random(100, 600) + "%",
			  opacity: 0
			});
			tl.vars.duration = gsap.utils.random(2, 5);
			tl.vars.delay = gsap.utils.random(1, 5);
			tl.restart();
		  });

		  tl.play();
		});

		const machineSpeedo1Arrow = svgDoc.querySelector("#machine-speedo-1-arrow");
		const machineSpeedo2Arrow = svgDoc.querySelector("#machine-speedo-2-arrow");

		function SpeedoRotation() {
		  return gsap.utils.random(300, 360);
		}

		gsap.to(machineSpeedo1Arrow, {
		  duration: 2,
		  rotation: SpeedoRotation(),
			transformOrigin: "28%",
		  repeat: -1,
		  yoyo: true,
		  ease: "none"
		});

		gsap.to(machineSpeedo2Arrow, {
		  duration: 2,
		  rotation: SpeedoRotation(),
		  transformOrigin: "center",
		  repeat: -1,
		  yoyo: true,
		  ease: "none"
		});


	var light = svgDoc.getElementById("machine-light");
	var paths = light.querySelectorAll("path");

	function showPaths() {
	  gsap.set(paths, { fillOpacity: 0 });
	  gsap.to(paths[0], { duration: 0.5, fillOpacity: 1 });
	  gsap.to(paths[1], { duration: 0.5, delay: 0.5, fillOpacity: 1 });
	  gsap.to(paths[2], { duration: 0.5, delay: 1, fillOpacity: 1 });
	  gsap.delayedCall(1.7, function() {
		gsap.to(paths, { duration: 0.2, fillOpacity: 0 });
		showPaths();
	  });
	}

	showPaths();

	var humanTraffic = svgDoc.getElementById("human-traffic");
	var groups = humanTraffic.querySelectorAll("g");

	function humanTrafficRand() {
	  return gsap.utils.random(1, 50);
	}

	gsap.set(groups, { x: "-=70", y: "-=70", opacity: 0 });

	function animateGroups() {
	  gsap.to(groups[0], { duration: 1, x: "+=50", y: "+=20", opacity: humanTrafficRand() > 25 ? 1 : 0 });
	  gsap.to(groups[1], { duration: 1, x: "+=50", y: "+=50", opacity: humanTrafficRand() > 25 ? 1 : 0 });
	  gsap.to(groups[2], { duration: 1, x: "-=20", y: "+=50", opacity: humanTrafficRand() > 25 ? 1 : 0 });
	  gsap.to(groups[3], { duration: 1, x: "+=50", y: "+=50", opacity: humanTrafficRand() > 25 ? 1 : 0, onComplete: resetPositions });
	}

	function resetPositions() {
	  gsap.set(groups, { x: 0, y: 0, opacity: 0 });
	  gsap.delayedCall(1.7, function() {
		animateGroups();
	  });
	}

	animateGroups();



	const rocket  = svgDoc.querySelector("#rocket");
	// hide the rocket by default
	gsap.set(rocket, { opacity: 0});

	// animate the rocket to show on command and fly
	function showRocket() {
		 gsap.to(rocket, { duration: 1, opacity: 1 });
		 gsap.delayedCall(1.7, function() {
			 gsap.to(rocket, { duration: 3, y: "-=500", x: "+=300", ease:"expo" ,opacity: 1, onComplete: hideRocket});
		});

	}

	// animate the rocket to hide and then show again
	function hideRocket() {
	  gsap.set(rocket, { opacity: 1, y:0, x:0, onComplete: showRocket });
	}

	// start the animation
	showRocket();

	/*	  



	burstLines.forEach(line => {
	  const length = line.getTotalLength();
	  line.style.strokeDasharray = `0 100`;
	  line.style.strokeDashoffset = length;
	});

	gsap.to(burstLines, {
	  duration: 1.5,
	  strokeDashoffset: "100%",
	  repeat: -1,
	  ease: "linear"
	});

		  */



	const burstLines = svgDoc.querySelectorAll("#rocket-burst * ");	  

		gsap.to(burstLines, {
		  duration: 0.2,
		  opacity: 0,
		  repeat: -1,
		  yoyo: true
		});


	// select the path elements
	const matrix = svgDoc.querySelectorAll("#matrix line, #matrix polyline, #matrix path");

	// loop through each path element and create a timeline for animating its stroke
	matrix.forEach(path => {
	  // create a timeline for animating the stroke
	  const tl = gsap.timeline({ repeat: -1 });

	  // animate the stroke-dashoffset property from the path's total length to 0
	  tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "power1.inOut" });

	  // animate the stroke-dasharray property to reveal the stroke progressively
	  tl.to(path, { strokeDasharray: "0 100%", duration: 1, ease: "power1.inOut" }, "-=0.8");

	  // animate the stroke-dashoffset property from 0 back to the path's total length
	  tl.to(path, { strokeDashoffset: path.getTotalLength(), duration: 1, ease: "power1.inOut" }, "+=0.5");

	  // animate the stroke-dasharray property to hide the stroke progressively
	  tl.to(path, { strokeDasharray: "100% 0", duration: 1, ease: "power1.inOut" }, "-=0.8");
	});




	const users = svgDoc.querySelectorAll("#users");
	const user23 = svgDoc.querySelector("#user-2_3_");
			 
			 
	// animate the x property of the #users element(s)
	gsap.to(users, { x: "+=160", duration: 1, onComplete: showUser23 });

	function showUser23() {
	  user23.style.display = "block";
	  gsap.set(user23, { y: "-100%" });
	  gsap.to(user23, { y: "0%", duration: 1.5, ease: "bounce.out", onComplete: hideUsers });
	}

	function hideUsers() {
	  gsap.to(users, { opacity: 0, duration: 0.5, onComplete: resetUsers });
	}

	function resetUsers() {
	  user23.style.display = "none";
	  gsap.set(users, { opacity: 1, x: 0 });
	  gsap.to(users, { x: "+=160", duration: 1, onComplete: showUser23 });
	}

			 
		
			 

	function startCartAnimation() {
	  const carts = svgDoc.querySelectorAll("#carts");
	  const cartThree = svgDoc.querySelector("#cart-3");
		
      gsap.set(carts, {x: 0 });
	  gsap.set(cartThree, {rotation: 0 , transformOrigin:"center", x:0, y:0, opacity: 1,});
		
		
		
	  gsap.to(carts, {
		x: "+=230",
		duration: 2,
		ease: "ease",
		onComplete: () => {
		  startCartAnimation();
		},
	  });
		

	  gsap.to(cartThree, {
		  delay: .7,
		  opacity: 0,
		  x: "+=100",
		  y: "+=100",
		  duration: 1,
		  rotation: 100,
	  });

}

	startCartAnimation();

			 
			 
			 
			 
			 
			 
			 
			 
					 
	/* 		 
			 
			 
			 
	const carts = svgDoc.querySelectorAll("#carts");
	const cartThree = svgDoc.querySelector("#cart-3"); 

	gsap.to(carts, { x: "+=230", duration: 1.5, onUpdate:CartThreeAnimation, onComplete: startCartAnimation});	 
 
			 
	function startCartAnimation() {
		 gsap.to(carts, { x: "+=230", duration: 1, onComplete: resetCarts });
	}		 
			 
	function CartThreeAnimation() {
		gsap.to(cartThree, { rotation: 50, duration: 1.5, ease: "bounce.out",  });
	}		
			 
			 
			 
	function resetCarts() {
	  gsap.set(cartThree, { rotation: 0 });
	  gsap.set(carts, { x: 0 });
	  gsap.to(carts, { x: "+=230", duration: 1, onComplete: startCartAnimation });
	}	 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
 
		 

	function startCartAnimation() {
		gsap.to(cartThree, { rotation: 50, duration: 1.5, ease: "bounce.out", onComplete: hideCarts });
	}

			 
			 
			 
	function hideCarts() {
	  gsap.to(carts, { duration: 0.5, onComplete: resetCarts });
	}	
			 
			 
	

			 
			 
			 
			 
			 
			 
			 
	
			 
			 
function startCartAnimation() {
 const carts = svgDoc.querySelectorAll("#carts");
 const cartThree = svgDoc.querySelector("#cart-3");

 gsap.set(users, { x: "-=230" });	
	
  gsap.to(carts, {
    x: "+=230",
    duration:5,
    ease: "ease",
    onUpdate: () => {
     animateCartThree();
    },
    onComplete: () => {
      startCartAnimation();
    },
  });
	
  function animateCartThree() {
	
	
  }
	
	
	
	
	

 function animateCartThree() {
    gsap.to(cartThree, {
      duration: 5,
      ease: "power2.out",
      y: "100%",
      x: "+=150",
      rotation: 50,
      onComplete: () => {
        cartThree.style.display = "none";
      },
    });
  }

  function resetCartThree() {
    gsap.set(cartThree, { y: "-100%", x: "-50%", rotation: 0 });
    cartThree.style.display = "block";
  }*/


			 
			 
/*			 
	gsap.to(cartThree, {
	  duration: 1,
	  ease: "power2.out",
	  opacity: 0,	
	  y: "100%",
	  x: "100%",
	  rotation: 180,
	  onComplete: cartThreeAnim
	});	 
			 
			 
	function cartThreeAnim() {
		 gsap.set(cartThree, { transformOrigin:"center"});
	}		 
			*/ 
			 
			 
			 
			 
			 
			 
			 
			 
			 
	const eye = svgDoc.querySelector("#eyes");

	// define the blink animation
	const blink = gsap.timeline({ repeat: -1, repeatDelay: 2 });

	// add the blink animation to the #eye element
	blink.to(eye, { duration: 0.1, scaleY: 0.1, transformOrigin: "50% 50%" })
	  .to(eye, { duration: 0.1, scaleY: 1, transformOrigin: "50% 50%" })
	  .to(eye, { duration: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", delay: 0.2 })
	  .to(eye, { duration: 0.1, scaleY: 1, transformOrigin: "50% 50%", delay: 0.2 });

	// play the blink animation
	blink.play();


	const paper = svgDoc.querySelector("#paper");
	gsap.set(paper, { transformOrigin: "center bottom" });

	// define the move animation
	const move = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true, transformOrigin: "bottom center" });

	// add the move animation to the #paper element
	move.to(paper, { duration: 1, scaleY: 0.8, ease: "power1.inOut" })
		.to(paper, { duration: 1, scaleY: 1, ease: "power1.inOut" });

	// play the move animation
	move.play();

	const eyesLoading = svgDoc.querySelector("#eyes-loading");
	gsap.set(eyesLoading, { transformOrigin: "center " });
	// rotate the #eyes-loading element
	gsap.to(eyesLoading, { rotate: 360, duration: 2, repeat: -1, ease: "linear" });


	const smoke = svgDoc.querySelector("#smoke");
	gsap.set(smoke, { transformOrigin: "bottom right" });
	// animate the skewX property of the #smoke element
	gsap.to(smoke, { skewX:-10, skewY: -10, duration: 1, repeat: -1, ease: "linear" ,   yoyo: true});


	// apply a rotation and translation transformation to the #hands element
	gsap.to(hands, { rotate: 25, x: 110, y: -12, duration: 1,  yoyo: true, repeat: -1 });

		  }

		  if (svgDoc.readyState === "complete") {
			onSvgLoad();
		  } else {
			svgDoc.addEventListener("load", onSvgLoad);
		  }
	

	} //end runAnimation



	  
























		const seorocket = document.querySelector('#seo-rocket');

		gsap.set(seorocket, {
			attr: { 
				transform: 'rotate(-10, 50, 50)',
				y: '-=10'
			}
		});

		gsap.to(seorocket, {
			duration: 2,
			attr: {
				transform: 'rotate(20, -10, -10)',
				y: '+=30'
			},
			ease: 'sine.inOut',
			repeat: -1,
			yoyo: true
		});

		const rocketboost = document.querySelector('#rocket-boost');
		const rflame = rocketboost.querySelectorAll('path');

		gsap.set(rocketboost, { transformOrigin: '50% 50%' });

		gsap.to(rflame, {
			duration: 0.8,
			scale: 1.1,
			opacity: 0,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			stagger: 0.1
		});	  
	  
	  
		const smoon = document.querySelector('#seo-moon');
		const smoonpaths = smoon.querySelectorAll('.st1');

		gsap.set(smoon, { transformOrigin: '50% 50%' });

		gsap.fromTo(smoon, {
			rotation: 0
		}, {
			duration: 4,
			rotation: 360,
			repeat: -1,
			ease: 'linear'
		});

		smoonpaths.forEach(smoonpath => {
			gsap.fromTo(smoonpath, {
						strokeDasharray: '0',

					}, {
						duration: 5,
						strokeDasharray: '100',

						repeat: -1,
						yoyo: true,
						ease: 'linear'
					});
				});	
	

const attractmagnet = document.querySelector('#magnet');

gsap.set(attractmagnet, {
  attr: { 
    transform: 'rotate(20, 50, 50)',
    y: '-=100'
  }
});

gsap.to(attractmagnet, {
  duration: 2,
  attr: {
    transform: 'rotate(-20, 40, 40)',
    y: '+=0',
  },
  ease: 'sine.inOut',
  repeat: -1,
  yoyo: true
});

	
const attractusers = document.querySelector('#attractusers');

function magnetusers() {
  gsap.fromTo(
    attractusers.querySelectorAll('g'),
    {
      x: () => Math.random() * -10,
      y: () => Math.random() * -30,
      opacity: 0
    },
    {
      duration: 1.5,
      x: 0,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      stagger: 0.1,
      onComplete: magnetusers
    }
  );
}

magnetusers();

const magnetLight = document.querySelector('#magnet-light');

gsap.to(magnetLight, {
  duration: 0.5,
  opacity: 0,
  repeat: -1,
  yoyo: true,
  ease: 'power2.out'
});
	
	
const salesfunnel = document.querySelector('#salesfunnel');
const salesfunneluser = salesfunnel.querySelector('#consumers');
const sclouds = document.querySelector('#sclouds');
const salesfunnels = document.querySelectorAll('#funnel-front, #funnel');
	
function salesfunnelAnim() {
  gsap.fromTo(
    salesfunneluser.querySelectorAll('g'),
    {
      y: () => Math.random() * -40,
      opacity: 0
    },
    {
      duration: 1.5,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      stagger: 0.1,
      onComplete: salesfunnelAnim
    }
  );
}

salesfunnelAnim();
	
/*
gsap.set(sclouds, {
  opacity: 1,
  transformOrigin: 'center',
  x: '-100px'
});

gsap.to(sclouds, {
  x: '0%',
  duration: 1
});
	*/


	gsap.set(sclouds, {
		 x: '-=30',
		 transformOrigin: 'center',
	});

	gsap.to(sclouds, {
		duration: 2,
			x: '+=30',
		ease: 'sine.inOut',
		repeat: -1,
		yoyo: true
	});
	
	gsap.set(salesfunnels, {
		 y: '+=10',
		 transformOrigin: 'center',
	});

	gsap.to(salesfunnels, {
		duration: 2,
			y: '-=10',
		ease: 'sine.inOut',
		repeat: -1,
		yoyo: true
	});
	
const polyline1 = document.getElementById('sr-chart').querySelectorAll('polyline')[0];
const polyline2 = document.getElementById('sr-chart').querySelectorAll('polyline')[1];

const length1 = polyline1.getTotalLength();
const length2 = polyline2.getTotalLength();

function animatePolyline(polyline, length) {
  polyline.style.strokeDasharray = length;
  polyline.style.strokeDashoffset = -length;

  const animation = polyline.animate(
    [{ strokeDashoffset: -length }, { strokeDashoffset: 0 }],
    {
      duration: 2000,
      easing: 'ease-in-out',
    }
  );

  animation.addEventListener('finish', () => {
    animatePolyline(polyline, length);
  });
}

animatePolyline(polyline1, length1);
animatePolyline(polyline2, length2);




const salesMoney = document.querySelector("#sr-money");
gsap.set(salesMoney, { transformOrigin: 'bottom' });
// Use GSAP to rotate and bounce the element
gsap.fromTo(salesMoney, {
    transform: "translate(0 , 0)",
  }, {
    duration: 0.5,
    transform: "translate(-5px , -20px)", 
    repeat: -1, 
    yoyo: true,
    ease: "bounce.easout" 
});


/*const rects = document.querySelectorAll("#graph rect");

rects.forEach(rect => {
  rect.setAttribute("height", 0);
  rect.style.transformOrigin = "bottom";
});

gsap.fromTo(
  rects,
  { attr: { height: 0 } },
  { 

    duration: 1,
    attr: (i, rect) => ({ height: rect.getAttribute("data-value")}),
    ease: "linear",
    repeat: -1,
    yoyo: true
  }
);
*/

const rects = document.querySelectorAll("#graph path");

rects.forEach((rect, index) => {
  rect.style.transformOrigin = "bottom";

  // Add a random delay between 0 and 1 seconds to each path element
  const delay = Math.random();
  
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

  timeline.to(rect, { duration: 0.1, scaleY: 0.1, transformOrigin: "bottom", delay: delay })
    .to(rect, { duration: 1, scaleY: 1, transformOrigin: "bottom", delay: delay })
    .to(rect, { duration: 1, scaleY: 0.1, transformOrigin: "bottom", delay: delay + 0.2 })
    .to(rect, { duration: 1, scaleY: 1, transformOrigin: "bottom", delay: delay + 0.2 });
});


gsap.set("#ppc-click", {opacity: 0});
gsap.set("#ppc-money", {opacity: 0, y: "+50%"});

function animatePPC() {
  gsap.fromTo("#serv_ppc #ppc-hand", {
    transformOrigin: "center bottom",
    scale: 0,
    y: "100%",
  }, {
    scale: 1,
    y: "0%",
    duration: 0.5,
    ease: "power2.out",
    onComplete: function() {
      gsap.to("#serv_ppc #ppc-hand", {
        scale: 0.9,
        duration: 0.1,
        ease: "power2.inOut",
        delay: 0.2,
        onStart: function() {
          gsap.to("#ppc-click", {
             opacity: 1,
          });
        },
        onComplete: function() {
          gsap.to("#serv_ppc #ppc-hand", {
            scale: 1,
            duration: 0.1,
            ease: "power2.inOut",
            onStart: function() {
              gsap.to("#ppc-click", {
                 opacity: 0,
              });
            },
            onComplete: function() {
              gsap.to("#ppc-money", {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: function() {
                  gsap.to("#ppc-money", {
                    opacity: 0,
                    y: "+50%",
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: animatePPC, // call animatePPC function again to repeat the animation
                  });
                },
              });
            },
          });
        }
      });
    }
  });
}

animatePPC(); // call animatePPC function to start the animation

gsap.set("#smm-speak", { transformOrigin: "bottom center", rotation: 0 });
gsap.set("#smm-thumb", { opacity: 0, rotation: 0, scale: 0.8, transformOrigin: "bottom center" });
gsap.set("#smm-speech", { opacity: 0, scale: 0 });
gsap.set("#smm-speak g", { opacity: 0 });


  gsap.to("#smm-speak", {
    duration: 0.5,
    rotation: 5,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
  });

  gsap.to("#smm-speak g", {
    opacity: 1,
    duration: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });



function animateSMM() {

      gsap.to("#smm-thumb", {
        duration: 0.5,
        scale: 1,	
        opacity: 1,
        rotation: -45,
        y: "-=20",
        ease: "power4.inOut",
        onComplete: function () {
          gsap.to("#smm-thumb", {
            duration: 0.2,
            rotation: -30,
            y: "-=10",
            ease: "power2.in",
            onComplete: function () {
              gsap.to("#smm-thumb", {
                rotation: 0,
                duration: 0.2,
                y: "0%",
                x: "0%",
                ease: "power.out",
                onComplete: function() {
                  gsap.to("#smm-thumb", {
                    delay: 1,    
                    opacity: 0,
                    onComplete: function () {
                      gsap.to("#smm-speech", {
                        duration: 0.5,
                        scale: 1,
                        opacity: 1,
                        ease: "power2.out",
                        delay: 1,
                        onComplete: function () {
                          gsap.to("#smm-speech", {
                            duration: 0.2,
                            y: "-=10",
                            ease: "power2.inOut",
                            yoyo: true,
                            repeat: 4,
                            onComplete: function () {
                              gsap.to("#smm-speech", {
                                duration: 0.3,
                                opacity: 0,
                                ease: "power2.out",
                                onComplete: function () {
                                  gsap.set("#smm-speech", { scale: 0 , y: "0%"});
                                  gsap.to("#smm-speak", {
                                    duration: 0.2,
                                    opacity: 1,
                                    repeat: 1,
                                    yoyo: true,
                                    onComplete: function() {
                                      animateSMM();
                                    }
                                  });
                                },
                              });
                            },
                          });
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });

}

setTimeout(animateSMM, 2000);







// Set initial opacity of the envelope front group to 0
gsap.set("#em-envelope-front g", { opacity: 0 });

// Animate the envelope front
function animateEnvelopeFront() {
  const envelopeFront = gsap.timeline({ repeat: -1 });

  // Swoosh in from right to center
  envelopeFront.fromTo(
    "#em-envelope-front",
    {
      x: "100vw",
      ease: "power3.out",
    },
    {
      duration: 1.5,
      x: "0%",
      ease: "power3.out",
    }
  )
  // Fade in envelope front group before swoosh in
  .to(
    "#em-envelope-front g",
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "-=1.5"
  )
  // Fade out envelope front group before swoosh out
  .to(
    "#em-envelope-front g",
    {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    },
    "-=0.5"
  )
  // Float effect
  .to(
    "#em-envelope-front",
    {
      duration: 2,
      y: "+=5px",
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    },
    "+=0.5"
  )
  // Swoosh out to left
  .to(
    "#em-envelope-front",
    {
      duration: 1,
      x: "-100vw",
      ease: "power3.in",
    },
    "+=0.5"
  )
  // Fade in envelope front group before swoosh in
  .to(
    "#em-envelope-front g",
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "-=1.5"
  )
  // Fade out envelope front group before swoosh out
  .to(
    "#em-envelope-front g",
    {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    },
    "-=0.5"
  );
}

// Call the animation function
animateEnvelopeFront();



// Set initial opacity of the envelope front group to 0
gsap.set("#em-envelope-back g", { opacity: 0 });

// Animate the envelope front
function animateEnvelopeBack() {
   const envelopeBack = gsap.timeline({ repeat: -1 });

  // Swoosh in from right to center
  envelopeBack.fromTo(
    "#em-envelope-back",
    {
      x: "-100vw",
      ease: "power3.out",
    },
    {
      duration: 1.5,
      x: "0%",
      ease: "power3.out",
    }
  )
  // Fade in envelope front group before swoosh in
  .to(
    "#em-envelope-back g",
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "-=1.5"
  )
  // Fade out envelope front group before swoosh out
  .to(
    "#em-envelope-back g",
    {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    },
    "-=0.5"
  )
  // Float effect
  .to(
    "#em-envelope-back",
    {
      duration: 2,
      y: "-=5px",
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    },
    "+=0.5"
  )
  // Swoosh out to left
  .to(
    "#em-envelope-back",
    {
      duration: 1,
      x: "100vw",
      ease: "power3.in",
    },
    "+=0.5"
  )
  // Fade in envelope front group before swoosh in
  .to(
    "#em-envelope-back g",
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "-=1.5"
  )
  // Fade out envelope front group before swoosh out
  .to(
    "#em-envelope-back g",
    {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    },
    "-=0.5"
  );
}

// Call the animation function
animateEnvelopeBack();



// Select the element with ID "seo-magnify"
const serv_seo = document.querySelector("#seo-magnigfy");

gsap.set(serv_seo, { transformOrigin: 'center', x: 20 , y: -5});
// Use GSAP to animate the element's position to the top left
gsap.to(serv_seo, {
/*  y: -10, // move up by 50 pixels
  x: -10,
  duration: 0.5, // duration of the animation in seconds
  yoyo: true, // repeat the animation in reverse
  repeat: -1, // repeat the animation indefinitely
  ease: "linear.inOut"*/
  x: -30,
  rotation: 90, // rotate 45 degrees
  duration: 1, // duration of the animation in seconds
  ease: "linear.inOut", // ease in and out with power function
  yoyo: true, // animate back and forth
  repeat: -1 // repeat the animation indefinitely
	
});

const gear = document.querySelectorAll("#seo-gear");

gsap.set(gear, { transformOrigin: 'center' });
gsap.to(gear, {
  scale: 1.2,
  rotation: -360, // rotate 360 degrees
  duration: 2, // duration of the animation in seconds
  repeat: -1, // repeat the animation indefinitely
  ease: "circ" // linear easing function
});




const leadgear1 = document.querySelector("#lead-gears g:first-child");
const leadgear2 = document.querySelector("#lead-gears g:last-child");

gsap.set([leadgear1,leadgear2], { transformOrigin: 'center' });

gsap.to(leadgear1, {
  rotation: 360, // rotate 360 degrees
  duration: 4, // duration of the animation in seconds
  repeat: -1, // repeat the animation indefinitely
  ease: "linear" // circular easing function
});

gsap.to(leadgear2, {
  rotation: -360, // rotate 360 degrees
  duration: 5, // duration of the animation in seconds
  repeat: -1, // repeat the animation indefinitely
  ease: "linear" // circular easing function
});


// Select the element with ID "seo-magnify"
const leadfunnel = document.querySelector("#lead-funnel");

gsap.set(leadfunnel, { transformOrigin: 'center'});
// Use GSAP to animate the element's position to the top left
gsap.to(leadfunnel, {
  y: -10, // move up by 50 pixels
  duration: 1, // duration of the animation in seconds
  yoyo: true, // repeat the animation in reverse
  repeat: -1, // repeat the animation indefinitely
  ease: "linear.inOut"

	
});

// play the timeline when the g element is in view
/*  ScrollTrigger.create({
    trigger: g,
    start: 'top 80%',
    onEnter: () => tl.play()
  });*/


// select the g elements inside the #lead-people SVG container
const gElements = document.querySelectorAll('#lead-people g');

gElements.forEach(g => {
  gsap.set(g, {
    opacity: 0,
	  scale: .1,
	y: "0",
    /*y: "+=" + gsap.utils.random(100, 600) + "%",*/
  });

  const tl = gsap.timeline({});

  // add the bubble fade in effect to the timeline
  tl.to(g, { scale: 1.2, opacity: 1, duration: 0.3 })
    .to(g, { scale: 1, duration: 0.2 });

  tl.to(g, {
 /*   y: "+=" + gsap.utils.random(300, 400) + "%",*/
	  y: "+=20",
    duration: 2,
    transformOrigin: "center",
/*    rotation: gsap.utils.random(-360, 360),
*/    ease: "linear"
  });

  // add the pop effect to the timeline
  tl.to(g, {
    scale: .5,
    opacity: 0,
    duration: gsap.utils.random(0.5, 1.5),
    onComplete: () => {
      gsap.set(g, {
        scale: 0,
        opacity: 0,
       /* y: "-=" + gsap.utils.random(100, 600) + "%",*/
      });
      tl.vars.duration = 3,
      tl.vars.delay = gsap.utils.random(1, 5);
      tl.restart();
    },
    ease: "power2.inOut"
  });

  tl.play();
});

/*
const aff = document.querySelectorAll('#affiliate-network');
gsap.set(aff, { transformOrigin: 'center'});


gsap.to(aff, {
   rotation: 360,
  duration: 10, // duration of the animation in seconds
  repeat: -1, // repeat the animation indefinitely
  ease: "none"
});
*/

const affP = document.querySelectorAll('#affiliate-network > g');

function changeStrokeColor(element) {
  // Check the scale of the element
  const scale = gsap.getProperty(element, 'scale');
  if (scale === 1) {
		const line = element.querySelector('line');
		if (line) {
		  line.style.display = 'block';
		}
		const childEls = element.querySelectorAll('*');
		childEls.forEach(function(childEl) {
		  childEl.setAttribute('class', 'st0 on');
		});
	  
   
  } else {
	   const line = element.querySelector('line');
    if (line) {
      line.style.display = 'none';
    }
const childEls = element.querySelectorAll('*');
    childEls.forEach(function(childEl) {
      childEl.removeAttribute('class', 'st0 on');
    });  
  }
}


const lines = document.querySelectorAll('#affiliate-network > g line');

lines.forEach(function(line) {
  line.style.display = 'none';
});


function animateAllElements() {
  // Loop through all g elements and animate them with a random delay
  affP.forEach(function(element) {
    const delay = Math.random(); // Generate a random delay between 0 and 1
    const duration = Math.random() + 0.5; // Generate a random duration between 0.5 and 1.5
    const scale = Math.random() * 0.5 + 0.5; // Generate a random scale between 0.5 and 1
    const opacity = Math.random() * 0.5 + 0.5; // Generate a random opacity between 0.5 and 1
    const stagger = Math.random() * 0.1; // Generate a random stagger between 0 and 0.1
    const tl = gsap.timeline({ repeat: -1, yoyo: true , ease: "linear",});
    tl.to(element, { 
        scale: scale, 
        opacity: opacity, 
        duration: duration, 
        delay: delay,
		 ease: "linear",
        onUpdate: function() { changeStrokeColor(element); } // Monitor the scale and update the stroke color
      })
      .to(element, { 
        scale: 0, 
        opacity: 0, 
		ease: "linear",
        duration: 1, 
        delay: scale === 1 ? 2 : 0 // Pause for 2 seconds only when the scale is equal to 1
      });
  });
}


animateAllElements();

/*
// Select the circles using their classes
const circles = document.querySelectorAll('.test-circle');
const container = document.getElementById('testimonials');

// Use GSAP to create a timeline that moves and bounces each circle randomly
const tl = gsap.timeline({ repeat: -1 });

circles.forEach(circle => {
  // Set initial random position within the bounding box
  gsap.set(circle, {
    x: gsap.utils.random(0, container.offsetWidth - circle.offsetWidth),
    y: gsap.utils.random(0, container.offsetHeight - circle.offsetHeight)
  });
  
  tl.to(circle, {
    duration: 1, // duration of the animation
    x: gsap.utils.random(0, container.offsetWidth - circle.offsetWidth), // random value within the bounding box for x-axis
    y: gsap.utils.random(0, container.offsetHeight - circle.offsetHeight), // random value within the bounding box for y-axis
    ease: 'power2.inOut', // easing function for the animation
    // Add a bounce effect using the 'yoyo' option
    yoyo: true,
    repeat: 1,
    onComplete: function() {
      // Make sure the circle stays within the bounding box
      gsap.set(circle, {
        x: gsap.utils.clamp(0, container.offsetWidth - circle.offsetWidth, gsap.getProperty(circle, 'x')),
        y: gsap.utils.clamp(0, container.offsetHeight - circle.offsetHeight, gsap.getProperty(circle, 'y'))
      });
    }
  });
});

// Add all circles to the timeline
tl.add(circles);

*/
