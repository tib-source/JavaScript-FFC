const apiUrl = "https://udemyfreecourses.org/ajax/search.php?query="
const udemy = "https://www.udemy.com"
const result = document.querySelector("#result")
const listItems = []
let getapi = function (query) { 
    $.getJSON(apiUrl+query, function(data) {
    // JSON result in `data` variable
    let sorted = data.courses.sort((a,b)=>{
        return  b.num_reviews - a.num_reviews ||   b.rating-a.rating || b.relevancy_score - a.relevancy_score
    })
    sorted.forEach(element => {
        const li = document.createElement("li")

        listItems.push(li)
        li.innerHTML = `
        <img src="${element.image_100x100}"></img>    
        <div class="user-info">
            <h3>${element.title}</h3><br>
            <small>Author: ${element.visible_instructors[0].display_name}</small> <br>
            <small>rating = ${element.rating}</small> <br>
            <small>reviews = ${element.num_reviews}</small> <br>
            <small>subscribers = ${element.num_subscribers}</small><br>
            <small><a href="${udemy + element.url}"> link </a> </small> 
        </div>
        `
        result.appendChild(li)
    });

    })
    
}


let search = function(){
    const query = document.querySelector("#search").value;
    let result = getapi(query)

}

