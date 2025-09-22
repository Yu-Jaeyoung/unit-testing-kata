import { findByText, fireEvent, getByText } from "@testing-library/dom";
import * as path from "node:path";
import * as fs from "node:fs";

// 테스트에 필요한 UI 요소들을 담을 인터페이스 정의
interface UIElements {
  window: Window & typeof globalThis;
  docElem: HTMLElement;
  button: HTMLElement;
}

const loadHtmlAndScript = (fileRelativePath: string): HTMLElement => {
  const htmlPath = path.join(__dirname, fileRelativePath);
  document.documentElement.innerHTML = fs.readFileSync(htmlPath, "utf-8");

  const scriptPath = path.join(__dirname, "index-helper.js");
  const scriptContent = fs.readFileSync(scriptPath, "utf-8");

  const scriptElement = document.createElement("script");
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);

  return document.documentElement;
};

const loadHtmlAndGetUIElements = (): UIElements => {
  const docElem = loadHtmlAndScript("index.html");
  const button = getByText(docElem, "Click Me", { exact: false });

  return { window, docElem, button };
};

describe("index helper", () => {
  test("dom test lib button click triggers change in page", () => {
    // Arrange : 테스트 환경과 UI 요소를 설정
    const { window, docElem, button } = loadHtmlAndGetUIElements();

    // Act : 실제 사용자의 행동을 시뮬레이션
    // 1. 'load' 이벤트를 발생시켜 'index-helper.js' 내부의 리스너를 활성화
    fireEvent.load(window);

    // 2. 버튼을 클릭
    fireEvent.click(button);

    // Assert: 행동의 결과가 예상과 일치하는지 확인
    const resultDiv = findByText(docElem, "Clicked", { exact: false });

    expect(resultDiv)
      .toBeTruthy();
  });
});