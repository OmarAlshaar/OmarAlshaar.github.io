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
    createPlatform(50, 610, 1200, 20); // platform 1
    createPlatform(100, 500, 1200, 20); // platform 2
    createPlatform(48, 350, 1200, 20); // platform 3
    createPlatform(47, 250, 1200, 20); // platform 4
    createPlatform(46, 150, 1200, 20); // platform 5
    createPlatform(45, 50, 1200, 20); // platform 6

    // TODO 3 - Create Collectables
    createCollectable("steve", 100, 520);
    createCollectable("diamond", 300, 420, 0.5, 0.7);
    createCollectable("grace", 500, 320);
    createCollectable("kennedi", 700, 220, 0.7, 0.8);
    createCollectable("max", 900, 120, 0.6, 0.6);
    createCollectable("db", 1100, 20, 0.8, 0.9); // new collectable

    // TODO 4 - Create Cannons
    createCannon("top", 150, 2000);
    createCannon("right", 300, 2500);
    createCannon("left", 450, 3000);
    createCannon("bottom", 600, 3500);
    createCannon("top", 750, 4000);
    createCannon("right", 900, 4500); // new cannon
    createCannon("left", 1050, 5000); // new cannon
    createCannon("bottom", 1200, 5500); // new cannon

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
