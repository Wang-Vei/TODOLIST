window.onload=function(){
    arr1=["a","b","c"];
    arr2=["x","y","z"];
    // let arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    let con1=document.querySelector("#con1");
    let con2=document.querySelector("#con2");
    let num1=document.querySelector("#num1");
    let num2=document.querySelector("#num2");
    let todo=document.querySelector("#todo");

    function update(){
        //清除
        con1.innerText="";
        con2.innerText="";
        //数字增加
        num1.innerText=arr1.length;
        num2.innerText=arr2.length;
        // localStorage.arr1=arr1.join(",");
        //遍历arr1
        arr1.forEach(function (item,index) {
            //创建info
            let info=document.createElement("div");
            info.className="info";
            //创建checkbox
            let checkbox=document.createElement("input");
            checkbox.setAttribute("type","checkbox");
            checkbox.className="checkbox";
            //点击，在arr1中移除，在arr2中增加
            checkbox.onclick=function(){
                arr1.splice(index,1);
                arr2.unshift(item);
                
                update()
            }
            info.appendChild(checkbox);
            //创建text
            let text=document.createElement("div");
            text.className="text";
            text.innerText=item;


            // 添加双击事件
            text.ondblclick=function(e) {
                let input1 = document.createElement("input");
                let con5 = text.innerText;
                text.innerText = "";
                input1.value = con5;
                text.appendChild(input1);
                input1.focus();
                
                if (e.keyCode == 13 && this.value != "") {
                    arr1[index] = this.value;
                    update();
                }

                input1.onblur=function(){
                    if(this.value!=""){
                        arr1[index]=this.value;
                        update()
                    }
                }
            }
            info.appendChild(text);

            let del=document.createElement("div");
            del.className="del";
            //点击，在arr1中删除
            del.onclick=function(){
                arr1.splice(index,1);
                update();
            }
            info.appendChild(del);

            con1.appendChild(info);
        })
        arr2.forEach(function (item,index) {
            //创建info
            let info=document.createElement("div");
            info.className="info";
            //创建checkbox
            let checkbox=document.createElement("input");
            checkbox.setAttribute("type","checkbox");
            checkbox.setAttribute("checked","checked");
            checkbox.className="checkbox";
            //点击，在arr2中移除，在arr1中增加
            checkbox.onclick=function(){
                arr2.splice(index,1);
                arr1.unshift(item);
                update()
            }
            info.appendChild(checkbox);

            let text=document.createElement("div");
            text.innerText=item;
            text.className="text";

            // 添加双击事件
            text.ondblclick=function(e) {
                let input1 = document.createElement("input");
                let con5 = text.innerText;
                text.innerText = "";
                input1.value = con5;

                if (e.keyCode == 13 && this.value != "") {
                    arr2[index] = this.value;
                    update();
                }

                input1.onblur=function(){
                    if(this.value!=""){
                        arr2[index]=this.value;
                        update()
                    }
                }
                text.appendChild(input1);
            }
            info.appendChild(text);

            let del=document.createElement("div");
            del.className="del";
            //点击，在arr2中删除
            del.onclick=function(){
                arr2.splice(index,1);
                update();
            }
            info.appendChild(del);

            con2.appendChild(info);

        })
    }
    update();

    todo.onkeydown=function (e) {
        if(e.keyCode==13 && this.value!=""){
            arr1.unshift(this.value);
            this.value="";
            update();
        }
    }




}