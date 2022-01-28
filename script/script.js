
// wait for page complete loading
window.onload = function () { 

       // unlimited and lifetime
       var show_end_results = false; 
       
       // brands
       const brand1 = document.querySelector('.brand1'); // brex
       const brand2 = document.querySelector('.brand2'); // stripe
       const brand3 = document.querySelector('.brand3'); // amex
       const selectedBrand = document.querySelector('#selectedBrand');
       var cardValue = document.querySelector('#cardValue');

       // resetter
       document.querySelector("#bills").value = "";
       document.querySelector("#media").value = "";
       document.querySelector("#corpSpend").value = "";
       document.querySelector("#teamProject").value = "";
       
        const rightArrow = document.querySelector('.rightArrow');
 
        const brands = [
            brand1,
            brand2,
            brand3
        ]
        const i = brands.length ;

        var currSelectedBrand = 0;
         rightArrow.addEventListener('click', function(event) {

            brands.forEach(element => {
                element.classList.remove("SELECTED_BRAND");
            });

            brands[currSelectedBrand].classList.add("SELECTED_BRAND");
                currSelectedBrand += 1;
                if(currSelectedBrand == 3){
                    currSelectedBrand = 0;
                }

            // changing selected brand 
            if(currSelectedBrand == 1)
            {
               selectedBrand.innerHTML = 'BREX'; 
                // calculations
                var bills = document.querySelector("#bills");
                var media = document.querySelector("#media");
                var corpSpend = document.querySelector("#corpSpend");
                var teamProject = document.querySelector("#teamProject");
                var unlimitedRewards = document.querySelector("#unlimitedRow #unlimted");
                var lifetimeRewards = document.querySelector("#lifetimeRow #lifetime");

                // validations 
                checkInput(bills);
                checkInput(media);
                checkInput(corpSpend);
                checkInput(teamProject);
                sum = parseInt(bills.value) + parseInt(media.value) + parseInt(corpSpend.value) + parseInt(teamProject.value);
                brex = sum * 0.3;
                unlimitedRewards.innerHTML = "$"+(sum * 1.1).toFixed(3);
                lifetimeRewards.innerHTML = "$"+(sum * 1.2).toFixed(3);

                // end-results
                cardValue.innerHTML = "$"+brex.toFixed(3);

            } else if(currSelectedBrand == 2){
               selectedBrand.innerHTML = 'STRIPE';
                // calculations
                var bills = document.querySelector("#bills");
                var media = document.querySelector("#media");
                var corpSpend = document.querySelector("#corpSpend");
                var teamProject = document.querySelector("#teamProject");
                var unlimitedRewards = document.querySelector("#unlimitedRow #unlimted");
                var lifetimeRewards = document.querySelector("#lifetimeRow #lifetime");

                // validations 
                checkInput(bills);
                checkInput(media);
                checkInput(corpSpend);
                checkInput(teamProject);
                sum = parseInt(bills.value) + parseInt(media.value) + parseInt(corpSpend.value) + parseInt(teamProject.value);
                stripe = sum * 2.9;
                unlimitedRewards.innerHTML = "$"+(sum * 1.1).toFixed(3);
                lifetimeRewards.innerHTML = "$"+(sum * 1.2).toFixed(3);

                // end-results
                cardValue.innerHTML =  "$"+stripe.toFixed(3);
                
            }  else {
               selectedBrand.innerHTML = 'AMEX';
                // calculations
                var bills = document.querySelector("#bills");
                var media = document.querySelector("#media");
                var corpSpend = document.querySelector("#corpSpend");
                var teamProject = document.querySelector("#teamProject");
                var unlimitedRewards = document.querySelector("#unlimitedRow #unlimted");
                var lifetimeRewards = document.querySelector("#lifetimeRow #lifetime");

                // validations 
                checkInput(bills);
                checkInput(media);
                checkInput(corpSpend);
                checkInput(teamProject);
                sum = parseInt(bills.value) + parseInt(media.value) + parseInt(corpSpend.value) + parseInt(teamProject.value);
                amex = sum * 1.3;
                unlimitedRewards.innerHTML = "$"+(sum * 1.1).toFixed(3);
                lifetimeRewards.innerHTML = "$"+(sum * 1.2).toFixed(3);

                // end-results
                cardValue.innerHTML =  "$"+amex.toFixed(3);
            }

         });

         var sum;
         var brex;
         var stripe;
         var amex;

         
        brand1.addEventListener('click', function(event) {
            brands.forEach(element => {
                element.classList.remove("SELECTED_BRAND");
            });
            brands[0].classList.add("SELECTED_BRAND");
            currSelectedBrand = 1;
            selectedBrand.innerHTML = 'BREX';

            // calculations
            var bills = document.querySelector("#bills");
            var media = document.querySelector("#media");
            var corpSpend = document.querySelector("#corpSpend");
            var teamProject = document.querySelector("#teamProject");
            var unlimitedRewards = document.querySelector("#unlimitedRow #unlimted");
            var lifetimeRewards = document.querySelector("#lifetimeRow #lifetime");

            // validations 
            checkInput(bills);
            checkInput(media);
            checkInput(corpSpend);
            checkInput(teamProject);
            
            sum = parseInt(bills.value) + parseInt(media.value) + parseInt(corpSpend.value) + parseInt(teamProject.value);
            brex = sum * 0.3;
            unlimitedRewards.innerHTML = "$"+(sum * 1.1).toFixed(3);
            lifetimeRewards.innerHTML = "$"+(sum * 1.2).toFixed(3);

            // end-results
            cardValue.innerHTML = "$"+brex.toFixed(3);
        });
       brand2.addEventListener('click', function(event) {
            brands.forEach(element => {
                element.classList.remove("SELECTED_BRAND");
            });
            brands[1].classList.add("SELECTED_BRAND");
            currSelectedBrand = 2;
            selectedBrand.innerHTML = 'STRIPE';
            
            // calculations
            var bills = document.querySelector("#bills");
            var media = document.querySelector("#media");
            var corpSpend = document.querySelector("#corpSpend");
            var teamProject = document.querySelector("#teamProject");
            var unlimitedRewards = document.querySelector("#unlimitedRow #unlimted");
            var lifetimeRewards = document.querySelector("#lifetimeRow #lifetime");

            // validations 
            checkInput(bills);
            checkInput(media);
            checkInput(corpSpend);
            checkInput(teamProject);
            sum = parseInt(bills.value) + parseInt(media.value) + parseInt(corpSpend.value) + parseInt(teamProject.value);

            stripe = sum * 2.9;
            unlimitedRewards.innerHTML = "$"+(sum * 1.1).toFixed(3);
            lifetimeRewards.innerHTML = "$"+(sum * 1.2).toFixed(3);

            // end-results
            cardValue.innerHTML =  "$"+stripe.toFixed(3);
        });
       brand3.addEventListener('click', function(event) {
            brands.forEach(element => {
                element.classList.remove("SELECTED_BRAND");
            });
            brands[2].classList.add("SELECTED_BRAND");
            currSelectedBrand = 2;
            selectedBrand.innerHTML = 'AMEX';

            // calculations
            var bills = document.querySelector("#bills");
            var media = document.querySelector("#media");
            var corpSpend = document.querySelector("#corpSpend");
            var teamProject = document.querySelector("#teamProject");
            var unlimitedRewards = document.querySelector("#unlimitedRow #unlimted");
            var lifetimeRewards = document.querySelector("#lifetimeRow #lifetime");

            // validations 
            checkInput(bills);
            checkInput(media);
            checkInput(corpSpend);
            checkInput(teamProject);
            sum = parseInt(bills.value) + parseInt(media.value) + parseInt(corpSpend.value) + parseInt(teamProject.value);
            amex = sum * 1.3;
            unlimitedRewards.innerHTML = "$"+(sum * 1.1).toFixed(3);
            lifetimeRewards.innerHTML = "$"+(sum * 1.2).toFixed(3);

            // end-results
            cardValue.innerHTML =  "$"+amex.toFixed(3);
        });

        // keyup-inputs checker
        document.querySelector("body").addEventListener('keyup', function(event) {

            // calculations
            var bills = document.querySelector("#bills");
            var media = document.querySelector("#media");
            var corpSpend = document.querySelector("#corpSpend");
            var teamProject = document.querySelector("#teamProject");
            
            // validations checking if all inputs are ready
            check_1 = false;
            check_2 = false;
            check_3 = false;
            check_4 = false;

            if(bills.value.length == 0 || typeof bills.value == 'number' )
            {
               // alert("Fill the Bill input field with numbers, Please ");
                check_1 = false;

            } else {
                check_1 = true;
            }

            if(media.value.length == 0 || typeof media.value == 'number' )
            {
               // alert("Fill the Media input field with numbers, Please ");
                check_2 = false;
            } else {
                check_2 = true;
            }
            
            if(corpSpend.value.length == 0 || typeof corpSpend.value == 'number' )
            {
                //alert("Fill the Corporation Spending input field with numbers, Please ");
                check_3 = false;
            } else {
                check_3 = true;
            }
            if(teamProject.value.length == 0 || typeof teamProject.value == 'number' )
            {
               // alert("Fill the Team Project input field with numbers, Please ");
                check_4 = false;
            } else {
                check_4 = true;
            }
            
            var unlimitedRewards = document.querySelector("#unlimitedRow");
            var lifetimeRewards = document.querySelector("#lifetimeRow");
            if(check_1 && check_2 && check_3 && check_4 )
            {
                unlimitedRewards.style.visibility = "visible"; ;
                lifetimeRewards.style.visibility = "visible"; ;
                
            } else {
                unlimitedRewards.style.visibility = "hidden"; ;
                lifetimeRewards.style.visibility = "hidden"; ;
                
            }
        });

        function checkInput(input)
        {
            if(input.value.length == 0 || typeof input.value == 'number' )
            {
                input.value = "0";
            }
        }
    
    
}