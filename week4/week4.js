// Assignment 1
// 理解問題：經過 X 秒後，將 n1 跟 n2 的加總呈現出來
// 第一步：做出一個 callback function 可以運用的通則(求出 callback 時會發生什麼事情)
// 第二步：套到兩個 callback function
// callback 就是要印出 n1、n2 加總的 result（要告訴電腦那些數字代表什麼）

function delayedResult(n1, n2, delayTime, callback) {
    let result = n1 + n2;
    window.setTimeout(callback, delayTime, result);
}

delayedResult(4, 5, 3000, function (result) { console.log(result); });
// 9 (4+5) will be shown in the console after 3 seconds 

delayedResult(-5, 10, 2000, function (result) { window.alert(result); });
// 5 (-5+10) will be shown in an alert dialog after 2 seconds



// Assignment 2
function ajax(src, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.response;
            callback(response);
            // 這邊是寫要 ajax 去執行什麼事情（主要是在不會 reload 頁面的情況下拿資料 ）
        }
    }
    xhr.open("GET", src);
    xhr.send();
    console.log("request sent to the server");
}

function render(data) {
    // 第二個作業要能夠把我提供的三個產品資料都顯示出來
    // 盡量使用 createElement 和 appendChild 這兩個方式來完成畫面的處理。

    for (i = 0; i < data.length; i += 1) {
        let list = document.getElementById("jasonInfo");
        let info = document.createElement("li");
        info.textContent = "name: " + JSON.parse(data)[i].name + "   " + "price: " + JSON.parse(data)[i].price + "   " + "description: " + JSON.parse(data)[i].description;
        list.appendChild(info);
    }

    // let list = document.getElementById("jasonInfo");
    // let info = document.createElement("li");
    // info.textContent = data;
    // list.appendChild(info);
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json",
    function (response) { render(response); });
    // you should get product information in JSON format and render data in the page

    // 先看最後被 call 的 function（ajax），電腦會先執行，上面的兩個 function 只是表述
/* ajax 是執行上面 ajax function，裡面有兩個參數：URL 與一個 function。回到最上面看 ajax function，可以知道當狀態是 OK 的時候，會執行某個動作 render function 裡的動作*/