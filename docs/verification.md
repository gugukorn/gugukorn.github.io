# 포트폴리오 개편 검증 기록

검증 기준일: 2026-09-09. 기존 `add-projects-page`의 `8424d50`에서 새 브랜치 `codex/recruiter-portfolio`를 생성했습니다.

## 콘텐츠 보존과 갱신

| 항목          | 확인 결과                                                        |
| ------------- | ---------------------------------------------------------------- |
| 기존 프로젝트 | 9개 모두 포함. 대표 3개 + 보조 6개                               |
| 경력          | 성우하이텍 IT개발팀(2024.09–2026.04), HNIX 인턴(2023.08–2023.12) |
| 교육          | 현대퓨처넷 채용연계형 교육 수료, 오픈소스컨트리뷰션아카데미 수료 |
| 수상          | 현대퓨처넷 교육 최종 프로젝트 최우수상 — 사용자 확인             |
| 학력          | 울산대학교 IT융합전공, 2024.02 졸업 — 사용자 확인                |
| 자격          | 정보처리기사, SQLD, ISTQB CTFL, 초경량비행장치조종자             |
| 어학          | TOEIC Speaking IH, ETS, 2026.07.26                               |
| 연락처        | 기존 이메일과 GitHub 유지                                        |
| 블로그        | 사용자가 정리 후 직접 추가할 예정이라 빈 링크를 만들지 않음      |

기존 HTML을 기준으로 이력을 확인했습니다. 교육 종료월·수상일과 팀 규모·기여율·성능 수치는 임의로 추가하지 않았습니다. 교육 최종 프로젝트와 Hwalro의 직접 연결은 확인 자료에 없으므로 Hwalro에 수상 배지를 붙이지 않았습니다.

## Hwalro의 추가 근거

Hwalro 로컬 저장소의 README, `apps/simulation-service/build.gradle`, `engine/README.md`, `engine/requirements.txt`와 본인 커밋을 확인했습니다.

- 서비스 범위: 팝업·전시·행사 배치안의 대피 시간, 밀집도, 병목 사전 검토.
- 실행 구조: Java 17·Spring Boot·MyBatis·MySQL 서비스와 독립 Python 3.12 JuPedSim 프로세스. 엔진이 JSON 결과를 생성.
- 작업 범위: 시뮬레이션 구동·배치 화면(`26b3242`), 취소·병렬 실행(`f41e0ab`), 최적화(`f4c85cd`), 비상구 검증(`f8adf0b`), 탈출 판정(`d2f8f18`).
- SVG는 이 구조를 설명하는 도식이며, 실제 실행 결과나 제품 스크린샷으로 표시하지 않았습니다.

## 외부 링크

GitHub connector로 프로젝트 저장소 8개가 모두 공개(`private: false`, `visibility: public`)임을 확인했습니다.

- [Hwalro](https://github.com/dbtkdfhr/hwalro)
- [jupedsim-hwalro](https://github.com/gugukorn/jupedsim-hwalro)
- [HNIX-Simple-ChatBot](https://github.com/gugukorn/HNIX-Simple-ChatBot)
- [hi-eating](https://github.com/kosa-hieating/hi-eating)
- [예약 메일 발송 시스템](https://github.com/jhj2075/kosa-study-mail-project)
- [hi-eating-crawler](https://github.com/kosa-hieating/hi-eating-crawler)
- [Hyundai-HR](https://github.com/HDF-3/Hyundai-HR)
- [Web Visit History Visualization](https://github.com/gugukorn/WebVisitHistoryVisualization)

[Chromium 공식 AUTHORS](https://chromium.googlesource.com/chromium/src/+/HEAD/AUTHORS)에 `Jaewoo Lee <ljw5953@gmail.com>`이 있는 것도 확인했습니다. 특정 Chromium 기능이나 커미터 권한까지 주장하지 않습니다.

## 검증 방법과 결과

- JavaScript 문법 검사: `node --check script.js`.
- 브라우저 DOM 검사: 프로젝트 9개, 중복 ID 없음, 내부 링크 대상 누락 없음, 깨진 이미지 없음, 폰트 로드 완료.
- 브라우저 콘솔: 검사 중 오류·경고 없음.
- 반응형 DOM 검사: 320, 390, 768, 1440, 1920px에서 가로 넘침 없음.
- 실제 화면 검수: 데스크톱 첫 화면·프로젝트·학력·연락처, 모바일 첫 화면과 프로젝트 상세.
- 키보드: Enter로 프로젝트 상세 열기·닫기 확인.
- 프로젝트 링크: 직접 해시 진입과 같은 해시 재클릭 시 상세 펼침 확인.
- Node VM 기능 검증: 인쇄 전 전체 상세 열기, 중복 이벤트 방어, 인쇄 후 원래 상태 복원, 반복 인쇄, 클립보드 성공·실패·미지원·비보안 분기, 잘못된 해시 처리.

검수에서 같은 해시 재클릭 시 상세가 열리지 않는 문제와 인쇄에서 줄바꿈을 숨겨 기술명이 붙는 문제를 수정했습니다.

## 확인 범위의 한계

- Codex 내장 브라우저에서는 일반 브라우저의 인쇄 대화상자·최종 PDF 파일과 시스템 클립보드 결과를 확인할 수 없었습니다. 관련 이벤트 처리와 오류 분기는 별도의 기능 검증으로 확인했습니다. 실제 제출용 PDF의 페이지 나눔은 Chrome/Edge 인쇄 미리보기에서 확인해야 합니다.
- JavaScript 비활성화·외부 폰트 차단은 코드 구조를 검토한 범위이며 별도 브라우저 설정으로 재현한 검사는 아닙니다.
- Lighthouse 점수, 스크린리더 음성 출력, Safari 실기기 검증은 수행하지 않았습니다.
- 이 작업은 로컬 브랜치 구현입니다. 기존 GitHub Pages 배포를 변경하지 않았습니다.
