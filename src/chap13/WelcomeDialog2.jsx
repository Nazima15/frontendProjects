import Dialog from "./Dialog";

export default function WelcomeDialog2() {
    return (
        <Dialog title="어서 오세요" message="우리 사이트에 방문하신 것을 환영합니다!" />
    );
}

export function WerningDialog() {
    return (
        <Dialog title="위험!" message="우리 사이트의 정보가 노출되었습니다!" />
    );
}