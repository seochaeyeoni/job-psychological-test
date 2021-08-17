# 📊직업 심리 검사 서비스 ✅

[직업심리검사 API](https://www.career.go.kr/cnet/front/openapi/openApiTestCenter.do)를 사용하여 문항 요청, 결과 요청, 결과 분석을 위한 학력별, 전공별 직업 정보 요청을 통해 검사 결과를 보여주는 리액트 웹 서비스입니다.

### 기술 스택

- Javascript
- Functional Components + Hooks
- React `17.0.2`
- bootstrap `5.1`
- react-bootstrap `1.6.1`
- react-router-dom `5.2`
- axios `0.21.1`

### 구현 기능

브랜치명 - 해당 브랜치에서 구현할 기능

- setting/init - Create react app, 필요한 라이브러리 설치, eslint, prettier
- feat/start - Add input form, Add test start button(활성/비활성), 유저 정보 저장, 이름 입력, 성별 선택에 대한 안내 메시지
- feat/example - mockData로 페이지 구현, Add test start button(활성/비활성), Add progressbar(0%)
- api/get_test - 심리검사 문항 요청 api로 get response 확인
- feat/test - 5개의 문항, Add next button(활성/비활성), progressbar 퍼센트 갱신, Add before button(이전 선택 값 유지), api 엮기
- api/post_result - body 형식에 잘 맞게, 심리검사 결과 요청 api로 post response 확인
- feat/finish - 검사 완료 문구, 검사 결과에 관한 간단한 문구
- api/get_average - 종사자 평균 학력별 직업 정보 요청, 종사자 평균 전공별 직업 정보 요청(api 문서 어디에?.?)
- feat/result - 유저 정보(이름, 성별, 검사일), 직업가치관결과 막대 그래프로 표기, 가치관과 관련이 높은 직업 표로 표기, api 엮기, Add retest button(기록 초기화→첫 페이지)

이외의 브랜치

- refactor/해당기능 - 디테일 수정, 코드 리팩토링 등 수정과 관련된 사항
- fix/#issue_number - 발행한 이슈과 관련된 문제 해결

### 개발 계획

💩 : 최고로 바쁜 날(1~2시간)

🙀 : 바쁘지만 해야하는 날(2~3시간)

🍀 : 연속으로 집중할 수 있는 날(3~4시간)

💻 : 연속으로 집중할 수 있는 날(4~5시간)

💯 : 거의 백퍼센트 시간 쓸 수 있는 날(10~12시간)

🔥 : 밤샘코딩(계획에 없음)


💩0817 - setting/init (+a 노마드 코더 강의 듣기)

💻0818 - feat/start, 노마드 코더 강의 다 듣기

🙀0819 - feat/example

💯0820 - feat/example, api/get_test, feat/test

🙀0821 - feat/test

🍀0822 - api/post_result

💩💩0823 - feat/finish

💩💩0824 - feat/finish

💯0825 - feat/finish, api/get_average, feat/result

💩0826 - feat/result

💯0827 - 밀릴 거, 이슈 발생을 위한 여유시간, 리팩토링, 발표 준비