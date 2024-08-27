$(document).ready(function () {
  // variable to store key values as a string
  let stringStatement = "";

  // adding keyboard event listener
  $(document).on("keydown", function (e) {
    // to print pressed key value in console //
    console.log(e.key);

    // spacebar keyCode is 32 if pressed then if is executed //
    if (e.keyCode == 32) {
      $(".spacebar").addClass("animation");
      setTimeout(() => {
        $(".spacebar").removeClass("animation");
      }, 200);
      // "/xa0" will add a space in string
      stringStatement += "\xa0";
      $(".stringStatement").text(stringStatement);
    } else {
      $("." + e.key).addClass("animation");
      setTimeout(() => {
        $("." + e.key).removeClass("animation");
      }, 200);

      // adding key values into string variable and performing unique key operation
      if (
        e.key == "Backspace" ||
        e.key == "CapsLock" ||
        e.key == "Control" ||
        e.key == "Delete" ||
        e.key == "Escape" ||
        e.key == "Tab" ||
        e.key == "Alt" ||
        e.key == "AltGraph" ||
        e.key == "ArrowLeft" ||
        e.key == "ArrowUp" ||
        e.key == "ArrowDown" ||
        e.key == "ArrowRight" ||
        e.key == "Meta" ||
        e.key == "Shift" ||
        e.key == "Enter" ||
        e.key == "AudioVolumeMute" ||
        e.key == "AudioVolumeDown" ||
        e.key == "AudioVolumeUp" ||
        e.kwy == "LaunchApplication2"
      ) {
        uniqueKeys(e.key);
      } else {
        stringStatement += e.key;
        $(".stringStatement").text(stringStatement);
      }
    }
  });

  $(".keyboard div").on("click", function () {
    $(this).addClass("animation");
    setTimeout(() => {
      $(this).removeClass("animation");
    }, 200);

    let tempStatement = $(this).attr("id");
    if (
      tempStatement == "F1" ||
      tempStatement == "F2" ||
      tempStatement == "F3" ||
      tempStatement == "F4" ||
      tempStatement == "F5" ||
      tempStatement == "F6" ||
      tempStatement == "F7" ||
      tempStatement == "F8" ||
      tempStatement == "F9" ||
      tempStatement == "F10" ||
      tempStatement == "F11" ||
      tempStatement == "F12" ||
      tempStatement == "Delete" ||
      tempStatement == "Backspace" ||
      tempStatement == "Tab" ||
      tempStatement == "Meta" ||
      tempStatement == "Alt" ||
      tempStatement == "Spacebar" ||
      tempStatement == "Enter" ||
      tempStatement == "Shift" ||
      tempStatement == "CapsLock" ||
      tempStatement == "Ctrl"
    ) {
      console.log(tempStatement);
      uniqueKeys(tempStatement);
    } else {
      stringStatement += $(this).attr("id");
      $(".stringStatement").text(stringStatement);
    }
  });

  // function for uniquekeys
  function uniqueKeys(keyValue) {
    switch (keyValue) {
      case "Backspace":
        stringStatement = stringStatement.slice(0, stringStatement.length - 1);
        $(".stringStatement").text(stringStatement);
        break;
      case "Tab":
        stringStatement += "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        $(".stringStatement").text(stringStatement);
        break;
      case "Delete":
        stringStatement = "";
        $(".stringStatement").text(stringStatement);
      case "Enter":
        $(".stringStatement").html("<br>" + stringStatement);
        break;
      case"Spacebar":
        stringStatement += "\xa0";
        break;
      case "CapsLock":
        stringStatement.toLowerCase(); 
        break;  
      default:
        break;
    }
  }
});
