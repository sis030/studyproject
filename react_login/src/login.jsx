import React, { useState } from 'react';

export default function Login() {
const [isButtonEnabled, setIsButtonEnabled] = useState(false); 
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState(""); 


const handleLoginClick = () => {
    alert("로그인에 성공했습니다"); 
};


const handleInputChange = () => {
    if (email && password.length >= 8) {
        setIsButtonEnabled(true);
    } else {
        setIsButtonEnabled(false);
    }
};


return (
    <div className="page">
        <div className="titleWrap">
            LOGIN
        </div>

        <div className="contentWrap">
            <div className="inputTitle">아이디</div>
            <div className="inputWrap">
                <input
                    className="input"
                    placeholder="example00@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        handleInputChange();
                    }}
                />
            </div>

            <div style={{ marginTop: "20px" }} className="inputTitle">비밀번호</div>
            <div className="inputWrap">
                <input
                    className="input"
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        handleInputChange();
                    }}
                />
            </div>
        </div>

        <div>
            <button
                className="button"
                disabled={!isButtonEnabled} 
                onClick={handleLoginClick} 
            >
                로그인
            </button>
        </div>

        <div className="signupWrap">
        <button className="signupButton" >
        회원가입(안됨)
        </button>
        </div>
    </div>
);
}
