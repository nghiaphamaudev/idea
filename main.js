                              var i = 0;
                              var time;
                              var ListImgs = [];
                              ListImgs[0] ="images/img1.jpg";
                              ListImgs[1] ="images/img2.jpg";
                              ListImgs[2] ="images/img3.jpg";
                              ListImgs[3] ="images/img4.jpg";
                              ListImgs[4] ="images/img5.jpg";
                              ListImgs[5] ="images/img6.jpg";

                              function Next(){
                                        i++;
                                        if(i>ListImgs.length-1){
                                                  i=0;
                                        }
                                        document.getElementById("change-img").src=ListImgs[i];
                                        console.log(i);
                              }
                              function Previous(){
                                        i--;
                                        if(i<0){
                                                  i=5;
                                        }
                                        document.getElementById("change-img").src=ListImgs[i];
                                        console.log(i);

                              }
                              function Stop(){
                                        clearTimeout(time);
                              }
                              function Auto(){
                                        i++;
                                        if(i>ListImgs.length-1){
                                                  i=0;
                                        }
                                        document.getElementById("change-img").src=ListImgs[i];
                                        console.log(i);
                                        time = setTimeout(Auto,1500);
                              }
                              function ReturnFirst(){
                                        i=0;
                                        document.getElementById("change-img").src=ListImgs[0];
                                        console.log(i);

                              }
                              function ReturnLast(){
                                        i=5;
                                        document.getElementById("change-img").src = ListImgs[5];
                                        console.log(i);
                              }
                              window.onload=function(){
                                        time = setTimeout(Auto(),1000);
                              }


                              ///check validate form
                              var input = document.getElementsByClassName('input');
                              var error = document.getElementsByClassName('error');
                              function CheckEmptyError(){
                                        for(let i =0; i<input.length ; i++){
                                                  if(input[i].value ==""){
                                                            error[i].innerHTML = 'Nhập dữ liệu đầy đủ'
                                                  }else{
                                                            error[i].innerHTML ='';
                                                  }
                                        }

                                        //check radioo
                                        const radios = document.getElementsByName('gender');
                                        var check_gender = document.getElementById('check-gender');
                                        let isChecked = false;
                                        
                                        for (let i = 0; i < radios.length; i++) {
                                                  if (radios[i].checked) {
                                                            isChecked = true;
                                                            check_gender.innerHTML='';
                                                            break;
                                                  }
                                        }
                                        
                                        if (!isChecked) {// bỏ trống thì có thông báo
                                                  check_gender.innerHTML='Không được bỏ trống';
                                        }

                                        //check box
                                        var check_box = document.getElementsByName("interest");
                                        var box_check = document.getElementById("box-check");
                                        let isChecked_box = false;

                                        for(let i = 0; i<check_box.length;i++){
                                                  if(check_box[i].checked){
                                                            isChecked_box = true;
                                                            box_check.innerHTML='';
                                                            break;
                                                  }
                                        }
                                        if(!isChecked_box){
                                                       box_check.innerHTML = 'Không được bỏ trống'     
                                        }
                              }
                              //check ID register
                              function CheckIdUser(){
                                        if(input[0].value.length<7){
                                                  error[0].innerHTML = 'Nhập đủ 7 kí tự';
                                        }else{
                                                  error[0].innerHTML = '';
                                        }
                              }
                              function CheckFullName(){
                                        if(input[1].value.length<10){
                                                  error[1].innerHTML = 'Nhập đủ 10 kí tự';
                                        }else{
                                                  error[1].innerHTML = '';
                                        }
                              }
                              function CheckEmail(){
                                        let regrexEmai = /[a-zA-Z0-9]+@+[a-zA-z]+[a-zA-Z]{2,3}$/;
                                        if(!regrexEmai.test(input[2].value)){
                                                  error[2].innerHTML = 'Nhập đúng định dạng';

                                        }else{
                                                  error[2].innerHTML = '';
                                        }
                              }
                              function CheckBox(){
                                        const radios = document.getElementsByName('gender');
                                        var check_gender = document.getElementById('check-gender');
                                        let isChecked = false;
                                        
                                        for (let i = 0; i < radios.length; i++) {
                                          if (radios[i].checked) {
                                            isChecked = true;
                                            break;
                                          }
                                        }
                                        
                                        if (!isChecked) {
                                                  check_gender.innerHTML='Không được bỏ trống'
                                        }
                                         
                              }
                              //scroll
                              const menuLinks = document.querySelectorAll('nav ul li a');

                              menuLinks.forEach(link => {
                                        link.addEventListener('click', e => {
                                                  e.preventDefault(); // ngăn chặn hành động mặc định của liên kết
                                                  
                                                  const targetId = link.getAttribute('href'); // lấy giá trị của href
                                                  const targetSection = document.querySelector(targetId); // tìm phần tử tương ứng
                                                  
                                                  targetSection.scrollIntoView({ behavior: 'smooth' }); // cuộn trang đến phần tử tương ứng
                                        });
                              });

                               //Tính tiền
                               function calculateTotal() {
                                          let total = 0;
                                          const checkboxes = document.querySelectorAll('.check-list');
                                          
                                          checkboxes.forEach((checkbox, index) => {
                                                  const isChecked = checkbox.checked;
                                                  const cost = document.querySelectorAll('.cost')[index].value;
                                                  const quantity = document.querySelectorAll('.quantity')[index].value;
                                                  const totalPrice = cost * quantity;
                                                  
                                                  if (isChecked) {
                                                        total += totalPrice;
                                                        document.querySelectorAll('.total')[index].textContent = totalPrice.toLocaleString() + " VNĐ";
                                                  }else{
                                                        document.querySelectorAll('.total')[index].textContent = "";
                                                  }
                                          });
                                        
                                                  document.querySelector('#all').textContent = total.toLocaleString() + " VNĐ";
                                  }
                  
                    

                              
