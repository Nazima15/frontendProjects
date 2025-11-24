import { useState } from "react";

function SignUp() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${name}님, 가입을 환영합니다! 성별: ${gender}`);
    };

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label> 
                성별:
                <select value={gender} onChange={handleChange}>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                </select>
            </label>

            <button type="submit">가입하기</button>
        </form>
    );
}

export default SignUp;
