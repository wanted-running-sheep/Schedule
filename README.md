# 🎬 프리온보딩 5차 과제 - Schedule 관리 사이트 개발

1. [프로젝트 소개](#1-프로젝트-소개)
2. [구현 기능](#2-구현-기능)
3. [프로젝트 구조](#3-프로젝트-구조)
4. [역할](#4-역할)
5. [프로젝트 제작 과정](#5-프로젝트-제작-과정)
6. [프로젝트 설치 및 실행](#6-프로젝트-설치-및-실행)

<br/>

<!-- 배포 후 수정
<br /> -->

## 1. 프로젝트 소개

- 개요: 원티드 프리온보딩 5기 5번째 팀 과제
- 주제: Schedule - 수업 일정 관리 페이지 개발
- 기간: 2022.07.28 ~ 2022.07.30

<br />

## 2. 구현 기능

### 🔥 과제 요구 기능

**수업 일정 보기 페이지 (`/schedule`)**

- [x] 주간 일정 데이터를 가져와서 요일 별로 정렬
  - [x] 기존 json 데이터 가공하여 요일 별 날짜로 정렬
  - [x] `12:00 A.M.`이라면 `0:00 A.M.`으로 보이도록 시간 포맷 변경
- [x] 각 일정은 `x`버튼 클릭 시 삭제
 - [x] confirm 창을 통해 삭제하기 전 확인창 노출
- [x] `add class schedule` 버튼 클릭 시 **수업 일정추가 페이지**로 이동
- [x] 페이지 다시 로드되어도 수업 일정 유지

**수업 일정추가 페이지 (`/schedule/add`)**

- [x] 수업 시작 시간 리스트 형식으로 선택
 - [x] 시작 시간의 범위 `0~23`
 - [x] 시작 분의 범위 `0~55 (5씩 증가)`
 - [x] 시작 시간이 12시와 동일하거나 클 경우 자동으로 `PM`으로 선택, 외의 경우 `AM` 선택
- [x] 똑같은 시간에 요일 다중 선택
- [x] 저장 버튼 클릭 시 **수업 일정 보기 페이지**로 이동
- [x] 중복된 일정 추가 시 alert 창 노출
 - [x] 시작 시간 및 입력된 시간이 다른 시간에 포함된다면 alert 창 노출

<br />

## 3. 프로젝트 구조

```
📁frontend
├── 📁 src
├──────── api
│   │    ├── http
│   │    ├── instance
│   │    └── models
├──────── assets/css
├──────── @components
│   │     ├── @common
│   │     │   ├── Button
│   │     ├── TimePicker
│   │     ├── AMPMRadio
│   │     ├── Button
│   │     ├── Layout
│   │     ├── TimneBlock
│──────── constants
│   │     ├── index
│   │     ├── message
├──────── pages
│   │     ├── ScheduleAddPage
│   │     ├── SchedulePage
│   │     ├── index
├──────── routes
│   │     ├── index
├──────── styles
│   │     ├── animation
│   │     ├── globalStyles
│   │     ├── media
│   │     ├── mixins
│   │     ├── theme
├──────── types
│   │     ├── api
│   │     ├── enum
│   │     ├── style
├──────── utils
│   │     ├── formatTime
│   │     ├── pad2Digit
│   │     ├── periods
│   │     ├── weekDays
├── App.tsx
└── index.tsx
📁 backend
├──────── database
│         ├── db.json
│         └── dbController.js
├──────── routes
│         ├── schedule
├── index.js
```

<br />

## 4. 역할

| 성함                                     | 담당 역할                                                                                                                                                |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [양아름](https://github.com/areumsheep)  | 개인 과제 진행, QA, 버그 수정, 반응형 추가               |
| [조현호](https://github.com/hajun2)      | 개인 과제 진행, QA, 버그 수정                                                                                    |
| [최창열](https://github.com/pinkdumbbel) | 개인 과제 진행, express 서버 구축  |
| [최중재](https://github.com/joong8812)   | 개인 과제 진행 (Base로 사용), QA, 버그 수정                                                       |
<br />

## 5. 프로젝트 제작 과정

### [1] 컨벤션은 협의하여 아래와 같이 정의하였습니다 🥳

| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 💩 chore    | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/wanted-running-sheep/schedule/issues/1)에서 확인해주세요!

### [2] 각자 개인적으로 작업을 시작하였습니다! 🏃

- 팀 과제를 통해 얻은 지식으로 개인의 실력이 어느 정도인지를 체크하는 시간을 가졌습니다
- [팀원들의 개인 작업물이 궁금하시다면? 여기를 클릭해보세요!](https://github.com/wanted-running-sheep/schedule/pulls)

### [3] 가장 잘 된 프로젝트를 Base로 두고 각자 프로젝트에서 좋다고 생각하는 코드들을 모아 어벤져스 프로젝트를 만들었습니다! 🔥

- 각자 진행하며 빠진 부분들을 체크할 수 있었습니다
- 리팩터링을 통해 더 나은 코드에 대해 고민할 수 있었습니다


<br/>

## 6. 프로젝트 설치 및 실행

1. Git Clone

```command
$ git clone
```

2. 프로젝트 실행

```command
// 프론트엔드
$ cd frontend
$ npm install
$ npm run start

// 백엔드
$ cd backend
$ npm install
$ npm run start
```
