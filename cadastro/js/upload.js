function handleFileSelect(evt) {
  var files = evt.target.files;

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = 
        [
          '<img style="height: 150px; border: 1px solid #f5f5f5;" src="', 
          e.target.result,
          '" title="', escape(theFile.name), 
          '"/>'
        ].join('');
        
        document.getElementById('list').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);



// Teste id2

function handleFileSelectt(evt) {
  var files = evt.target.files;

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = 
        [
          '<img style="height: 150px; border: 1px solid #f5f5f5" src="', 
          e.target.result,
          '" title="', escape(theFile.name), 
          '"/>'
        ].join('');
        
        document.getElementById('list1').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('files1').addEventListener('change', handleFileSelectt, false);

// teste id 3
function handleFileSelect2(evt) {
  var files = evt.target.files;

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = 
        [
          '<img style="height: 150px; border: 1px solid #f5f5f5;" src="', 
          e.target.result,
          '" title="', escape(theFile.name), 
          '"/>'
        ].join('');
        
        document.getElementById('list2').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('files2').addEventListener('change', handleFileSelect2, false);