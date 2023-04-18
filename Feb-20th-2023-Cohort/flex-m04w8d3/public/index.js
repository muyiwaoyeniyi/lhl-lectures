$(document).ready(() => {
  let pageNumber = 1;

  // Option 1: Using String Literal
  // const getImageTemplate = (picture) => {
  //   return `
  //     <div class='imageItem'>
  //       <img class='image' src=${picture.download_url} />
  //       <div>
  //         ${picture.author}
  //       </div>
  //     </div>
  //   `;
  // };

  // const insertImages = (pictures) => {
  //   console.log("pictures", pictures);
  //   const imageContainer = $("#imagesContainer");

  //   pictures.forEach((picture) => {
  //     imageContainer.append(getImageTemplate(picture));
  //   });
  // };

  // Option 2: Using jquery objects/methods
  // const getImageTemplate = (picture) => {
  //   const $div = $("<div>");
  //   $div.attr("class", "imageItem"); // $div.addClass("imageItem")

  //   const $image = $("<img>");
  //   $image.attr("src", picture.download_url);
  //   $image.attr("class", "image");

  //   $div.append($image);

  //   const $authorDiv = $("<div>");
  //   $authorDiv.text(picture.author); // .html
  //   $div.append($authorDiv);

  //   return $div;
  // };

  // const insertImages = (pictures) => {
  //   console.log("pictures", pictures);
  //   const imageContainer = $("#imagesContainer");

  //   pictures.forEach((picture) => {
  //     imageContainer.append(getImageTemplate(picture));
  //   });
  // };

  // Option 3: Plain javascript
  const getImageTemplate = (picture) => {
    const div = document.createElement("div");
    div.classList.add("imageItem");

    const img = document.createElement("img");
    img.src = picture.download_url;
    img.classList.add("image");

    div.appendChild(img);

    const authorDiv = document.createElement("div");
    authorDiv.textContent = picture.author;

    div.appendChild(authorDiv);

    return div;
  };

  const insertImages = (pictures) => {
    console.log("pictures", pictures);
    const imageContainer = document.getElementById("imagesContainer");

    pictures.forEach((picture) => {
      imageContainer.append(getImageTemplate(picture));
    });
  };

  // Using XMLHttpRequest object
  // const showImages = () => {
  //   let xhr = new XMLHttpRequest();

  //   xhr.open("GET", "https://picsum.photos/v2/list", true);

  //   xhr.onload = function () {
  //     if (xhr.status === 200) {
  //       const pictures = JSON.parse(this.response);
  //       insertImages(pictures);
  //     } else if (xhr.status === 500) {
  //        alert('Something went wrong')
  //      }
  //   };

  //   xhr.send();
  // };

  // Using Jquery ajax
  const showImages = (page) => {
    const config = {
      url: `https://picsum.photos/v2/list?limit=3&page=${page}`,
      // url: `https://google.com`, // cors error
      // method: "GET",
      // dataType: "json",
      // 2xx status code
      success: (data) => {
        console.log("this request succeeded and here's the data", data);
        insertImages(data);
      },
      error: (error) => {
        console.log("this request failed and this was the error", error);
      },
    };
    $.ajax(config);
  };

  showImages(pageNumber);

  $("#loadMore").click(() => {
    pageNumber = pageNumber + 1;
    showImages(pageNumber);
  });
});
