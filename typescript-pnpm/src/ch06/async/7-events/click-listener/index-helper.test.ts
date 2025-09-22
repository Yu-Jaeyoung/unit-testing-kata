import * as fs from "node:fs";
import * as path from "node:path";

describe("index helper", () => {
  beforeEach(() => {
    // 1. 테스트할 HTML 파일의 내용을 읽어와 JSDOM에 로드
    const htmlPath = path.join(__dirname, "index.html");
    const html = fs.readFileSync(htmlPath, "utf-8");
    document.documentElement.innerHTML = html;

    // 2. JSDOM은 보안상의 이유로 <script> 태그를 자동으로 실행하지 않음
    // 따라서 테스트할 스크립트 파일을 직접 읽어와 실행시켜야 함
    const scriptPath = path.join(__dirname, "index-helper.js");
    const scriptContent = fs.readFileSync(scriptPath, "utf-8");

    const scriptElement = document.createElement("script");
    scriptElement.textContent = scriptContent;
    document.body.appendChild(scriptElement);
  });

  test("vanilla button click triggers change in result div", () => {
    // 3. index-helper.js의 'load' 이벤트 리스너를 수동으로 실행하여
    //    'myButton'에 'click' 이벤트가 바인딩되도록 함
    window.dispatchEvent(new Event("load"));

    // 4. JSDOM에 로드된 DOM 요소들을 가져옴
    // getElementById의 반환 타입은 HTMLElement | null 이므로, 타입 단언을 사용해 타입을 명확히 해야함
    const button = document.getElementById("myButton") as HTMLButtonElement;
    const resultDiv = document.getElementById("myResult") as HTMLDivElement;

    // 5. 버튼 클릭을 시뮬레이션
    button.click();

    // 6. 버튼 클릭 후, resultDiv의 텍스트가 예상대로 변경되었는지 확인
    expect(resultDiv.innerText)
      .toBe("Clicked!");
  });
});