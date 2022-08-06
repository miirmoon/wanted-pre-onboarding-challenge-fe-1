# TodoList

## :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

> 과제 상세 - [API Repository](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api) 내 README.md 참고

> 신미래 소개 [Notion](https://kindly-arithmetic-fb1.notion.site/d2b6e66b49354b16aec4c0d667bdd837)

## 1. 기술 스택 🛠

- React, Styled-component

## 2. 구현 내용 ✈

### Assignment 1 - Login / SignUp

#### 1) Login / 로그인

- `/auth` 경로
- 이메일, 비밀번호 입력창, 제출 버튼으로 구성
- 이메일 조건 검사
- 이메일, 비밀번호가 모두 입력되고 조건을 만족하면 제출 버튼 활성화
- 정상적으로 로그인이 되면 토큰을 로컬 스토리지에 저장하고 루트 경로로 이동

![로그인 화면](https://user-images.githubusercontent.com/81166378/183234513-be148df0-0d28-4ca5-815c-eb8b7612648b.gif)

<br />

#### 2) SignUp / 회원가입

- `/signup` 경로
- 이메일, 비밀번호, 비밀번호 확인 입력창, 제출 버튼으로 구성
- 이메일 조건 검사
- 비밀번호 조건 검사(8자리 이상)
- 모든 입력창이 입력되고 조건을 만족하면 제출 버튼 활성화
- 정상적으로 회원가입이 완료되면 로그인 처리 후 루트 경로로 이동

![회원가입](https://user-images.githubusercontent.com/81166378/183234533-3c150a2f-a4c4-47f8-a3e1-dc27f3097989.gif)

<br />

### Assignment 2 - Todo List

#### 1) Todo 목록 조회

- 목록 / 상세 영역으로 나누어 구현
- 한 화면 내에서 Todo List와 개별 Todo의 상세 확인
- 새로고침했을 때 현재 상태 유지
- 개별 Todo 조회 순서에 따라 페이지 뒤로가기를 통해 조회

![할 일 목록 조회](https://user-images.githubusercontent.com/81166378/183240150-ca654d12-2396-4b1d-a5a8-fb3e7d446a00.gif)

<br />

#### 2) Todo 추가

- 추가 버튼을 클릭하여 Todo 추가
- 추가한 Todo는 목록에 실시간으로 반영

![할 일 추가](https://user-images.githubusercontent.com/81166378/183240169-8a87cd08-0c90-489c-8bcb-7ffc78f9b832.gif)

<br />

#### 3) Todo 수정

- 수정 버튼을 클릭하면 수정 모드 활성화
- 수정한 내용 반영 또는 취소
- 수정한 내용은 목록에 실시간으로 반영

![할 일 수정](https://user-images.githubusercontent.com/81166378/183240182-ba8804d3-e5a0-416d-8a81-e26c71a62d15.gif)

<br />

#### 4) Todo 삭제

- 삭제 버튼을 클릭하면 해당 Todo 삭제
- 삭제한 내용은 목록에 실시간으로 반영

![할 일 삭제](https://user-images.githubusercontent.com/81166378/183240198-1d1ae0db-ea1a-489f-9766-1f007f6487ed.gif)
