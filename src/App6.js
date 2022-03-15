import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// useEffect
// - 두 개의 argument를 가지는 함수
// - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
// - 두 번째는 [] 배열을 넣어줌
// -> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
// 그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
// 즉, 한번만 렌더링 됨
// 단순화 하여 useEffect(() => {
// console.log("CALL THE API")
// },[]); 써도 됨
// useEffect 글자를 타이핑할 때마다 API를 새로 호출하지 않고 한번만 호출해준다.

// search keyword에 변화가 있을 때 만! marvel영화를 검색하고 싶을 때
// 즉, 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법
// -> useEffect(() => {
// console.log("SEARCH FOR", keyword);
// }, []);
// 이렇게 실행하면 1번만 됨
// 그리고 []자리에 keyword 써줌
// -> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
// 이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임
// react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것



function App() {
  const [counter, setValue] = useState(0);// 반환값으로 배열 
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('I run all the time');
  // const iRunOnlyOnce = () =>{
  //   console.log('I run only once');
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("I run only once");
  }, []); // 아무것도 지켜보고 있지 않음
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // 한개의 아이템만 지켜보고 있음
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  // useEffect(() => {
// console.log("I run when 'keyword & counter' changes.")
// }, [keyword, counter]); -> 2개도 가능

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;


// 정리
// React.js는 새로운 정보를 자동적으로 refresh 해준 다는 점에서 편리하다.
// 하지만, 때로는 이러한 기능이 불필요할 때가 있다.
// 예를 들어, 검색창을 이용하는데 버튼 창이 리렌더링 되는 상황이 그렇다.
// 이렇게 불필요한 리렌더링을 피하기 위해 React.js가 따로 준비한 것이 바로 useEffect이다.
// useEffect는 실행시키고자 하는 함수와 React.js가 이벤트를 주시하게끔 하는dependency로 이루어져있다. 즉, 내가 원하는 부분을 지정하여 그 부분만을 변화시킬 수 있는 것이다.
// 버튼을 누르면 버튼만, 검색창을 이용할 때는 검색창만 리렌더링 되는 것처럼 말이다.