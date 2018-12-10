
# Moyeora

author: clarycha, smilu97

Software studio2 in HYU handout project

hosted on: http://54.180.137.238:3000/
docker packaged: smilu2244/moyeora:latest

```sh
docker pull smilu2244/moyeora:latest
```

## 개요

본 프로젝트는 대부분 Javascript 언어를 이용하고 있으며 NodeJS 기반의,
React, Express 라이브러리를 핵심 의존 요소로 하고있습니다.

React 프로젝트인 웹 프론트 어플리케이션과, Express 프로젝트인 서버 API 어플리케이션,
추가적으로 DB에 Table을 정의해주고 더미 데이터를 삽입해주는 간단한 스크립트를 포함합니다.

## 기능

우선 서비스는 모두 동등한 유저들을 가집니다.

모든 유저는 어떤 그룹에 속합니다.

각 유저들은 어떤 물건에 대한 요청을 게시할 수 있습니다. 이 때 해당 요청을 게시자가 속한 그룹의 이름으로 게시됩니다.

각 유저들은 어떤 요청에 대해서 일정한 가격을 제시할 수 있습니다.

### React

#### How to run

```sh
npm start serve
```

위의 명령어를 통해서 실행할 수 있으며, 기본적으로 3000번 포트를 사용합니다.

#### Major stack

##### apisauce

RESTapi에 관한 처리를 도와주는 라이브러리입니다.

##### reactstrap

bootstrap 컴포넌트를 react에서 사용하기 쉽도록 wrapping 한 집합 라이브러리입니다.

##### immutable

JSON객체를 Serialize해주는 라이브러리이며, 다양한 자료구조 또한 지원합니다.

##### styled-components

CSS property를 JS-level에서 인젝션해주는 라이브러리입니다.

### Server

#### How to run

```sh
npm start
```

#### Major Stacks

##### Sequelize

여러 Database들과의 Connection을 관리해주고 Table의 Entity를 캐싱해주거나, 
SQL을 자동으로 생성해주는 ORM 라이브러리 입니다.

