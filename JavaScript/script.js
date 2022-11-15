const body = document.querySelector("body");
      sidebar = body.querySelector(".sidebar");
      toggle = body.querySelector(".toggle");
      searchBtn = body.querySelector(".seacrh-box");
      modeSwitch = body.querySelector(".toglle-switch");
      modeText = body.querySelector(".mode-text")

      toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close");
      })

      modeSwitch.addEventListener("click",()=>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
          modeText.innerText = "Light Mode"
        }else{
          modeText.innerText = "Dark Mode"
        }
      })

