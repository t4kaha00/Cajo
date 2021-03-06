var img = new Image();
var clicked = false;

$(document).ready(function (){
    var TARGET_W = 600;
    var TARGET_H = 300;
    // visible() function to called for the first crop button click
    var visible = function(){

      //image to be cropped
      var imageToCrop = $('#img_name').attr('src');
      $('#img_modal').attr('src', imageToCrop);
      // destroy the Jcrop object to create a new one
      	try {
      		jcrop_api.destroy();
      	} catch (e) {
      		// object not defined
      	}

      $('#img_modal').Jcrop({
        setSelect:   [ 50, 80, 300, 300 ], //setting the default area of crop tool
        onSelect: updateCoords //updateCoords() updates the values in form from crop tool
      },function(){
          jcrop_api = this;
      });
      $('#photo_url').val(imageToCrop);

      var imageToCrop_width = imageToCrop.width;
      var imageToCrop_height = imageToCrop.height;
      var imageToCrop_ratio = imageToCrop_width/imageToCrop_height;
      // To check if the length is really longer than width
      if (imageToCrop_ratio < (2/3)) {
        $('#modal-content').attr('width', '600px');
      } else {
        $('#modal-content').attr('width', '300px');
      }

      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
    }

    // crop() called when the crop button in the popup is clicked
    // with final image to be cropped with final data
    var crop = function(){
        // image details such as staring point (x & y), width, height and image source
        var image = $("#img_modal").attr('src');
        var crop_start_x = $('#x').val();
        var crop_start_y = $('#y').val();
        var crop_tool_width = $('#w').val();
        var crop_tool_height = $('#h').val();

        $.post("crop.php",
                {crop_start_x: crop_start_x,
                crop_start_y: crop_start_y,
                crop_tool_width: crop_tool_width,
                crop_tool_height: crop_tool_height,
                targ_w : TARGET_W,
                targ_h : TARGET_H,
                image : image},
                function(data){
                  //changes the main image once successful
                  img.src = data;
                  $('#img_name').attr('src', img.src);
        });

        // Get the modal
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
      }

    $("#crop_btn").click(
      function(){
        //Checking if the file is chosen
        if(checkFile()) {
          visible();
        } else {
          alert("Please choose a picture! ");
        }
    });
    $("#crop_btn_modal").click(
      function() {
        crop();
      }
    )

    $("#button_resize").click(
        function(){
          if(checkFile()) {
            var res = parseInt($("#option_resize").find(":selected").val());
            $.post("resize.php",
                    {res: res,
                    image: img.src},
                    function(data){
                      //changes the main image once successful
                      img.src = data;
                      $('#img_name').attr('src', img.src);
                    });
           } else {
            alert("Please choose a picture! ");
          }
        });
    $("#button_grayscale").click(
       function(){
         if(checkFile()) {
          //  var image = $("#img_name").attr('src');
           $.post("grayscale.php",
                 {image: img.src},
                 function(data){
                   //changes the main image once successful
                   img.src = data;
                   $('#img_name').attr('src', img.src);
                 });
         } else {
           alert("Please choose a picture! ");
         }
    });
    $("#button_3d").click(
      function () {
        if(checkFile()) {

                  // Set the scene size.
              		const WIDTH = window.innerWidth * 2/5;
              		const HEIGHT = window.innerHeight * 1/2;

              		// Set some camera attributes.
              		const VIEW_ANGLE = 45;
              		const ASPECT = WIDTH / HEIGHT;
              		const NEAR = 0.1;
              		const FAR = 20000;

              		// Get the DOM element to attach to
              		const container =
              		document.querySelector('#container');

              		// Create a WebGL renderer, camera
              		// and a scene
              		const renderer = new THREE.WebGLRenderer({antialias: true});
              		const camera =
              			new THREE.PerspectiveCamera(
              				VIEW_ANGLE,
              				ASPECT,
              				NEAR,
              				FAR
              			);

              		const scene = new THREE.Scene();

              		// Add the camera to the scene.
              		scene.add(camera);
                  camera.position.set(0, 150, 2000);
                  // camera.lookAt(scene.position);

              		// Start the renderer.
              		renderer.setSize(WIDTH, HEIGHT);

              		// Check if there is already an element
              		// Attach the renderer-supplied
              		// DOM element.
              		if (container.innerHTML != '') {
              			container.replaceChild(renderer.domElement, container.childNodes[0]);
              		} else {
              			container.appendChild(renderer.domElement);
              		}

              		// create a point light
              		const pointLight =
              			new THREE.PointLight(0xFFFFFF);

              		// set its position
              		pointLight.position.x = 10;
              		pointLight.position.y = 150;
              		pointLight.position.z = 400;

              		// add to the scene
              		scene.add(pointLight);

                  //create box texture
                  var boxTexture = new THREE.TextureLoader().load(img.src);

                  // create the box's material
              		var boxMaterial =
              			new THREE.MeshBasicMaterial({
              				map: boxTexture

              			});

              		// Create a new mesh with
              		// box geometry
                  var boxGeometry = new THREE.BoxGeometry(img.width, img.width, img.width);
              		var box = new THREE.Mesh(boxGeometry, boxMaterial);

              		// add the box to the scene.
              		scene.add(box);

              		// Draw!
              		renderer.render(scene, camera);

              		var controls = new THREE.OrbitControls( camera, renderer.domElement);
              		controls.addEventListener('change', function() {
              			renderer.render(scene, camera);
              		});

                  var track_controls = new THREE.TrackballControls(camera);
                  track_controls.rotateSpeed = 1.0;
                  track_controls.zoomSpeed = 1.2;
                  track_controls.panSpeed = 0.3;

                  track_controls.noRotate = false;
                  track_controls.noZoom = false;
                  track_controls.noPan = false;

                  track_controls.staticMoving = false;
                  track_controls.dynamicDampingfactor = 0.2;

                  track_controls.minDistance = 800;
                  track_controls.maxDistance = 3000;

                  track_controls.keys = [65,83,68];
                  track_controls.enabled = true;

              		function update () {
                		// Draw!
                		renderer.render(scene, camera);

                		// Schedule the next frame.
                		requestAnimationFrame(update);
                    track_controls.update();
              		}

              		// Schedule the first frame.
              		requestAnimationFrame(update);
                  if (clicked == false) {
                    // Show canvas container and hide preview
                      document.getElementById('img_name').style.display = 'none';
                      // document.getElementById('container').style.display = 'block';
                      container.appendChild(renderer.domElement);

                      //Changing the text on a button to cancel the 3D view
                      document.getElementById('button_3d').value = 'Cancel';

                      // Disabling the rest of the buttons for viewing
                      document.getElementById('crop_btn').disabled = true;
                      document.getElementById('img_input').disabled = true;
                      document.getElementById('button_resize').disabled = true;
                      document.getElementById('button_grayscale').disabled = true;
                      clicked = true; //reseting the clicked value

                    } else if (clicked == true) {
                      // hide canvas container and show preview
                      document.getElementById('img_name').style.display = 'block';
                      // document.getElementById('container').style.display = 'none';
                      container.removeChild(renderer.domElement);

                      document.getElementById('button_3d').value = 'Preview in 3D';

                      //Enabling the buttons after 3D view is done
                      document.getElementById('crop_btn').disabled = false;
                      document.getElementById('img_input').disabled = false;
                      document.getElementById('button_resize').disabled = false;
                      document.getElementById('button_grayscale').disabled = false;
                      clicked = false;

                    }
          } else {
                  alert("Please choose a picture! ");
        }

    });
});

function previewImage(event) {
  // window.location.reload();
  var reader = new FileReader();
  reader.onload = function() {
      //only JPEG files allowed
      if (validImage(reader.result) === true) {
        img.src = reader.result;

        var output = document.getElementById('img_name');
        output.src = img.src;

        var img_width = output.width;
        var img_height = output.height;
        // For proper display of image
        if (img_height/img_width < (2/3)) {
            output.width = 600;
        } else {
          output.height = 400;
        }
      }
  };

  reader.readAsDataURL(event.target.files[0]);
};

function checkFile(){
  // returns true if something is uploaded
  return $("#img_input").val()!= '';
}
//CHecks if the file is JPEG
function validImage(file){
  //Checks what position is the text "image/jpeg" is on
  if (file.indexOf("image/jpeg") < 0){
    alert("Only JPG files allowed !!!");
    return false;
  } else {
    return true;
  }
}

function updateCoords(c) {
  // updateing the secret form valued with details from crop tool
  $('#x').val(c.x);
  $('#y').val(c.y);
  $('#w').val(c.w);
  $('#h').val(c.h);
}
