$(document).ready(function () {

	$("#btnExito").click(
		function() {
			alert("EXITO EN LA VIDA")
		}
	)

	$("#btnExito").hover( 
		function() {
			$(".form-control").val("hola")
		},
		function() {
			$(".form-control").val("")
		}
	)


	$(".btn").click(
		function() {
			alert("FELIZ NAVIDAD")
		}
	)

})