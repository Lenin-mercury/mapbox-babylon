import React, {useState} from 'react';
import { ArcRotateCamera , Vector3, HemisphericLight, MeshBuilder, PointLight, StandardMaterial, Texture} from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook'; 
import './Babylon.css';
const Babylon = ({img3d}) => {
  
  let box;
  const onSceneReady = (scene) => {
  var camera = new ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2.2, 5, new Vector3(0, 0, 0), scene);
  camera.setTarget(Vector3.Zero());
  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  var mat = new StandardMaterial("mat", scene);
  var texture = new Texture(img3d, scene);
  mat.diffuseTexture = texture;
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  box.material= mat;
  box.position.y = 1;
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};
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

export default Babylon;