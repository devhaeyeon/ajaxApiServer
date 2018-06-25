// 예시 관련 내용 히스토리
// 초기에 해당 부분을 만들 때는 상품 목록 불러오는 부분과
// 지오로케이션 api 사용하여 현재 위치의 위도, 경도 값을 받아서 현재 위치 날씨 정보를 가져오는 페이지
// 의 예시를 구상하였으나 날씨 정보를 가져오는 외국 사이트 api에서 한국의 위도, 경도에 대한 정보가
// 정확하지 않아서 기본 메뉴에 들어가는 language데이터, 그리고 해당 랭기지에 대한 
// 해커뉴스의 검색 결과를 가져 오는 것으로 변경 하였다.

//    $.getJSON('/product/all',function(data) {
//        console.log(data[0].key);
//    }).then();

// 메뉴 리스트를 가져오는 json -> local server api ( v )
// ??? json -> external server api
// 로딩바 이미지 사용하여 >> 데이터를 불러오고 있을 때
// 비동기적으로 데이터를 가져오는 예시를 보여주기 위함.
// 데이터를 가지고 오는 함수
// 프라미스 패턴 사용, 사용 안한 예제
// jQuery ajax를 사용한 예제
// jQuery ajax를 사용하지 않은 예제
// 크로스도메인 이슈 발생하는 예제
// html5에서 제공하는 지오로케이션 api를 사용하여 현재 위치의 위도, 경도값을 받아서 현재 위치 날씨 정보를 가져오는 페이지 제작
// 한국꺼를 제공하지 않는다면 , 

var loadSearchResult = function(ret) {
    ret=JSON.parse(ret);
    console.log(ret);
    var source = $("#languageSearchResultTmpl").html();
    var template = Handlebars.compile(source);
    $('#languageSearchResult').append(template(ret));
}

api("https://hn.algolia.com/api/v1/search?query=javascript",loadSearchResult,apiError);