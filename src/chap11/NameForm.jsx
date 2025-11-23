import { useState } from "react";

function NameForm() {
    const [name, setName] = useState('홍길동');
    const [description, setDescription] = useState('');
    const [fruit, setFruit] = useState('banana');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("제출된 이름: " + name + "\n설명: " + description+ "\n좋아하는 과일: " + fruit);
    };

    const handleChange = (event) => {
        setName(event.target.value.toUpperCase()
    );
    };

    return (       
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                />
                <br />
                <label>
                     좋아하는 과일:
                    <select value={fruit} onChange={(e)=>setFruit(e.target.value)}>
                        <option value="apple">사과</option>
                        <option value="banana">바나나</option>
                        <option value="cherry">체리</option>

                    </select>
                </label>
                <br />
                </label>
                <label> 설명:
                <textarea value={description}
                onChange={(e)=>setDescription(e.target.value)}>
                    rows="5"</textarea>
                </label>

            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;
