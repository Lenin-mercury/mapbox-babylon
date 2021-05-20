import React, {useState} from 'react';
import { FreeCamera, ArcRotateCamera , Vector3, HemisphericLight, MeshBuilder, PointLight, StandardMaterial, Texture} from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook'; 

import './baby.css';

import img from '../img/map.png';

const Baby = (props) => {
  let box;

  const [pic, setPic]= useState(props.location.state);

  console.log(pic);


const onSceneReady = (scene) => {
  // This creates and positions a free camera (non-mesh)
  // var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  var camera = new ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2.2, 5, new Vector3(0, 0, 0), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // var pl = new PointLight("pl", Vector3.Zero(), scene);
  // pl.intensity = 0.5;

  var mat = new StandardMaterial("mat", scene);
  var texture = new Texture(pic, scene);
  mat.diffuseTexture = texture;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  box.material= mat;

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

  return (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} 
        id="my-canvas" 
        className="baby"
    
    />
    </div>
  );
};

export default Baby;