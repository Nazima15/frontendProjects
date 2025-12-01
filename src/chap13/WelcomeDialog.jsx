import FancyBorder from './FancyBorder.jsx';

export default function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">환영합니다</h1>
            <p className="Dialog-message">
                리액트 학습을 시작해봅시다!
            </p>
        </FancyBorder>
    );
}

