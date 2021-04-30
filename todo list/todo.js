function getandupdate() {
      console.log("updating list...");
      tit = document.getElementById('tittle').value;
      desc = document.getElementById('desc').value;
      if (localStorage.getItem('itemsJson') == null) {
        console.log("adding nullies values");
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
      }
      else {
        console.log("adding existing log");
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
      }
      update();
    }


    function update() {
      if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
      }
      else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
      }
      //display
      let tablebody = document.getElementById("tablebody");
      let str = "";
      itemJsonArray.forEach((element, index) => {
        str += `
  <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td>
            <button type="button" onclick="del(${index})" class="btn btn-danger btn-sm">Delete</button>
          </td>
      </tr>`;
       
      });
      tablebody.innerHTML = str;
    }
    add = document.getElementById("add");
    add.addEventListener("click", getandupdate);
    update();

    
    function del(item) {
      console.log("delete", item);
      itemJsonArrayStr = localStorage.getItem('itemsJson');
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      //delete the item from splice
      itemJsonArray.splice(item, 1);
      localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
      update();
    }
    function emp() {
      console.log("clear action invoked")
      var a = prompt("Type 'YES' to clear the list");
      if (a == "yes" || a == "YES") {
        localStorage.clear();
        update();
      }
    }