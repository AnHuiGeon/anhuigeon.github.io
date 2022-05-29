---
title: Gatsby 블로그 제작[10]
date: 2021-11-04 00:00:00 +0300
description: # Add post description (optional)
img: ../images/gatsby-react.png # Add image post (optional)
tags: [Blog, Gatsby, JAM stack] # add tag
categories: blog # add category
series: GatsbyBlog
---  
## 블로그 시작과 JAM stack
---
JAM스택은 Javascript + API + Markup 으로 구성하여 서버 없이 풀스택을 구현할 수 있게 도와주는 아키텍처입니다.
Javascript : SSR이 가능한 Next.js, Gatsby 등
API : [Headless CMS(컨텐츠 view를 분리)](https://www.gatsbyjs.com/docs/how-to/sourcing-data/headless-cms/)를 이용해서 구현하며, CMS는 서버에 대한 지식이 없어도 간편하게 데이터베이스를 생성해주고 외에 다양한 것들을 지원해주는 시스템입니다.
Markup : HTML
<br/>
## 왜 Gatsby를 선택했는가?
---
네이버, tistory, velog, medium, brunch 등등 다양한 블로그가 있고 이 서비스를 사용한다면 수고로움을 덜고 컨텐츠에만 집중하면 될 것이라 생각했습니다. 하지만 2학년 때부터 직접 만든 블로그를 운영 해 보고 싶어서 직접 구축하게 되었습니다.

## Static/Dynamic page 차이
---
1. Static Page(정적 페이지)
    웹 서버에 미리 저장된 파일(HTML 파일, 이미지, CSS, JS파일 등)을 클라이언트에게 그대로 전달하는 웹 페이지.
    웹 서버는 사용자의 요청(Request)에 해당하는 웹 페이지를 제공
    사용자는 서버에 저장된 데이터가 변경되지 않는 한 고정된 웹 페이지를 보게 됨
    ex) 블로그, 포트폴리오, 회사소개 등의 내용이 변하지 않는 페이지
    
    - 장점
    속도 : 웹 서버에 이미 파일이 저장되어 있기 때문에 사용자의 요청에 대한 파일만 전송하면 되기 때문에 추가적인 작업이 없다.
    비용 : 웹 서버만 구축하면 된다.
    - 단점
    한정적 : 사용자는 웹 서버에 저장된 정보만 볼 수 있다.
    관리 : 추가/수정/삭제 모든 작업이 수동적이다.
2. Dynamic Page(동적 페이지)
웹 서버는 사용자의 요청(Request)을 해석하여 데이터를 가공한 후 생성되는 웹 페이지를 보냄.
사용자는 상황, 시간, 요청 등에 따라 달라지는 웹 페이지를 보게 됨.
    - 장점
    다양성 : 다양한 정보를 조합하여 사용자에게 동적으로 서비스를 제공할 수 있다.
    관리 : 웹 사이트 구조에 따라서 추가/수정/삭제 등의 작업이 용이하다.
    - 단점
    속도 : 사용자에게 웹 페이지를 전달하기 전에 처리하는 작업이 필요하다.
    비용 : 웹 서버 외에 추가적으로 처리를 위한 어플리케이션 서버(Web Application Server)가 필요하다.