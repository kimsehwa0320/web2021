var id,password;

id = prompt("아이디 입력");

if(id=="admin"){
	// document.write("관리자입니다.");
	location.href="login.html" //페이지 이동
}else{
	// document.write("나가주세요.");
	location.href="error.html"
}