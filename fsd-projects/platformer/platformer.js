$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 500, 150, 20); // platform 1
    createPlatform(300, 400, 150, 20); // platform 2
    createPlatform(500, 300, 150, 20); // platform 3
    createPlatform(700, 200, 150, 20); // platform 4
    createPlatform(900, 100, 150, 20); // platform 5



    // TODO 3 - Create Collectables
    createCollectable("steve", 150, 470);
    createCollectable("diamond", 350, 370, 0.5, 0.7);
    createCollectable("grace", 550, 270);
    createCollectable("kennedi", 750, 170, 0.7, 0.8);
    createCollectable("max", 950, 70, 0.6, 0.6);

    
    // TODO 4 - Create Cannons
    createCannon("top", 400, 1500);
    createCannon("right", 600, 2000);
    createCannon("left", 800, 2500);
    createCannon("bottom", 1000, 3000);
    createCannon("top", 1200, 3500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
