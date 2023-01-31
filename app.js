$("#addTodo").click(function () {
    const inputTodo =$("input").val();
    $("#list").append("<li><input type='checkbox'>" + inputTodo + "</li>");
    $("input").val("");
})