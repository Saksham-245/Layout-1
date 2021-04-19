const rowContainer = document.querySelector(".row");

const getData = () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((t, i = 0) => {
        const html = `
                <div class="col-6 col-md-4">
                    <img src="${t.image}" alt="" srcset="">
                    <h5><a href="#" style="text-decoration: none;">${t.name} ${
          i + 1
        }</a>
                        <button style="float: right;" onClick="deletePost(${
                          t.id
                        })" class="btn btn-primary-outline"><span id="click" class="material-icons" style="float: right;color: red;">
                        delete
                        </span></button></h5>
                    <p>${t.description}
                    </p>
                </div>
        `;
        rowContainer.insertAdjacentHTML("afterbegin", html);
      })
    );
};

// const renderItems = (data) => {
//   const html = `
//                 <div class="col-6 col-md-4">
//                     <img src="${data.image}" alt="" srcset="">
//                     <h5><a href="#" style="text-decoration: none;">${data.name}</a>
//                         <button style="float: right;" class="btn btn-primary-outline"><span id="click" class="material-icons" style="float: right;color: red;">
//                         delete
//                         </span></button></h5>
//                     <p>${data.description}
//                     </p>
//                 </div>
//         `;
//   rowContainer.insertAdjacentHTML("afterbegin", html);
// };

const deletePost = (id) => {
  console.log(id);
};

getData();
