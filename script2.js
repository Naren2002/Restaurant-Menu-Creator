function editList(lis, itemNo){
    console.log(lis + itemNo);
    $(".list-item-servings-" + itemNo).removeAttr("readonly");
    $(".list-item-price-" + itemNo).removeAttr("readonly");
    $(".list-item-name-" + itemNo).removeAttr("readonly");
    $(".list-item-img-src-" + itemNo).removeAttr("readonly");

    $(".list-item-img-src-" + itemNo).attr("placeholder", "Add a link to the image");

    $("input").css("border", "solid 1px");
    $("input:hover").css("cursor", "text");
    $("input:focus").css("outline", 1);
    
    console.log($(".list-edit-button").html());
    $(".list-edit-button").html("Save");
    $(".list-edit-button").addClass("list-save-button");
    $(".list-edit-button").attr("onclick", "saveList('"+ lis +"',"+ itemNo +")");
    $(".list-edit-button").removeClass("list-edit-button");
}

function saveList(lis, itemNo){
    console.log(lis + itemNo);

    $(".list-item-servings-" + itemNo).attr("value", $(".list-item-servings-" + itemNo).val());
    $(".list-item-price-" + itemNo).attr("value", $(".list-item-price-" + itemNo).val());
    $(".list-item-name-" + itemNo).attr("value", $(".list-item-name-" + itemNo).val());
    
    if($(".list-item-img-src-" + itemNo).val() != ""){
        $(".img-src-" + itemNo).attr("src", $(".list-item-img-src-" + itemNo).val());
    }

    $(".list-item-img-src-" + itemNo).attr("placeholder", "");
    $(".list-item-img-src-" + itemNo).val("");

    $(".list-item-serving-" + itemNo).attr("readonly", true);
    $(".list-item-price-" + itemNo).attr("readonly", true);
    $(".list-item-name-" + itemNo).attr("readonly", true);

    $("input").css("border", "0");
    $("input:hover").css("cursor", "default");
    $("input:focus").css("outline", 0);
    
    console.log($(".list-save-button").html());
    $(".list-save-button").html("Edit");
    $(".list-save-button").addClass("list-edit-button");
    $(".list-save-button").attr("onclick", "editList('"+ lis +"',"+ itemNo +")");
    $(".list-save-button").removeClass("list-save-button");
}

function deleteEle(lis){
    console.log(lis);
    $(lis).remove();
}