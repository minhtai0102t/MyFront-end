
//Đối tượng `Validator`
function Validator(options) {
    //Lấy đúng element cha của thuộc tính input
    function getParent(element,selector) {
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules  = {};

    //Hàm thực hiện validate
    function validate(inputElement,rule){
        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        var rules = selectorRules[rule.selector];


        //Lặp qua từng rule để kiếm tra
        //Nếu có lỗi thì break
        for(var i = 0;i < rules.length;i++){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
                    break;
            }

           if(errorMessage) break;
        }
        


        //value: inputElement.value
        //test function: rule.test
        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement,options.formGroupSelector).classList.add('invalid');
        }

        else{
            errorElement.innerText = '';
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid');

        }
        return !errorMessage;//Nếu rule có lỗi trả về false(!String = false)
    }

    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement){
       
        //Xử lý Submit form button
        formElement.onsubmit = function (e){
            e.preventDefault();

            var isFormValid = true;


            options.rules.forEach(function (rule) {


                //Lưu lại các rule cho mỗi input
                
                if(Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test);
                }   
                else{
                    selectorRules[rule.selector] = [rule.test];
                }        
                var inputElements = formElement.querySelectorAll(rule.selector);    
                
                Array.from(inputElements).forEach(function(inputElement){
                    //Xử lý trường hợp blur ra khỏi input
                    inputElement.onblur = function(){  
                        validate(inputElement,rule);
                    }

                    //Xử lý khi đang nhập vào input
                    inputElement.oninput = function () {
                        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
                    }
                })


                var inputElement = formElement.querySelector(rule.selector);
                //Kiểm tra từng rule xem đã được nhập hay chưa
                var isValid = validate(inputElement, rule);
                if(!isValid){//Nếu rule chưa đc nhập cập nhật flag
                    isFormValid = false;
                }
            });
            
            //Khi tất cả rule đều được nhập đúng
            if(isFormValid){ 
                // Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function'){

                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values,input){
                        switch(input.type){
                            case 'radio':                         
                                values[input.name] = formElement.querySelector('input[name = "' + input.name +'"]:checked').value;                         
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')){
                                    values[input.name] = '';
                                    return values;
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;

                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value

                        }

                        return values;
                        
                    },{});

                    options.onSubmit(formValues);
                }
                //Trường hợp submit với html default
                else {

                    formElement.submit();

                }
            }
        }

        // Xử lý trường hợp 1 input có nhiều rule
        //Lặp qua tất cả các rule , Xử lý sự kiện blur,input,...
        options.rules.forEach(function (rule) {
            //Lưu lại các rule cho mỗi input
            
            // if(Array.isArray(selectorRules[rule.selector])) {
            //     selectorRules[rule.selector].push(rule.test);
            // }   
            // else{
            //     selectorRules[rule.selector] = [rule.test];
            // }        
            // var inputElements = formElement.querySelectorAll(rule.selector);    
            
            // Array.from(inputElements).forEach(function(inputElement){
            //     //Xử lý trường hợp blur ra khỏi input
            //     inputElement.onblur = function(){  
            //         validate(inputElement,rule);
            //     }

            //     //Xử lý khi đang nhập vào input
            //     inputElement.oninput = function () {
            //         var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
            //         errorElement.innerText = '';
            //         getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
            //     }
            // })
        });
    }

}


//Định nghĩa rules
//Nguyên tắc:
//1. Khi có lỗi => message lỗi
//2. Khi đã nhập => undefined
Validator.isRequired = function(selector,message){
    return{
        selector: selector,
        test: function(value){
            //Bỏ trim() thử fix?
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (selector,message){
    return{
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'

        }
    }
}

Validator.passwordMinLength = function (selector,min,message){
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }

}

Validator.isConfirmed = function(selector , getPassword, message){
    return {
        selector: selector,
        test: function(value){
            return value === getPassword() ? undefined : message || 'Vui lòng nhập lại mật khẩu';
        } 
    }
}
