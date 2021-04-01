
$(document).on("click", ".btn-parames-validation-add", function (event) {

    $(".row-of-fileds-trakins").append('<div class="row mb-2 item-trakin align-items-center">' +
        ' <div class="col-auto  col-9"><input type="text" class="form-control"></div>' +
        ' <div class="col-3  justify-content-end flex-xxl-row-reverse"> ' +
        ' <button class="btn-lien btn-parames-validation-remove btn btn-sm btn-danger justify-content-center" type="button"><i class="fa fa-times" aria-hidden="true"></i></button>' +
        ' <button class="btn-lien btn-parames-validation-add btn btn-sm btn-primary" type="button"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
        ' </div></div>'
    )
})

$(document).on("click", ".btn-parames-validation-remove", function (event) {

    var answer = confirm('Are you sure that you want to do this?');
    if (!answer) {
        event.preventDefault();
    } else {
        $(this).parent().parent().remove();

    }
})


$(document).on("click", ".btn-parames-definition-add", function (event) {

    $(".row-of-fileds-trakins").append('<div class="row mb-2 item-trakin align-items-center">' +
        ' <div class="col-auto  col-10"><input type="text" class="form-control"></div>' +
        ' <div class="col-2  justify-content-end flex-xxl-row-reverse"> ' +
        ' <button class="btn-lien btn-parames-definition-remove btn btn-sm btn-danger justify-content-center" type="button"><i class="fa fa-times" aria-hidden="true"></i></button>' +
        ' <button class="btn-lien btn-parames-definition-add btn btn-sm btn-primary" type="button"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
        ' </div></div>'
    )
})

$(document).on("click", ".btn-parames-definition-remove", function (event) {

    var answer = confirm('Are you sure that you want to do this?');
    if (!answer) {
        event.preventDefault();
    } else {
        $(this).parent().parent().remove();

    }
})

$(document).on("click", ".btn-variable-add", function (event) {

    $(".row-of-fileds-variables").append('<div class="row mb-2 item-trakin align-items-center">' +
        ' <div class="col-auto  col-10"><input type="text" class="form-control"></div>' +
        ' <div class="col-2  justify-content-end flex-xxl-row-reverse"> ' +
        ' <button class="btn-lien btn-lien-remove btn btn-sm btn-danger justify-content-center" type="button"><i class="fa fa-times" aria-hidden="true"></i></button>' +
        ' <button class="btn-lien btn-lien-add btn btn-sm btn-primary" type="button"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
        ' </div></div>'
    )
})

$(document).on("click", ".btn-variable-remove", function (event) {

    var answer = confirm('Are you sure that you want to do this?');
    if (!answer) {
        event.preventDefault();
    } else {
        $(this).parent().parent().remove();

    }
})

$(document).on("click", ".btn-lien-add", function (event) {

    $(".row-of-fileds-trakins").append('<div class="row mb-2 item-trakin align-items-center">' +
        ' <div class="col-auto col-3"><input type="text" class="form-control" id="balistrack"aria-describedby="text"></div>' +
        ' <div class="col-auto  col-7"><input type="text" class="form-control"></div>' +
        ' <div class="col-2  justify-content-end flex-xxl-row-reverse"> ' +
        ' <button class="btn-lien btn-variable-remove btn btn-sm btn-danger justify-content-center" type="button"><i class="fa fa-times" aria-hidden="true"></i></button>' +
        ' <button class="btn-lien btn-variable-add btn btn-sm btn-primary" type="button"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
        ' </div></div>'
    )
})

$(document).on("click", ".btn-lien-remove", function (event) {

    var answer = confirm('Are you sure that you want to do this?');
    if (!answer) {
        event.preventDefault();
    } else {
        $(this).parent().parent().remove();

    }
})
