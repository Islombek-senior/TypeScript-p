"use strict";
var category = document.getElementById("category");
var categoryRender = function () {
    axios
        .get("https://7ec7cca7ceb7c3dc.mokky.dev/prizes")
        .then(function (res) {
        var result = res.data;
        if (!category) {
            return;
        }
        result.map(function (item) {
            category === null || category === void 0 ? void 0 : category.innerHTML += "\n        <div class=\"col-12 col-lg-5 col-md-6\">\n        <div>\n          <img\n            src=\"".concat(item.img, "\"\n            alt=\"\"\n            width=\"90\"\n          />\n        </div>\n        <div>\n          <h5>").concat(item.name, "</h5>\n        </div>\n      </div>\n      ");
        });
    })
        .catch(function () { });
};
categoryRender();
var rendertw1 = document.querySelector("#rendertw1");
var rendertwo = function () {
    axios
        .get("https://859844bec72a6a41.mokky.dev/product")
        .then(function (res) {
        var resulted = res.data;
        if (!rendertw1) {
            return;
        }
        resulted.map(function (item) {
            rendertw1 === null || rendertw1 === void 0 ? void 0 : rendertw1.innerHTML += "\n            <div class=\"col-12 col-lg-10 mt-4\">\n          <div class=\"d-flex gap-4 align-content-center\">\n\n              <img\n                src=\"".concat(item.image, "\"\n                width=\"90\"\n                alt=\"\"\n              />\n\n            <div>\n              <h4>").concat(item.name, "</h4>\n              <h5>").concat(item.price, "</h5>\n            </div>\n          </div>\n        </div>\n        ");
        });
    })
        .catch(function () { });
};
rendertwo();
// @ts-ignore
var myModal = new bootstrap.Modal("#exampleModal", {
    keyboard: false,
});
var logBody = document.querySelector("#logBody");
var homeWindows = document.querySelector("#homeWindows");
var loGin = document.querySelector("#loGin");
var adminWindows = document.querySelector("#adminWindows");
loGin === null || loGin === void 0 ? void 0 : loGin.addEventListener("click", function () {
    if (!logBody) {
        return;
    }
    logBody.innerHTML = "\n            <label for=\"text\" class=\"mt-3\">User Name</label>\n            <input type=\"text\" class=\"w-100 p-2 rounded-2 border-1\" id=\"input_1\">\n            <label for=\"password\" class=\"mt-3\">Password</label>\n            <input type=\"password\" class=\"w-100 p-2 rounded-2 border-1\" id=\"input_2\">\n  ";
    myModal.show();
    var entarence = document.querySelector("#entarence");
    entarence === null || entarence === void 0 ? void 0 : entarence.addEventListener("click", function () {
        var input_1 = document.querySelector("#input_1");
        var input_2 = document.querySelector("#input_2");
        if (input_1.value === "admin" && input_2.value === "123456") {
            if (!homeWindows) {
                return;
            }
            homeWindows.style.display = "none";
        }
        else {
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
