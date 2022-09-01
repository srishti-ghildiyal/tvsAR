import { startScene } from "./babylonjs-scene-init.js";

const onxrloaded = () => {
  // Add camera pipeline modules.
  XR8.addCameraPipelineModules([
    window.LandingPage.pipelineModule(), // Detects unsupported browsers and gives hints.
    XRExtras.Loading.pipelineModule(), // Manages the loading screen on startup.
    XRExtras.RuntimeError.pipelineModule(), // Shows an error image on runtime error.
  ]);
  // Add a canvas to the document for our xr scene.
  document.body.insertAdjacentHTML("beforeend", camerafeedHtml);
  // Open the camera and start running the camera run loop.
  startScene(document.getElementById("camerafeed"));
};
window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
