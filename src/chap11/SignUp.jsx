import {useState0} from "react";
function SignUp() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            alert("가입이 완료되었습니다.");
        }}>
            <button type="submit">가입하기</button>
        </form>
    )
}
export default SignUp;