const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    superHero = new Hero(1500,400,400,100);

}

function draw() {
  background(0);
  Engine.update(engine);

  superHero.display();

}

