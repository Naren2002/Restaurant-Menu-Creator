let noItems = 2;

function changeDetails(ele){
    console.log("Idhu vela seiyyudhu");
    console.log($(".category-"+ele+"-input").val());
    console.log($(".url-"+ele+"-input").val());

    let urlInput = $(".url-"+ele+"-input").val();
    let categoryInput = $(".category-"+ele+"-input").val();
    $(".image-"+ele).html("<img src="+ urlInput +" alt='South Indian Dishes'>");
    $(".category-"+ele).html(categoryInput);
}

function deleteCategory(ele){
    $(".item-"+ele).remove();
    noItems -= 1;
    console.log("poof");
    console.log(noItems);
    if(noItems < 0){
        noItems = 0;
    }
}

function addCategory(){

    noItems += 1;
    let imgURL = $("#new-image-url").val();
    let category = $("#new-category-name").val();
    let newCat = $(".item-new").html();
    console.log(newCat);
    $(".item-new").remove();

    $(".row").append("<div class='col-3 item item-"+ noItems +"'>\
    <div class='image image-"+ noItems +"'>\
        <img src='"+ imgURL +"' alt='" + category + "'>\
    </div>\
    <br>\
    <div class = 'display-6 item-text category-"+noItems+"'>" + category +"</div>\
    <br>\
    <p>\
        <a class='btn btn-primary' data-bs-toggle='collapse' href='#collapse"+noItems+"' role='button' aria-expanded='false' aria-controls='collapseExample'>\
            Edit/Delete\
        </a>\
    </p>\
    <div class='collapse' id='collapse"+ noItems +"'>\
        <div class='card card-body'>\
            <input type='text' class = 'form-control category-"+ noItems +"-input' placeholder = 'Category'><br>\
            <input type='text' class = 'form-control url-"+ noItems +"-input' placeholder = 'Edit picture'><br>\
            <a class = 'btn btn-danger' onclick = \"deleteCategory('"+ noItems +"')\" href='#'>Delete</a> <br>\
            <a class = 'btn btn-primary' onclick = \"changeDetails('"+ noItems +"')\" href='#'>Change Details</a>\
        </div>\
    </div>\
</div>");

    $(".row").append("<div class=\"col-3 item item-new\">\
    <br>\
    <input id = \"new-category-name\" type=\"text\" class = \"form-control\" placeholder=\"Category name\">\
    <br>\
    <input id = \"new-image-url\" type=\"text\" class = \"form-control\" placeholder=\"Image URL\">\
    <br>\
    <a href=\"#\" class = \"btn btn-primary\" onclick = \"addCategory()\">Add another Category</a>\
</div>");
}