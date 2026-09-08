# 이재우 — 개발자 포트폴리오

이재우의 개인 포트폴리오 사이트입니다. Java·Spring 백엔드 프로젝트, 실무 경력, 학력과 활동 이력을 소개합니다.

**[사이트 보기](https://gugukorn.github.io/)**

## 사이트 구성

- 프로젝트 9개: 활로, 성우하이텍 인도법인 시스템 오픈, HN SmartHome ChatBot 2.0 등
- 경력: 성우하이텍 IT개발팀, HNIX 융합기술연구소 인턴
- 수상: 현대퓨처넷 채용연계형 교육 최종 프로젝트 최우수상
- 학력·교육·자격·어학
- 교내·대외활동: 학생 연구자, 교수학습개발센터 서포터즈
- 이메일·GitHub 연락처

## 로컬에서 보기

빌드나 패키지 설치가 필요하지 않습니다. 저장소 루트에서 실행합니다.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 [로컬 미리보기](http://127.0.0.1:4173)를 엽니다. 종료는 `Ctrl+C`입니다. `index.html`을 직접 열어도 콘텐츠와 탐색은 동작하지만 이메일 복사는 HTTPS 또는 localhost에서 지원하는 브라우저가 필요합니다.

## 구현

HTML, CSS, JavaScript로 작성한 정적 사이트입니다.

- 화면 크기에 따른 반응형 레이아웃
- 프로젝트 상세 열기·닫기와 GitHub 바로가기
- 섹션 이동 및 현재 위치 표시
- 이메일 주소 복사
- 브라우저 인쇄 및 PDF 저장용 스타일

이력과 프로젝트 내용은 HTML에 작성되어 있습니다. JavaScript 없이도 기본 탐색과 프로젝트 상세 열기를 사용할 수 있습니다. 인쇄 시에는 접힌 내용을 펼치고, 인쇄가 끝나면 기존 상태로 복원합니다.

## 파일 구성

| 파일                       | 역할                                                     |
| -------------------------- | -------------------------------------------------------- |
| `index.html`               | 이력과 프로젝트의 단일 콘텐츠 원본, 검색·공유 메타데이터 |
| `styles.css`               | 레이아웃, 모바일 대응, 키보드 포커스, 인쇄 스타일        |
| `script.js`                | 메뉴 위치 표시, 상세 펼침, 이메일 복사, 인쇄 처리        |
| `assets/hwalro-system.svg` | 실제 실행 경계를 요약한 서비스·엔진 구조도               |
| `assets/favicon.svg`       | 개인 사이트 아이콘                                       |
| `docs/verification.md`     | 콘텐츠 출처와 검증 범위                                  |

글꼴은 Pretendard 1.3.9 CDN을 사용하며, 로드되지 않으면 시스템 글꼴로 표시합니다. 별도의 프레임워크나 빌드 도구는 사용하지 않습니다.

## 콘텐츠 수정

- 이력과 프로젝트 문구는 `index.html`의 해당 섹션에서 수정합니다.
- 연락처 링크는 `#contact .contact-secondary`에서 추가하거나 수정합니다.
- 제목과 설명에는 기관, 역할, 기간, 실제 수행한 업무를 적습니다.
- Hwalro 구조도는 실제 UI 스크린샷이나 시뮬레이션 결과가 아닌 구현 구조의 설명입니다.

## 배포

- 저장소: [gugukorn/gugukorn.github.io](https://github.com/gugukorn/gugukorn.github.io)
- 배포 주소: [gugukorn.github.io](https://gugukorn.github.io/)
- 기본 브랜치: `codex/recruiter-portfolio`
- GitHub Pages: **Deploy from a branch → codex/recruiter-portfolio → / (root)**

`codex/recruiter-portfolio` 브랜치에 push하면 GitHub Pages가 사이트를 빌드하고 배포합니다. 진행 상태는 저장소의 Actions에서 확인할 수 있습니다.
