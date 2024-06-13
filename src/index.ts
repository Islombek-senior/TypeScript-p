const category = document.getElementById("category");

type category = {
  id: number;
  name: string;
  img: string;
};

const categoryRender = () => {
  axios
    .get("https://7ec7cca7ceb7c3dc.mokky.dev/prizes")
    .then((res: { data: category }) => {
      const result = res.data;
      if (!category) {
        return;
      }
      result.map((item: { name: string; img: string }) => {
        category?.innerHTML += `
        <div class="col-12 col-lg-5 col-md-6">
        <div>
          <img
            src="${item.img}"
            alt=""
            width="90"
          />
        </div>
        <div>
          <h5>${item.name}</h5>
        </div>
      </div>
      `;
      });
    })
    .catch(() => {});
};

categoryRender();

type Render = {
  id: number;
  status: string;
  name: string;
  price: number;
  image: string;
};

const rendertw1 = document.querySelector("#rendertw1");

const rendertwo = () => {
  axios
    .get("https://859844bec72a6a41.mokky.dev/product")
    .then((res: { data: Render }) => {
      const resulted = res.data;
      if (!rendertw1) {
        return;
      }

      resulted.map((item: { name: string; price: number; image: string }) => {
        rendertw1?.innerHTML += `
            <div class="col-12 col-lg-10 mt-4">
          <div class="d-flex gap-4 align-content-center">

              <img
                src="${item.image}"
                width="90"
                alt=""
              />

            <div>
              <h4>${item.name}</h4>
              <h5>${item.price}</h5>
            </div>
          </div>
        </div>
        `;
      });
    })
    .catch(() => {});
};

rendertwo();

// @ts-ignore
const myModal = new bootstrap.Modal("#exampleModal", {
  keyboard: false,
});

const logBody = document.querySelector("#logBody");
const homeWindows = document.querySelector("#homeWindows");
const loGin = document.querySelector("#loGin");
const adminWindows = document.querySelector("#adminWindows");

loGin?.addEventListener("click", () => {
  if (!logBody) {
    return;
  }
  logBody.innerHTML = `
            <label for="text" class="mt-3">User Name</label>
            <input type="text" class="w-100 p-2 rounded-2 border-1" id="input_1">
            <label for="password" class="mt-3">Password</label>
            <input type="password" class="w-100 p-2 rounded-2 border-1" id="input_2">
  `;
  myModal.show();

  const entarence = document.querySelector("#entarence");

  entarence?.addEventListener("click", () => {
    const input_1 = document.querySelector("#input_1") as HTMLInputElement;
    const input_2 = document.querySelector("#input_2") as HTMLInputElement;

    if (input_1.value === "admin" && input_2.value === "123456") {
      if (!homeWindows) {
        return;
      }
      homeWindows.style.display = "none";
    } else {
      alert("Wrong User Name or Password");
    }

    if (!adminWindows) {
      return;
    }
    adminWindows.classList.remove("d-none");
    adminWindows.style.display = "d-block";

    myModal.hide();
  });
});
