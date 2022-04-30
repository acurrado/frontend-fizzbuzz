// Extend FileReader
if (!FileReader.prototype.readAsBinaryString) {
    FileReader.prototype.readAsBinaryString = function (fileData) {
      let binary = '';
      const pt = this;
      const reader = new FileReader();
      reader.onload = function (e) {
        const bytes = new Uint8Array(reader.result);
        const length = bytes.byteLength;
        for (let i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        // pt.result  - readonly so assign binary
        pt.content = binary;
        // $(pt).trigger('onload');
        pt.onload();
      };
      reader.readAsArrayBuffer(fileData);
    };
  };
  
  // Resize iFrame, test and prod.
  function resizeApp() {
    if (window != null) {
      if (window.parent != null) {
        if (typeof window.parent.resizeVentana != "undefined") {
          window.parent.resizeVentana();
        }
      }
    }
  };
  
  // Scroll to item, test and prod.
  function scrollToItem(item) {
    if (window != null) {
      if (window.parent != null) {
        if (typeof window.parent.scrollToCoordenadaY != "undefined") {
          window.parent.scrollToCoordenadaY(item.nativeElement.getBoundingClientRect().top);
        }
      }
    }
  }
  
  // Scroll to position Y, test and prod.
  function scrollToPositionY(positionY) {
    if (window != null) {
      if (window.parent != null) {
        if (typeof window.parent.scrollToCoordenadaY != "undefined") {
          window.parent.scrollToCoordenadaY(positionY);
        }
      }
    }
  }
  