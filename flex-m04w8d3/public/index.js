// $(document).ready(() => {

// })

$(() => {
  let page = 1;
  const limit = 5;

  // With native XHR
  // const getImages = () => {
  //   let xhr = new XMLHttpRequest();

  //   xhr.onload = function () {
  //     if (xhr.status === 200) {
  //       const data = JSON.parse(this.response);
  //       console.log(data);
  //       insertImages(data);
  //     }
  //   };

  //   xhr.open("GET", "https://picsum.photos/v2/list", true);
  //   xhr.send();
  // };

  const getImages = (pageToFetch) => {
    // ajax with promise
    // var jqxhr = $.ajax( "example.php" )
    // .done(function() {
    //   alert( "success" );
    // })
    // .fail(function() {
    //   alert( "error" );
    // })
    // .always(function() {
    //   alert( "complete" );
    // });
    // $("#imagesContainer").load('url that returns html');

    // ajax with callbacks
    const config = {
      url: `https://picsum.photos/v2/list?limit=${limit}&page=${pageToFetch}`,
      // method: "GET",
      // dataType: "json",
      success: (data) => {
        insertImages(data);
      },

      error: (error) => {
        console.log("err", error);
      },
    };
    $.ajax(config);
  };

  getImages(page);

  // OPTION 1
  // const insertImages = (images) => {
  //   const $imageContainer = $("#imagesContainer");
  //   images.forEach((image) => {
  //     $imageContainer.append(getImageTemplate(image));
  //   });
  // };

  // const getImageTemplate = (image) => {
  //   return `
  //     <div class="imageItem">
  //       <img class="image" src=${image.download_url} />
  //       <div>
  //         Author: ${image.author}
  //       </div>
  //     </div>
  //   `;
  // };

  // OPTION 2
  const insertImages = (images) => {
    const $imageContainer = $("#imagesContainer");
    for (const image of images) {
      const $image = getImageTemplate(image);
      $imageContainer.append($image);
    }
  };

  const getImageTemplate = (image) => {
    const $img = $("<img>");
    $img.addClass("image").attr("src", image.download_url);

    const $author = $("<div>").text(`Author: ${image.author}`);

    const $item = $("<div>").addClass("imageItem");
    $item.append($img, $author);

    return $item;
  };

  // A THIRD OPTION with plain javascript ... document.createElement

  $("#loadMore").on("click", () => {
    page = page + 1;
    getImages(page);
  });
});
