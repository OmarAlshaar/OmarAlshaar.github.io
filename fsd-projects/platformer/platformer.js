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
    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(200, 150, 100, 20); // new platform 1
    createPlatform(800, 300, 150, 20); // new platform 2
    createPlatform(1100, 200, 100, 20); // new platform 3
    createPlatform(600, 500, 200, 20); // new platform 4
    createPlatform(300, 350, 150, 20); // new platform 5



    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 800, 320);
    createCollectable("kennedi", 1100, 220, 0.7, 0.8);
    createCollectable("max", 600, 520, 0.6, 0.6);

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 100);
    createCannon("right", 300, 2000);
    createCannon("left", 500, 1500);
    createCannon("bottom", 800, 1200);
    createCannon("top", 1100, 1800);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
