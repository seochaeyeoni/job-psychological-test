# 📊직업 심리 검사 서비스 ✅

[직업심리검사 API](https://www.career.go.kr/cnet/front/openapi/openApiTestCenter.do)를 사용하여 문항 요청, 결과 요청, 결과 분석을 위한 학력별, 전공별 직업 정보 요청을 통해 검사 결과를 보여주는 리액트 웹 서비스입니다.

### 깃헙 배포버전 보러가기👇

[![image](https://user-images.githubusercontent.com/64145112/131654603-7c9cb531-a16b-48cd-b71d-4e5f9ddd0409.png)](https://seochaeyeoni.github.io/job-psychological-test/)


### 기술 스택

- Javascript
- Functional Components + Hooks
- React `17.0.2`
- bootstrap `5.1.0`
- react-bootstrap `1.6.1`
- react-router-dom `5.2.0`
- axios `0.21.1`
- recoil `0.4.0`
- styled-components `5.3.1`
- react-chartjs-s `3.0.4`

### 구현 기능

브랜치명 - 구현 사항

- setting/init - Create react app, 필요한 라이브러리 설치, 컴포넌트 파일 생성
- feature/start - Add input form, Add test start button(활성/비활성), 유저 정보 저장, 이름 입력, 성별 선택에 대한 안내 메시지
- feature/example - mockData로 페이지 구현, Add test start button(활성/비활성), Add progressbar(0%)
- api/get_test - 심리검사 문항 요청 api로 get response 확인
- feature/test - 5개의 문항, Add next button(활성/비활성), progressbar 퍼센트 갱신, Add before button(이전 선택 값 유지), api 엮기
- api/post_result - body 형식에 잘 맞게, 심리검사 결과 요청 api로 post response 확인
- feature/finish - 검사 완료 문구, 검사 결과에 관한 간단한 문구
- api/get_average - 종사자 평균 학력별 직업 정보 요청, 종사자 평균 전공별 직업 정보 요청
- feature/result - 유저 정보(이름, 성별, 검사일), 직업가치관결과 막대 그래프로 표기, 가치관과 관련이 높은 직업 표로 표기, api 엮기, Add retest button(기록 초기화→첫 페이지)

이외의 브랜치

- refactor/해당기능 - 실수 수정, 코드 리팩토링 등 수정과 관련된 사항
- fix/#issue_number - 발행한 이슈과 관련된 문제 해결

<details>
<summary>엘리스 프로젝트 기간 중 MR 기록(at 깃랩)</summary>
<div markdown="1">       
![MR1](https://user-images.githubusercontent.com/64145112/131653923-2a8fe1d7-c100-4bef-90de-3a5c255b3c37.png)
![MR2](https://user-images.githubusercontent.com/64145112/131654085-b5eb33bb-6d3b-410f-92da-d92cd9c3bace.png)
</div>
</details>
