# Context Notes — 홈페이지 제작 결정 기록

## 목표
Joonmyung Choi 학술 개인 홈페이지. 전체 흐름은 Froilan Choi 사이트, Selected Publications 카드 스타일은 dogyunpark 사이트를 참고.

## 핵심 결정
- **스택**: 순수 HTML/CSS/JS (빌드 없음). 사용자 선택. 유지보수·배포 단순성 우선. al-folio(Jekyll) 포크는 무거워서 제외.
- **언어**: 영어 (학술 표준).
- **레이아웃**: 단일 컬럼, max-width ~820px 중앙 정렬. Intro만 텍스트+사진 2열(dogyunpark 방식), 나머지는 단일 컬럼.
- **Publication 카드**: 좌측 venue 뱃지 + 우측 제목/저자/학회/링크. 본인명 굵게, 공동1저자 `*`. Bib 버튼 클릭 시 BibTeX 펼침(JS 토글) — dogyunpark 방식.
- **Collaborators 섹션**: 사용자 요청으로 제외.
- **아이콘**: Font Awesome + Academicons CDN (Google Scholar 아이콘용).

## 콘텐츠 출처
- 이름/소속/Experience/Publications: `asset/Joonmyung_CV.pdf` (2026-05-30 기준)
- News: Google Scholar(user=IaQRhu8AAAAJ) + CV 의 논문 accept 연도 기준 최신순 정리
- Intro 문단: 사용자가 공란으로 둠 → CV의 Research Interest(Efficient Deep Learning, Token Compression, Video/Multi-Modal Understanding, Document Understanding) 기반 **초안** 작성. 사용자 확정 필요.
- 프로필 사진: `asset/joonmyung.jpg` 실제 파일 존재 → 사용.

## 미해결 / 사용자 입력 대기
- 각 논문의 PDF/Code/Project **실제 URL 미상** → Scholar는 직링크 미제공, arXiv ID 추측은 오기재 위험이라 **하지 않음**. 현재 Bib 버튼만 작동, PDF는 `href="#"` 자리표시. 사용자가 URL 주면 채움.
- Intro 문구 최종 확정.

## 메모
- 지도교수 Hyunwoo J. Kim: 홈 https://www.hyunwoojkim.com/home , Scholar user=LfBoJt8AAAAJ
- CV 저자 표기는 이니셜(예: S. Lee) — 공저자 풀네임 미상이라 BibTeX도 이니셜 유지(오기재 방지).
